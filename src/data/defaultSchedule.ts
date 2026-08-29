import { DefaultScheduleConfig } from '../types';

/**
 * Official Single Source of Truth for the 6-Day itinerary layout & schedule.
 * Contains solely canonical sourceKey references and optional completion states.
 * All detailed itinerary information is dynamically derived from the central database.
 */
export const defaultSchedule: DefaultScheduleConfig = {
  version: 2,
  days: {
    day1: [
      {
        sourceKey: 'fixed-d1-flight',
        completed: false
      },
      {
        sourceKey: 'main-day-1',
        completed: false
      }
    ],
    day2: [
      {
        sourceKey: 'main-day-3',
        completed: false
      }
    ],
    day3: [
      {
        sourceKey: 'main-day-2',
        completed: false
      }
    ],
    day4: [
      {
        sourceKey: 'main-day-5',
        completed: false
      },
      {
        sourceKey: 'fixed-d4-dragon-bridge',
        completed: false
      }
    ],
    day5: [
      {
        sourceKey: 'main-day-4-daytime',
        completed: false
      }
    ],
    day6: [
      {
        sourceKey: 'main-day-6',
        completed: false
      },
      {
        sourceKey: 'fixed-d6-flight',
        completed: false
      }
    ]
  }
};
