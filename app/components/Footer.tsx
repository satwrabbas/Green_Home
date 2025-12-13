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
} from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.svg"
                  alt="ABCE-S Logo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <span className="text-2xl font-bold text-white">ABCE-S</span>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6 text-sm">
              مكتب هندسي رائد في مصياف، يجمع بين الخبرة الأكاديمية والتنفيذ
              المتقن. نسعى لبناء مستقبل عمراني أفضل لمدينتنا.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Our.Home.masyaf"
                target="_blank"
                rel="nooper noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                target="_blank"
                rel="nooper noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/963938457732"
                target="_blank"
                rel="nooper noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-green-500 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-r-4 border-yellow-500 pr-3">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#about"
                  className="text-slate-400 hover:text-yellow-500 transition"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-slate-400 hover:text-yellow-500 transition"
                >
                  خدماتنا
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="text-slate-400 hover:text-yellow-500 transition"
                >
                  معرض الأعمال
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-r-4 border-yellow-500 pr-3">
              مجالات العمل
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-400 hover:text-white transition cursor-default">
                التصميم المعماري
              </li>
              <li className="text-slate-400 hover:text-white transition cursor-default">
                الدراسات الإنشائية
              </li>
              <li className="text-slate-400 hover:text-white transition cursor-default">
                الإكساء والديكور
              </li>
              <li className="text-slate-400 hover:text-white transition cursor-default">
                تعهدات البناء
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-r-4 border-yellow-500 pr-3">
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>سوريا، مصياف، شارع الوراقة (بجانب المالية)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <FaPhoneAlt className="text-yellow-500 flex-shrink-0" />
                <span dir="ltr">+963 938 457 732</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <FaEnvelope className="text-yellow-500 flex-shrink-0" />
                <span>info@abce-s.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:flex md:justify-between md:text-right">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ABCE-S Engineering. جميع الحقوق محفوظة.
          </p>
          <p className="text-slate-600 text-sm mt-2 md:mt-0">
            تم التصميم والتطوير بواسطة{" "}
            <span className="text-slate-400">Dev Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
