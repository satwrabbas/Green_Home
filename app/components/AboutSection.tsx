import Image from "next/image";
import {
  FaRulerCombined,
  FaHandshake,
  FaLightbulb,
  FaUserTie,
  FaLeaf
} from "react-icons/fa";

export default function AboutSection() {
  const features = [
    {
      icon: <FaRulerCombined />,
      title: "دقة هندسية",
      desc: "تصاميم تراعي أدق التفاصيل وتستغل كل سنتيمتر.",
    },
    {
      icon: <FaHandshake />,
      title: "شفافية مطلقة",
      desc: "عقود واضحة، جداول زمنية دقيقة، وتقارير دورية.",
    },
    {
      icon: <FaLightbulb />,
      title: "حلول إبداعية",
      desc: "أفكار إكساء عصرية تناسب ميزانيتك وتواكب الموضة.",
    },
    {
      icon: <FaUserTie />,
      title: "إشراف مباشر",
      desc: "مهندسون مختصون في الموقع لضمان الجودة.",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-24 bg-[#f8f5f0] relative overflow-hidden text-right"
    >
      {/* لمسات خلفية ناعمة - أخضر زيتوني وبني ترابي */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#2d4c3e]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#8b5e3c]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* النصوص (الترتيب 2 على الجوال و1 على الشاشات الكبيرة) */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <h4 className="text-[#2d4c3e] font-bold tracking-wider uppercase mb-2 text-sm md:text-base flex items-center gap-2">
                <FaLeaf className="text-xs" /> من نحن
              </h4>
              <h2 className="text-2xl md:text-5xl font-bold text-[#1a2e25] leading-tight">
                أكثر من مجرد مكتب هندسي.. <br />
                <span className="text-[#8b5e3c]">نحن شركاء طموحك</span>
              </h2>
            </div>

            <p className="text-[#5c554a] text-base md:text-lg leading-relaxed text-justify">
              من قلب مدينة مصياف، انطلق مكتب{" "}
              <span className="text-[#2d4c3e] font-bold">Our Home</span> برؤية تهدف
              للارتقاء بالواقع العمراني. ندرك أن البناء في مناطقنا يتطلب فهماً
              خاصاً لطبيعة الأرض والمناخ، ولذوق المجتمع المحلي.
            </p>

            <p className="text-[#5c554a] text-base md:text-lg leading-relaxed text-justify">
              تخصصنا لا يقتصر على صب الخرسانة؛ بل يمتد ليشمل{" "}
              <span className="text-[#8b5e3c] font-bold border-b-2 border-[#8b5e3c]/20">فنون الإكساء الداخلي</span>، حيث
              نحول المساحات الصامتة إلى منازل تنبض بالحياة، مع الالتزام الصارم
              بالميزانية.
            </p>

            {/* شبكة المميزات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white shadow-sm border border-[#2d4c3e]/5 hover:border-[#2d4c3e]/30 transition duration-300 group"
                >
                  <div className="text-[#2d4c3e] text-xl md:text-2xl mt-1 group-hover:scale-110 transition shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-[#1a2e25] font-bold mb-1 text-sm md:text-base">
                      {item.title}
                    </h5>
                    <p className="text-[#6d675b] text-xs md:text-sm leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* الصور (الترتيب 1 على الجوال و2 على الشاشات الكبيرة) */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                alt="تصميم داخلي دافئ"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

              {/* تدرج لوني دافئ فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e25]/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 right-6 left-6">
                <p className="text-white font-bold text-base md:text-xl leading-relaxed italic">
                  &quot;الجودة ليست صدفة، بل هي نتيجة نية عالية وجهد صادق.&quot;
                </p>
                <p className="text-[#f8f5f0] mt-2 text-xs md:text-sm font-semibold opacity-90">
                  - إدارة مكتب Our Home
                </p>
              </div>
            </div>

            {/* بطاقة الإحصائيات بستايل خشبي/ترابي */}
            <div className="absolute -bottom-4 left-4 md:-bottom-10 md:-left-10 z-20 bg-[#2d4c3e] p-4 md:p-6 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 max-w-[180px] md:max-w-none text-white">
              <div className="text-3xl md:text-5xl font-bold text-[#f8f5f0]">
                15+
              </div>
              <div className="text-white/90 text-xs md:text-sm font-medium leading-snug border-r border-white/20 pr-3 md:pr-4">
                مشروع سكني
                <br />
                تم تسليمه بنجاح
              </div>
            </div>

            {/* زينة النقط بشكل جديد يتناسب مع الاستايل الطبيعي */}
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-0 opacity-10">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="w-20 h-20 md:w-32 md:h-32 text-[#2d4c3e]"
              >
                <pattern
                  id="dot-pattern-new"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="3" cy="3" r="2" fill="currentColor" />
                </pattern>
                <rect width="100" height="100" fill="url(#dot-pattern-new)" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}