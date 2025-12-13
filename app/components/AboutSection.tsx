import Image from "next/image";
import {
  FaRulerCombined,
  FaHandshake,
  FaLightbulb,
  FaUserTie,
} from "react-icons/fa";

export default function AboutSection() {
  const features = [
    {
      icon: <FaRulerCombined />,
      title: "دقة هندسية",
      desc: "تصاميم تراعي أدق التفاصيل وتستغل كل سنتيمتر من المساحة.",
    },
    {
      icon: <FaHandshake />,
      title: "شفافية مطلقة",
      desc: "عقود واضحة، جداول زمنية دقيقة، وتقارير دورية لسير العمل.",
    },
    {
      icon: <FaLightbulb />,
      title: "حلول إبداعية",
      desc: "أفكار إكساء عصرية تناسب ميزانيتك وتواكب أحدث الصيحات.",
    },
    {
      icon: <FaUserTie />,
      title: "إشراف مباشر",
      desc: "مهندسون مختصون متواجدون في الموقع لضمان جودة التنفيذ.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h4 className="text-yellow-500 font-bold tracking-wider uppercase mb-2">
                من نحن
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                أكثر من مجرد مكتب هندسي.. <br />
                <span className="text-blue-500">نحن شركاء طموحك</span>
              </h2>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed text-justify">
              من قلب مدينة مصياف، انطلق مكتب{" "}
              <span className="text-white font-bold">ABCE-S</span> برؤية تهدف
              للارتقاء بالواقع العمراني. ندرك أن البناء في مناطقنا يتطلب فهماً
              خاصاً لطبيعة الأرض والمناخ، ولذوق المجتمع المحلي.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed text-justify">
              تخصصنا لا يقتصر على صب الخرسانة؛ بل يمتد ليشمل{" "}
              <span className="text-yellow-500">فنون الإكساء الداخلي</span>، حيث
              نحول المساحات الصامتة إلى منازل تنبض بالحياة، ومكاتب تعزز
              الإنتاجية، مع الالتزام الصارم بالميزانية المتفق عليها.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-white/5 hover:border-yellow-500/30 transition duration-300 group"
                >
                  <div className="text-yellow-500 text-2xl mt-1 group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">{item.title}</h5>
                    <p className="text-slate-500 text-sm leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop"
                alt="مهندسون في الموقع"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 right-6 left-6">
                <p className="text-white font-bold text-xl">
                  &quot;الجودة ليست صدفة، بل هي نتيجة نية عالية وجهد صادق.
                </p>
                <p className="text-yellow-500 mt-2 text-sm">- إدارة المكتب</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 z-20 bg-slate-800 p-6 rounded-2xl shadow-xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-blue-500">15+</div>
                <div className="text-slate-300 text-sm">
                  مشروع سكني
                  <br />
                  تم تسليمه
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 z-0 opacity-20">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="dot-pattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    className="text-white"
                    fill="currentColor"
                  />
                </pattern>
                <rect width="100" height="100" fill="url(#dot-pattern)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
