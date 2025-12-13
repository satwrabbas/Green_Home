import { createClient } from "../../utils/supabase/server";
import { deleteInquiry, markAsContacted } from "../actions";
import { FaWhatsapp, FaTrash, FaCheckDouble, FaClock } from "react-icons/fa";

export default async function InquiriesPage() {
  const supabase = await createClient();

  const { data: inquiries } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ar-SY", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">صندوق الوارد</h1>
        <div className="bg-slate-800 px-4 py-2 rounded-full border border-white/10 text-sm text-slate-300">
          العدد الكلي: {inquiries?.length || 0}
        </div>
      </header>

      {!inquiries || inquiries.length === 0 ? (
        <div className="text-center py-20 bg-slate-900 rounded-2xl border border-white/5 border-dashed">
          <p className="text-slate-500 text-lg">
            لا توجد رسائل جديدة حتى الآن.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {inquiries.map((item) => (
            <div
              key={item.id}
              className={`relative p-6 rounded-xl border transition-all ${
                item.status === "new"
                  ? "bg-slate-800/80 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)]"
                  : "bg-slate-900 border-white/5 opacity-75 hover:opacity-100"
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    {item.status === "new" && (
                      <span className="px-2 py-0.5 bg-yellow-500 text-slate-900 text-xs font-bold rounded-full animate-pulse">
                        جديد
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      {item.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock size={12} />
                      {formatDate(item.created_at)}
                    </span>
                  </div>

                  <p className="text-slate-200 bg-slate-950/50 p-4 rounded-lg border border-white/5 leading-relaxed">
                    {item.message}
                  </p>
                </div>

                <div className="flex md:flex-col gap-2 justify-center border-t md:border-t-0 md:border-r border-white/10 pt-4 md:pt-0 md:pr-4 mt-4 md:mt-0">
                  <a
                    href={`https://wa.me/${item.phone
                      ?.replace(/^0+/, "963")
                      .replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition"
                  >
                    <FaWhatsapp size={18} />
                    <span>رد واتساب</span>
                  </a>

                  {item.status === "new" && (
                    <form action={markAsContacted}>
                      <input type="hidden" name="id" value={item.id} />
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition border border-blue-600/30"
                      >
                        <FaCheckDouble />
                        <span>تمت القراءة</span>
                      </button>
                    </form>
                  )}

                  <form action={deleteInquiry}>
                    <input type="hidden" name="id" value={item.id} />
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition border border-red-600/20"
                    >
                      <FaTrash />
                      <span>حذف</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
