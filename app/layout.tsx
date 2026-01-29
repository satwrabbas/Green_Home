import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Our Home | مكتب هندسي عقاري",
  description: "تصميم، إكساء، وتنفيذ مشاريع هندسية في مصياف.",
  icons: {
    icon: "/small-logo.png",
    shortcut: "/small-logo.png",
    apple: "/small-logo.png",
  },
};
//here we go
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={` antialiased bg-slate-950 text-slate-50`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
