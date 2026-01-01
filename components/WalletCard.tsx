import React from 'react';
import { Download, CheckSquare } from 'lucide-react';

export const WalletCard: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[2rem] p-8 sm:p-16 text-white shadow-2xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-10 -mb-10 pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">您的隨身護身符</h2>
            <p className="text-blue-100 mb-10 text-2xl font-medium leading-relaxed">
              我們準備了一張「磷添加劑檢查表 (Checklist)」，您可以截圖或下載保存在手機中，購物時隨時查看。
            </p>
            <button 
              type="button"
              className="inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-5 rounded-2xl font-bold text-2xl hover:bg-blue-50 transition-colors shadow-xl active:scale-95 transform duration-150" 
              onClick={handlePrint}
            >
              <Download size={28} />
              列印 / 存成 PDF
            </button>
          </div>

          {/* The Wallet Card Visual - Scaled Up */}
          <div 
            id="printable-card"
            className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl w-full max-w-md rotate-2 hover:rotate-0 transition-transform duration-300 border-8 border-slate-200"
          >
            <div className="border-b-2 border-slate-200 pb-4 mb-6">
              <h3 className="font-extrabold text-2xl flex items-center gap-3 text-slate-900">
                <CheckSquare size={32} className="text-blue-700" />
                磷添加劑檢查表
              </h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <input type="checkbox" className="mt-1 w-6 h-6 rounded border-2 border-slate-400 text-blue-700 focus:ring-blue-500" readOnly />
                <span className="text-xl font-bold">成分表是否有 "磷(PHOS)" 字眼？</span>
              </li>
              <li className="flex items-start gap-4">
                <input type="checkbox" className="mt-1 w-6 h-6 rounded border-2 border-slate-400 text-blue-700 focus:ring-blue-500" readOnly />
                <span className="text-xl font-bold">是否含有「修飾澱粉」或「卵磷脂」？</span>
              </li>
              <li className="flex items-start gap-4">
                <input type="checkbox" className="mt-1 w-6 h-6 rounded border-2 border-slate-400 text-blue-700 focus:ring-blue-500" readOnly />
                <span className="text-xl font-bold">肉品包裝是否標示「含有溶液」或「增味」？</span>
              </li>
              <li className="flex items-start gap-4 bg-red-50 p-2 rounded-lg -mx-2">
                <input type="checkbox" className="mt-1 w-6 h-6 rounded border-2 border-slate-400 text-red-600 focus:ring-red-500" readOnly />
                <span className="text-xl font-bold text-red-700">這是高度加工食品嗎？（如果是，放下它！）</span>
              </li>
            </ul>
            <div className="mt-8 pt-4 border-t-2 border-slate-100 text-sm font-bold text-slate-500 text-center">
              ASN Kidney Health Guidance 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};