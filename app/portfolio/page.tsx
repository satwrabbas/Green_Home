import { createClient } from "../utils/supabase/server";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioGrid from "../components/PortfolioGrid";
import { FaLeaf } from "react-icons/fa";

export const metadata = {
  title: "معرض الأعمال | Our Home",
  description:
    "تصفح أحدث مشاريعنا الهندسية في مصياف، من التصميم المعماري إلى الإكساء الداخلي.",
};

export default async function PortfolioPage() {
  const supabase = await createClient();

  const { data: projects } = await supabase
    .from("projects")
    .select("id, title, category, image_url, location")
    .order("created_at", { ascending: false });

  const allProjects = projects || [];

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-right">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-48 md:pb-28 bg-white border-b border-[#2d4c3e]/5 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2d4c3e]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-[#f8f5f0] border border-[#2d4c3e]/10">
            <FaLeaf className="text-[#8b5e3c] text-xs" />
            <span className="text-[#2d4c3e] text-xs md:text-sm font-bold tracking-widest uppercase">
              سجل الإبداع
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-[#1a2e25] mb-6 md:mb-8 leading-tight">
            أعمالنا تتحدث <span className="text-[#8b5e3c]">عنا</span>
          </h1>

          <p className="text-base md:text-xl text-[#5c554a] max-w-2xl mx-auto leading-relaxed font-medium">
            جولة بصرية في مشاريعنا المنجزة. نؤمن بأن كل مبنى يحكي قصة، وهنا نعرض
            لكم فصولاً من قصص النجاح التي بنيناها بشغف في قلب مصياف.
          </p>

          <div className="mt-10 flex justify-center gap-2">
            <span className="w-12 h-1 bg-[#8b5e3c] rounded-full"></span>
            <span className="w-4 h-1 bg-[#2d4c3e] rounded-full"></span>
            <span className="w-2 h-1 bg-[#2d4c3e]/20 rounded-full"></span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[50vh]">
        {allProjects.length > 0 ? (
          <PortfolioGrid projects={allProjects} />
        ) : (
          <div className="text-center py-24 md:py-32 bg-white rounded-[3rem] border-2 border-dashed border-[#2d4c3e]/10">
            <div className="w-20 h-20 bg-[#f8f5f0] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaLeaf className="text-[#2d4c3e]/20 text-4xl" />
            </div>
            <h2 className="text-2xl md:text-3xl text-[#1a2e25] font-bold">
              قريباً..
            </h2>
            <p className="text-base text-[#5c554a] mt-3 font-medium">
              جاري تجهيز وتصوير أحدث مشاريعنا الميدانية لرفعها على الموقع.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
