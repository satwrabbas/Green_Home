import { FaQuoteRight, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "أ. محمد العلي",
      role: "مستثمر عقاري",
      content: "تعاملت مع عدة مكاتب في المنطقة، لكن ABCE-S كانوا الأكثر احترافية. التزام غريب بالمواعيد ودقة في حساب الكميات وفرت علي الكثير من التكاليف.",
      rating: 5,
    },
    {
      id: 2,
      name: "د. سامر إبراهيم",
      role: "مالك فيلا",
      content: "التصميم الداخلي الذي قدموه لمنزلي في مصياف كان تحفة فنية. استغلوا الإطلالة الجبلية بشكل رائع، وتشطيباتهم نظيفة جداً.",
      rating: 5,
    },
    {
      id: 3,
      name: "السيدة ريم حسن",
      role: "تجديد منزل",
      content: "فريق متعاون جداً. حولوا منزلي القديم إلى شقة عصرية. الشفافية في الفواتير هي أكثر ما أعجبني في التعامل معهم.",
      rating: 4, // 4 نجوم لتبدو واقعية
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl translate-x-[-50%] translate-y-[-50%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 font-bold tracking-wider uppercase mb-2">قالوا عنا</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            شركاء النجاح <span className="text-slate-500">وشهادات نعتز بها</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="relative bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition duration-300">
              {/* أيقونة الاقتباس */}
              <div className="absolute top-6 left-6 text-slate-700 text-4xl opacity-50">
                <FaQuoteRight />
              </div>

              {/* النجوم */}
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? "text-yellow-500" : "text-slate-600"} />
                ))}
              </div>

              {/* النص */}
              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                {review.content}
              </p>

              {/* صاحب الرأي */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-800 flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <span className="text-xs text-slate-500">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}