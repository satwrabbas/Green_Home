'use server';

import { createClient } from '../utils/supabase/server';
import { revalidatePath } from 'next/cache';

// حذف رسالة
export async function deleteInquiry(formData: FormData) {
  const id = formData.get('id');
  const supabase = await createClient();

  await supabase.from('inquiries').delete().eq('id', id);
  
  // تحديث الصفحة لإظهار التغييرات
  revalidatePath('/admin/inquiries');
}

// تحديث حالة الرسالة (مثلاً: تم التواصل)
export async function markAsContacted(formData: FormData) {
  const id = formData.get('id');
  const supabase = await createClient();

  await supabase
    .from('inquiries')
    .update({ status: 'contacted' })
    .eq('id', id);

  revalidatePath('/admin/inquiries');
}
// ... (imports existing)

// دالة حذف المشروع
export async function deleteProject(formData: FormData) {
  const id = formData.get('id');
  const imageUrl = formData.get('image_url') as string;
  const supabase = await createClient();

  // 1. محاولة حذف الصورة من الـ Storage
  if (imageUrl) {
    // نحتاج استخراج اسم الملف فقط من الرابط الكامل
    // الرابط عادة يكون: .../projects/filename.jpg
    const fileName = imageUrl.split('/').pop(); 
    
    if (fileName) {
      await supabase.storage
        .from('projects')
        .remove([fileName]);
    }
  }

  // 2. حذف السجل من قاعدة البيانات
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting project:', error);
    return; // يمكن إضافة معالجة أخطاء هنا
  }

  // 3. تحديث الصفحة
  revalidatePath('/admin/projects');
  revalidatePath('/'); // لتحديث الصفحة الرئيسية أيضاً وحذف المشروع منها
  revalidatePath('/portfolio'); // وصفحة المعرض
}