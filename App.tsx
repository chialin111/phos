import React, { useState, useEffect } from 'react';
import { HeroPyramid } from './components/HeroPyramid';
import { ShoppingGuide } from './components/ShoppingGuide';
import { TrafficLightGuide } from './components/TrafficLightGuide';
import { CookingTactics } from './components/CookingTactics';
import { Footer } from './components/Footer';
import { Home, Search, AlertOctagon, ChefHat } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Detect active section on scroll for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'shopping', 'traffic', 'cooking'];
      const scrollPosition = window.scrollY + 300; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Adjust offset based on desktop (top header) vs mobile (bottom header)
      const offset = window.innerWidth >= 768 ? 80 : 0; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-medium pb-24 md:pb-0">
      {/* ================= DESKTOP NAVIGATION (Hidden on Mobile) ================= */}
      <nav className="hidden md:block bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-sm">P</div>
              <span className="font-extrabold text-2xl text-slate-900 tracking-tight">控磷新革命</span>
            </div>
            
            <div className="flex space-x-8">
              {[
                { id: 'hero', label: '核心觀念' },
                { id: 'shopping', label: '超市指南' },
                { id: 'traffic', label: '避雷紅綠燈' },
                { id: 'cooking', label: '烹調除磷' },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`text-lg font-bold transition-colors py-2 border-b-2 ${
                    activeSection === item.id 
                      ? 'text-blue-700 border-blue-700' 
                      : 'text-slate-600 border-transparent hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE TOP BAR (Logo Only) ================= */}
      <div className="md:hidden bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-sm border-b border-slate-200 py-4 px-4 flex justify-center items-center">
          <div className="flex items-center gap-2" onClick={() => scrollToSection('hero')}>
             <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white text-lg font-bold">P</div>
             <span className="font-extrabold text-xl text-slate-900">控磷新革命</span>
          </div>
      </div>

      <main className="flex-grow">
        <section id="hero">
          <HeroPyramid />
        </section>

        <section id="shopping" className="py-12 md:py-24 bg-slate-50">
          <ShoppingGuide />
        </section>

        <section id="traffic" className="py-12 md:py-24 bg-white">
          <TrafficLightGuide />
        </section>

        <section id="cooking" className="py-12 md:py-24 bg-slate-100">
          <CookingTactics />
        </section>
      </main>

      <Footer />

      {/* ================= MOBILE BOTTOM NAVIGATION (Hidden on Desktop) ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 px-6 pb-safe pt-2">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`flex flex-col items-center gap-1 w-16 ${activeSection === 'hero' ? 'text-blue-700' : 'text-slate-400'}`}
          >
            <Home size={24} strokeWidth={activeSection === 'hero' ? 2.5 : 2} />
            <span className="text-[10px] font-bold">核心</span>
          </button>

          <button 
            onClick={() => scrollToSection('shopping')}
            className={`flex flex-col items-center gap-1 w-16 ${activeSection === 'shopping' ? 'text-blue-700' : 'text-slate-400'}`}
          >
            <Search size={24} strokeWidth={activeSection === 'shopping' ? 2.5 : 2} />
            <span className="text-[10px] font-bold">指南</span>
          </button>

          <button 
            onClick={() => scrollToSection('traffic')}
            className={`flex flex-col items-center gap-1 w-16 ${activeSection === 'traffic' ? 'text-blue-700' : 'text-slate-400'}`}
          >
            <AlertOctagon size={24} strokeWidth={activeSection === 'traffic' ? 2.5 : 2} />
            <span className="text-[10px] font-bold">紅綠燈</span>
          </button>

          <button 
            onClick={() => scrollToSection('cooking')}
            className={`flex flex-col items-center gap-1 w-16 ${activeSection === 'cooking' ? 'text-blue-700' : 'text-slate-400'}`}
          >
            <ChefHat size={24} strokeWidth={activeSection === 'cooking' ? 2.5 : 2} />
            <span className="text-[10px] font-bold">烹調</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;