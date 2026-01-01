import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-2xl text-white mb-6 font-bold leading-relaxed">
            這份指引不只是為了降低數字，更是為了讓您擁有更好的生活品質。
          </p>
          <p className="mb-10 max-w-3xl mx-auto text-xl text-slate-400 font-medium">
            透過「選擇原型食物」和「辨識添加劑」，您可以在享受美食的同時，保護您的骨骼與心血管健康。
          </p>
          
          <div className="h-px bg-slate-700 w-full max-w-md mx-auto mb-10"></div>

          <div className="text-sm sm:text-base space-y-4 text-slate-400">
            <p>
              本網頁內容參考自 <em className="text-slate-200 not-italic font-bold">2025 ASN Kidney Health Guidance on Potassium and Phosphorus Food Additives</em>。
            </p>
            <p>
              免責聲明：飲食建議需因人而異，本網頁僅供衛教參考。請務必諮詢您的腎臟科醫師或營養師以獲得個人化建議。
            </p>
            <p className="mt-8 text-slate-500">
              &copy; {new Date().getFullYear()} Kidney Health Education. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};