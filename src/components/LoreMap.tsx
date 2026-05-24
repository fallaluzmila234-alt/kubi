import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Leaf, Utensils, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { soundEffects } from './SoundUtility';

interface LoreTab {
  id: string;
  title: string;
  level: string;
  subtitle: string;
  emoji: string;
  description: string;
  habitat: string;
  mammals: string[];
  keyConcept: string;
  colorClass: string;
  bgHex: string;
}

export default function LoreMap() {
  const [activeTabId, setActiveTabId] = useState<string>('level1');

  const loreTabs: LoreTab[] = [
    {
      id: 'level1',
      title: 'El Claro del Conejo',
      level: 'Nivel 1: Herbívoros 🌿',
      subtitle: 'Búsqueda del Conejo Saltarín',
      emoji: '🐇',
      description: 'Bajo el dosel de flores y hojas del claro forestal, exploramos con Kubi para encontrar al conejo herbívoro de orejas largas. Los niños aprenden a reconocer que se alimenta únicamente de plantas.',
      habitat: 'Claro de bosque',
      mammals: ['🐨 Kubi el Koala', '🐇 Conejo silvestre'],
      keyConcept: 'Los herbívoros se alimentan únicamente de hierbas y plantas del suelo.',
      colorClass: 'emerald',
      bgHex: 'bg-emerald-50 border-emerald-200'
    },
    {
      id: 'level2',
      title: 'El Bosque Espeso',
      level: 'Nivel 2: Herbívoros 🌿',
      subtitle: 'La Ardilla, la Vaca y el Capibara',
      emoji: '🐿️',
      description: 'Guiados por Kubi en el follaje del Bosque Espeso, descubrimos mamíferos herbívoros increíbles de diferentes tamaños como la veloz ardilla 🐿️, la dócil vaca 🐄 del pastizal, o el capibara 🦫 que habita cerca de los riachuelos.',
      habitat: 'Bosque espeso',
      mammals: ['🐨 Kubi el Koala', '🐿️ Ardilla juguetona', '🐄 Vaca dócil', '🦫 Capibara amigable'],
      keyConcept: 'Los herbívoros asimilan nutrientes únicamente de las plantas, frutas o semillas.',
      colorClass: 'sky',
      bgHex: 'bg-sky-50 border-sky-200'
    },
    {
      id: 'level3',
      title: 'Desierto Estilo Safari',
      level: 'Nivel 3: Carnívoros Terrestres 🦁',
      subtitle: 'Cazadores de la Sabana',
      emoji: '🦁',
      description: '¡Nos adentramos en el calor extremo! Un desierto estilo safari con dunas de arena y acacias secas, donde habitan carnívoros terrestres feroces como el imponente León o el veloz y camuflado Jaguar.',
      habitat: 'Desierto estilo safari',
      mammals: ['🦁 León de la sabana', '🐆 Jaguar americano'],
      keyConcept: 'Los carnívoros terrestres son cazadores con garras y colmillos afinados.',
      colorClass: 'rose',
      bgHex: 'bg-rose-50 border-rose-200'
    },
    {
      id: 'level4',
      title: 'El Mar Azul',
      level: 'Nivel 4: Carnívoros Acuáticos 🐳',
      subtitle: 'Gigantes del Océano',
      emoji: '🐳',
      description: '¡Surgemos las olas oceánicas! El mar alberga mamíferos gigantes totalmente adaptados para cazar bajo el agua, tales como la Orca o la magnífica Ballena, alimentándose de peces.',
      habitat: 'El Mar',
      mammals: ['🐳 Orcas cazadoras', '🐋 Ballenas gigantes'],
      keyConcept: 'Los carnívoros acuáticos tienen dietas ricas en peces y calamares.',
      colorClass: 'indigo',
      bgHex: 'bg-indigo-50 border-indigo-200'
    },
    {
      id: 'level5',
      title: 'La Cueva del Oso',
      level: 'Nivel 5: Omnívoros 🐻',
      subtitle: 'Alimentación del Oso Pardo',
      emoji: '🐻',
      description: '¡El gran reto de alimentación! En la Cueva del Oso, ayudamos al Oso Pardo a elegir comida sana: pescado fresco, miel de colmena y manzanas de campo. Debemos evitar el chocolate y dulces refinados.',
      habitat: 'Cueva del Oso',
      mammals: ['🐨 Kubi el Koala', '🐻 Oso Pardo omnívoro'],
      keyConcept: 'Los omnívoros asimilan nutrientes de frutos, miel, raíces o pescados silvestres.',
      colorClass: 'amber',
      bgHex: 'bg-amber-50 border-amber-200'
    }
  ];

  const currentTab = loreTabs.find(t => t.id === activeTabId) || loreTabs[0];

  return (
    <section id="personajes" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-24 h-48 bg-emerald-50 rounded-r-full pointer-events-none opacity-60"></div>
      <div className="absolute bottom-1/4 right-0 w-24 h-48 bg-amber-50 rounded-l-full pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase font-display mb-3 border border-amber-200">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>Universo Narrativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-800 tracking-tight leading-tight">
            🌍 El Lore de Una aventura con Kubi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Acompaña a Kubi a recorrer diferentes hábitats naturales para descubrir la alimentación de sus amigos mamíferos mediante los 5 niveles del mapa didáctico.
          </p>
        </div>

        {/* Story Tab controls (Big responsive custom cards mimicking game layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {loreTabs.map((tab) => {
            const isSelected = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                id={`lore-tab-${tab.id}`}
                onClick={() => {
                  setActiveTabId(tab.id);
                  soundEffects.playSuccess();
                }}
                className={`p-6 rounded-[2.5rem] border-3 text-left transition-all duration-300 transform hover:scale-[1.02] flex items-center space-x-4 cursor-pointer focus:outline-none ${
                  isSelected
                    ? tab.bgHex + ' shadow-lg border-amber-400'
                    : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
                }`}
              >
                <div className="bg-white p-3 rounded-2xl shadow-sm text-3xl">
                  {tab.emoji}
                </div>
                <div>
                  <span className="block text-[10px] tracking-wider uppercase font-extrabold text-slate-400 font-display">
                    {tab.level}
                  </span>
                  <span className="block text-base font-extrabold text-slate-800 font-display mt-0.5">
                    {tab.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Narrative Visual Display (Bento Card Style) */}
        <div className={`${currentTab.bgHex} border-3 rounded-[3.5rem] p-6 sm:p-10 shadow-md transition-all duration-500`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Story illustration placeholder */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center bg-white border rounded-[2.5rem] p-8 text-center shadow-inner relative overflow-hidden min-h-[300px]">
              <span className="text-8xl mb-4 select-none animate-bounce duration-[3s]">{currentTab.emoji}</span>
              <div className="space-y-1">
                <span className="inline-flex items-center space-x-1.5 text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full font-bold font-display">
                  <MapPin className="w-3 h-3" />
                  <span>{currentTab.habitat}</span>
                </span>
                <h4 className="text-lg font-bold font-display text-slate-800 mt-2">{currentTab.title}</h4>
              </div>
              
              {/* Backglow element matching card theme */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 pointer-events-none"></div>
            </div>

            {/* Right details content space */}
            <div className="lg:col-span-8 space-y-6">
              
              <div>
                <span className="text-amber-600 font-bold tracking-wider text-xs uppercase font-display block">
                  {currentTab.level}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-display mt-0.5">
                  {currentTab.subtitle}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentTab.description}
              </p>

              {/* Scientific criteria targets */}
              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/50 space-y-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 font-display">
                  📋 Mamíferos en este Hábitat:
                </span>
                <div className="flex flex-wrap gap-2 pt-1 font-display">
                  {currentTab.mammals.map((mammal, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-800 font-bold text-xs px-3.5 py-1.5 rounded-xl border"
                    >
                      {mammal}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning objectives helper footer */}
              <div className="flex items-center space-x-3 text-slate-700 text-xs sm:text-sm bg-white/30 p-4 rounded-2xl border border-white">
                <Leaf className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  <b>Clave Didáctica:</b> {currentTab.keyConcept}
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
