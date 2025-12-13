import { createClient } from "../utils/supabase/server";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioGrid from "../components/PortfolioGrid";

export const metadata = {
  title: "معرض الأعمال | ABCE-S",
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
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="relative py-24 bg-slate-900 border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            أعمالنا تتحدث <span className="text-yellow-500">عنا</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            جولة بصرية في مشاريعنا المنجزة. نؤمن بأن كل مبنى يحكي قصة، وهنا نعرض
            لكم فصولاً من قصص النجاح التي بنيناها في مصياف.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[60vh]">
        {allProjects.length > 0 ? (
          <PortfolioGrid projects={allProjects} />
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl text-white font-bold">قريباً..</h2>
            <p className="text-slate-500">
              جاري تجهيز وتصوير مشاريعنا لرفعها على الموقع.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
