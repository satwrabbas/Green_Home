import Link from "next/link";
import { FaRegHandshake, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";

const CTABanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        <span className="text-blue-400 font-medium tracking-widest text-sm uppercase mb-4 border border-blue-500/30 px-3 py-1 rounded-full bg-blue-500/10">
          ابدأ مشروعك اليوم
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          نحول التصاميم إلى واقع ملموس
        </h2>

        <p className="text-slate-300 text-lg mb-8 max-w-xl">
          فريقنا جاهز للإجابة على استفساراتك وتقديم دراسة جدوى مبدئية لمشروعك
          السكني أو التجاري.
        </p>

        <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
          <Link
            href="https://wa.me/963900000000"
            className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/50"
          >
            <FaWhatsapp className="text-xl" />
            <span>محادثة فورية</span>
          </Link>
          <Link
            href="/contact"
            className="group bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
          >
            <span>تواصل معنا</span>
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
