"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // لمعرفة الصفحة الحالية
import { FaBars, FaTimes, FaBuilding } from "react-icons/fa"; // أيقونات القائمة
import { FaPhoneFlip } from "react-icons/fa6"; // أيقونة الهاتف

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // حالة قائمة الموبايل
  const [scrolled, setScrolled] = useState(false); // حالة التمرير (Scroll)
  const pathname = usePathname(); // الرابط الحالي

  // مراقبة التمرير لتغيير خلفية الناف بار
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }
  const navLinks = [
    { name: "الرئيسية", href: "/#home" }, // أضفنا #home
    { name: "عن المكتب", href: "/#about" }, // أضفنا #about
    { name: "خدماتنا", href: "/#services" }, // أضفنا #services
    { name: "معرض الأعمال", href: "/portfolio" }, // أضفنا #portfolio
    // { name: 'المدونة', href: '/blog' },     // سنخفي المدونة حالياً لأننا لم نقم ببنائها
    { name: "تواصل معنا", href: "/contact" }, // تبقى كما هي لأنها صفحة حقيقية
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md border-white/10 shadow-lg py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* الشعار (Logo) */}

          {/* ... داخل الـ Navbar ... */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* اللوجو الجديد */}
            <div className="relative w-12 h-12">
              {" "}
              {/* هنا نتحكم بالحجم الخارجي */}
              <Image
                src="/logo.svg" // تأكد أن الاسم مطابق للملف في public
                alt="ABCE-S Logo"
                fill // يملأ الـ div الأب
                className="object-cover rounded-xl group-hover:scale-105 transition duration-300" // rounded-xl ليتناسب مع زوايا اللوجو
                sizes="(max-width: 768px) 48px, 48px"
              />
            </div>

            {/* النص بجانب اللوجو */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wide">
                ABCE-S
              </span>
              <span className="text-xs text-gray-400 font-light tracking-wider">
                للهندسة والمقاولات
              </span>
            </div>
          </Link>

          {/* روابط الكمبيوتر (Desktop Menu) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-yellow-500"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* خط تحت الرابط النشط */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* زر اتصل بنا (CTA) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              <FaPhoneFlip size={14} />
              <span>استشارة مجانية</span>
            </Link>
          </div>

          {/* زر قائمة الموبايل (Mobile Menu Button) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل (Mobile Menu) */}
      {/* نجعلها تظهر بتأثير ناعم */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-white/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // إغلاق القائمة عند الضغط
              className={`text-lg font-medium transition ${
                pathname === link.href ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold mt-4"
          >
            اتصل بنا الآن
          </Link>
        </div>
      </div>
    </nav>
  );
}
