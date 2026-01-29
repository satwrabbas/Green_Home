"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaFilter, FaArrowLeft } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  category: string;
  image_url: string;
  location: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const categories = [
    "الكل",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    activeCategory === "الكل"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="w-full bg-[#f8f5f0] py-12 text-right">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-500 border-2 ${
              activeCategory === category
                ? "bg-[#8b5e3c] text-white border-[#8b5e3c] shadow-lg shadow-[#8b5e3c]/20 scale-105"
                : "bg-white text-[#5c554a] border-[#2d4c3e]/5 hover:border-[#8b5e3c] hover:text-[#8b5e3c]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredProjects.map((project) => (
          <Link
            href={`/portfolio/${project.id}`}
            key={project.id}
            className="group relative block aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#1a2e25] border-[6px] border-white shadow-xl hover:shadow-[#2d4c3e]/20 transition-all duration-700"
          >
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e25] via-[#1a2e25]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

            <div className="absolute top-6 right-6">
              <span className="px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-[#f8f5f0] text-[#1a2e25] rounded-full shadow-lg">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#f8f5f0] transition-colors leading-tight">
                {project.title}
              </h3>

              <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-4">
                <div className="flex items-center gap-2 text-[#f8f5f0]/70 text-sm">
                  <FaMapMarkerAlt className="text-[#8b5e3c]" />
                  <span className="font-medium">
                    {project.location || "مصياف، سوريا"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[#f8f5f0] bg-[#2d4c3e] px-4 py-2 rounded-xl text-xs font-bold transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <span>التفاصيل</span>
                  <FaArrowLeft className="text-[10px]" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-32 rounded-[3rem] bg-white border-2 border-dashed border-[#2d4c3e]/10">
          <div className="w-20 h-20 bg-[#f8f5f0] rounded-full flex items-center justify-center mx-auto mb-6">
            <FaFilter className="text-[#8b5e3c] text-3xl opacity-50" />
          </div>
          <h4 className="text-[#1a2e25] font-bold text-xl mb-2">
            عذراً، لا توجد نتائج
          </h4>
          <p className="text-[#5c554a]">
            لا توجد مشاريع ضمن هذا التصنيف في الوقت الحالي.
          </p>
          <button
            onClick={() => setActiveCategory("الكل")}
            className="mt-6 text-[#8b5e3c] font-bold underline"
          >
            عرض كافة المشاريع
          </button>
        </div>
      )}
    </div>
  );
}
