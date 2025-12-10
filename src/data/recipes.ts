import type { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Traditional Chettinad Chicken',
    description: 'A fiery, aromatic chicken curry from the Chettinad region, famous for its use of black pepper, star anise, and stone flower.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop',
    prepTime: '45 mins',
    servings: 4,
    category: 'Main Course'
  },
  {
    id: '2',
    title: 'Golden Turmeric Milk (Haldi Doodh)',
    description: 'An immunity-boosting ancient Ayurvedic drink made with our high-curcumin turmeric, black pepper, and honey.',
    image: 'https://images.unsplash.com/photo-1515544259445-56c986d34d62?q=80&w=2070&auto=format&fit=crop',
    prepTime: '10 mins',
    servings: 2,
    category: 'Beverage'
  },
  {
    id: '3',
    title: 'Spiced Cardamom Chai',
    description: 'The quintessential Indian tea brew, elevated with our Alleppey Green Cardamom and a hint of cinnamon.',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=2070&auto=format&fit=crop',
    prepTime: '15 mins',
    servings: 3,
    category: 'Beverage'
  }
];
