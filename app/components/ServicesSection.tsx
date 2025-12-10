import Link from 'next/link';
import { 
  FaPencilRuler, 
  FaHammer, 
  FaHardHat, 
  FaFileContract, 
  FaCity, 
  FaSearchDollar 
} from 'react-icons/fa';

export default function ServicesSection() {
  
  const services = [
    {
      id: "01",
      title: "التصميم المعماري",
      icon: <FaPencilRuler />,
      description: "تحويل الأفكار إلى مخططات قابلة للتنفيذ، مع مراعاة قوانين البناء في مصياف واستغلال المساحات بأذكى الطرق.",
      features: ["مخططات 2D و 3D", "تراخيص البناء", "دراسة الواجهات"]
    },
    {
      id: "02",
      title: "الإكساء والديكور الداخلي",
      icon: <FaHammer />,
      description: "نستلم منزلك (على العضم) ونسلمك المفتاح. تصاميم مودرن أو كلاسيك تناسب ذوقك وميزانيتك.",
      features: ["أسقف مستعارة وإنارة", "أرضيات وسيراميك", "دهانات وديكورات خشبية"]
    },
    {
      id: "03",
      title: "الإشراف الهندسي",
      icon: <FaHardHat />,
      description: "لا داعي للقلق وملاحقة العمال. مهندسونا يشرفون على كل مرحلة لضمان عدم وجود أخطاء أو هدر في المواد.",
      features: ["إدارة الورشات", "ضبط الجودة", "الالتزام بالجدول الزمني"]
    },
    {
      id: "04",
      title: "الدراسات الإنشائية",
      icon: <FaCity />,
      description: "حسابات دقيقة للكميات (حديد، إسمنت) لضمان متانة البناء ومقاومته للزلازل بأقل تكلفة ممكنة.",
      features: ["مذكرات حسابية", "جداول تفريد الحديد", "دراسة التربة"]
    },
    {
      id: "05",
      title: "ترميم وتجديد المباني",
      icon: <FaFileContract />,
      description: "إعادة إحياء البيوت القديمة أو الشقق المستعملة وتحديث شبكات المياه والكهرباء لتعود كالجديدة.",
      features: ["معالجة الرطوبة", "تحديث البنية التحتية", "تغيير التقسيم الداخلي"]
    },
    {
      id: "06",
      title: "الاستشارات العقارية",
      icon: <FaSearchDollar />,
      description: "قبل أن تشتري أو تبني، استشرنا لنقيم لك العقار فنياً ومادياً ونعطيك الرأي الهندسي الصريح.",
      features: ["تثمين العقارات", "دراسة جدوى للمشاريع", "نصائح استثمارية"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      {/* عنوان القسم */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-yellow-500 font-bold tracking-wider uppercase mb-3">خدماتنا</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">
          حلول هندسية شاملة <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">من الفكرة إلى المفتاح</span>
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-slate-800/50 rounded-2xl p-8 border border-white/5 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(234,179,8,0.1)] overflow-hidden"
            >
              {/* الرقم الخلفي الجمالي */}
              <div className="absolute top-0 right-0 text-9xl font-bold text-white/5 -mr-4 -mt-4 group-hover:text-yellow-500/10 transition-colors duration-500 select-none">
                {service.id}
              </div>

              {/* الأيقونة */}
              <div className="relative z-10 mb-6 inline-block p-4 rounded-xl bg-slate-900 border border-white/10 text-yellow-500 text-3xl group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors duration-300">
                {service.icon}
              </div>

              {/* المحتوى */}
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-400 mb-6 leading-relaxed min-h-[80px]">
                  {service.description}
                </p>

                {/* قائمة الميزات الفرعية */}
                <ul className="space-y-2 border-t border-white/10 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>

        {/* دعوة لاتخاذ إجراء (CTA) في الأسفل */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">هل لديك مشروع خاص ولا تجد الخدمة المناسبة هنا؟</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30"
          >
            تواصل معنا لمناقشة طلبك
          </Link>
        </div>
      </div>
    </section>
  );
}