import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Trophy, RotateCcw, HelpCircle, CheckCircle, Search, Compass, ChevronRight } from 'lucide-react';
import { soundEffects } from './SoundUtility';
import kubiAvatar from '../assets/images/kubi_avatar_1779583455467.png';

interface HiddenAnimal {
  name: string;
  emoji: string;
  tip: string;
  options: { id: string; label: string; hasAnimal: boolean; emojiOnReveal: string }[];
}

export default function KubiGame() {
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [hearts, setHearts] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  
  // Levels 1-3 search state
  const [revealedSpots, setRevealedSpots] = useState<string[]>([]);
  const [levelCompleted, setLevelCompleted] = useState<boolean>(false);

  // Level 4 eating state
  const [osoExpression, setOsoExpression] = useState<'idle' | 'eating' | 'happy' | 'sad'>('idle');
  const [fedCorrectCount, setFedCorrectCount] = useState<number>(0);

  const [balloonText, setBalloonText] = useState<string>(
    '¡Hola! Soy Kuby, bienvenido a esta nueva aventura donde conoceremos a los animales mamíferos. ¡Acompáñame!'
  );

  // Hidden animals configurations for levels 1, 2, 3, 4
  const hiddenLevels: Record<number, HiddenAnimal> = {
    1: {
      name: 'Conejo saltarín 🐇',
      emoji: '🐇',
      tip: '¡Busquemos un animal mamífero herbívoro de orejas largas! El conejo come plantas del suelo del claro forestal.',
      options: [
        { id: '1-1', label: 'Arbusto florido redondo', hasAnimal: false, emojiOnReveal: '🌸' },
        { id: '1-2', label: 'Hierba densa verde', hasAnimal: true, emojiOnReveal: '🐇 (¡Conejo!)' },
        { id: '1-3', label: 'Eucalipto alto', hasAnimal: false, emojiOnReveal: '🌿' },
        { id: '1-4', label: 'Roca gris mohosa', hasAnimal: false, emojiOnReveal: '🐌' }
      ]
    },
    2: {
      name: 'Ardilla, Vaca o Capibara 🐿️🐄🦫',
      emoji: '🐿️',
      tip: '¡Busquemos animales herbívoros en el Bosque Espeso! Puedes encontrar una ardilla, una vaca o una capibara.',
      options: [
        { id: '2-1', label: 'Ramas altas del árbol espeso', hasAnimal: true, emojiOnReveal: '🐿️ (¡Ardilla!)' },
        { id: '2-2', label: 'Hierba alta del pastizal', hasAnimal: true, emojiOnReveal: '🐄 (¡Vaca!)' },
        { id: '2-3', label: 'Follaje denso del bosque', hasAnimal: false, emojiOnReveal: '🍃' },
        { id: '2-4', label: 'Sombra junto al riachuelo', hasAnimal: true, emojiOnReveal: '🦫 (¡Capibara!)' }
      ]
    },
    3: {
      name: 'León o Jaguar salvaje 🦁🐆',
      emoji: '🦁',
      tip: '¡Este es el hábitat del carnívoro terrestre! Busca en el desierto estilo safari para encontrar leones o jaguares escondidos.',
      options: [
        { id: '3-1', label: 'Acacia de copa seca', hasAnimal: true, emojiOnReveal: '🦁 (¡León!)' },
        { id: '3-2', label: 'Roca plana del safari', hasAnimal: false, emojiOnReveal: '🦎' },
        { id: '3-3', label: 'Duna de arena caliente', hasAnimal: true, emojiOnReveal: '🐆 (¡Jaguar!)' },
        { id: '3-4', label: 'Matorral seco con espinas', hasAnimal: false, emojiOnReveal: '🦂' }
      ]
    },
    4: {
      name: 'Orca o Ballena carnívora 🐳🐋',
      emoji: '🐳',
      tip: '¡Este es el mar de los carnívoros acuáticos! Busca en el agua profunda del océano para encontrar ballenas u orcas.',
      options: [
        { id: '4-1', label: 'Fango del mar profundo', hasAnimal: false, emojiOnReveal: '🐙' },
        { id: '4-2', label: 'Aguas azules templadas', hasAnimal: true, emojiOnReveal: '🐳 (¡Orca!)' },
        { id: '4-3', label: 'Arrecife de coral colorido', hasAnimal: false, emojiOnReveal: '🪸' },
        { id: '4-4', label: 'Olas de alta mar azul', hasAnimal: true, emojiOnReveal: '🐋 (¡Ballena!)' }
      ]
    }
  };



  const handleSpotClick = (spotId: string, hasAnimal: boolean) => {
    if (levelCompleted || gameStatus !== 'playing') return;
    if (revealedSpots.includes(spotId)) return;

    const nextRevealed = [...revealedSpots, spotId];
    setRevealedSpots(nextRevealed);

    if (hasAnimal) {
      soundEffects.playSuccess();
      setScore(score + 15);
      setLevelCompleted(true);
      const levelAnimal = hiddenLevels[currentLevel]?.name || 'el animal';
      setBalloonText(`¡Excelente! Encontraste al ${levelAnimal}. ¡Eres un gran explorador! Presiona avanzar.`);
    } else {
      soundEffects.playError();
      const nextHearts = hearts - 1;
      setHearts(nextHearts);
      setBalloonText('¡Oh, ahí no está! Busquemos con cuidado bajo otro escondite.');

      if (nextHearts <= 0) {
        setGameStatus('lost');
        soundEffects.playLose();
        setBalloonText('❌ ¡Te quedaste sin intentos! Regresemos al inicio para explorar de nuevo con Kubi.');
      }
    }
  };

  const handleNextLevel = () => {
    soundEffects.playSuccess();
    const nextLevel = currentLevel + 1;
    setCurrentLevel(nextLevel);
    setRevealedSpots([]);
    setLevelCompleted(false);

    if (nextLevel === 5) {
      setBalloonText('🐻 ¡Llegamos al Nivel 5 final! Esta es la Cueva del Oso en referencia a los omnívoros. Alimenta al Oso Pardo saludablemente.');
    } else {
      const tip = hiddenLevels[nextLevel]?.tip || '';
      setBalloonText(`¡Nivel ${nextLevel}! ${tip}`);
    }
  };

  // Level 5 food feeding logic
  const feedOso = (foodId: string, foodName: string) => {
    if (gameStatus !== 'playing' || osoExpression === 'eating') return;

    setOsoExpression('eating');
    setBalloonText(`El Oso Pardo está masticando un poco de ${foodName}... ¡Ñam, ñam, ñam!`);

    const isCorrect = ['pescado', 'miel', 'manzana'].includes(foodId);

    setTimeout(() => {
      if (isCorrect) {
        soundEffects.playSuccess();
        const nextCorrect = fedCorrectCount + 1;
        setFedCorrectCount(nextCorrect);
        setScore(score + 20);
        setOsoExpression('happy');
        setBalloonText(`¡Delicioso! Al Oso Pardo le encanta comer ${foodName} en su cueva. ¡La miel, el pescado y la manzana son sanos para él!`);

        // Check victory (fed all 3 healthy options)
        if (nextCorrect >= 3) {
          setTimeout(() => {
            setGameStatus('won');
            soundEffects.playWin();
            setBalloonText('🏆 ¡Felicitaciones! Has completado los 5 niveles del juego educativo de Kubi. ¡Eres un súper experto en mamíferos!');
          }, 1500);
        }
      } else {
        soundEffects.playError();
        const nextHearts = hearts - 1;
        setHearts(nextHearts);
        setOsoExpression('sad');
        setBalloonText(`¡Olor desagradable! 🥺 El Oso no puede comer ${foodName}. ¡El chocolate y los dulces le hacen doler la panza en su cueva!`);

        if (nextHearts <= 0) {
          setTimeout(() => {
            setGameStatus('lost');
            soundEffects.playLose();
            setBalloonText('❌ ¡Oh no, te quedaste sin intentos! Presiona reiniciar para reintentar la aventura.');
          }, 1500);
        }
      }
    }, 1200);
  };

  const restartAll = () => {
    setCurrentLevel(1);
    setHearts(3);
    setScore(0);
    setRevealedSpots([]);
    setLevelCompleted(false);
    setOsoExpression('idle');
    setFedCorrectCount(0);
    setGameStatus('playing');
    setBalloonText('¡Hola! Soy Kuby, bienvenido a esta nueva aventura donde conoceremos a los animales mamíferos. ¡Acompáñame!');
    soundEffects.playSuccess();
  };

  return (
    <section id="mini-game" className="py-20 bg-[#f6f6f2] border-y-4 border-emerald-100 relative">
      <div className="absolute top-4 left-4 text-emerald-300 text-3.5xl pointer-events-none select-none">🌳</div>
      <div className="absolute bottom-4 right-4 text-amber-300 text-3.5xl pointer-events-none select-none">🐻</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Dynamic header describing game levels flow */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-emerald-650 font-bold tracking-wider text-xs sm:text-sm uppercase font-display block mb-1">
            🎮 SIMULADOR WEB DE SCRATCH 🧩
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-800 tracking-tight">
            Una Aventura Educativa Interactiva
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            ¡Sigue a Kubi de nivel en nivel! Busca animales escondidos en sus hábitats durante 4 niveles, y ayuda a alimentar al Oso Pardo saludablemente en la Cueva del Oso como reto omnívoro final.
          </p>
        </div>

        {/* Dashboard Box HUD */}
        <div className="bg-white rounded-[3rem] border-4 border-amber-300 p-4 sm:p-8 shadow-xl max-w-4xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-center bg-amber-50/50 rounded-2xl p-4 mb-6 border border-amber-200/50 gap-4">
            
            {/* Level Indicator */}
            <div className="flex items-center space-x-3">
              <span className="bg-emerald-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl font-display uppercase tracking-wider">
                Nivel {currentLevel} de 5
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 font-display">
                {currentLevel === 5 ? '🍔 Alimentación' : '🔍 Explorar Hábitat'}
              </span>
            </div>

            {/* Heart state display info */}
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm font-bold font-display text-slate-700">Intentos disponibles:</span>
              <div className="flex space-x-1" id="hearts-indicator">
                {[1, 2, 3].map((val) => (
                  <Heart
                    key={val}
                    className={`w-6 h-6 transition-transform duration-350 ${
                      val <= hearts 
                        ? 'fill-rose-500 text-rose-500 scale-110 animate-pulse' 
                        : 'text-slate-350 scale-90'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Score points */}
            <div className="flex items-center space-x-4">
              <div className="bg-white px-4 py-1.5 rounded-xl border border-amber-200 flex items-center space-x-2 shadow-inner">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="font-display font-extrabold text-slate-800 text-sm">
                  {score} <span className="text-[10px] text-slate-500 font-normal">Ptos</span>
                </span>
              </div>

              <button
                onClick={restartAll}
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition flex items-center space-x-1 font-display cursor-pointer"
                id="hud-restart"
              >
                <RotateCcw className="w-3" />
                <span>Reiniciar</span>
              </button>
            </div>

          </div>

          {/* Dialog bubble row guided by Kubi the koala explorer */}
          <div className="relative mb-8 bg-sky-50 border-2 border-sky-200 p-4 rounded-3xl text-sm text-slate-755 max-w-2xl mx-auto flex items-center space-x-4">
            <div className="bg-white p-0.5 rounded-full border border-sky-300 w-12 h-12 shadow-sm shrink-0 overflow-hidden flex items-center justify-center">
              <img 
                src={kubiAvatar} 
                alt="Kubi" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 text-slate-700">
              <p className="font-bold text-xs text-sky-800 tracking-wide font-display uppercase">Kubi el Explorador Guía:</p>
              <p className="text-xs sm:text-sm mt-0.5 font-medium leading-relaxed italic pr-12">"{balloonText}"</p>
            </div>
          </div>

          {/* Interactive Screen viewport */}
          <div className="relative overflow-hidden min-h-[380px] bg-slate-50 rounded-[2.5rem] border-2 border-slate-200 p-6 flex flex-col items-center justify-center">
            
            {/* Overlay Covers for game state outcomes */}
            <AnimatePresence>
              {gameStatus === 'won' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-emerald-600/95 z-25 flex flex-col justify-center items-center text-center p-6 text-white"
                >
                  <span className="text-6xl mb-4">🏆🎖️🐨🐻</span>
                  <h3 className="text-3xl font-extrabold font-display">¡Súper Campeón de Mamíferos!</h3>
                  <p className="text-sm text-emerald-100 max-w-md mt-2 mb-8 leading-relaxed">
                    Acompañaste a Kubi a encontrar los animales escondidos y alimentaste al simpático Oso de forma saludable. ¡Has aprendido mucho sobre mamíferos!
                  </p>
                  <button
                    onClick={restartAll}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-lg px-8 py-3 rounded-2xl shadow-md transition transform hover:scale-105 font-display"
                    id="win-restart"
                  >
                    ¡Jugar de Nuevo! 🎉
                  </button>
                </motion.div>
              )}

              {gameStatus === 'lost' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-rose-600/95 z-25 flex flex-col justify-center items-center text-center p-6 text-white"
                >
                  <span className="text-6xl mb-4">💔🌿</span>
                  <h3 className="text-3xl font-extrabold font-display">¡Sigue Explorando!</h3>
                  <p className="text-sm text-rose-100 max-w-sm mt-2 mb-8 leading-relaxed">
                    ¡Aprender es divertido y requiere práctica! Kuby te acompaña en un nuevo intento para encontrar y alimentar a sus amigos.
                  </p>
                  <button
                    onClick={restartAll}
                    className="bg-white text-rose-800 hover:bg-slate-100 font-bold text-lg px-8 py-3 rounded-2xl shadow-md transition transform hover:scale-105 font-display"
                    id="lost-restart"
                  >
                    🔄 Volver a Intentar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SCREEN RENDER DEPENDING ON CURRENT LEVEL */}
            {currentLevel <= 4 ? (
              // LEVELS 1, 2, 3, 4: FIND HIDDEN ANIMALS
              <div className="w-full space-y-6 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4 mb-4">
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-600 font-display block">Misión de Explorador:</span>
                    <h4 className="text-lg font-bold text-slate-800 font-display">Encuentra al {hiddenLevels[currentLevel]?.name}</h4>
                  </div>
                  <div className="bg-emerald-50 text-emerald-800 px-4 py-2 rounded-2xl text-xs font-display flex items-center space-x-1">
                    <Compass className="w-4 h-4 text-emerald-600 animate-spin-slow" />
                    <span><b>Kubi</b> te guía en el bosque</span>
                  </div>
                </div>

                {/* Grid representing forest patches */}
                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {hiddenLevels[currentLevel]?.options.map((option) => {
                    const isRevealed = revealedSpots.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        id={`spot-${option.id}`}
                        onClick={() => handleSpotClick(option.id, option.hasAnimal)}
                        className={`p-6 sm:p-8 rounded-3xl border-2 text-center transition-all duration-300 transform select-none cursor-pointer flex flex-col items-center justify-center space-y-3 relative ${
                          isRevealed
                            ? option.hasAnimal
                              ? 'bg-emerald-100 border-emerald-500 scale-103 shadow-md'
                              : 'bg-slate-200 border-slate-350 opacity-60'
                            : 'bg-emerald-50/50 hover:bg-emerald-50 border-emerald-200 hover:border-emerald-400 hover:shadow-sm'
                        }`}
                      >
                        {/* Spot Visual Asset */}
                        <div className="text-4xl">
                          {isRevealed ? option.emojiOnReveal.split(' ')[0] : '🌳'}
                        </div>
                        <span className="text-xs font-bold text-slate-700 font-display">
                          {isRevealed ? option.emojiOnReveal : option.label}
                        </span>

                        {isRevealed && option.hasAnimal && (
                          <span className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-display">
                            ¡ENCONTRADO!
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Completed advancement button */}
                {levelCompleted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="pt-4 flex justify-center"
                  >
                    <button
                      onClick={handleNextLevel}
                      className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-2xl shadow-md font-display flex items-center space-x-2 scale-105 animate-pulse"
                      id="btn-advance"
                    >
                      <span>Excelente, avanzar al Nivel {currentLevel + 1}</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              // LEVEL 5 (FINAL): FEED THE BEAR (Oso Pardo) WITH EXACTLY 5 FOODS
              <div className="w-full space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4 mb-2">
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-700 font-display block">Nivel 5 final de Scratch:</span>
                    <h4 className="text-lg font-bold text-slate-800 font-display">🐻 Alimenta al Oso Pardo en su Cueva</h4>
                  </div>
                  <div className="bg-amber-50 text-amber-900 px-4 py-2 rounded-2xl text-xs font-display font-medium">
                    Éxitos de alimentación: <b className="text-amber-700 text-sm font-extrabold">{fedCorrectCount} de 3</b>
                  </div>
                </div>

                {/* Central character and food grids */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Bear Visual Cartoon */}
                  <div className="md:col-span-5 flex flex-col items-center bg-amber-50/20 border-2 border-dashed border-amber-200 p-6 rounded-[2.5rem] text-center">
                    
                    {/* SVG Face of Oso */}
                    <div className="w-40 h-40 rounded-full bg-amber-100/50 flex items-center justify-center border-4 border-amber-300 relative overflow-hidden shadow-inner mb-4">
                      
                      {/* Bear face SVG representation */}
                      <svg viewBox="0 0 100 100" className="w-32 h-32">
                        {/* Ears */}
                        <circle cx="22" cy="36" r="11" fill="#78350f" />
                        <circle cx="22" cy="36" r="5" fill="#f59e0b" />
                        <circle cx="78" cy="36" r="11" fill="#78350f" />
                        <circle cx="78" cy="36" r="5" fill="#f59e0b" />
                        {/* Head Face */}
                        <circle cx="50" cy="52" r="30" fill="#92400e" />
                        {/* Snout */}
                        <ellipse cx="50" cy="62" rx="15" ry="11" fill="#f59e0b" />
                        
                        {/* Eyes expressions */}
                        {osoExpression === 'happy' ? (
                          <>
                            <path d="M 28 46 Q 32 40 36 46" stroke="#111827" strokeWidth="3" strokeLinecap="round" fill="none" />
                            <path d="M 64 46 Q 68 40 72 46" stroke="#111827" strokeWidth="3" strokeLinecap="round" fill="none" />
                          </>
                        ) : osoExpression === 'sad' ? (
                          <>
                            <path d="M 28 44 Q 32 50 36 44" stroke="#111827" strokeWidth="3" strokeLinecap="round" fill="none" />
                            <path d="M 64 44 Q 68 50 72 44" stroke="#111827" strokeWidth="3" strokeLinecap="round" fill="none" />
                          </>
                        ) : (
                          <>
                            <circle cx="33" cy="44" r="4" fill="#111827" />
                            <circle cx="67" cy="44" r="4" fill="#111827" />
                          </>
                        )}
                        {/* Nose */}
                        <polygon points="46,58 54,58 50,64" fill="#111827" />

                        {/* Mouth expressions */}
                        {osoExpression === 'eating' ? (
                          /* Open mouth for eating sweets/foods */
                          <circle cx="50" cy="72" r="6" fill="#111827" className="animate-pulse" />
                        ) : osoExpression === 'happy' ? (
                          <path d="M 45 66 Q 50 73 55 66" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        ) : osoExpression === 'sad' ? (
                          <path d="M 45 69 Q 50 64 55 69" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        ) : (
                          <path d="M 46 67 Q 50 69 54 67" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        )}
                      </svg>

                      {/* Chewing effect stars */}
                      {osoExpression === 'eating' && (
                        <span className="absolute top-4 right-4 text-2xl animate-spin text-amber-500">✨</span>
                      )}
                    </div>

                    <h5 className="font-extrabold font-display text-slate-800">Sr. Oso Pardo</h5>
                    <p className="text-[10px] uppercase font-bold text-amber-700 tracking-wider font-display">Especie Omnívoro</p>
                  </div>

                  {/* Exactly 5 Foods Selections Grid */}
                  <div className="md:col-span-7 space-y-4">
                    <p className="text-xs font-bold text-slate-600 font-display">Elige un alimento de los 5 disponibles para arrastrar o hacer clic:</p>
                    
                    <div className="grid grid-cols-2 xs:grid-cols-3 gap-3">
                      {/* Pescado, Miel, Manzana, Chocolate, Dulce */}
                      {[
                        { id: 'pescado', name: 'Pescado', emoji: '🐟', healthy: true },
                        { id: 'miel', name: 'Miel', emoji: '🍯', healthy: true },
                        { id: 'manzana', name: 'Manzana', emoji: '🍎', healthy: true },
                        { id: 'chocolate', name: 'Chocolate', emoji: '🍫', healthy: false },
                        { id: 'dulce', name: 'Dulce', emoji: '🍬', healthy: false }
                      ].map((food) => (
                        <button
                          key={food.id}
                          id={`food-${food.id}`}
                          onClick={() => feedOso(food.id, food.name)}
                          disabled={gameStatus !== 'playing' || osoExpression === 'eating'}
                          className="bg-white hover:bg-amber-50 p-4 rounded-2xl border-2 border-slate-200 hover:border-amber-400 flex flex-col items-center justify-center transition-transform hover:scale-[1.04] disabled:opacity-50 select-none cursor-pointer"
                        >
                          <span className="text-4xl leading-none">{food.emoji}</span>
                          <span className="block text-xs font-black text-slate-800 font-display mt-2">
                            {food.name}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">
                            {food.healthy ? 'Saludable' : 'Peligroso'}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Pediatric warning box info */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 leading-relaxed">
                      💡 <b>Ayuda de Kubi:</b> El Oso Pardo digiere alimentos de origen natural silvestre (Pescado 🐟, Miel 🍯, Manzana 🍎). No debe comer golosinas procesadas de humanos como <b>Chocolate 🍫</b> ni <b>Dulce 🍬</b>.
                    </div>
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
