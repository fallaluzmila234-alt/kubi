import { FoodItem, AnimalProfile } from './types';

export const FOOD_ITEMS: FoodItem[] = [
  { id: 'miel', name: 'Sweet Honey', spanishName: 'Miel', emoji: '🍯', type: 'both' },
  { id: 'pescado', name: 'Fresh Fish', spanishName: 'Pescado', emoji: '🐟', type: 'meat' },
  { id: 'manzana', name: 'Red Apple', spanishName: 'Manzana', emoji: '🍎', type: 'plant' },
  { id: 'chocolate', name: 'Chocolate Bar', spanishName: 'Chocolate', emoji: '🍫', type: 'both' },
  { id: 'dulce', name: 'Sweet Candy', spanishName: 'Dulce', emoji: '🍬', type: 'both' }
];

export const ANIMAL_PROFILES: AnimalProfile[] = [
  {
    id: 'kubi',
    name: 'Kubi El Koala',
    species: 'Koala Explorador (Phascolarctos cinereus)',
    diet: 'herbi',
    description: 'Kubi es el pequeño koala explorador que guía al jugador a lo largo de los 4 niveles de la aventura, enseñando con alegría cómo viven y de qué se alimentan los mamíferos.',
    characteristics: ['Amigable y curioso', 'Guía y explorador oficial de los 4 niveles', 'Te ayuda a buscar animales en el bosque', '¡Acompañante de tu aprendizaje!'],
    emoji: '🐨',
    favoriteFoods: ['manzana'],
    color: 'emerald',
    bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    soundKey: '¡Hola! Soy Kuby, bienvenido a esta nueva aventura donde conoceremos a los animales mamíferos. ¡Acompáñame!'
  },
  {
    id: 'oso_pardo',
    name: 'Oso Pardo',
    species: 'Oso Omnívoro (Ursus arctos)',
    diet: 'omni',
    description: 'El Oso Pardo protagoniza el nivel 4 del videojuego. El jugador debe alimentarlo correctamente seleccionando entre cinco tipos de alimentos disponibles en su nivel.',
    characteristics: ['Interactivo y muy expresivo', 'Parte del gran nivel de alimentación', 'Solo come pescado, miel y manzanas', '¡No puede comer chocolate ni dulces!'],
    emoji: '🐻',
    favoriteFoods: ['miel', 'pescado', 'manzana'],
    color: 'amber',
    bgColor: 'bg-amber-50 border-amber-200 text-amber-800',
    soundKey: '¡Hola pequeño explorador! Soy el Oso Pardo, tengo mucha hambre, ¿me alimentas?'
  }
];

export const DEVELOPMENT_PROCESS_LOGS = [
  {
    phase: '1. Programación en Scratch',
    details: 'Implementación de bloques lógicos condicionales en Scratch para reconocer la colisión de objetos arrastrados y comprobar dietas de los mamíferos.'
  },
  {
    phase: '2. Diseño de Personajes y Escenarios',
    details: 'Selección de paletas cromáticas infantiles cálidas y diseño de vectores amigables para estructurar la cara de Kubi, el Oso Pardo y los hábitats.'
  },
  {
    phase: '3. Sistema de Desafíos y Variables',
    details: 'Configuración de variables clave en Scratch: "Intentos" (restando vidas en fallos), "Puntaje" al acertar, y temporizadores de exploración.'
  },
  {
    phase: '4. Pruebas y Pulido (Playtesting)',
    details: 'Ajuste del tamaño de botones de navegación (flechas grandes), tiempos de retardo de voz e integración de sonidos nativos para feedback visual-auditivo.'
  }
];
