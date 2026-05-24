/**
 * Type definitions for "Una aventura con Kubi" website and interactive game.
 */

export type DietType = 'herbi' | 'omni' | 'carni';

export interface FoodItem {
  id: string;
  name: string;
  spanishName: string;
  emoji: string;
  type: 'plant' | 'meat' | 'both'; // plant is for herbivores, meat is for carnivores, both is omnivore friendly
}

export interface AnimalProfile {
  id: string;
  name: string;
  species: string;
  diet: DietType;
  description: string;
  characteristics: string[];
  emoji: string;
  favoriteFoods: string[]; // names of food items they enjoy
  color: string; // Tailwind color class for cards
  bgColor: string; // Tailwind background color class
  soundKey: string; // voice key or sound description
}

export interface KidGameState {
  selectedAnimalId: string;
  hearts: number;
  score: number;
  maxHearts: number;
  gameStatus: 'playing' | 'won' | 'lost';
  lastFeedback: {
    text: string;
    isCorrect: boolean | null;
  };
}

export interface DevUXTopic {
  id: string;
  title: string;
  icon: string;
  bullets: string[];
}
