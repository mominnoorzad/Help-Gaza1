import React from 'react';

export default function Donate() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-center space-y-6">
      <h1 className="text-3xl font-bold text-green-600">حمایت مالی از مردم غزه</h1>

      <div className="space-y-3 text-right text-lg">
        <p>💳 <strong>شماره کارت بانک ملت:</strong><br />
        6104 3387 6702 6715</p>

        <p>🏦 بنام: مومن نورزاد</p>

        <p>📞 <strong>واتساپ:</strong><br />
        +98 996 296 4153</p>

        <p>🪙 <strong>آدرس ارز دیجیتال:</strong><br />
        Ethereum (ERC20): 0x40ada721cae1CCa82653df83003aA19E4aD8275b<br />
        Bitcoin: bc1qksfj4fen0ltlqv3wdj8e4ttqt59pxk00j5a5qw</p>

        <p>📷 <strong>عکس و فیلم از غزه:</strong><br />
        به‌زودی در این صفحه قرار خواهد گرفت</p>

        <p>🆘 <strong>کمک از طریق هلال‌احمر:</strong><br />
        <a href="https://rcs.ir" target="_blank" className="text-blue-600 underline">جمعیت هلال‌احمر ایران</a></p>
      </div>
    </div>
  );
}
