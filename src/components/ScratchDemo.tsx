import React from 'react';
import { Compass, Sparkles, Navigation, Shield, MousePointerClick, RefreshCw, ExternalLink } from 'lucide-react';

export default function ScratchDemo() {
  const scratchProjectId = '1323995618';
  const embedUrl = `https://scratch.mit.edu/projects/${scratchProjectId}/embed`;
  const originalUrl = `https://scratch.mit.edu/projects/${scratchProjectId}`;

  return (
    <section id="scratch-demo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative stars / bubbles representing gaming vibe */}
      <div className="absolute top-12 right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 left-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase font-display mb-3 border border-emerald-500/30">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>Sandbox Interactivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white">
            🎮 Demo Jugable en Scratch
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300">
            Experimenta el prototipo educativo original desde el navegador. Completa las actividades buscando a los animales escondidos y alimentando al Oso Pardo.
          </p>
        </div>

        {/* Dynamic layout responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Iframe Column */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-slate-800/80 rounded-[2.5rem] border-3 border-slate-700 p-3 sm:p-5 shadow-2xl relative min-h-[400px] sm:min-h-[500px]">
            <div className="flex justify-between items-center px-4 pb-3 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-slate-400 font-mono ml-2">scratch.mit.edu/projects/{scratchProjectId}</span>
              </div>
              <a
                href={originalUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 hover:underline font-semibold font-display"
                id="original-scratch-link"
              >
                <span>Ver en Scratch</span>
                <ExternalLink className="w-3" />
              </a>
            </div>

            {/* Embedded Screen */}
            <div className="flex-1 my-4 bg-black rounded-2xl relative overflow-hidden flex items-center justify-center min-h-[280px] sm:min-h-[380px]">
              <iframe
                id="scratch-iframe"
                src={embedUrl}
                width="485"
                height="402"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                className="w-full h-full absolute inset-0 rounded-2xl"
                title="Una aventura con Kubi - Scratch game player"
              />
            </div>

            {/* Support info below game frame */}
            <div className="text-center sm:text-left px-4 pt-2 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400">
              <span>💡 Presiona la <b>Banderita Verde 🟢</b> para iniciar la simulación.</span>
              <a 
                href={originalUrl} 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-3 py-1.5 rounded-xl transition duration-150 flex items-center space-x-1 font-display"
                id="embed-action-fallback"
              >
                <span>¡Pantalla Completa!</span>
              </a>
            </div>
          </div>

          {/* Instructions Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Gameplay Rules */}
            <div className="bg-slate-800/60 rounded-[2rem] border-2 border-slate-700/80 p-6 flex-1 space-y-4">
              <h3 className="text-xl font-bold font-display text-amber-300 flex items-center space-x-2">
                <Compass className="w-5 h-5" />
                <span>¿Cómo se juega?</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                El juego combina exploración, sonidos y lógica interactiva adaptada para niños hiperactivos de educación inicial.
              </p>

              {/* Steps list */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 bg-slate-900/40 p-3 rounded-2xl border border-slate-700/45">
                  <div className="bg-emerald-500 text-slate-950 p-2 rounded-xl text-lg flex items-center justify-center shrink-0 w-8 h-8 font-bold">
                    🔍
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-display text-white">1. Explorar y Buscar</h4>
                    <p className="text-xs text-slate-400 mt-1">Los niños deben hacer clic y buscar los mamíferos ocultos en el paisaje natural de Scratch.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-900/40 p-3 rounded-2xl border border-slate-700/45">
                  <div className="bg-amber-400 text-slate-950 p-2 rounded-xl text-lg flex items-center justify-center shrink-0 w-8 h-8 font-bold">
                    🍎
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-display text-white">2. Alimentar al Oso</h4>
                    <p className="text-xs text-slate-400 mt-1">En el nivel omnívoro, arrastra los alimentos deliciosos (frutas, peces o miel) hacia su gran boca.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-900/40 p-3 rounded-2xl border border-slate-700/45">
                  <div className="bg-purple-500 text-slate-950 p-2 rounded-xl text-large flex items-center justify-center shrink-0 w-8 h-8 font-bold">
                    🎯
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-display text-white">3. Sistema de Retos</h4>
                    <p className="text-xs text-slate-400 mt-1">Vigila el contador de intentos limitados y avanza con las flechas de navegación grandes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scratch mechanics box */}
            <div className="bg-emerald-950/40 rounded-[2rem] border-2 border-emerald-800/50 p-6 space-y-3">
              <h4 className="text-normal font-bold font-display text-emerald-300 flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Mecánicas del Prototipo</span>
              </h4>
              <ul className="text-xs text-emerald-100/80 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Variables de intento asociadas al estado de victoria/caída.</li>
                <li>Mecánicas de arrastre y colisión nativas de Scratch.</li>
                <li>Garantía de navegación con botones gigantes ideales para dedos pequeños en tablets.</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
