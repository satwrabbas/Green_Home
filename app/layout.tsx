// app/layout.tsx
import type { Metadata } from "next";
import { Tajawal } from "next/font/google"; // أو Cairo
import "./globals.css";
import Navbar from "./components/Navbar"; // <-- استدعاء الناف بار

// إعداد الخط (اخترنا تجوال لأنه هندسي وعصري)
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "ABCE-S | مكتب هندسي عقاري",
  description: "تصميم، إكساء، وتنفيذ مشاريع هندسية في مصياف.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} antialiased bg-slate-950 text-slate-50`}>
        <Navbar /> {/* <-- وضعه هنا */}
        
        {/* نضيف padding-top لكي لا يغطي الناف بار المحتوى في الصفحات العادية (اختياري حسب التصميم) */}
        {/* لكن في الصفحة الرئيسية غالباً نريده فوق الصورة، لذا نتحكم بذلك في الصفحة نفسها */}
        {children}
        
      </body>
    </html>
  );
}