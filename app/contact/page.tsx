'use client'; // لأننا نحتاج التعامل مع حالة الفورم (Loading/Success)
import Link from 'next/link';
import { FaLock } from 'react-icons/fa'; 
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { createBrowserClient } from '@supabase/ssr';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // دالة معالجة الإرسال
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    // الاتصال بـ Supabase
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase
      .from('inquiries')
      .insert(data);

    setLoading(false);

    if (error) {
      alert('حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً.');
      console.error(error);
    } else {
      setSuccess(true);
      e.currentTarget.reset(); // تفريغ الحقول
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />

      {/* Header بسيط */}
      <div className="pt-32 pb-12 bg-slate-900 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">تواصل معنا</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          نحن هنا للإجابة على استفساراتك الهندسية. سواء كان لديك مشروع جديد أو تحتاج لاستشارة، لا تتردد بالاتصال.
        </p>
      </div>

      <section className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* الجانب الأيمن: معلومات الاتصال */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white border-r-4 border-yellow-500 pr-4">
              بيانات التواصل
            </h2>
            
            <div className="grid gap-6">
              {/* الهاتف */}
              <div className="flex items-start gap-4 p-6 bg-slate-900 rounded-xl border border-white/5 hover:border-yellow-500/30 transition group">
                <div className="bg-blue-600/20 p-3 rounded-full text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">اتصل بنا</h3>
                  <p className="text-slate-400 dir-ltr text-right">+963 9xx xxx xxx</p>
                  <p className="text-slate-400 dir-ltr text-right">+963 33 xxx xxx</p>
                </div>
              </div>

              {/* البريد */}
              <div className="flex items-start gap-4 p-6 bg-slate-900 rounded-xl border border-white/5 hover:border-yellow-500/30 transition group">
                <div className="bg-pink-600/20 p-3 rounded-full text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">البريد الإلكتروني</h3>
                  <p className="text-slate-400">info@abce-s.com</p>
                </div>
              </div>

              {/* العنوان */}
              <div className="flex items-start gap-4 p-6 bg-slate-900 rounded-xl border border-white/5 hover:border-yellow-500/30 transition group">
                <div className="bg-yellow-600/20 p-3 rounded-full text-yellow-500 group-hover:bg-yellow-600 group-hover:text-white transition">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">زيارتنا</h3>
                  <p className="text-slate-400">مصياف، الحي الجنوبي، شارع الوراقة، مقابل المالية.</p>
                </div>
              </div>
              
               {/* أوقات العمل */}
               <div className="flex items-start gap-4 p-6 bg-slate-900 rounded-xl border border-white/5 hover:border-yellow-500/30 transition group">
                <div className="bg-green-600/20 p-3 rounded-full text-green-500 group-hover:bg-green-600 group-hover:text-white transition">
                  <FaClock size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">أوقات العمل</h3>
                  <p className="text-slate-400">السبت - الخميس: 9:00 ص - 5:00 م</p>
                  <p className="text-slate-500 text-sm">الجمعة: عطلة رسمية</p>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: نموذج الإرسال والخريطة */}
          <div className="space-y-8">
            
            {/* الفورم */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-white/10 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">أرسل رسالة فورية</h2>
              
              {success ? (
                <div className="bg-green-500/10 border border-green-500 text-green-500 p-6 rounded-xl text-center animate-pulse">
                  <h3 className="font-bold text-xl mb-2">تم الإرسال بنجاح!</h3>
                  <p>شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت ممكن.</p>
                  <button onClick={() => setSuccess(false)} className="mt-4 text-sm underline">إرسال رسالة أخرى</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition"
                      placeholder="محمد العلي"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">رقم الهاتف (واتساب)</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition"
                      placeholder="09xxxxxxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">تفاصيل الاستفسار</label>
                    <textarea 
                      name="message" 
                      required
                      rows={4}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition resize-none"
                      placeholder="أرغب بالاستفسار عن تكلفة إكساء شقة بمساحة..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span>جاري الإرسال...</span>
                    ) : (
                      <>
                        <span>إرسال الرسالة</span>
                        <FaPaperPlane />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* الخريطة */}
            {/* الخريطة */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[450px] shadow-lg relative z-0">
              <iframe 
                title="موقع المكتب"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4285.4664205964045!2d36.33783050962611!3d35.07056459461836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15239361bdb9122d%3A0x194d6fc3d2c60ff6!2sOur%20Home!5e1!3m2!1sen!2sus!4v1765527215020!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

            <div className="py-6 text-center border-t border-white/5 bg-slate-900/30">
        <Link 
          href="/login" 
          className="inline-flex items-center gap-2 text-slate-700 hover:text-yellow-500 transition-colors duration-300 text-sm opacity-60 hover:opacity-100"
          title="دخول الإدارة فقط"
        >
          <FaLock size={12} />
          <span>الدخول للإدارة</span>
        </Link>
      </div>

      <Footer />
    </main>
  );
}