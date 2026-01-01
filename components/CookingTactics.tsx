import React from 'react';
import { Droplets, ChefHat, Timer, Ban } from 'lucide-react';

export const CookingTactics: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900">廚房裡的除磷術</h2>
        <p className="mt-6 text-2xl text-slate-700 font-medium">多一個步驟，磷就少一點。利用「去礦物質」技巧降低風險。</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Method 1: Boiling */}
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow group flex flex-col">
          <div className="h-4 bg-blue-600 w-full"></div>
          <div className="p-8 sm:p-10 flex-grow">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mb-8 text-blue-700 group-hover:scale-110 transition-transform shadow-sm">
              <Droplets size={40} />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">1. 水煮去磷法</h3>
            <p className="text-xl text-slate-700 mb-8 font-medium leading-relaxed">
              磷是水溶性的。這是最有效的居家除磷法。
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-lg mt-0.5 shrink-0">1</span>
                <span className="text-xl text-slate-800 font-medium">將肉類或蔬菜切小塊</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-lg mt-0.5 shrink-0">2</span>
                <span className="text-xl text-slate-800 font-medium">先用水煮或川燙</span>
              </li>
              <li className="flex items-start gap-4 bg-red-50 p-4 rounded-xl -mx-2 border border-red-100">
                <Ban size={28} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-xl text-red-800 font-bold leading-snug">記得將煮過的湯汁倒掉，不要飲用！</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Method 2: Soaking */}
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow group flex flex-col">
          <div className="h-4 bg-teal-600 w-full"></div>
          <div className="p-8 sm:p-10 flex-grow">
            <div className="w-20 h-20 bg-teal-100 rounded-3xl flex items-center justify-center mb-8 text-teal-700 group-hover:scale-110 transition-transform shadow-sm">
              <Timer size={40} />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">2. 浸泡法</h3>
            <p className="text-xl text-slate-700 mb-8 font-medium leading-relaxed">
              適用於烹調前的預處理，特別是豆類或肉類。
            </p>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <p className="text-slate-800 text-xl leading-relaxed font-medium">
                烹調前將食材浸泡在水中一段時間，可以讓部分磷溶出。記得<strong className="text-teal-800 bg-teal-200 px-1 rounded">倒掉浸泡水</strong>後再進行烹調。
              </p>
            </div>
          </div>
        </div>

        {/* Method 3: Home Cooking */}
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow group flex flex-col">
          <div className="h-4 bg-indigo-600 w-full"></div>
          <div className="p-8 sm:p-10 flex-grow">
            <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mb-8 text-indigo-700 group-hover:scale-110 transition-transform shadow-sm">
              <ChefHat size={40} />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">3. 自製勝過外食</h3>
            <p className="text-xl text-slate-700 mb-8 font-medium leading-relaxed">
              控制血磷最強大的武器：親自備餐。
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="w-2 bg-red-300 h-auto rounded"></div>
                 <div>
                    <span className="text-lg font-bold text-red-600 uppercase tracking-wide block mb-1">外食缺點</span>
                    <p className="text-lg text-slate-800 font-medium">為了保存與口感，速食與超商食品幾乎都含有大量磷添加劑。</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-2 bg-green-300 h-auto rounded"></div>
                 <div>
                    <span className="text-lg font-bold text-green-700 uppercase tracking-wide block mb-1">自製優點</span>
                    <p className="text-lg text-slate-800 font-medium">使用原型食材自製便當，完全掌控添加劑攝取。</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};