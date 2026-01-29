"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // تأثير التمرير لتغيير خلفية النافبار
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // معالجة التمرير السلس للروابط التي تحتوي على Hash (#)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash && pathname === "/") {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            const isMobile = window.innerWidth < 768;
            const yOffset = isMobile ? -20 : -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 300);
        }
      }
    };
    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, [pathname]);

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }

  const navLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عن المكتب", href: "/#about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "معرض الأعمال", href: "/portfolio" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[#1a2e25]/90 backdrop-blur-md border-b border-white/10 py-2 shadow-2xl"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* الشعار والهوية */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative w-12 md:w-14 transition-transform duration-500 group-hover:rotate-[5deg]">
              <Image
                src="/logo-white.png"
                alt="Our Home Logo"
                width={150}
                height={80}
                className="object-contain w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>

            <div className="h-8 w-[1px] bg-white/20 hidden md:block"></div>

            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-[#f8f5f0] tracking-wide leading-none">
                Our Home
              </span>
              <span className="text-[9px] md:text-[11px] text-[#8b5e3c] font-bold tracking-[0.15em] uppercase mt-1">
                Engineering & Design
              </span>
            </div>
          </Link>

          {/* روابط التنقل للشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname === "/" &&  window.location.hash === link.href.split("#")[1]);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-bold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#8b5e3c]"
                      : "text-[#f8f5f0]/80 hover:text-[#8b5e3c]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 right-0 h-[2px] bg-[#8b5e3c] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* زر الاتصال */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group flex items-center gap-2 bg-[#2d4c3e] hover:bg-[#8b5e3c] text-[#f8f5f0] px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl border border-white/10"
            >
              <FaPhoneFlip size={14} className="group-hover:rotate-12 transition-transform" />
              <span>استشارة مجانية</span>
            </Link>
          </div>

          {/* زر القائمة للجوال */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f8f5f0] p-2 rounded-xl bg-white/5 border border-white/10 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* القائمة المنسدلة للجوال */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#1a2e25] backdrop-blur-2xl border-t border-white/5 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-[#f8f5f0] text-lg font-medium hover:text-[#8b5e3c] transition-colors border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}

          <div className="w-full pt-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center gap-3 w-full bg-[#8b5e3c] text-white py-4 rounded-2xl text-base font-bold shadow-lg"
            >
              <FaPhoneFlip size={16} />
              <span>تواصل معنا الآن</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}