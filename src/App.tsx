import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScratchDemo from './components/ScratchDemo';
import KubiGame from './components/KubiGame';
import LoreMap from './components/LoreMap';
import UXDeveloperHub from './components/UXDeveloperHub';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Simple scroll spy logic to update the current section active in the Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'scratch-demo', 'mini-game', 'personajes', 'pedagogia'];
      const scrollPosition = window.scrollY + 250; // buffer value

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfbf7] text-slate-800 flex flex-col antialiased selection:bg-emerald-100 selection:text-emerald-950">
      
      {/* Top Notification banner */}
      <div className="bg-amber-400 text-amber-950 text-xs sm:text-sm font-bold text-center py-2 px-4 shadow-inner flex items-center justify-center space-x-2 font-display">
        <span>🎉 ¡Explora el reino de los mamíferos con nosotros! 🐨</span>
        <button 
          onClick={() => {
            const demo = document.getElementById('scratch-demo');
            if (demo) demo.scrollIntoView({ behavior: 'smooth' });
          }}
          className="underline hover:text-amber-900 transition ml-2 font-extrabold cursor-pointer"
        >
          ¡Probar demo en Scratch gratis!
        </button>
      </div>

      {/* Main Navigation */}
      <Navbar onNavigate={setActiveSection} activeSection={activeSection} />

      {/* Main Container */}
      <main className="flex-1">
        {/* Intro Hero with Kubi speaking */}
        <Hero />

        {/* Playable Scratch iframe Section */}
        <ScratchDemo />

        {/* Playable nutrition React puzzle simulator */}
        <KubiGame />

        {/* Narrative Lore explorer zone */}
        <LoreMap />

        {/* Manual de desarrollo, pedagogías y normas APA 7 Hub */}
        <UXDeveloperHub />
      </main>

      {/* Small informative clean footer */}
      <footer className="bg-slate-900 text-slate-400 border-t-4 border-emerald-500 py-12 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl" role="img" aria-label="Koala emoji">🐨</span>
            <span className="font-bold text-white text-base font-display">Una aventura con Kubi</span>
          </div>
          <p className="max-w-md mx-auto text-[11px] leading-relaxed">
            Plataforma web oficial del videojuego educativo para preescolar. Diseñado con amor para guiar la curiosidad natural sobre la alimentación mamífera.
          </p>
          <div className="flex justify-center space-x-4 text-slate-500 font-medium font-display font-semibold">
            <span>Scratch Base Project © 2026</span>
            <span>•</span>
            <span>Estándares UX/UI Tempranos</span>
            <span>•</span>
            <span>Citas APA 7</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
