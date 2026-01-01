import React, { useState } from 'react';
import { Search, AlertTriangle, Eye, XCircle, Syringe, CheckCircle2, Info, ListFilter, ShieldAlert } from 'lucide-react';

const ingredients = [
  { id: 1, name: '磷酸鹽 (Phosphate)', safe: false, desc: '最常見的無機磷，常見於加工肉品、汽水。' },
  { id: 2, name: '磷酸 (Phosphoric acid)', safe: false, desc: '酸味劑，深色汽水中含量極高。' },
  { id: 3, name: '多磷酸鈉', safe: false, desc: '結著劑，常見於丸子、香腸。' },
  { id: 4, name: '改性澱粉 (Modified starch)', safe: false, type: 'hidden', desc: '雖然沒有 "磷(PHOS)"，但通常含有磷酸化合物。' },
  { id: 5, name: '卵磷脂 (Lecithin)', safe: false, type: 'hidden', desc: '乳化劑，常見於巧克力、烘焙品。' },
  { id: 6, name: '肌苷酸二鈉', safe: false, type: 'hidden', desc: '鮮味劑，泡麵湯頭常見。' },
  { id: 7, name: '天然香料', safe: true, desc: '通常安全，但需確認是否混有含磷載體。' },
  { id: 8, name: '食用色素 (紅色40號)', safe: true, desc: '本身不含磷，但加工過程可能使用。' },
];

export const ShoppingGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileTab, setMobileTab] = useState<'search' | 'traps'>('search');

  const filteredIngredients = ingredients.filter(i => 
    i.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="bg-blue-100 p-3 sm:p-4 rounded-full">
            <Search className="text-blue-700" size={32} />
          </div>
          成為「磷(PHOS)」偵探
        </h2>
        <p className="mt-4 sm:mt-6 text-xl sm:text-2xl text-slate-700 font-medium max-w-3xl mx-auto">
          找出隱藏在成分表背後的隱形殺手
        </p>
      </div>

      {/* MOBILE TAB SWITCHER (Visible only on mobile) */}
      <div className="md:hidden flex rounded-xl bg-slate-200 p-1 mb-8">
        <button 
          onClick={() => setMobileTab('search')}
          className={`flex-1 py-3 px-4 rounded-lg text-lg font-bold flex items-center justify-center gap-2 transition-all ${
            mobileTab === 'search' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <ListFilter size={20} />
          查詢成分
        </button>
        <button 
          onClick={() => setMobileTab('traps')}
          className={`flex-1 py-3 px-4 rounded-lg text-lg font-bold flex items-center justify-center gap-2 transition-all ${
            mobileTab === 'traps' ? 'bg-white text-red-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <ShieldAlert size={20} />
          肉品陷阱
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Search Logic */}
        <div className={`
          ${mobileTab === 'search' ? 'block' : 'hidden md:block'}
          bg-white p-6 sm:p-10 rounded-[2rem] shadow-xl border-2 border-slate-100
        `}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-900 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 text-white rounded-full text-lg sm:text-xl">1</span>
            關鍵字過濾器
          </h3>
          
          <div className="relative mb-6 sm:mb-8">
            <input
              type="text"
              placeholder="輸入成分 (如: 磷酸, 澱粉)..."
              className="w-full pl-12 sm:pl-16 pr-6 py-4 sm:py-6 rounded-2xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-xl sm:text-2xl placeholder:text-slate-400 font-medium text-slate-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 sm:left-6 top-5 sm:top-6 text-slate-500" size={24} />
          </div>

          <div className="space-y-4 h-[400px] sm:h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredIngredients.map(item => (
              <div key={item.id} className={`p-4 sm:p-6 rounded-2xl border-l-8 shadow-sm transition-all ${
                item.safe 
                  ? 'bg-green-50 border-green-500' 
                  : item.type === 'hidden' 
                    ? 'bg-orange-50 border-orange-500' 
                    : 'bg-red-50 border-red-500'
              }`}>
                <div className="flex justify-between items-start gap-4">
                  <span className="font-bold text-xl sm:text-2xl text-slate-900">{item.name}</span>
                  {item.safe ? (
                    <div className="bg-white p-1.5 rounded-full shadow-sm shrink-0">
                      <CheckCircle2 className="text-green-600" size={24} />
                    </div>
                  ) : item.type === 'hidden' ? (
                     <div className="bg-white p-1.5 rounded-full shadow-sm shrink-0">
                      <Eye className="text-orange-600" size={24} />
                    </div>
                  ) : (
                     <div className="bg-white p-1.5 rounded-full shadow-sm shrink-0">
                      <AlertTriangle className="text-red-600" size={24} />
                    </div>
                  )}
                </div>
                <p className="text-lg sm:text-xl text-slate-700 mt-2 sm:mt-3 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Meat Traps */}
        <div className={`
          ${mobileTab === 'traps' ? 'block' : 'hidden md:block'}
          space-y-6 sm:space-y-8
        `}>
          <div className="bg-red-50 p-6 sm:p-10 rounded-[2rem] shadow-xl border-2 border-red-200">
             <div className="flex items-center gap-4 sm:gap-5 mb-6">
                <div className="bg-red-200 p-3 sm:p-4 rounded-full">
                  <Syringe className="text-red-700" size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-red-900">肉品區的陷阱</h3>
             </div>
             <p className="text-xl sm:text-2xl text-slate-800 mb-6 sm:mb-8 leading-relaxed font-medium">
               看起來新鮮的肉，也可能被動過手腳！這些肉品含磷量高出 <strong className="text-red-700 text-3xl">65%</strong>。
             </p>
             
             <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-red-100 shadow-md">
                <h4 className="font-bold text-xl sm:text-2xl text-slate-900 mb-4 flex items-center gap-3">
                  <XCircle size={28} className="text-red-600" />
                  警訊關鍵字：
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['含有溶液 (Contains solution)', '增味 (Enhanced)', '醃製 (Brined)', '多汁 (Plumped)'].map((tag, i) => (
                    <span key={i} className="px-3 py-2 sm:px-4 sm:py-3 bg-red-100 text-red-800 rounded-xl text-lg sm:text-xl font-bold border border-red-200">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>

             <div className="mt-6 bg-green-100 rounded-2xl p-6 sm:p-8 border-2 border-green-200 shadow-md">
                <h4 className="font-bold text-xl sm:text-2xl text-slate-900 mb-4 flex items-center gap-3">
                  <CheckCircle2 size={28} className="text-green-700" />
                  正確對策：
                </h4>
                <p className="text-slate-800 text-lg sm:text-xl font-medium leading-relaxed">
                  購買未加工、未醃製的原型肉品。檢查包裝標示，越簡單越好。
                </p>
             </div>
          </div>

          <div className="bg-blue-700 p-6 sm:p-10 rounded-[2rem] shadow-xl text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3">
              <Info size={24} /> 小提示
            </h3>
            <p className="text-blue-50 text-lg sm:text-xl font-medium leading-relaxed">
              如果你在成分表中看到 <strong className="text-white text-xl bg-blue-600 px-2 rounded">磷(PHOS)</strong> 這是最明顯的警訊。但要特別小心「偽裝者」，例如改性澱粉和膨鬆劑，它們沒有寫 PHOS，但也是磷酸鹽的一種。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};