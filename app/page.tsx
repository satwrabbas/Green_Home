import { createClient } from "./utils/supabase/server";
import Link from "next/link";
import { FaBuilding, FaDraftingCompass, FaTools } from "react-icons/fa";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default async function Home() {
  const supabase = await createClient();

  // جلب آخر 3 مشاريع
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .limit(3)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* خلفية بتأثير تدرج داكن */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40" />

        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            نبني رؤيتك.. حجراً تلو الآخر
          </h1>
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            مكتب هندسي متكامل في مصياف. ندمج بين عراقة البناء وحداثة التصميم
            لنقدم لك مساحات سكنية وتجارية استثنائية.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary hover:bg-blue-600 rounded-full font-bold transition"
            >
              احجز استشارة
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 border border-white/20 hover:bg-white/10 rounded-full font-bold transition backdrop-blur-sm"
            >
              شاهد أعمالنا
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/50 transition group">
          <FaDraftingCompass className="text-4xl text-accent mb-4 group-hover:scale-110 transition" />
          <h3 className="text-2xl font-bold mb-2">التصميم المعماري</h3>
          <p className="text-text-muted">
            مخططات تفصيلية، منظور ثلاثي الأبعاد، وتراخيص بناء.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/50 transition group">
          <FaTools className="text-4xl text-accent mb-4 group-hover:scale-110 transition" />
          <h3 className="text-2xl font-bold mb-2">الإكساء والديكور</h3>
          <p className="text-text-muted">
            تحويل المساحات الرمادية إلى تحف فنية بأفضل المواد.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/50 transition group">
          <FaBuilding className="text-4xl text-accent mb-4 group-hover:scale-110 transition" />
          <h3 className="text-2xl font-bold mb-2">الإنشاءات</h3>
          <p className="text-text-muted">
            تنفيذ المباني السكنية والتجارية بأعلى معايير السلامة.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold border-r-4 border-accent pr-4">
              آخر مشاريعنا
            </h2>
            <Link
              href="/portfolio"
              className="text-primary hover:text-accent transition"
            >
              عرض الكل &larr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects?.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-4/3 overflow-hidden rounded-xl bg-gray-900"
              >
                {/* يفترض وجود صور في قاعدة البيانات */}
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-accent text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. القسم الرئيسي */}
      <Hero />

      {/* 2. قسم من نحن */}
      <AboutSection />

      {/* باقي الأقسام لاحقاً */}
      <ServicesSection />
      <Testimonials />

      {/* 6. CTA Banner (شريط دعوة للعمل) */}
      <section className="py-16 bg-blue-600 relative overflow-hidden">
        {/* زخرفة خلفية */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            هل أنت جاهز لبناء منزل أحلامك؟
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            دعنا نناقش مشروعك القادم. استشارة أولية مجانية لتقييم التكلفة والمدة
            الزمنية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/963900000000"
              className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg"
            >
              تواصل عبر واتساب
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
