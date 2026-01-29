import Link from "next/link";
import {
  FaPencilRuler,
  FaHammer,
  FaHardHat,
  FaFileContract,
  FaCity,
  FaSearchDollar,
  FaChevronLeft
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "التصميم المعماري",
      icon: <FaPencilRuler />,
      description:
        "تحويل الأفكار إلى مخططات قابلة للتنفيذ، مع مراعاة قوانين البناء واستغلال المساحات بأذكى الطرق.",
      features: ["مخططات 2D و 3D", "تراخيص البناء", "دراسة الواجهات"],
    },
    {
      id: "02",
      title: "الإكساء والديكور الداخلي",
      icon: <FaHammer />,
      description:
        "نستلم منزلك (على العضم) ونسلمك المفتاح. تصاميم مودرن أو كلاسيك تناسب ذوقك وميزانيتك.",
      features: ["أسقف مستعارة وإنارة", "أرضيات وسيراميك", "دهانات وديكورات"],
    },
    {
      id: "03",
      title: "الإشراف الهندسي",
      icon: <FaHardHat />,
      description:
        "لا داعي للقلق وملاحقة العمال. مهندسونا يشرفون على كل مرحلة لضمان عدم وجود أخطاء أو هدر.",
      features: ["إدارة الورشات", "ضبط الجودة", "الالتزام بالوقت"],
    },
    {
      id: "04",
      title: "الدراسات الإنشائية",
      icon: <FaCity />,
      description:
        "حسابات دقيقة للكميات (حديد، إسمنت) لضمان متانة البناء ومقاومته للزلازل بأقل تكلفة ممكنة.",
      features: ["مذكرات حسابية", "جداول تفريد الحديد", "دراسة التربة"],
    },
    {
      id: "05",
      title: "ترميم وتجديد المباني",
      icon: <FaFileContract />,
      description:
        "إعادة إحياء البيوت القديمة أو الشقق المستعملة وتحديث شبكات المياه والكهرباء لتعود كالجديدة.",
      features: ["معالجة الرطوبة", "تحديث البنية التحتية", "تعديل التقسيم"],
    },
    {
      id: "06",
      title: "الاستشارات العقارية",
      icon: <FaSearchDollar />,
      description:
        "قبل أن تشتري أو تبني، استشرنا لنقيم لك العقار فنياً ومادياً ونعطيك الرأي الهندسي الصريح.",
      features: ["تثمين العقارات", "دراسة جدوى", "نصائح استثمارية"],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#f8f5f0] relative text-right overflow-hidden">
      
      {/* عناصر خلفية زخرفية */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2d4c3e]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20 text-center relative z-10">
        <h2 className="text-[#2d4c3e] font-bold tracking-[0.2em] uppercase mb-3 text-sm md:text-base flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-[#8b5e3c]"></span>
          خدماتنا
          <span className="w-8 h-[1px] bg-[#8b5e3c]"></span>
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-[#1a2e25] leading-tight">
          حلول هندسية شاملة <br />
          <span className="text-[#8b5e3c]">من الفكرة.. إلى المفتاح</span>
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 border border-[#2d4c3e]/5 shadow-[0_10px_40px_rgba(26,46,37,0.03)] hover:shadow-[0_20px_60px_rgba(139,94,60,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* رقم الخدمة في الخلفية */}
              <div className="absolute top-[-10px] right-[-10px] text-8xl md:text-9xl font-black text-[#2d4c3e]/5 group-hover:text-[#8b5e3c]/10 transition-colors duration-500 select-none">
                {service.id}
              </div>

              {/* الأيقونة */}
              <div className="relative z-10 mb-8 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#f8f5f0] text-[#2d4c3e] text-3xl md:text-4xl group-hover:bg-[#2d4c3e] group-hover:text-white transition-all duration-500 shadow-inner">
                {service.icon}
              </div>

              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-bold text-[#1a2e25] mb-4 group-hover:text-[#8b5e3c] transition-colors">
                  {service.title}
                </h4>

                <p className="text-[#5c554a] text-sm md:text-base mb-6 leading-relaxed min-h-0 md:min-h-[80px]">
                  {service.description}
                </p>

                {/* قائمة المميزات */}
                <ul className="space-y-3 border-t border-[#f8f5f0] pt-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs md:text-sm text-[#5c554a] font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b5e3c] ml-3 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* تواصل معنا CTA */}
        <div className="mt-16 md:mt-24 text-center px-4">
          <div className="inline-block p-[2px] rounded-3xl bg-gradient-to-r from-[#2d4c3e]/20 via-[#8b5e3c]/40 to-[#2d4c3e]/20">
            <div className="bg-white rounded-[calc(1.5rem-2px)] px-8 py-10 md:px-16 md:py-12 shadow-sm">
               <p className="text-[#5c554a] mb-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                هل لديك مشروع خاص ولا تجد الخدمة المناسبة هنا؟ نحن هنا لنحول مخططاتك إلى حقيقة.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#2d4c3e] hover:bg-[#1a2e25] text-[#f8f5f0] font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-[#2d4c3e]/20 w-full sm:w-auto overflow-hidden relative"
              >
                <span>تواصل معنا لمناقشة طلبك</span>
                <FaChevronLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}