export interface Spice {
  id: string;
  name: string;
  botanicalName: string;
  description: string;
  grades: string[];
  image: string;
  // New fields
  price: number;
  rating: number;
  reviews: number;
  heatLevel: 'Mild' | 'Medium' | 'Hot' | 'Extra Hot';
  category: 'Whole Spices' | 'Powders' | 'Blends';
  isOrganic: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  destinationCountry: string;
  productInterest: string;
  quantity: string;
  message: string;
}

// New Interfaces
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  servings: number;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
