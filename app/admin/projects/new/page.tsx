/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation'; // للتوجيه بعد الحفظ
import { FaCloudUploadAlt, FaImages } from 'react-icons/fa';

export default function NewProject() {
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    
    // تعريف الكلاينت
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    
    const formData = new FormData(e.currentTarget);
    
    try {
        // 1. البيانات النصية
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const category = formData.get('category') as string;
        const location = formData.get('location') as string;
        
        // 2. رفع الصورة الرئيسية (إجبارية)
        const mainImageFile = formData.get('image') as File;
        let mainImageUrl = '';
        
        if (!mainImageFile || mainImageFile.size === 0) {
            throw new Error('يرجى اختيار الصورة الرئيسية للمشروع');
        }

        const mainFileExt = mainImageFile.name.split('.').pop();
        const mainFileName = `main_${Date.now()}_${Math.random()}.${mainFileExt}`;
        
        const { error: mainUploadError } = await supabase.storage
            .from('projects')
            .upload(mainFileName, mainImageFile);
            
        if (mainUploadError) throw mainUploadError;
        
        mainImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/projects/${mainFileName}`;

        // 3. رفع صور المعرض (متعدد) - الطريقة المحسنة
        const galleryFiles = formData.getAll('gallery') as File[];
        const galleryUrls: string[] = [];

        // تصفية الملفات الفارغة (في حال ضغط المستخدم رفع دون اختيار ملفات)
        const validGalleryFiles = galleryFiles.filter(file => file.size > 0);

        if (validGalleryFiles.length > 0) {
            // نستخدم Promise.all لرفع كل الصور بالتوازي لزيادة السرعة
            const uploadPromises = validGalleryFiles.map(async (file) => {
                const fileExt = file.name.split('.').pop();
                const fileName = `gallery_${Date.now()}_${Math.random()}.${fileExt}`;
                
                const { error: uploadError } = await supabase.storage
                    .from('projects')
                    .upload(fileName, file);

                if (uploadError) {
                    console.error('فشل رفع إحدى الصور:', file.name, uploadError);
                    return null; // نعيد null في حال الفشل
                }

                return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/projects/${fileName}`;
            });

            // انتظار انتهاء جميع عمليات الرفع
            const results = await Promise.all(uploadPromises);
            
            // تنظيف النتائج (حذف الـ nulls)
            results.forEach(url => {
                if (url) galleryUrls.push(url);
            });
        }

        // 4. الحفظ في قاعدة البيانات
        const { error: dbError } = await supabase.from('projects').insert({
          title,
          description,
          category,
          location,
          image_url: mainImageUrl,
          images_gallery: galleryUrls, // المصفوفة جاهزة الآن
        });

        if (dbError) throw dbError;

        alert('تمت إضافة المشروع وصور المعرض بنجاح!');
        router.push('/admin/projects');
        router.refresh();

    } catch (error: any) {
        console.error('Error:', error);
        alert(`حدث خطأ: ${error.message || 'فشل في العملية'}`);
    } finally {
        setUploading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-white mb-8">إضافة مشروع جديد</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-white/10">
        
        {/* الصف الأول: العنوان والموقع */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block mb-2 text-sm text-slate-300">اسم المشروع</label>
                <input name="title" type="text" className="w-full bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none" required placeholder="مثال: فيلا الجبل" />
            </div>
            <div>
                <label className="block mb-2 text-sm text-slate-300">الموقع</label>
                <input name="location" type="text" className="w-full bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none" placeholder="مثال: مصياف - الحي الغربي" />
            </div>
        </div>
        
        {/* التصنيف */}
        <div>
          <label className="block mb-2 text-sm text-slate-300">التصنيف</label>
          <select name="category" className="w-full bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none">
            <option value="بناء سكني">بناء سكني</option>
            <option value="إكساء داخلي">إكساء داخلي</option>
            <option value="تصميم معماري">تصميم معماري</option>
            <option value="تجاري">تجاري</option>
            <option value="ترميم">ترميم</option>
          </select>
        </div>

        {/* الوصف */}
        <div>
            <label className="block mb-2 text-sm text-slate-300">وصف تفصيلي للمشروع</label>
            <textarea name="description" className="w-full bg-slate-950 p-3 rounded-lg border border-white/10 text-white h-32 focus:border-yellow-500 outline-none" placeholder="اكتب تفاصيل المشروع، المواد المستخدمة، التحديات..."></textarea>
        </div>

        {/* رفع الصورة الرئيسية */}
        <div className="p-4 border border-dashed border-white/20 rounded-xl bg-slate-950/50">
            <label className="block mb-2 text-sm text-yellow-500 font-bold">الصورة الرئيسية (الغلاف)</label>
            <div className="flex items-center gap-4">
                <FaCloudUploadAlt className="text-2xl text-slate-400" />
                <input name="image" type="file" accept="image/*" required className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-slate-900 hover:file:bg-yellow-400 cursor-pointer"/>
            </div>
        </div>

        {/* رفع صور المعرض (متعدد) */}
        <div className="p-4 border border-dashed border-white/20 rounded-xl bg-slate-950/50">
            <label className="block mb-2 text-sm text-blue-400 font-bold flex items-center gap-2">
                <FaImages />
                <span>صور المعرض الإضافية (يمكنك اختيار أكثر من صورة)</span>
            </label>
            <input 
                name="gallery" 
                type="file" 
                accept="image/*" 
                multiple // <--- هذا هو المهم
                className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer"
            />
        </div>

        <button 
            disabled={uploading} 
            type="submit" 
            className="w-full bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20 disabled:opacity-50"
        >
            {uploading ? 'جاري الرفع والحفظ...' : 'نشر المشروع'}
        </button>
      </form>
    </div>
  );
}