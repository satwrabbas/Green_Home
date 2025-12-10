import { createClient } from '../../utils/supabase/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt, FaTag, FaRulerCombined } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// تعريف نوع البيانات
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image_url: string;
  images_gallery: string[] | null; // قد تكون مصفوفة صور أو فارغة
  location: string;
  completion_date: string;
  area?: string; // حقل اختياري للمساحة
}

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  // 1. استخراج المعرف (ID)
  const { id } = await params;
  
  // 2. جلب البيانات من Supabase
  const supabase = await createClient();
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  // 3. إذا لم يوجد مشروع بهذا الرقم، نوجه لصفحة 404
  if (error || !project) {
    notFound();
  }

  // مصفوفة الصور الإضافية (إذا كانت فارغة نستخدم مصفوفة فارغة)
  const galleryImages = project.images_gallery || [];

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      {/* --- قسم الهيرو (صورة وكتابة) --- */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* طبقة تظليل */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
           {/* زر العودة */}
           <Link href="/#portfolio" className="inline-flex items-center gap-2 text-slate-300 hover:text-yellow-500 mb-6 transition">
              <FaArrowRight />
              <span>العودة للمعرض</span>
           </Link>
           
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-black drop-shadow-lg">
             {project.title}
           </h1>
           <div className="flex items-center gap-2 text-yellow-500 font-bold tracking-wider">
             <FaTag />
             <span>{project.category}</span>
           </div>
        </div>
      </div>

      {/* --- المحتوى التفصيلي --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* العمود الأيمن: وصف المشروع (يأخذ مساحة أكبر) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 border-r-4 border-yellow-500 pr-4">
                تفاصيل المشروع
              </h2>
              <p className="text-slate-300 text-lg leading-loose whitespace-pre-line text-justify">
                {project.description || "لا يوجد وصف متاح لهذا المشروع حالياً."}
              </p>
            </div>

            {/* معرض الصور الإضافية */}
            {galleryImages.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-6">صور من الموقع</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {galleryImages.map((imgUrl: string, index: number) => (
                    <div key={index} className="relative h-64 rounded-xl overflow-hidden group">
                      <Image 
                        src={imgUrl} 
                        alt={`${project.title} - ${index}`}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* في حال عدم وجود صور إضافية، نعرض رسالة أو نخفي القسم */}
            {galleryImages.length === 0 && (
                <div className="p-8 bg-slate-900 border border-white/5 rounded-xl text-center text-slate-500">
                    جاري رفع المزيد من الصور لهذا المشروع قريباً...
                </div>
            )}
          </div>

          {/* العمود الأيسر: بطاقة المعلومات (Sidebar) */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-8 sticky top-24 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">بيانات المشروع</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 text-blue-500 rounded-lg">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 mb-1">الموقع</span>
                    <span className="text-white font-medium">{project.location || 'مصياف'}</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-lg">
                    <FaCalendarAlt size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 mb-1">تاريخ التسليم</span>
                    <span className="text-white font-medium">{project.completion_date || 'قيد التنفيذ'}</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 text-green-500 rounded-lg">
                    <FaRulerCombined size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 mb-1">المساحة التقريبية</span>
                    <span className="text-white font-medium">{project.area || 'غير محدد'}</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-slate-400 text-sm mb-4">هل أعجبك هذا النمط؟</p>
                <Link 
                  href="/contact" 
                  className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold rounded-lg transition"
                >
                  اطلب تصميم مماثل
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}