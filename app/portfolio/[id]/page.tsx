import { createClient } from "../../utils/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaRulerCombined,
  FaChevronRight,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImageGallery from "../../components/ImageGallery";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image_url: string;
  images_gallery: string[] | null;
  location: string;
  completion_date: string;
  area?: string;
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();
  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) {
    notFound();
  }

  const galleryImages = project.images_gallery || [];

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-right" id="portfolio">
      <Navbar />

      {/* قسم الهيدر مع صورة المشروع الرئيسية */}
      <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-[10s] hover:scale-110"
          priority
        />

        {/* تدرج لوني يندمج مع خلفية الموقع البيج */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f5f0] via-[#1a2e25]/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 md:p-20 max-w-7xl mx-auto z-10">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-[#1a2e25] bg-white/90 backdrop-blur-md px-5 py-2 rounded-full mb-6 md:mb-10 transition-all hover:bg-[#8b5e3c] hover:text-white shadow-xl"
          >
            <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
            <span className="font-bold text-sm">العودة لمعرض الأعمال</span>
          </Link>

          <h1 className="text-4xl md:text-7xl font-bold text-[#1a2e25] mb-4 md:mb-6 leading-tight drop-shadow-sm">
            {project.title}
          </h1>

          <div className="flex items-center gap-3 text-[#8b5e3c] font-bold tracking-[0.1em] uppercase bg-white/50 backdrop-blur-sm w-fit px-4 py-1.5 rounded-lg border border-white/20 shadow-sm text-xs md:text-sm">
            <FaTag className="text-xs" />
            <span>{project.category}</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          
          {/* العمود الأيمن: التفاصيل والمعرض */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-[#1a2e25]/5 border border-[#2d4c3e]/5">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e25] mb-8 border-r-4 border-[#8b5e3c] pr-5">
                فلسفة المشروع
              </h2>

              <p className="text-[#5c554a] text-lg md:text-xl leading-[2] whitespace-pre-line text-justify font-medium">
                {project.description || "لا يوجد وصف متاح لهذا المشروع حالياً."}
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a2e25] mb-8 md:mb-12 flex items-center gap-3">
                <span className="w-12 h-1 bg-[#8b5e3c] rounded-full"></span>
                جولة داخل الموقع
              </h3>

              {galleryImages.length > 0 ? (
                <ImageGallery images={galleryImages} title={project.title} />
              ) : (
                <div className="p-12 bg-white border-2 border-dashed border-[#2d4c3e]/10 rounded-[3rem] text-center text-[#5c554a] font-medium">
                  جاري رفع المزيد من اللقطات الفنية لهذا المشروع قريباً...
                </div>
              )}
            </div>
          </div>

          {/* العمود الأيسر: بطاقة البيانات (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-white rounded-[2.5rem] p-8 md:p-10 sticky top-28 shadow-2xl shadow-[#1a2e25]/5 overflow-hidden">
              {/* زخرفة خلفية بسيطة داخل البطاقة */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#2d4c3e]"></div>
              
              <h3 className="text-2xl font-bold text-[#1a2e25] mb-10 pb-4 border-b border-[#f8f5f0]">
                بطاقة البيانات
              </h3>

              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#f8f5f0] text-[#2d4c3e] rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#8b5e3c] uppercase tracking-widest mb-1">
                      الموقع الجغرافي
                    </span>
                    <span className="text-[#1a2e25] font-bold text-lg">
                      {project.location || "مصياف، سوريا"}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#f8f5f0] text-[#8b5e3c] rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                    <FaCalendarAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#8b5e3c] uppercase tracking-widest mb-1">
                      تاريخ الإنجاز
                    </span>
                    <span className="text-[#1a2e25] font-bold text-lg">
                      {project.completion_date || "قيد التنفيذ"}
                    </span>
                  </div>
                </li>

                {project.area && (
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#f8f5f0] text-[#2d4c3e] rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                      <FaRulerCombined className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#8b5e3c] uppercase tracking-widest mb-1">
                        إجمالي المساحة
                      </span>
                      <span className="text-[#1a2e25] font-bold text-lg">
                        {project.area}
                      </span>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-12 pt-10 border-t border-[#f8f5f0]">
                <p className="text-[#5c554a] text-sm mb-6 leading-relaxed font-medium">
                  هل أعجبك نمط هذا المشروع؟ نحن هنا لنحول رؤيتك إلى واقع ملموس.
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-4 bg-[#2d4c3e] hover:bg-[#1a2e25] text-white text-center font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-[#2d4c3e]/20"
                >
                  اطلب استشارة مماثلة
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