import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 text-center space-y-8">
      <h1 className="text-4xl font-bold text-green-700">کمک به مردم غزه</h1>
      <p className="text-lg max-w-2xl mx-auto text-gray-700">
        ما در کنار مردم غزه ایستاده‌ایم. با حمایت‌های مالی و معنوی شما، می‌توانیم امید را زنده نگه داریم. این وب‌سایت برای اطلاع‌رسانی، جمع‌آوری کمک‌های مردمی و نمایش واقعیت‌های غزه ساخته شده است.
      </p>

      <div className="space-x-4">
        <Link href="/donate" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
          حمایت مالی 💚
        </Link>
        <Link href="/gallery" className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400">
          دیدن تصاویر 📷
        </Link>
      </div>

      <footer className="text-sm text-gray-500 mt-12">
        ساخته شده با ❤️ توسط مومن نورزاد
      </footer>
    </main>
  );
}