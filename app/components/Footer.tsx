"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLeaf,
} from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }

  return (
    <footer className="bg-[#1a2e25] border-t border-[#f8f5f0]/10 pt-10 pb-6 md:pt-16 md:pb-8 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center p-1">
                <Image
                  src="/logo-white.png"
                  alt="Our Home Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-[#f8f5f0]">
                  Our Home
                </span>
                <span className="text-[10px] text-[#8b5e3c] font-bold tracking-widest uppercase -mt-1">
                  Engineering & Design
                </span>
              </div>
            </div>

            <p className="text-[#f8f5f0]/70 leading-relaxed text-sm md:text-base">
              مكتب هندسي رائد في مصياف، يجمع بين الخبرة الأكاديمية والتنفيذ
              المتقن. نسعى لبناء مستقبل عمراني أفضل لمدينتنا من خلال تصاميم
              تحاكي الطبيعة وتلبي الطموح.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/Our.Home.masyaf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#f8f5f0] hover:bg-[#8b5e3c] transition-all duration-300 border border-white/10"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/our_home_2012/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#f8f5f0] hover:bg-[#8b5e3c] transition-all duration-300 border border-white/10"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/963994022889"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#f8f5f0] hover:bg-[#25d366] transition-all duration-300 border border-white/10"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#f8f5f0] font-bold text-base md:text-lg mb-6 border-r-4 border-[#8b5e3c] pr-3">
              روابط سريعة
            </h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link
                  href="/#about"
                  className="text-[#f8f5f0]/60 hover:text-[#8b5e3c] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5e3c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-[#f8f5f0]/60 hover:text-[#8b5e3c] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5e3c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[#f8f5f0]/60 hover:text-[#8b5e3c] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5e3c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  معرض الأعمال
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#f8f5f0] font-bold text-base md:text-lg mb-6 border-r-4 border-[#8b5e3c] pr-3">
              مجالات العمل
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-[#f8f5f0]/60">
              <li className="flex items-center gap-2">
                <FaLeaf className="text-[#8b5e3c] text-[10px]" /> التخطيط
                العمراني
              </li>
              <li className="flex items-center gap-2">
                <FaLeaf className="text-[#8b5e3c] text-[10px]" /> الدراسات
                الإنشائية
              </li>
              <li className="flex items-center gap-2">
                <FaLeaf className="text-[#8b5e3c] text-[10px]" /> الإكساء
                والديكور
              </li>
              <li className="flex items-center gap-2">
                <FaLeaf className="text-[#8b5e3c] text-[10px]" /> تعهدات البناء
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#f8f5f0] font-bold text-base md:text-lg mb-6 border-r-4 border-[#8b5e3c] pr-3">
              تواصل معنا
            </h3>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3 text-[#f8f5f0]/70">
                <FaMapMarkerAlt className="text-[#8b5e3c] mt-1 shrink-0" />
                <span>سوريا، مصياف، شمال الكازية الشمالية 150 متر</span>
              </li>
              <li className="flex items-center gap-3 text-[#f8f5f0]/70">
                <FaPhoneAlt className="text-[#8b5e3c] shrink-0" />
                <a
                  href="tel:+963994022889"
                  dir="ltr"
                  className="hover:text-[#f8f5f0] transition"
                >
                  +963 994 022 889
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#f8f5f0]/70">
                <FaEnvelope className="text-[#8b5e3c] shrink-0" />
                <a
                  href="mailto:ourhome.msyaf@gmail.com"
                  className="break-all hover:text-[#f8f5f0] transition"
                >
                  ourhome.msyaf@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <p className="text-[#f8f5f0]/40 text-xs md:text-sm">
            © {new Date().getFullYear()} Our Home Engineering. جميع الحقوق
            محفوظة.
          </p>
          <p className="text-[#f8f5f0]/30 text-xs md:text-sm flex items-center gap-1">
            تم التصميم والتطوير بواسطة{" "}
            <span className="text-[#f8f5f0]/50 font-medium">abce</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
