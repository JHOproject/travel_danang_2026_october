export interface Activity {
  time: string;
  title: string;
  location: string;
  description: string;
  category: 'sightseeing' | 'food' | 'transport' | 'relax' | 'nightlife' | 'shopping';
  tags: string[];
  tips?: string;
  costEstimate?: string;
  weatherBackup?: string; // Rainy day alternative
  mapQuery?: string;
}

export interface DayPlan {
  dayNumber: number;
  date: string;
  weekday: string;
  title: string;
  subtitle: string;
  highlights: string[];
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
    snackOrCafe?: string;
  };
  transportation: string;
  weatherAdvice: string;
  activities: Activity[];
}

export interface AlternativeStyle {
  id: string;
  title: string;
  tag: string;
  iconName: string;
  targetAudience: string;
  description: string;
  coreVibe: string;
  estimatedCostTWD: string;
  keyHighlights: string[];
  daysSummary: {
    day: string;
    theme: string;
    schedule: string;
  }[];
}

export interface BudgetTier {
  id: string;
  name: string;
  targetUser: string;
  totalTWD: number;
  totalVND: number;
  breakdown: {
    flight: number;
    hotel: number; // 5 nights at Peninsula Hotel or similar
    transport: number;
    food: number;
    activities: number; // Tickets, cable car, boat
    spaShopping: number;
  };
  highlights: string[];
}

export interface RestaurantItem {
  name: string;
  vietnameseName: string;
  category: string;
  specialty: string;
  priceRange: string;
  address: string;
  rating: string;
  proTip: string;
}
