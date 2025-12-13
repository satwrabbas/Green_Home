import { createClient } from "../../utils/supabase/server";
import { addTestimonial, deleteTestimonial } from "./actions";
import { FaTrash, FaStar, FaPlus, FaImage } from "react-icons/fa";

export default async function TestimonialsAdmin() {
  const supabase = await createClient();

  const { data: reviews } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">إدارة آراء العملاء</h1>

      <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 mb-12">
        <h2 className="text-xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
          <FaPlus /> إضافة رأي جديد
        </h2>

        <form
          action={addTestimonial}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            name="client_name"
            required
            placeholder="اسم العميل"
            className="bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none"
          />

          <input
            name="role"
            placeholder="الصفة (مثال: مالك فيلا)"
            className="bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none"
          />

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <FaImage />
            </div>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="block w-full text-sm text-slate-400
                file:mr-4 file:py-3 file:px-4
                file:rounded-l-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-slate-800 file:text-yellow-500
                hover:file:bg-slate-700
                bg-slate-950 rounded-lg border border-white/10 cursor-pointer"
            />
          </div>

          <div className="flex gap-4">
            <select
              name="rating"
              className="bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none w-full"
            >
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3">⭐⭐⭐ (3)</option>
            </select>
          </div>

          <textarea
            name="content"
            required
            placeholder="نص الرأي..."
            rows={3}
            className="md:col-span-2 bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none resize-none"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 rounded-lg transition"
          >
            حفظ الرأي
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews?.map((review) => (
          <div
            key={review.id}
            className="bg-slate-800/50 p-6 rounded-xl border border-white/5 relative group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                {review.image_url ? (
                  <img
                    src={review.image_url}
                    alt={review.client_name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/20"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-bold text-lg">
                    {review.client_name.charAt(0)}
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-white">{review.client_name}</h3>
                  <p className="text-xs text-slate-400">{review.role}</p>
                </div>
              </div>
              <div className="flex text-yellow-500 text-sm">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              &quot;{review.content}&quot;
            </p>

            <form
              action={deleteTestimonial}
              className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition"
            >
              <input type="hidden" name="id" value={review.id} />
              <button
                type="submit"
                className="text-red-500 hover:text-red-400 p-2 bg-slate-900 rounded-full hover:bg-red-500/10 transition"
              >
                <FaTrash />
              </button>
            </form>
          </div>
        ))}
        {(!reviews || reviews.length === 0) && (
          <p className="text-slate-500 col-span-2 text-center py-10">
            لا توجد آراء مضافة بعد.
          </p>
        )}
      </div>
    </div>
  );
}
