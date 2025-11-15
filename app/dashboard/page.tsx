// app/dashboard/page.tsx

"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';
import { supabase } from '../lib/supabase/client';
import Link from 'next/link';

// 1. تعريف نوع البيانات للوحدة الدراسية لمساعدة TypeScript
type Unit = {
  id: string;
  title: string;
};

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  
  // 2. حالة جديدة لتخزين الوحدات التي سنجلبها من قاعدة البيانات
  const [units, setUnits] = useState<Unit[]>([]);
  // حالة لتتبع عملية التحميل
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      // 3. دالة لجلب الوحدات الدراسية
      const fetchUnits = async () => {
        setLoading(true);
        // جلب البيانات من جدول 'units'
        const { data: unitsData, error } = await supabase
          .from('units')
          .select('*')
          .order('id', { ascending: true }); // ترتيب الوحدات حسب الـ id

        if (error) {
          console.error('Error fetching units:', error);
        } else {
          setUnits(unitsData);
        }
        setLoading(false);
      };

      fetchUnits();
    }
  }, [user, router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };
  
  // 4. عرض حالة تحميل مختلفة أثناء جلب البيانات
  if (loading) {
    return <div>يتم تحميل الوحدات الدراسية...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <p className="text-gray-600">أهلاً بك، {user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          تسجيل الخروج
        </button>
      </header>
      
      <main>
        <h2 className="text-2xl font-semibold mb-4">الوحدات الدراسية</h2>
        {/* 5. عرض قائمة الوحدات الدراسية */}
        {units.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => (
              <div key={unit.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-indigo-700">{unit.title}</h3>
                {/* لاحقًا، هذا الزر سينقلنا إلى صفحة الدروس لهذه الوحدة */}
                <Link 
                  href={`/units/${unit.id}`}
                  className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  عرض الدروس
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>لم يتم العثور على وحدات دراسية. قم بإضافتها من لوحة تحكم Supabase.</p>
        )}
      </main>
    </div>
  );
}