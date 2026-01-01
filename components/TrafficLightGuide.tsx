import React, { useState } from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle } from 'lucide-react';

type Level = 'red' | 'yellow' | 'green';

const foodData = {
  red: {
    title: '紅燈區：高度加工',
    subtitle: '吸收率 ≈ 100% | 建議嚴格限制',
    icon: <AlertOctagon size={40} className="text-white" />,
    color: 'bg-red-600',
    lightColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-800',
    items: [
      { category: '加工肉品', examples: '香腸、培根、火腿、熱狗', reason: '為了保色和防腐' },
      { category: '包裝烘焙品', examples: '鬆餅粉、比司吉、蛋糕', reason: '使用了含磷的膨鬆劑' },
      { category: '即食食品', examples: '冷凍比薩、微波餐盒、泡麵', reason: '大量添加劑' },
      { category: '含糖飲料', examples: '深色汽水、瓶裝奶茶', reason: '磷酸吸收率極高' },
      { category: '零食', examples: '加味薯片、加工起司', reason: '風味劑與防腐劑' },
    ]
  },
  yellow: {
    title: '黃燈區：加工佐料',
    subtitle: '可以用，但要適量',
    icon: <AlertTriangle size={40} className="text-white" />,
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-800',
    items: [
      { category: '調味料', examples: '某些醬料包、高湯塊', reason: '可能含有增味劑' },
      { category: '建議對策', examples: '使用天然辛香料', reason: '取代現成醬料' },
    ]
  },
  green: {
    title: '綠燈區：原型食物',
    subtitle: '吸收率 < 50% | 飲食的主力',
    icon: <CheckCircle size={40} className="text-white" />,
    color: 'bg-green-600',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-800',
    items: [
      { category: '蔬果', examples: '新鮮蔬菜與水果', reason: '天然健康' },
      { category: '肉類', examples: '新鮮的肉類、家禽與魚類', reason: '請確認非注脂肉' },
      { category: '主食', examples: '雞蛋、米飯、燕麥', reason: '未加工調味' },
      { category: '豆類', examples: '乾燥的豆類', reason: '需自行烹調' },
    ]
  }
};

export const TrafficLightGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Level>('red');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">避雷紅綠燈</h2>
        <p className="mt-4 sm:mt-6 text-xl sm:text-2xl text-slate-700 font-medium">哪些食物藏了最多添加劑？根據 2025 指引為您分級。</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-start">
        
        {/* ================= MOBILE CONTROLS (Horizontal) ================= */}
        <div className="flex md:hidden w-full gap-2 p-1.5 bg-slate-200 rounded-2xl overflow-hidden">
          {(['red', 'yellow', 'green'] as Level[]).map((level) => (
             <button
               key={level}
               onClick={() => setActiveTab(level)}
               className={`flex-1 py-3 px-2 rounded-xl flex items-center justify-center gap-2 transition-all font-bold text-lg ${
                 activeTab === level 
                   ? 'bg-white shadow-md scale-100' 
                   : 'text-slate-500 opacity-70 hover:opacity-100'
               }`}
             >
                <div className={`w-3 h-3 rounded-full ${level === 'red' ? 'bg-red-500' : level === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                {level === 'red' ? '紅燈區' : level === 'yellow' ? '黃燈區' : '綠燈區'}
             </button>
          ))}
        </div>

        {/* ================= DESKTOP CONTROLS (Vertical Traffic Light) ================= */}
        <div className="hidden md:flex flex-col gap-6 mx-auto bg-slate-900 p-6 rounded-[3rem] shadow-2xl sticky top-24">
          {(['red', 'yellow', 'green'] as Level[]).map((level) => (
            <button
              key={level}
              onClick={() => setActiveTab(level)}
              className={`w-32 h-32 rounded-full transition-all duration-300 transform border-[6px] border-slate-700 flex items-center justify-center relative ${
                activeTab === level 
                  ? `${foodData[level].color} scale-110 shadow-[0_0_30px_rgba(255,255,255,0.4)] z-10 border-white` 
                  : 'bg-slate-700 opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <div className={activeTab === level ? 'animate-pulse' : ''}>
                 {level === 'red' && <AlertOctagon size={48} className="text-white" />}
                 {level === 'yellow' && <AlertTriangle size={48} className="text-white" />}
                 {level === 'green' && <CheckCircle size={48} className="text-white" />}
              </div>
            </button>
          ))}
        </div>

        {/* ================= CONTENT DISPLAY ================= */}
        <div className="flex-1 w-full">
           <div className={`h-full p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border-4 transition-all duration-500 shadow-xl ${foodData[activeTab].lightColor} ${foodData[activeTab].borderColor}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 border-b border-black/5 pb-6">
                 <div className={`p-4 sm:p-6 rounded-3xl shadow-lg ${foodData[activeTab].color}`}>
                    {foodData[activeTab].icon}
                 </div>
                 <div>
                    <h3 className={`text-2xl sm:text-4xl font-extrabold mb-1 sm:mb-2 ${foodData[activeTab].textColor}`}>{foodData[activeTab].title}</h3>
                    <p className="text-lg sm:text-2xl text-slate-800 font-bold">{foodData[activeTab].subtitle}</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                 {foodData[activeTab].items.map((item, idx) => (
                   <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border-l-8 border-slate-200 hover:border-blue-400 transition-colors">
                      <h4 className="font-extrabold text-xl sm:text-2xl text-slate-900 mb-2">{item.category}</h4>
                      <p className="text-slate-700 text-lg sm:text-xl mb-3 font-medium">{item.examples}</p>
                      <span className="inline-block px-3 py-1.5 bg-slate-100 text-slate-700 text-base sm:text-lg font-bold rounded-lg border border-slate-200">
                        💡 {item.reason}
                      </span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};