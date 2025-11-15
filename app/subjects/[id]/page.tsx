// app/subjects/[id]/page.tsx

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/app/lib/supabase/client'; // استخدام الاسم المستعار @ أفضل هنا
import React from 'react';

// 1. تعريف أنواع البيانات التي سنتعامل معها
type Lesson = {
  id: string;
  title: string;
  xp_value: number;
};
type Unit = {
  title: string;
};

// 2. استقبال الـ params من Next.js
export default function UnitPage({ params }: { params: Promise<{ id: string }> }) {
  const [unit, setUnit] = useState<Unit | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = React.use(params); // استخراج الـ id من الـ params

  useEffect(() => {
    if (!id) return;

    const fetchUnitAndLessons = async () => {
      setLoading(true);

      // 3. جلب تفاصيل الوحدة نفسها (مثل عنوانها)
      const { data: unitData, error: unitError } = await supabase
        .from('units')
        .select('title')
        .eq('id', id) // .eq تعني 'equals' (يساوي)
        .single(); // .single() لجلب نتيجة واحدة فقط

      // 4. جلب الدروس التي تنتمي لهذه الوحدة فقط
      const { data: lessonsData, error: lessonsError } = await supabase
        .from('lessons')
        .select('id, title, xp_value')
        .eq('unit_id', id) // الشرط الأهم: حيث unit_id يساوي الـ ID من الـ URL
        .order('id', { ascending: true });

      if (unitError || lessonsError) {
        console.error('Error fetching data:', unitError || lessonsError);
      } else {
        setUnit(unitData);
        setLessons(lessonsData);
      }
      setLoading(false);
    };

    fetchUnitAndLessons();
  }, [id]); // يتم تشغيل هذا التأثير كلما تغير الـ id

  if (loading) {
    return <div className="text-center p-10">يتم تحميل الدروس...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <Link href="/dashboard" className="text-indigo-600 hover:underline">
          &larr; العودة إلى لوحة التحكم
        </Link>
        <h1 className="text-3xl font-bold mt-2">{unit?.title || 'وحدة دراسية'}</h1>
      </header>

      <main>
        <div className="space-y-4">
          {lessons.length > 0 ? (
            lessons.map((lesson) => (
              <div key={lesson.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <div>
                  <h2 className="text-lg font-semibold">{lesson.title}</h2>
                  <p className="text-sm text-gray-500">نقاط الخبرة: {lesson.xp_value} XP</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
                  ابدأ الدرس
                </button>
              </div>
            ))
          ) : (
            <p>لا توجد دروس متاحة في هذه الوحدة بعد.</p>
          )}
        </div>
      </main>
    </div>
  );
}