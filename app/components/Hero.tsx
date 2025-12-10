import Link from 'next/link';
import { FaArrowDown, FaCheckCircle, FaProjectDiagram, FaHardHat } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* 1. الخلفية (صورة المشروع) */}
      {/* ملاحظة: عند توفر صور حقيقية، استبدل الرابط أدناه بصورة من أعمالهم */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        {/* طبقة تعتيم لضمان وضوح النص */}
        <div className="absolute inset-0 bg-slate-950/70 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      </div>

      {/* 2. المحتوى النصي */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
        
        {/* شارة صغيرة في الأعلى */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs md:text-sm text-gray-200 font-medium">متاحون لاستلام مشاريع جديدة في مصياف وريفها</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
          نحول الخيال إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">واقع معماري</span>
        </h1>

        {/* الوصف */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          مكتب هندسي متكامل في مصياف. نقدم خدمات التصميم المعماري، الإكساء الداخلي، والحلول العقارية بأعلى معايير الجودة والاحترافية.
        </p>

        {/* الأزرار (CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
          >
            اطلب استشارة مجانية
          </Link>
          <Link 
            href="/portfolio" 
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all"
          >
            شاهد أعمالنا السابقة
          </Link>
        </div>
      </div>

      {/* 3. شريط الإحصائيات العائم (Glass Card) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-900/80 backdrop-blur-md border-t border-r border-l border-white/10 rounded-t-2xl p-6 md:p-8 flex justify-around items-center text-white shadow-2xl">
            
            {/* عنصر إحصائية 1 */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <FaProjectDiagram size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">+50</span>
                <span className="text-sm text-gray-400">مشروع منجز</span>
              </div>
            </div>

            <div className="w-px h-12 bg-white/10"></div>

            {/* عنصر إحصائية 2 */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors duration-300">
                <FaHardHat size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">+10</span>
                <span className="text-sm text-gray-400">سنوات خبرة</span>
              </div>
            </div>

            <div className="w-px h-12 bg-white/10"></div>

            {/* عنصر إحصائية 3 */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="p-3 rounded-full bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <FaCheckCircle size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">100%</span>
                <span className="text-sm text-gray-400">التزام بالمواعيد</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* أيقونة النزول (Scroll Down) */}
      <div className="absolute bottom-8 md:bottom-32 animate-bounce z-10 text-white/50">
        <FaArrowDown size={24} />
      </div>

    </section>
  );
}