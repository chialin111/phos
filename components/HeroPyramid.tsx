import React, { useState } from 'react';
import { FunnelChart, Funnel, LabelList, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { ArrowDown, MousePointerClick, AlertCircle, CheckCircle2, HelpCircle, ChevronRight } from 'lucide-react';

const data = [
  {
    value: 100,
    name: '食品添加劑 (無機磷)',
    fill: '#dc2626', // Red
    absorption: '≈ 100%',
    risk: '高風險',
    description: '這是最危險的磷！存在於加工食品中的磷添加劑，屬於「無機磷」，腸道幾乎會全數吸收，對腎臟負擔極大。',
    examples: '汽水、加工肉品 (香腸/火腿)、泡麵、起司片',
    theme: 'red'
  },
  {
    value: 70,
    name: '動物性食物',
    fill: '#d97706', // Orange
    absorption: '60-80%',
    risk: '中風險',
    description: '天然存在於肉類中的磷。雖然會被吸收，但因為與蛋白質結合，吸收率低於加工食品。適量攝取優質蛋白質是必要的。',
    examples: '豬肉、雞肉、雞蛋、魚類、鮮奶',
    theme: 'orange'
  },
  {
    value: 40,
    name: '植物性食物',
    fill: '#16a34a', // Green
    absorption: '< 50%',
    risk: '低風險',
    description: '最安全的來源！植物中的磷大部分與「植酸」結合，人體缺乏分解植酸的酵素，因此實際吸收比例最低。',
    examples: '豆腐、豆漿、堅果、燕麥、糙米',
    theme: 'green'
  },
];

export const HeroPyramid: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeData = activeIndex !== null ? data[activeIndex] : data[0];

  const handleInteraction = (_: any, index: number) => {
    setActiveIndex(index);
    // On Mobile: smooth scroll to details card so user sees the change immediately
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const details = document.getElementById('pyramid-details');
        if (details) {
          details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 50);
    }
  };

  // Helper to generate dynamic styles based on the active data's theme
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'red':
        return {
          containerBg: 'bg-red-50',
          borderColor: 'border-red-500',
          titleColor: 'text-red-800',
          badgeBg: 'bg-red-600',
          numberColor: 'text-red-700',
          exampleBg: 'bg-red-100',
          exampleBorder: 'border-red-200',
          icon: <AlertCircle size={32} className="text-red-600" />,
          action: { id: 'shopping', text: '如何分辨添加劑？看超市指南' }
        };
      case 'orange':
        return {
          containerBg: 'bg-orange-50',
          borderColor: 'border-orange-500',
          titleColor: 'text-orange-800',
          badgeBg: 'bg-orange-600',
          numberColor: 'text-orange-700',
          exampleBg: 'bg-orange-100',
          exampleBorder: 'border-orange-200',
          icon: <HelpCircle size={32} className="text-orange-600" />,
          action: { id: 'cooking', text: '肉類怎麼煮？看烹調除磷' }
        };
      case 'green':
        return {
          containerBg: 'bg-green-50',
          borderColor: 'border-green-600',
          titleColor: 'text-green-800',
          badgeBg: 'bg-green-600',
          numberColor: 'text-green-700',
          exampleBg: 'bg-green-100',
          exampleBorder: 'border-green-200',
          icon: <CheckCircle2 size={32} className="text-green-600" />,
          action: { id: 'traffic', text: '查看完整食物紅綠燈' }
        };
      default:
        return {
          containerBg: 'bg-slate-50',
          borderColor: 'border-slate-400',
          titleColor: 'text-slate-800',
          badgeBg: 'bg-slate-600',
          numberColor: 'text-slate-700',
          exampleBg: 'bg-slate-200',
          exampleBorder: 'border-slate-300',
          icon: <ArrowDown size={32} />,
          action: { id: 'shopping', text: '前往指南' }
        };
    }
  };

  const styles = getThemeStyles(activeData.theme);

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-lg font-bold mb-6 animate-fade-in-up border border-blue-200 shadow-sm">
            2025 ASN 腎臟健康指引重點
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            不是所有磷都一樣壞！
          </h1>
          <p className="text-2xl sm:text-3xl text-slate-800 max-w-4xl mx-auto font-medium leading-relaxed">
            別再只盯著豆類與堅果，真正的敵人是
            <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-lg mx-2 border-b-4 border-red-300 transform -rotate-1">食品添加劑</span>
          </p>
          <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            點擊下方金字塔，了解為什麼「來源」決定了身體的吸收程度。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Interactive Chart Area */}
          <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-2xl border-2 border-slate-100 relative min-h-[500px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-2 absolute top-8 w-full left-0 z-10 pointer-events-none">
              磷吸收率金字塔 
            </h3>
            <p className="text-center text-slate-500 absolute top-16 w-full left-0 z-10 text-lg flex items-center justify-center gap-2 animate-pulse">
               <MousePointerClick size={24} /> 點擊色塊查看詳情
            </p>
            
            <div className="flex-grow h-[400px] lg:h-auto mt-12">
              <ResponsiveContainer width="100%" height="100%">
                <FunnelChart>
                  <Tooltip cursor={{ fill: 'transparent' }} content={() => null} />
                  <Funnel
                    data={data}
                    dataKey="value"
                    isAnimationActive={false}
                    onClick={handleInteraction}
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    cursor="pointer"
                  >
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.fill} 
                        stroke={activeIndex === index ? '#1e293b' : 'none'}
                        strokeWidth={5}
                        className="transition-all duration-300"
                      />
                    ))}
                    <LabelList 
                      position="center" 
                      fill="#fff" 
                      stroke="none" 
                      dataKey="absorption" 
                      className="font-black text-2xl sm:text-4xl drop-shadow-lg pointer-events-none" 
                    />
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Info Panel - Typographically Optimized */}
          <div className="flex flex-col h-full">
            <div 
              id="pyramid-details"
              className={`flex-1 p-8 sm:p-12 rounded-[2.5rem] transition-all duration-500 border-l-[16px] shadow-xl flex flex-col justify-between ${styles.containerBg} ${styles.borderColor}`}
            >
               
               {/* Header Section */}
               <div className="border-b border-black/5 pb-6 mb-6">
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className={`text-3xl sm:text-4xl font-extrabold ${styles.titleColor} tracking-wide`}>
                      {activeData.name}
                    </h2>
                    <span className={`self-start sm:self-center px-6 py-2 rounded-full text-white text-xl font-bold shadow-md tracking-wide ${styles.badgeBg}`}>
                      {activeData.risk}
                    </span>
                 </div>
               </div>
               
               {/* Metric Section */}
               <div className="flex flex-col sm:flex-row items-baseline gap-2 mb-6">
                 <span className={`text-7xl sm:text-8xl font-black ${styles.numberColor} tracking-tighter leading-none`}>
                   {activeData.absorption}
                 </span>
                 <span className="text-2xl font-bold text-slate-600">人體吸收率</span>
               </div>

               {/* Description */}
               <p className="text-2xl sm:text-3xl text-slate-800 mb-10 leading-loose font-medium flex-grow">
                 {activeData.description}
               </p>

               {/* Examples Box */}
               <div className={`p-6 rounded-2xl border-2 ${styles.exampleBg} ${styles.exampleBorder}`}>
                 <h4 className={`text-xl font-bold mb-3 flex items-center gap-3 ${styles.titleColor}`}>
                   {styles.icon}
                   常見食物來源：
                 </h4>
                 <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-relaxed">
                   {activeData.examples}
                 </p>
               </div>
            </div>

            <div className="mt-8 text-center lg:text-right">
              <button 
                onClick={() => document.getElementById(styles.action.id)?.scrollIntoView({behavior: 'smooth'})}
                className="inline-flex items-center gap-3 text-slate-400 hover:text-blue-600 font-bold text-lg transition-colors group px-4 py-2"
              >
                {styles.action.text}
                <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};