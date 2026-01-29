import { createClient } from "../utils/supabase/server";
import { FaQuoteRight, FaStar, FaLeaf } from "react-icons/fa";
import Image from "next/image";

export default async function Testimonials() {
  const supabase = await createClient();

  const { data: reviews } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (!reviews || reviews.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-white relative overflow-hidden text-right"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2d4c3e]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b5e3c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[#2d4c3e] font-bold tracking-[0.2em] uppercase mb-3 text-sm md:text-base flex items-center justify-center gap-2">
            <FaLeaf className="text-xs text-[#8b5e3c]" /> قالوا عنا
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#1a2e25] leading-tight">
            شركاء النجاح{" "}
            <span className="text-[#8b5e3c] block md:inline">
              وشهادات نعتز بها
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative bg-[#f8f5f0] p-8 md:p-10 rounded-[2.5rem] border border-[#2d4c3e]/5 hover:bg-white hover:shadow-[0_20px_50px_rgba(45,76,62,0.1)] transition-all duration-500 group"
            >
              <div className="absolute top-8 left-8 text-[#2d4c3e] text-3xl md:text-5xl opacity-10 group-hover:opacity-20 transition-opacity">
                <FaQuoteRight />
              </div>

              <div className="flex gap-1 mb-6 text-[#8b5e3c] text-sm">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-[#5c554a] text-base md:text-lg leading-relaxed mb-8 italic relative z-10 min-h-0 md:min-h-[100px]">
                &quot;{review.content}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-[#2d4c3e]/10 pt-6">
                {review.image_url ? (
                  <img
                    src={review.image_url}
                    alt={review.client_name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-[#8b5e3c]/20 shadow-md shrink-0 transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-[#2d4c3e] flex items-center justify-center text-[#f8f5f0] font-bold text-xl shadow-md shrink-0">
                    {review.client_name.charAt(0)}
                  </div>
                )}

                <div className="flex flex-col">
                  <h4 className="text-[#1a2e25] font-bold text-base md:text-lg">
                    {review.client_name}
                  </h4>
                  <span className="text-xs md:text-sm text-[#8b5e3c] font-medium tracking-wide">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
