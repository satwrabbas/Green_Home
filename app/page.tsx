import { createClient } from "./utils/supabase/server";
import Link from "next/link";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";

export default async function Home() {
  const supabase = await createClient();

  // جلب آخر 3 مشاريع
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .limit(3)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      
      {/* 1. القسم الرئيسي */}
      <Hero />

      {/* 2. قسم من نحن */}
      <AboutSection />

      {/* باقي الأقسام لاحقاً */}
      <ServicesSection />
      <Testimonials />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
