import React from 'react';
import { BookOpen, Award, CheckCircle, Code, ShieldCheck, HeartHandshake, Eye, BookMarked } from 'lucide-react';

export default function UXDeveloperHub() {
  const credits = [
    { role: 'Diseño General & Concepto', value: 'Diseño del videojuego interactivo con Kubi' },
    { role: 'Desarrollo Técnico', value: 'Programación visual por bloques en Scratch' },
    { role: 'Arte de Personajes', value: 'Kubi Koala, Oso Pardo e Ilustraciones vectoriales' },
    { role: 'Edición de Audio', value: 'Voz sintética, dings de feedback y alertas sonoras' },
    { role: 'Diseño de Escenarios', value: 'Claro de Bosque, Bosque Espeso, Desierto Estilo Safari, El Mar Azul y Cueva del Oso' }
  ];

  const references = [
    {
      author: 'Scratch Foundation',
      year: '2024',
      title: 'Scratch: Programming Language for Kids',
      link: 'https://scratch.mit.edu/',
      source: 'Official block-based educational development framework.'
    },
    {
      author: 'Udemy Academic Program',
      year: '2025',
      title: 'Principios Básicos de diseño UX/UI en plataformas de juego infantil',
      link: '#',
      source: 'Material pedagógico de soporte para la estructuración de interfaces de respuesta inmediata.'
    }
  ];

  return (
    <section id="pedagogia" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold tracking-wider text-xs sm:text-sm uppercase font-display block mb-1">
            Manual Pedagógico y Técnico
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-800 tracking-tight">
            ⚙️ Hub para Padres, Docentes y Evaluadores
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Explora la justificación pedagógica, los principios de desarrollo UX/UI implantados y las referencias metodológicas del proyecto Scratch.
          </p>
        </div>

        {/* Grid Container split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: UX/UI Principles + Development metrics */}
          <div className="space-y-8">
            
            {/* UX/UI Principles */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-850 flex items-center space-x-2 border-b pb-4 border-slate-100">
                <Eye className="w-5 h-5 text-emerald-500" />
                <span>Diseño UX/UI Infantil (2 a 5 años)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* UX */}
                <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/80">
                  <span className="text-xs uppercase font-extrabold text-emerald-700 tracking-widest font-display">
                    UX (Experiencia de Usuario)
                  </span>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    Centrado en la reducción de la frustración infantil a través de interacciones sencillas:
                  </p>
                  <ul className="text-xs text-slate-700 font-medium space-y-1.5 list-disc pl-4 mt-2">
                    <li>Facilidad de uso inmersiva</li>
                    <li>Navegación secuencial simple</li>
                    <li>Interacciones de arrastre intuitivo</li>
                    <li>Retroalimentación sonora inmediata</li>
                  </ul>
                </div>

                {/* UI */}
                <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100/80">
                  <span className="text-xs uppercase font-extrabold text-amber-700 tracking-widest font-display">
                    UI (Interfaz de Usuario)
                  </span>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    Estructuración visual adaptada a capacidades motrices previas:
                  </p>
                  <ul className="text-xs text-slate-700 font-medium space-y-1.5 list-disc pl-4 mt-2">
                    <li>Colores alegres de alta recordación</li>
                    <li>Botones sobredimensionados</li>
                    <li>Mascotas simpáticas acompañantes</li>
                    <li>Escenarios despejados sin ruido visual</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Development Pipeline (Proceso de Desarrollo) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-850 flex items-center space-x-2 border-b pb-4 border-slate-100">
                <Code className="w-5 h-5 text-emerald-500" />
                <span>Proceso de Desarrollo del Videojuego</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Durante el desarrollo del videojuego educativo en Scratch, se iteró constantemente sobre las mecánicas y código matemático de colisión para asentar las bases pedagógicas del aprendizaje mamífero:
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Programación Visual en Scratch', desc: 'Despliegue de scripts para lógica de arrastrar alimentos (Drag and Drop) y colisiones asociadas a la boca del oso.' },
                  { title: 'Variables de Control e Intentos', desc: 'Implementación del límite de 3 vidas/intentos y suma de puntaje dinámico en tiempo de juego.' },
                  { title: 'Diseño e Integración Audiovisual', desc: 'Alineación de escenarios naturales infantiles con sonidos divertidos nativos de Scratch.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold font-display text-slate-800">{step.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Credits + References (APA 7) */}
          <div className="space-y-8">
            
            {/* Credits Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-850 flex items-center space-x-2 border-b pb-4 border-slate-100">
                <Award className="w-5 h-5 text-emerald-500" />
                <span>Créditos del Proyecto</span>
              </h3>
              
              <div className="space-y-3">
                {credits.map((c, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-100 text-xs gap-4">
                    <span className="font-semibold text-slate-500 font-display shrink-0">{c.role}</span>
                    <span className="font-bold text-slate-800 text-right">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* References Section (APA 7) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-850 flex items-center space-x-2 border-b pb-4 border-slate-100">
                <BookMarked className="w-5 h-5 text-emerald-500" />
                <span>Normas APA 7 y Referencias Bibliográficas</span>
              </h3>

              <div className="space-y-4">
                {references.map((ref, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-150 relative text-left">
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      {ref.author} ({ref.year}). <i>{ref.title}</i>.{' '}
                      {ref.link !== '#' && (
                        <a
                          href={ref.link}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="text-emerald-600 hover:underline inline-flex items-center space-x-0.5 font-semibold"
                        >
                          <span>{ref.link}</span>
                        </a>
                      )}
                    </p>
                    <span className="block text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                      Soporte: {ref.source}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>


        {/* Final Message (Mensaje Final) Banner */}
        <div className="mt-16 bg-gradient-to-tr from-emerald-600 to-emerald-700 rounded-[2.5rem] p-8 sm:p-12 text-center text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-56 h-56 bg-white/5 rounded-full pointer-events-none blur-xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-60 h-60 bg-white/5 rounded-full pointer-events-none blur-xl"></div>

          <span className="text-5xl mb-4 block select-none">🏁</span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">¡Gracias por visitar el universo de Kubi!</h3>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Esperamos de todo corazón que esta aventura pedagógica digital permita a niños, familiares y profesores divertirse mientras comprenden la rica biodiversidad animal del mundo mamífero. ¡Nos vemos en el bosque!
          </p>
          <div className="mt-6 flex justify-center space-x-1.5 text-xs text-emerald-250 font-bold tracking-widest font-display uppercase">
            <span>Explora</span>
            <span>•</span>
            <span>Aprende</span>
            <span>•</span>
            <span>Juega Scratch</span>
          </div>
        </div>

      </div>
    </section>
  );
}
