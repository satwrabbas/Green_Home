"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaExpandArrowsAlt,
} from "react-icons/fa";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeGallery = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images.length],
  );

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight" || e.key === "ArrowDown") nextImage();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {images.map((imgUrl, index) => (
          <div
            key={index}
            onClick={() => openGallery(index)}
            className="relative h-64 md:h-80 rounded-[2rem] overflow-hidden group cursor-pointer border-4 border-white shadow-lg hover:shadow-[#2d4c3e]/10 transition-all duration-500"
          >
            <Image
              src={imgUrl}
              alt={`${title} - ${index}`}
              fill
              className="object-cover group-hover:scale-110 transition duration-1000 ease-in-out"
            />

            <div className="absolute inset-0 bg-[#1a2e25]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="bg-[#f8f5f0] text-[#8b5e3c] p-4 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition duration-500 shadow-2xl">
                <FaExpandArrowsAlt size={24} />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a2e25]/60 to-transparent opacity-60"></div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#1a2e25]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-[#f8f5f0]/70 hover:text-white bg-white/10 hover:bg-[#8b5e3c] p-3 rounded-2xl transition-all duration-300 z-[110] border border-white/10"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-[#f8f5f0]/70 hover:text-white bg-white/5 hover:bg-[#8b5e3c] p-4 md:p-6 rounded-3xl transition-all duration-300 z-[110] border border-white/5"
          >
            <FaArrowLeft className="w-6 h-6" />
          </button>

          <div
            className="relative w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] md:h-[80vh]">
              <Image
                src={images[currentIndex]}
                alt={`Full screen ${currentIndex}`}
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                priority
                quality={100}
              />
            </div>

            <div className="mt-8 flex flex-col items-center gap-2">
              <h3 className="text-[#f8f5f0] font-bold text-lg md:text-xl tracking-wide">
                {title}
              </h3>
              <div className="px-4 py-1 bg-[#8b5e3c] rounded-full text-[#f8f5f0] text-xs md:text-sm font-bold tracking-widest">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-[#f8f5f0]/70 hover:text-white bg-white/5 hover:bg-[#8b5e3c] p-4 md:p-6 rounded-3xl transition-all duration-300 z-[110] border border-white/5"
          >
            <FaArrowRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
