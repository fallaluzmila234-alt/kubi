import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Volume2, Sparkles, Footprints, ShieldAlert } from 'lucide-react';
import { soundEffects } from './SoundUtility';
import kubiAvatar from '../assets/images/kubi_avatar_1779583455467.png';

export default function Hero() {
  return (
    <section id="inicio" className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-emerald-50 via-warm-gray-50 to-white">
      {/* Decorative background vectors representing leaves */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-20 text-4xl animate-bounce duration-[4s]">🌿</div>
      <div className="absolute top-20 right-20 pointer-events-none opacity-20 text-4xl animate-bounce duration-[5s]">🍂</div>
      <div className="absolute bottom-10 left-1/3 pointer-events-none opacity-10 text-3xl animate-pulse">🌱</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main textual column on the left */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase font-display border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" />
              <span>Estimulación Infantil en Scratch</span>
            </div>

            {/* Playfully large display title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight font-display leading-tight">
              Una aventura con <span className="text-emerald-500 relative inline-block">
                Kubi
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-amber-300 rounded-full"></span>
              </span>
            </h1>

            {/* Subtext explanation */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              ¡Acompaña a Kubi, un pequeño koala explorador, mientras recorre maravillosos ecosistemas descubriendo mamíferos herbívoros, carnívoros y omnívoros mediante retos integrados diseñados para niños de <span className="font-bold underline decoration-amber-400">2 a 5 años</span>!
            </p>

            {/* CTA panel */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={() => {
                  const demo = document.getElementById('scratch-demo');
                  if (demo) demo.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-4 rounded-3xl shadow-lg hover:shadow-emerald-200 hover:scale-105 transition-all flex items-center justify-center space-x-2 font-display cursor-pointer"
                id="hero-play-btn"
              >
                <span>🎮 Jugar Demo Scratch</span>
              </button>
            </div>

            {/* Bullet points summary of the educational combining criteria */}
            <div className="pt-6 border-t font-display border-slate-100 grid grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-slate-700 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>🎨 Colores llamativos y alegres</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>🦖 Retos de exploración</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>🍎 Alimentación interactiva</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>🔊 Efectos de sonido infantiles</span>
              </div>
            </div>

          </div>

          {/* Graphical column on the right (Animated 2D Mascot Card) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white p-6 sm:p-8 rounded-[3rem] border-4 border-amber-300 shadow-xl max-w-sm w-full text-center"
            >
              {/* Floating icon */}
              <div className="absolute -top-6 -right-6 bg-amber-400 text-amber-950 px-4 py-1.5 rounded-2xl text-xs font-bold font-display rotate-12 shadow-md">
                ¡Conoce a Kubi! ⭐
              </div>

              {/* High-Fidelity Loyal Kubi Image Illustration */}
              <div className="w-48 h-48 rounded-full mx-auto relative mb-6 border-4 border-emerald-400 overflow-hidden shadow-lg group bg-slate-50 flex items-center justify-center">
                <img 
                  src={kubiAvatar} 
                  alt="Kubi el Koala"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 font-display">Kubi el Koala</h3>
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide font-display">Guía y Amigo de los Niños</p>
              
              <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-slate-700 text-xs text-left space-y-2">
                <p className="italic">"¡Hola! Mi objetivo es que aprender sobre los mamíferos sea súper divertido y lleno de sorpresas alegres para ti."</p>
                <div className="flex justify-between items-center text-[10px] font-bold text-amber-800 font-display pt-1">
                  <span>HÁBITAT: Bosque Scratch</span>
                  <span>PREFERENCIA: Plantas 🌿</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
