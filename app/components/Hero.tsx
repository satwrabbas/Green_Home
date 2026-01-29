import { createClient } from "../utils/supabase/server";
import Link from "next/link";
import {
  FaArrowDown,
  FaCheckCircle,
  FaProjectDiagram,
  FaHardHat,
  FaFileDownload,
  FaStar,
  FaLeaf
} from "react-icons/fa";
import Image from "next/image";

export default async function Hero() {
  const supabase = await createClient();

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .limit(3)
    .order("created_at", { ascending: false });

  return (
    <div id="home" className="bg-[#f8f5f0] text-right">
      {/* القسم الأول: الترحيب (Hero 1) */}
      <section className="relative min-h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* طبقة تظليل خضراء غابوية عميقة فوق الصورة */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e25] via-[#1a2e25]/60 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />

        <div className="relative z-20 text-center max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
             <FaLeaf className="text-[#8b5e3c] text-xs" />
             <span className="text-white/90 text-xs md:text-sm font-medium">مكتب Our Home الهندسي</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight">
            نبني رؤيتك.. <span className="text-[#8b5e3c]">حجراً تلو الآخر</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#f8f5f0]/80 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
            مكتب هندسي متكامل في مصياف. ندمج بين عراقة البناء وحداثة التصميم
            لنقدم لك مساحات سكنية وتجارية استثنائية.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-[#2d4c3e] hover:bg-[#1a2e25] text-white rounded-xl font-bold transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2"
            >
              احجز استشارة
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white hover:bg-white/10 rounded-xl font-bold transition backdrop-blur-md flex items-center justify-center gap-2"
            >
              شاهد أعمالنا
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50 hidden md:block">
          <FaArrowDown size={24} />
        </div>
      </section>

      {/* قسم المشاريع الأخيرة */}
      <section className="py-16 md:py-24 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10 md:mb-14">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1a2e25] border-r-4 border-[#8b5e3c] pr-4">
                آخر مشاريعنا
              </h2>
              <p className="text-[#5c554a] mt-2 text-sm md:text-base">نصمم بذكاء، وننفذ بدقة</p>
            </div>
            <Link
              href="/portfolio"
              className="group text-sm md:text-base text-[#2d4c3e] font-bold flex items-center gap-2 hover:text-[#8b5e3c] transition-colors"
            >
              عرض الكل <span className="group-hover:translate-x-[-5px] transition-transform">←</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {projects?.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#1a2e25] block shadow-lg"
              >
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="object-cover w-full h-full opacity-90 group-hover:scale-110 group-hover:opacity-100 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e25] via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                  <span className="text-[#8b5e3c] text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#f8f5f0] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* القسم الثاني: تحويل الخيال (Hero 2) */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center py-20">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[#1a2e25]/80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5e3c]/20 border border-[#8b5e3c]/30 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f8f5f0] animate-pulse"></span>
            <span className="text-xs md:text-sm text-[#f8f5f0] font-medium">
              متاحون لاستلام مشاريع جديدة في مصياف وريفها
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
            نحول الخيال إلى{" "}
            <span className="text-[#8b5e3c]">واقع معماري</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#f8f5f0]/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            مكتب هندسي متكامل في مصياف. نقدم خدمات التصميم المعماري، الإكساء
            الداخلي، والحلول العقارية بأعلى معايير الجودة والاحترافية.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="/company-profile.pdf"
              target="_blank"
              className="group w-full sm:w-auto px-8 py-4 bg-[#8b5e3c] hover:bg-[#724a2f] text-white font-bold rounded-2xl transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              <span>تحميل بروفايل الشركة</span>
              <FaFileDownload className="text-lg transition-transform group-hover:translate-y-1" />
            </a>

            <Link
              href="/#testimonials"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-2xl backdrop-blur-md transition-all flex items-center justify-center gap-3"
            >
              <FaStar className="text-[#8b5e3c]" />
              <span>ماذا يقول عملاؤنا؟</span>
            </Link>
          </div>
        </div>

        {/* شريط الإحصائيات السفلي */}
        <div className="absolute bottom-0 left-0 right-0 z-20 hidden lg:block">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-[#f8f5f0] border-t border-r border-l border-[#2d4c3e]/10 rounded-t-[3rem] p-10 flex justify-around items-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
              
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-[#2d4c3e] text-white shadow-lg">
                  <FaProjectDiagram size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#1a2e25]">+50</span>
                  <span className="text-sm text-[#5c554a] font-medium tracking-wide">مشروع منجز</span>
                </div>
              </div>

              <div className="w-px h-16 bg-[#2d4c3e]/10"></div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-[#8b5e3c] text-white shadow-lg">
                  <FaHardHat size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#1a2e25]">+10</span>
                  <span className="text-sm text-[#5c554a] font-medium tracking-wide">سنوات خبرة</span>
                </div>
              </div>

              <div className="w-px h-16 bg-[#2d4c3e]/10"></div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-[#2d4c3e] text-white shadow-lg">
                  <FaCheckCircle size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#1a2e25]">100%</span>
                  <span className="text-sm text-[#5c554a] font-medium tracking-wide">التزام بالمواعيد</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}