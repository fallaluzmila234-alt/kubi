import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import kubiAvatar from '../assets/images/kubi_avatar_1779583455467.png';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: '🏠 Inicio' },
    { id: 'scratch-demo', label: '🎮 Demo Scratch' },
    { id: 'mini-game', label: '🍎 Mini Juego Kubi' },
    { id: 'personajes', label: '🐨 Personajes' },
    { id: 'pedagogia', label: '⚙️ Docentes y UX' }
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-emerald-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleClick('inicio')}
            className="flex items-center space-x-2.5 group focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="bg-emerald-500 w-11 h-11 rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden border-2 border-emerald-300">
              <img 
                src={kubiAvatar} 
                alt="Kubi el Koala" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left flex flex-col justify-center">
              <span className="block text-sm sm:text-lg md:text-xl font-bold text-slate-800 tracking-tight leading-snug font-display">
                Una Aventura con Kubi
              </span>
              <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-emerald-600 font-bold font-display leading-tight">
                Videojuego Educativo
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-semibold tracking-wide font-display transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500 text-white shadow-md scale-105'
                      : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            {/* Call To Play Button */}
            <button
              onClick={() => handleClick('scratch-demo')}
              className="ml-4 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold px-5 py-2.5 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all flex items-center space-x-1.5 text-sm font-display"
              id="nav-cta-scratch"
            >
              <Sparkles className="w-4 h-4 text-amber-900 animate-pulse" />
              <span>¡Jugar Ahora!</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-2xl text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none border-2 border-slate-100"
              aria-expanded="false"
              id="mobile-menu-btn"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fadeIn overflow-hidden">
          <div className="px-3 pt-2 pb-4 space-y-1 sm:px-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-2xl text-base font-semibold font-display transition-all ${
                    isActive
                      ? 'bg-emerald-500 text-white font-bold shadow-sm'
                      : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <button
              onClick={() => handleClick('scratch-demo')}
              className="w-full mt-3 bg-amber-400 text-amber-950 font-bold block text-center px-4 py-3 rounded-2xl shadow-sm hover:bg-amber-500 font-display"
              id="mobile-nav-cta"
            >
              🎮 Jugar Demo Scratch 🎉
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
