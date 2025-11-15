// app/page.tsx

"use client";

import Link from 'next/link';
// سنستخدم "جهاز الراديو" هنا أيضًا!
import { useAuth } from './components/AuthProvider';

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-8">
        منصة البكلوريا التعليمية
      </h1>

      {/* عرض شرطي: يعرض محتوى مختلفًا بناءً على حالة المستخدم */}
      {user ? (
        // هذا ما يراه المستخدم المسجل دخوله
        <div className="text-center">
          <p className="mb-4">أهلاً بعودتك، {user.email}</p>
          <Link href="/dashboard" className="px-6 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            اذهب إلى لوحة التحكم
          </Link>
        </div>
      ) : (
        // هذا ما يراه الزائر
        <div className="text-center">
          <p className="mb-4">يرجى تسجيل الدخول للوصول إلى المحتوى.</p>
          <Link href="/login" className="px-6 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
            اذهب إلى صفحة تسجيل الدخول
          </Link>
        </div>
      )}
    </main>
  );
}