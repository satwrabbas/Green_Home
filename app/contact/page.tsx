"use client";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createBrowserClient } from "@supabase/ssr";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaLeaf
} from "react-icons/fa";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.from("inquiries").insert(data);

    setLoading(false);

    if (error) {
      alert("حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً.");
      console.error(error);
    } else {
      setSuccess(true);
      e.currentTarget.reset();
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f5f0] flex flex-col text-right">
      <Navbar />

      {/* الهيدر العلوي */}
      <div className="pt-24 pb-12 md:pt-40 md:pb-20 bg-white text-center px-4 border-b border-[#2d4c3e]/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2d4c3e]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a2e25] mb-4">
            تواصل <span className="text-[#8b5e3c]">معنا</span>
          </h1>
          <p className="text-[#5c554a] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على استفساراتك الهندسية. سواء كان لديك مشروع جديد أو
            تحتاج لاستشارة، فريق <span className="font-bold text-[#2d4c3e]">Our Home</span> بانتظارك.
          </p>
        </div>
      </div>

      <section className="grow py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* قسم معلومات التواصل */}
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e25] border-r-4 border-[#8b5e3c] pr-4">
              بيانات التواصل
            </h2>

            <div className="grid gap-6">
              {/* الهاتف */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-[#2d4c3e]/5 hover:shadow-xl hover:shadow-[#2d4c3e]/5 transition-all duration-300 group">
                <div className="bg-[#f8f5f0] p-4 rounded-2xl text-[#2d4c3e] group-hover:bg-[#2d4c3e] group-hover:text-white transition-all duration-300">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#1a2e25] font-bold mb-1 text-lg">اتصل بنا</h3>
                  <div className="flex flex-col text-[#5c554a] dir-ltr text-right text-sm md:text-base font-medium">
                    <span>+963 944 809 750</span>
                    <span>+963 994 022 889</span>
                  </div>
                </div>
              </div>

              {/* البريد */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-[#2d4c3e]/5 hover:shadow-xl hover:shadow-[#2d4c3e]/5 transition-all duration-300 group">
                <div className="bg-[#f8f5f0] p-4 rounded-2xl text-[#8b5e3c] group-hover:bg-[#8b5e3c] group-hover:text-white transition-all duration-300">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#1a2e25] font-bold mb-1 text-lg">البريد الإلكتروني</h3>
                  <p className="text-[#5c554a] text-sm md:text-base break-all">
                    ourhome.msyaf@gmail.com
                  </p>
                </div>
              </div>

              {/* الموقع */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-[#2d4c3e]/5 hover:shadow-xl hover:shadow-[#2d4c3e]/5 transition-all duration-300 group">
                <div className="bg-[#f8f5f0] p-4 rounded-2xl text-[#2d4c3e] group-hover:bg-[#2d4c3e] group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#1a2e25] font-bold mb-1 text-lg">زيارتنا</h3>
                  <p className="text-[#5c554a] text-sm md:text-base leading-relaxed">
                    سوريا، مصياف، شمال الكازية الشمالية ب 150 متر
                  </p>
                </div>
              </div>

              {/* الوقت */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-[#2d4c3e]/5 hover:shadow-xl hover:shadow-[#2d4c3e]/5 transition-all duration-300 group">
                <div className="bg-[#f8f5f0] p-4 rounded-2xl text-[#8b5e3c] group-hover:bg-[#8b5e3c] group-hover:text-white transition-all duration-300">
                  <FaClock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#1a2e25] font-bold mb-1 text-lg">أوقات العمل</h3>
                  <p className="text-[#5c554a] text-sm md:text-base">السبت - الخميس: 9:00 ص - 5:00 م</p>
                  <p className="text-[#8b5e3c] text-xs font-bold mt-1">الجمعة: عطلة رسمية</p>
                </div>
              </div>
            </div>
          </div>

          {/* قسم الفورم والخريطة */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-[#2d4c3e]/5 shadow-2xl shadow-[#2d4c3e]/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#8b5e3c]"></div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e25] mb-6">أرسل رسالة فورية</h2>

              {success ? (
                <div className="bg-[#2d4c3e]/10 border border-[#2d4c3e] text-[#2d4c3e] p-8 rounded-3xl text-center">
                  <FaLeaf className="mx-auto text-3xl mb-4" />
                  <h3 className="font-bold text-xl mb-2">تم الإرسال بنجاح!</h3>
                  <p className="text-sm md:text-base">شكراً لتواصلك، سنقوم بالرد عليك في أقرب وقت.</p>
                  <button onClick={() => setSuccess(false)} className="mt-6 text-[#8b5e3c] font-bold underline">إرسال رسالة أخرى</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1a2e25] mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-[#f8f5f0] border border-[#2d4c3e]/10 rounded-xl p-4 text-[#1a2e25] focus:outline-none focus:border-[#8b5e3c] transition-all placeholder-[#5c554a]/50"
                      placeholder="محمد العلي"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1a2e25] mb-2">رقم الهاتف (واتساب)</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full bg-[#f8f5f0] border border-[#2d4c3e]/10 rounded-xl p-4 text-[#1a2e25] focus:outline-none focus:border-[#8b5e3c] transition-all placeholder-[#5c554a]/50"
                      placeholder="09xxxxxxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1a2e25] mb-2">تفاصيل الاستفسار</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-[#f8f5f0] border border-[#2d4c3e]/10 rounded-xl p-4 text-[#1a2e25] focus:outline-none focus:border-[#8b5e3c] transition-all resize-none placeholder-[#5c554a]/50"
                      placeholder="أرغب بالاستفسار عن..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#2d4c3e] hover:bg-[#1a2e25] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-[#2d4c3e]/20"
                  >
                    {loading ? <span>جاري الإرسال...</span> : (
                      <>
                        <span>إرسال الرسالة</span>
                        <FaPaperPlane className="text-sm" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* الخريطة بستايل متناسق */}
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white h-[300px] md:h-[400px] shadow-2xl relative">
              <iframe
                title="موقع المكتب"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4285.4664205964045!2d36.33783050962611!3d35.07056459461836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15239361bdb9122d%3A0x194d6fc3d2c60ff6!2sOur%20Home!5e1!3m2!1sen!2sus!4v1765527215020!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* رابط الإدارة بشكل هادئ */}
      <div className="py-8 text-center bg-white/50 backdrop-blur-sm">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-[#5c554a] hover:text-[#8b5e3c] transition-all text-xs md:text-sm font-medium opacity-50 hover:opacity-100"
        >
          <FaLock size={10} />
          <span>الدخول للإدارة</span>
        </Link>
      </div>

      <Footer />
    </main>
  );
}