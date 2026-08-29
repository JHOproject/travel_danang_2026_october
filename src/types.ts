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
  reservation?: string; // e.g. "出發前或依官方最新公告確認"
  openingHours?: string; // e.g. "08:00 - 17:00 (以現場公告為準)"
  restrictions?: string[]; // e.g. ["穿著需過膝且有袖", "禁止攜帶無人機"]
  isCore?: boolean; // 今日核心必排
  isOptional?: boolean; // 彈性自由選配
  canSkipIfTired?: boolean; // 若太累或下雨優先刪除
  weatherSuitability?: 'sunny-preferred' | 'rain-safe' | 'heavy-rain-avoid' | 'indoor-only';
}

export interface DayPlan {
  dayNumber: number;
  date: string;
  weekday: string;
  title: string;
  subtitle: string;
  theme: string; // 今日主題：一句話說明核心體驗
  coreActivities: string[]; // 今日核心：最多 1~2 個
  optionalActivities?: string[]; // 彈性活動：有時間/體力再去
  cutIfTiredOrRaining?: string[]; // 若太累、下雨或延遲優先刪除
  weatherSwapAdvice: {
    condition: string;
    suggestion: string;
    targetDayNumber?: number;
    recommendedModule?: string;
  };
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
  alternativePlanB?: {
    title: string;
    subtitle: string;
    theme: string;
    coreActivities: string[];
    comparison: {
      travelTime: string;
      fatigue: string;
      culture: string;
      relaxation: string;
      rainRisk: string;
    };
    meals: {
      breakfast: string;
      lunch: string;
      dinner: string;
      snackOrCafe?: string;
    };
    transportation: string;
    weatherAdvice: string;
    activities: Activity[];
  };
}

export interface WeatherModule {
  id: string;
  name: string;
  primaryCondition: string;
  bestDays: string;
  avoidWhen: string;
  swapAction: string;
  iconName: string;
  riskLevel: 'low' | 'medium' | 'high';
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
  day5Comparison?: {
    planAName: string;
    planATotalTWD: number;
    planATotalVND: number;
    planBName: string;
    planBTotalTWD: number;
    planBTotalVND: number;
    note: string;
  };
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

export interface CustomItineraryItem {
  id: string; // unique instance id (e.g. 'item-day1-1')
  sourceKey: string; // canonical key from raw data (e.g. 'main-day-1', 'main-day-5-b', 'weather-mod-ba-na', etc.)
  title: string;
  subtitle: string;
  sourceType: 'main_day' | 'plan_b' | 'weather_module' | 'rain_module' | 'style_day' | 'fixed_event';
  categoryLabel?: string;
  summary: string;
  location?: string;
  timeRange?: string;
  tips?: string;
  costEstimate?: string;
  weatherSuitability?: string;
  completed?: boolean;
  isFixed?: boolean;
  allowedDays?: number[];
}

export interface CustomDayContainer {
  dayNumber: number;
  date: string;
  weekday: string;
  isCompleted?: boolean;
  items: CustomItineraryItem[];
}

export interface DayScheduleEntry {
  sourceKey: string;
  completed?: boolean;
}

export interface DefaultScheduleDays {
  day1: DayScheduleEntry[];
  day2: DayScheduleEntry[];
  day3: DayScheduleEntry[];
  day4: DayScheduleEntry[];
  day5: DayScheduleEntry[];
  day6: DayScheduleEntry[];
}

export interface DefaultScheduleConfig {
  version: number;
  days: DefaultScheduleDays;
}

export interface LocalDraftStorage {
  baseVersion: number;
  schedule: DefaultScheduleDays;
}
