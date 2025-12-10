import Link from "next/link";
import Image from "next/image";
import { createClient } from "../../utils/supabase/server";
import { deleteProject } from "../actions"; // تأكد أن ملف actions.ts بجانب هذا الملف
import { FaPlus, FaTrash, FaMapMarkerAlt, FaEdit } from "react-icons/fa";

export default async function ProjectsDashboard() {
  const supabase = await createClient();

  // جلب المشاريع (الأحدث أولاً)
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      {/* الترويسة: العنوان + زر إضافة مشروع جديد */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">إدارة المشاريع</h1>
          <p className="text-slate-400 mt-1">
            لديك حالياً{" "}
            <span className="text-yellow-500 font-bold">
              {projects?.length || 0}
            </span>{" "}
            مشروع في المعرض
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-yellow-500/10"
        >
          <FaPlus />
          <span>إضافة مشروع جديد</span>
        </Link>
      </div>

      {!projects || projects.length === 0 ? (
        <div className="text-center py-24 bg-slate-900/50 rounded-2xl border border-white/5 border-dashed">
          <p className="text-slate-500 text-lg mb-4">
            لم تقم بإضافة أي مشاريع بعد.
          </p>
          <Link
            href="/admin/projects/new"
            className="text-yellow-500 hover:underline"
          >
            ابدأ بإضافة مشروعك الأول
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image_url}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-slate-950/70 backdrop-blur-md text-white text-xs rounded-md border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* تفاصيل المشروع */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <FaMapMarkerAlt size={12} />
                  <span className="line-clamp-1">
                    {project.location || "غير محدد"}
                  </span>
                </div>

                {/* أزرار التحكم (معاينة - تعديل - حذف) */}
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                  <Link
                    href={`/portfolio/${project.id}`}
                    target="_blank"
                    className="text-sm text-blue-400 hover:text-blue-300 transition"
                  >
                    معاينة
                  </Link>

                  <div className="flex gap-2">
                    {/* زر التعديل */}
                    <Link
                      href={`/admin/projects/${project.id}/edit`}
                      className="flex items-center gap-1 text-yellow-500 hover:text-yellow-400 text-sm px-3 py-1.5 rounded-lg hover:bg-yellow-500/10 transition"
                    >
                      <FaEdit size={14} />
                      <span>تعديل</span>
                    </Link>

                    {/* زر الحذف */}
                    <form action={deleteProject}>
                      <input type="hidden" name="id" value={project.id} />
                      <input
                        type="hidden"
                        name="image_url"
                        value={project.image_url}
                      />
                      <button
                        type="submit"
                        className="flex items-center gap-1 text-red-500 hover:text-red-400 text-sm px-3 py-1.5 rounded-lg hover:bg-red-500/10 transition"
                        // ملاحظة: لإضافة رسالة تأكيد (confirm) يفضل تحويل هذا الزر لـ Client Component منفصل،
                        // ولكن للسرعة الآن سيعمل الحذف مباشرة.
                      >
                        <FaTrash size={14} />
                        <span>حذف</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
