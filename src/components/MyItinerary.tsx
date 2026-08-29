import React, { useState, useEffect } from 'react';
import { 
  Calendar, Check, CheckCircle2, Plus, ArrowLeftRight, 
  Trash2, MoreHorizontal, Eye, AlertCircle, X, ChevronRight,
  Compass, RotateCcw, Lock, Copy, CheckCheck, FileEdit, Sparkles,
  ArrowUp, ArrowDown
} from 'lucide-react';
import { MAIN_ITINERARY, ALTERNATIVE_STYLES, WEATHER_MODULES } from '../data/itineraryData';
import { defaultSchedule } from '../data/defaultSchedule';
import { 
  CustomDayContainer, 
  CustomItineraryItem, 
  DayPlan, 
  DefaultScheduleConfig, 
  DefaultScheduleDays,
  LocalDraftStorage 
} from '../types';

const STORAGE_KEY = 'danang_my_itinerary_draft_v1';

// Canonical item builder from sourceKey and optional completion state
export const createItemFromSourceKey = (sourceKey: string, completed = false): CustomItineraryItem | null => {
  switch (sourceKey) {
    case 'fixed-d1-flight':
      return {
        id: 'item-d1-fixed-flight',
        sourceKey: 'fixed-d1-flight',
        title: '【固定行程】抵達峴港機場入境・專車接送與飯店寄放行李',
        subtitle: '09:00 抵達國際機場 T2 ➔ 09:00–11:00 入境接送 ➔ 11:00–11:40 半島飯店寄放行李',
        sourceType: 'fixed_event',
        categoryLabel: '固定航班',
        summary: '國際航班 09:00 抵達峴港、辦理入境查驗、領取行李與專車接送至半島飯店大廳寄放行李，固定於 10/01 執行。',
        location: '峴港國際機場 T2 ➔ 峴港半島飯店 (84 Võ Nguyên Giáp)',
        timeRange: '09:00 - 11:40',
        tips: '航班與入境時間固定，交換整日時自動保留於 Day 1。',
        isFixed: true,
        completed
      };

    case 'main-day-1':
    case 'main-day-1-explore':
      return {
        id: 'item-d1-main-explore',
        sourceKey: 'main-day-1',
        title: '市區探索：韓市場換匯・粉紅教堂・海景入住 ＆ 活海鮮晚宴',
        subtitle: '12:00 午餐 ➔ 13:15 韓市場換匯 ➔ 14:30 粉紅教堂 ➔ 16:00 入住休息 ➔ 18:00 海鮮晚餐',
        sourceType: 'main_day',
        categoryLabel: '可移動行程',
        summary: '午餐品嚐魚餅米線／煎餅，韓市場換匯與採買，粉紅教堂與椰子咖啡，海景客房休息充電，晚間享用 Bé Mặn 活海鮮排檔大餐。',
        location: '韓市場 ➔ 粉紅教堂 ➔ 半島海景飯店 ➔ Bé Mặn 海鮮',
        timeRange: '12:00 - 20:30',
        tips: MAIN_ITINERARY[0].weatherAdvice,
        costEstimate: '晚餐約 500,000~800,000 VND/人',
        isFixed: false,
        completed
      };

    case 'main-day-2':
      return {
        id: 'item-d2-main',
        sourceKey: 'main-day-2',
        title: MAIN_ITINERARY[1].title,
        subtitle: MAIN_ITINERARY[1].subtitle,
        sourceType: 'main_day',
        categoryLabel: '6天5夜主行程',
        summary: MAIN_ITINERARY[1].theme,
        location: MAIN_ITINERARY[1].highlights.slice(0, 2).join(' ➔ '),
        timeRange: '07:30 - 21:00',
        tips: MAIN_ITINERARY[1].weatherAdvice,
        costEstimate: '基本票約 1,000,000 VND (Combo 約 1,300,000 VND)',
        isFixed: false,
        completed
      };

    case 'main-day-3':
      return {
        id: 'item-d3-main',
        sourceKey: 'main-day-3',
        title: MAIN_ITINERARY[2].title,
        subtitle: MAIN_ITINERARY[2].subtitle,
        sourceType: 'main_day',
        categoryLabel: '6天5夜主行程',
        summary: MAIN_ITINERARY[2].theme,
        location: MAIN_ITINERARY[2].highlights.slice(0, 3).join(' ➔ '),
        timeRange: '08:00 - 22:00',
        tips: MAIN_ITINERARY[2].weatherAdvice,
        costEstimate: '五行山+電梯約 55,000 VND、竹籃船約 150,000 VND',
        isFixed: false,
        completed
      };

    case 'main-day-4':
    case 'main-day-4-daytime':
      return {
        id: 'item-d4-daytime-main',
        sourceKey: 'main-day-4-daytime',
        title: '山茶半島靈應寺遠眺・Madam Lan 庭園午餐 ＆ 慢活充電',
        subtitle: '08:30 晨間海景 ➔ 10:00 靈應寺 ➔ 12:30 Madam Lan ➔ 14:00 沙灘咖啡泳池 ➔ 18:30 晚餐',
        sourceType: 'main_day',
        categoryLabel: '可移動行程',
        summary: '晨間登上山茶半島朝聖 67 米觀音聖像、品嚐 Madam Lan 庭園美饌，午後享受海景無邊際泳池與精品咖啡，微醺從容享用週日晚餐。',
        location: '山茶半島 ➔ Madam Lan ➔ 43 Factory Coffee ➔ 美溪海岸',
        timeRange: '08:30 - 20:00',
        tips: '此日間行程可自由與其他日期互換。',
        costEstimate: '晚餐約 250,000~450,000 VND',
        isFixed: false,
        completed
      };

    case 'fixed-d4-dragon-bridge':
      return {
        id: 'item-d4-fixed-dragon-bridge',
        sourceKey: 'fixed-d4-dragon-bridge',
        title: '【固定活動】20:15–21:30 龍橋週末噴火噴水秀 (21:00 演出)',
        subtitle: '20:15 提早卡位 ➔ 21:00 週末限定噴火噴水聲光震撼演出',
        sourceType: 'fixed_event',
        categoryLabel: '週日限定',
        summary: '峴港週末限定代表性地標！每逢週五、週六、週日晚間 21:00 準時上演 15 分鐘噴火與噴水震撼特效，固定於 10/04 (週日) 晚間執行。',
        location: '龍橋東岸龍頭端 (靠近 Trần Hưng Đạo 路口)',
        timeRange: '20:15 - 21:30',
        tips: '建議提前於 20:15~20:30 抵達卡位，固定於 10/04 (週日) 演出，交換整日時自動保留於 Day 4。',
        isFixed: true,
        completed
      };

    case 'main-day-5':
      return {
        id: 'item-d5-main',
        sourceKey: 'main-day-5',
        title: MAIN_ITINERARY[4].title,
        subtitle: MAIN_ITINERARY[4].subtitle,
        sourceType: 'main_day',
        categoryLabel: '主行程 (方案 A: 順化皇城)',
        summary: MAIN_ITINERARY[4].theme,
        location: MAIN_ITINERARY[4].highlights.slice(0, 3).join(' ➔ '),
        timeRange: '07:00 - 20:00',
        tips: MAIN_ITINERARY[4].weatherAdvice,
        costEstimate: '皇城門票約 200,000 VND',
        isFixed: false,
        completed
      };

    case 'main-day-5-b':
      return {
        id: 'item-d5-plan-b',
        sourceKey: 'main-day-5-b',
        title: MAIN_ITINERARY[4].alternativePlanB?.title || '方案 B：峴港度假慢活放鬆日',
        subtitle: MAIN_ITINERARY[4].alternativePlanB?.subtitle || '美溪海景 ＋ 頂級雙人 SPA ＋ 樂天超市伴手禮',
        sourceType: 'plan_b',
        categoryLabel: 'Day 5 方案 B (市區度假)',
        summary: MAIN_ITINERARY[4].alternativePlanB?.theme || '極致放鬆 SPA 與市區採買',
        location: '峴港半島飯店 ➔ 頂級 SPA ➔ Lotte Mart',
        timeRange: '09:00 - 21:00',
        tips: '零長途車程，下雨天最優首選。',
        costEstimate: 'SPA 約 600,000~1,000,000 VND',
        isFixed: false,
        completed
      };

    case 'main-day-6':
    case 'main-day-6-museum':
      return {
        id: 'item-d6-museum-explore',
        sourceKey: 'main-day-6',
        title: '占婆雕刻博物館參觀・炭火烤肉米線午餐 ＆ 市區咖啡小憩',
        subtitle: '08:00 早餐退房 ➔ 09:40 占婆博物館 ➔ 11:10 Bún Chả 59 烤肉米線 ➔ 12:15 自由咖啡',
        sourceType: 'main_day',
        categoryLabel: '可移動行程',
        summary: '上午參觀法式殖民建築與 7~15 世紀古占婆砂岩雕刻，中午品嚐道地炭火烤肉米線，午間悠閒品嚐最後一杯越式滴漏咖啡。',
        location: '占婆雕刻博物館 ➔ Bún Chả 59 ➔ 市區精品咖啡',
        timeRange: '08:00 - 13:15',
        tips: MAIN_ITINERARY[5].weatherAdvice,
        costEstimate: '門票約 60,000 VND',
        isFixed: false,
        completed
      };

    case 'fixed-d6-flight':
      return {
        id: 'item-d6-fixed-flight',
        sourceKey: 'fixed-d6-flight',
        title: '【固定行程】返回飯店提領行李・13:45~14:00 出發機場・17:30 航班返台',
        subtitle: '13:15 返回飯店 ➔ 13:30 提領行李 ➔ 13:45~14:00 專車出發 ➔ 14:15~14:30 抵達機場 ➔ 17:30 起飛',
        sourceType: 'fixed_event',
        categoryLabel: '固定返程',
        summary: '恪守「13:15 返回飯店、13:45~14:00 出發前往機場」最高安全原則，預計 14:15~14:30 抵達 T2 航廈，充裕預留 3 小時安檢登機緩衝，17:30 航班準時返台。',
        location: '半島飯店 ➔ 峴港國際機場 T2 國際航廈',
        timeRange: '13:15 - 17:30',
        tips: '國際返程航班時間固定，交換整日時自動保留於 Day 6。',
        isFixed: true,
        completed
      };

    default:
      // Weather modules
      if (sourceKey.startsWith('weather-module-')) {
        const wmId = sourceKey.replace('weather-module-', '');
        const wm = WEATHER_MODULES.find((m) => m.id === wmId);
        if (wm) {
          return {
            id: `item-wm-${wm.id}-${Date.now()}`,
            sourceKey,
            title: `【雨季彈性】${wm.name}`,
            subtitle: wm.avoidWhen,
            sourceType: 'rain_module',
            categoryLabel: '雨季機動調度模組',
            summary: wm.swapAction,
            location: wm.swapAction,
            timeRange: '彈性替換',
            tips: `主適用氣候：${wm.primaryCondition}`,
            isFixed: false,
            completed
          };
        }
      }
      // Style days
      if (sourceKey.startsWith('style-')) {
        for (const style of ALTERNATIVE_STYLES) {
          for (let i = 0; i < style.daysSummary.length; i++) {
            const dsKey = `style-${style.id}-d${i + 1}`;
            if (dsKey === sourceKey) {
              const ds = style.daysSummary[i];
              return {
                id: `item-style-${style.id}-d${i + 1}-${Date.now()}`,
                sourceKey,
                title: `【${style.tag}】${ds.theme}`,
                subtitle: ds.schedule,
                sourceType: 'style_day',
                categoryLabel: style.title,
                summary: `${style.coreVibe}｜${ds.schedule}`,
                location: ds.schedule,
                timeRange: ds.day,
                tips: `適合族群：${style.targetAudience}`,
                isFixed: false,
                completed
              };
            }
          }
        }
      }
      return null;
  }
};

// Build 6-day runtime containers from schedule days object
const getContainersFromDays = (days: DefaultScheduleDays): CustomDayContainer[] => {
  const meta = [
    { dayNumber: 1, date: '2026-10-01', weekday: '星期四', key: 'day1' as const },
    { dayNumber: 2, date: '2026-10-02', weekday: '星期五', key: 'day2' as const },
    { dayNumber: 3, date: '2026-10-03', weekday: '星期六', key: 'day3' as const },
    { dayNumber: 4, date: '2026-10-04', weekday: '星期日', key: 'day4' as const },
    { dayNumber: 5, date: '2026-10-05', weekday: '星期一', key: 'day5' as const },
    { dayNumber: 6, date: '2026-10-06', weekday: '星期二', key: 'day6' as const },
  ];

  return meta.map((m) => {
    const entries = days[m.key] || [];
    const items: CustomItineraryItem[] = [];
    for (const entry of entries) {
      const item = createItemFromSourceKey(entry.sourceKey, entry.completed);
      if (item) {
        items.push(item);
      }
    }
    return {
      dayNumber: m.dayNumber,
      date: m.date,
      weekday: m.weekday,
      items
    };
  });
};

// Candidate item pool for "＋加入行程"
interface PoolItem {
  sourceKey: string;
  title: string;
  subtitle: string;
  sourceType: 'main_day' | 'plan_b' | 'weather_module' | 'rain_module' | 'style_day' | 'fixed_event';
  categoryLabel: string;
  summary: string;
  location: string;
  timeRange: string;
  tips: string;
  costEstimate?: string;
  isFixed?: boolean;
  rawDayData?: DayPlan;
}

export const MyItinerary: React.FC = () => {
  // Check localStorage on mount for personal drafts and detect version mismatch
  const [hasVersionConflict, setHasVersionConflict] = useState(false);
  const [conflictDraft, setConflictDraft] = useState<LocalDraftStorage | null>(null);
  const [isDraft, setIsDraft] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: LocalDraftStorage = JSON.parse(raw);
        return parsed && parsed.baseVersion === defaultSchedule.version;
      }
    } catch {
      // Ignore
    }
    return false;
  });

  const [containers, setContainers] = useState<CustomDayContainer[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: LocalDraftStorage = JSON.parse(raw);
        if (parsed && typeof parsed.baseVersion === 'number' && parsed.schedule) {
          if (parsed.baseVersion === defaultSchedule.version) {
            return getContainersFromDays(parsed.schedule);
          }
        }
      }
    } catch {
      // Fallback
    }
    return getContainersFromDays(defaultSchedule.days);
  });

  // Check version mismatch on initial mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: LocalDraftStorage = JSON.parse(raw);
        if (parsed && typeof parsed.baseVersion === 'number' && parsed.schedule) {
          if (parsed.baseVersion !== defaultSchedule.version) {
            setConflictDraft(parsed);
            setHasVersionConflict(true);
          }
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  // Helper to convert current containers to days object
  const serializeContainersToDays = (curContainers: CustomDayContainer[]): DefaultScheduleDays => {
    return {
      day1: (curContainers.find((d) => d.dayNumber === 1)?.items || []).map((it) => ({ sourceKey: it.sourceKey, completed: !!it.completed })),
      day2: (curContainers.find((d) => d.dayNumber === 2)?.items || []).map((it) => ({ sourceKey: it.sourceKey, completed: !!it.completed })),
      day3: (curContainers.find((d) => d.dayNumber === 3)?.items || []).map((it) => ({ sourceKey: it.sourceKey, completed: !!it.completed })),
      day4: (curContainers.find((d) => d.dayNumber === 4)?.items || []).map((it) => ({ sourceKey: it.sourceKey, completed: !!it.completed })),
      day5: (curContainers.find((d) => d.dayNumber === 5)?.items || []).map((it) => ({ sourceKey: it.sourceKey, completed: !!it.completed })),
      day6: (curContainers.find((d) => d.dayNumber === 6)?.items || []).map((it) => ({ sourceKey: it.sourceKey, completed: !!it.completed })),
    };
  };

  // Save changes to localStorage personal draft
  const saveDraftChanges = (newContainers: CustomDayContainer[]) => {
    setContainers(newContainers);
    setIsDraft(true);
    try {
      const draftData: LocalDraftStorage = {
        baseVersion: conflictDraft ? conflictDraft.baseVersion : defaultSchedule.version,
        schedule: serializeContainersToDays(newContainers)
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draftData));
    } catch {
      // Ignore localStorage write error
    }
  };

  // Conflict action 1: Use latest official defaultSchedule
  const handleAcceptLatestOfficial = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setContainers(getContainersFromDays(defaultSchedule.days));
    setIsDraft(false);
    setHasVersionConflict(false);
    setConflictDraft(null);
  };

  // Conflict action 2: Keep personal draft from older version
  const handleKeepPersonalDraft = () => {
    if (conflictDraft) {
      setContainers(getContainersFromDays(conflictDraft.schedule));
      setIsDraft(true);
    }
    setHasVersionConflict(false);
  };

  // Modals & Dialog state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [targetAddDay, setTargetAddDay] = useState<number | null>(null);
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);
  const [sourceSwapDay, setSourceSwapDay] = useState<number | null>(null);
  const [detailItem, setDetailItem] = useState<{ item: CustomItineraryItem; dayNumber: number } | null>(null);

  // Copy success toast state
  const [copyToast, setCopyToast] = useState(false);

  // Universal confirmation dialog
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    message: '',
    confirmText: '確定',
    cancelText: '取消',
    onConfirm: () => {}
  });

  // Action menu dropdown state for items
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  // Copy current runtime schedule to clipboard
  const handleCopyConfig = async () => {
    const currentConfig: DefaultScheduleConfig = {
      version: defaultSchedule.version,
      days: serializeContainersToDays(containers)
    };

    const jsonStr = JSON.stringify(currentConfig, null, 2);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(jsonStr);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = jsonStr;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    } catch {
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    }
  };

  // Build the unified available pool from existing data sources (Single Source of Truth)
  const availablePool: PoolItem[] = [
    // 1. 6 Days Main Itinerary Modules
    {
      sourceKey: 'main-day-1',
      title: '【抵達日市區模組】韓市場換匯・粉紅教堂・海景入住 ＆ 活海鮮晚宴',
      subtitle: '12:00 午餐 ➔ 13:15 韓市場換匯 ➔ 14:30 粉紅教堂 ➔ 16:00 入住 ➔ 18:00 海鮮晚餐',
      sourceType: 'main_day' as const,
      categoryLabel: 'Day 1 市區模組',
      summary: '午餐品嚐魚餅米線／煎餅，韓市場換匯與採買，粉紅教堂與椰子咖啡，海景客房休息充電，晚間享用 Bé Mặn 活海鮮排檔大餐。',
      location: '韓市場 ➔ 粉紅教堂 ➔ 半島海景飯店 ➔ Bé Mặn 海鮮',
      timeRange: '12:00 - 20:30',
      tips: MAIN_ITINERARY[0].weatherAdvice,
      rawDayData: MAIN_ITINERARY[0]
    },
    {
      sourceKey: 'main-day-2',
      title: '【巴拿山一日模組】高空纜車・黃金佛手橋・法國村・頂級 SPA・Pizza 4P’s',
      subtitle: MAIN_ITINERARY[1].subtitle,
      sourceType: 'main_day' as const,
      categoryLabel: 'Day 2 一日模組',
      summary: MAIN_ITINERARY[1].theme,
      location: MAIN_ITINERARY[1].highlights.slice(0, 3).join(' ➔ '),
      timeRange: '07:30 - 21:00',
      tips: MAIN_ITINERARY[1].weatherAdvice,
      rawDayData: MAIN_ITINERARY[1]
    },
    {
      sourceKey: 'main-day-3',
      title: '【五行會安一日模組】五行山玄空洞・Cam Thanh 水椰林竹籃船・會安古鎮老街與燈籠夜景',
      subtitle: MAIN_ITINERARY[2].subtitle,
      sourceType: 'main_day' as const,
      categoryLabel: 'Day 3 一日模組',
      summary: MAIN_ITINERARY[2].theme,
      location: MAIN_ITINERARY[2].highlights.slice(0, 3).join(' ➔ '),
      timeRange: '08:00 - 22:00',
      tips: MAIN_ITINERARY[2].weatherAdvice,
      rawDayData: MAIN_ITINERARY[2]
    },
    {
      sourceKey: 'main-day-4-daytime',
      title: '【市區慢活模組】山茶半島靈應寺遠眺・Madam Lan 庭園午餐 ＆ 下午慢活充電',
      subtitle: '08:30 晨間海景 ➔ 10:00 靈應寺 ➔ 12:30 Madam Lan ➔ 14:00 沙灘咖啡泳池 ➔ 18:30 晚餐',
      sourceType: 'main_day' as const,
      categoryLabel: 'Day 4 慢活模組',
      summary: '晨間登上山茶半島朝聖 67 米觀音聖像、品嚐 Madam Lan 庭園美饌，午後享受海景無邊際泳池與精品咖啡，微醺從容享用週日晚餐。',
      location: '山茶半島 ➔ Madam Lan ➔ 43 Factory Coffee ➔ 美溪海岸',
      timeRange: '08:30 - 20:00',
      tips: '此日間行程可自由與其他日期互換。',
      rawDayData: MAIN_ITINERARY[3]
    },
    {
      sourceKey: 'main-day-5',
      title: '【順化古都一日模組】順化阮朝皇城世界遺產・正宗順化牛肉粉・鹽咖啡・啟定陵 (方案 A)',
      subtitle: MAIN_ITINERARY[4].subtitle,
      sourceType: 'main_day' as const,
      categoryLabel: 'Day 5 方案 A',
      summary: MAIN_ITINERARY[4].theme,
      location: MAIN_ITINERARY[4].highlights.slice(0, 3).join(' ➔ '),
      timeRange: '07:00 - 20:00',
      tips: MAIN_ITINERARY[4].weatherAdvice,
      rawDayData: MAIN_ITINERARY[4]
    },
    {
      sourceKey: 'main-day-5-b',
      title: '【峴港度假模組】方案 B：美溪海景・頂級雙人 SPA・樂天超市伴手禮採買・告別晚宴',
      subtitle: MAIN_ITINERARY[4].alternativePlanB?.subtitle || '美溪海景 ＋ 頂級雙人 SPA ＋ 樂天超市伴手禮',
      sourceType: 'plan_b' as const,
      categoryLabel: 'Day 5 方案 B',
      summary: MAIN_ITINERARY[4].alternativePlanB?.theme || '零長途車程壓力：極致放鬆 SPA、樂天超市一站式採買與旅程最後告別晚宴',
      location: '峴港半島飯店 ➔ 頂級草本 SPA ➔ Lotte Mart ➔ 海鮮晚宴',
      timeRange: '08:30 - 21:00',
      tips: '無跨城市長途車程；僅需峴港市區短程 Grab 移動，下雨天最優質之首選方案。',
      rawDayData: MAIN_ITINERARY[4].alternativePlanB ? {
        ...MAIN_ITINERARY[4],
        title: MAIN_ITINERARY[4].alternativePlanB.title,
        subtitle: MAIN_ITINERARY[4].alternativePlanB.subtitle,
        theme: MAIN_ITINERARY[4].alternativePlanB.theme,
        coreActivities: MAIN_ITINERARY[4].alternativePlanB.coreActivities,
        meals: MAIN_ITINERARY[4].alternativePlanB.meals,
        transportation: MAIN_ITINERARY[4].alternativePlanB.transportation,
        weatherAdvice: MAIN_ITINERARY[4].alternativePlanB.weatherAdvice,
        activities: MAIN_ITINERARY[4].alternativePlanB.activities
      } : undefined
    },
    {
      sourceKey: 'main-day-6-museum',
      title: '【峴港最後半日模組】占婆雕刻博物館參觀・炭火烤肉米線午餐 ＆ 市區咖啡小憩',
      subtitle: '08:00 早餐退房 ➔ 09:40 占婆博物館 ➔ 11:10 Bún Chả 59 烤肉米線 ➔ 12:15 自由咖啡',
      sourceType: 'main_day' as const,
      categoryLabel: 'Day 6 半日模組',
      summary: '上午參觀法式殖民建築與 7~15 世紀古占婆砂岩雕刻，中午品嚐道地炭火烤肉米線，午間悠閒品嚐最後一杯越式滴漏咖啡。',
      location: '占婆雕刻博物館 ➔ Bún Chả 59 ➔ 市區精品咖啡',
      timeRange: '08:00 - 13:15',
      tips: MAIN_ITINERARY[5].weatherAdvice,
      rawDayData: MAIN_ITINERARY[5]
    },
    // 2. Alternative Styles Day Modules
    ...ALTERNATIVE_STYLES.flatMap((style) =>
      style.daysSummary.map((ds, index) => ({
        sourceKey: `style-${style.id}-d${index + 1}`,
        title: `【${style.tag}】${ds.theme}`,
        subtitle: ds.schedule,
        sourceType: 'style_day' as const,
        categoryLabel: style.title,
        summary: `${style.coreVibe}｜${ds.schedule}`,
        location: ds.schedule,
        timeRange: ds.day,
        tips: `適合族群：${style.targetAudience}`
      }))
    ),
    // 3. Weather Rain Backup Modules
    ...WEATHER_MODULES.map((wm) => ({
      sourceKey: `weather-module-${wm.id}`,
      title: `【雨季彈性】${wm.name}`,
      subtitle: wm.avoidWhen,
      sourceType: 'rain_module' as const,
      categoryLabel: '雨季機動調度模組',
      summary: wm.swapAction,
      location: wm.swapAction,
      timeRange: '彈性替換',
      tips: `主適用氣候：${wm.primaryCondition} ｜ 建議置換：${wm.swapAction}`
    }))
  ];

  // Helper to check where an item sourceKey is placed and its completion status
  const getItemPlacementInfo = (sourceKey: string, currentTargetDay: number | null) => {
    const keysToCheck = [sourceKey];
    if (sourceKey === 'main-day-1') {
      keysToCheck.push('fixed-d1-flight', 'main-day-1-explore');
    } else if (sourceKey === 'main-day-4' || sourceKey === 'main-day-4-daytime') {
      keysToCheck.push('main-day-4-daytime', 'fixed-d4-dragon-bridge', 'main-day-4');
    } else if (sourceKey === 'main-day-6' || sourceKey === 'main-day-6-museum') {
      keysToCheck.push('main-day-6-museum', 'fixed-d6-flight', 'main-day-6');
    }

    for (const day of containers) {
      const match = day.items.find((it) => {
        if (keysToCheck.includes(it.sourceKey)) return true;
        if (sourceKey.startsWith('main-day-')) {
          const mainDayNum = parseInt(sourceKey.replace('main-day-', ''), 10);
          if (mainDayNum === 1 && (it.sourceKey === 'fixed-d1-flight' || it.sourceKey === 'main-day-1')) return true;
          if (mainDayNum === 4 && (it.sourceKey === 'fixed-d4-dragon-bridge' || it.sourceKey === 'main-day-4-daytime' || it.sourceKey === 'main-day-4')) return true;
          if (mainDayNum === 6 && (it.sourceKey === 'fixed-d6-flight' || it.sourceKey === 'main-day-6' || it.sourceKey === 'main-day-6-museum')) return true;
          if (it.sourceKey === `main-day-${mainDayNum}`) return true;
        }
        return false;
      });

      if (match) {
        const isCompleted = day.items.some((it) => {
          const isRelated = keysToCheck.includes(it.sourceKey) ||
            (sourceKey === 'main-day-1' && (it.sourceKey === 'fixed-d1-flight' || it.sourceKey === 'main-day-1')) ||
            (sourceKey === 'main-day-4' && (it.sourceKey === 'fixed-d4-dragon-bridge' || it.sourceKey === 'main-day-4-daytime' || it.sourceKey === 'main-day-4')) ||
            (sourceKey === 'main-day-6' && (it.sourceKey === 'fixed-d6-flight' || it.sourceKey === 'main-day-6' || it.sourceKey === 'main-day-6-museum')) ||
            it.sourceKey === sourceKey;
          return isRelated && !!it.completed;
        });

        return {
          dayNumber: day.dayNumber,
          isCompleted,
          isCurrentDay: currentTargetDay !== null && day.dayNumber === currentTargetDay
        };
      }
    }
    return null;
  };

  // Reorder item within the same day (All modules including fixed can be reordered within day)
  const handleMoveItem = (dayNumber: number, currentIndex: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    const day = containers.find((d) => d.dayNumber === dayNumber);
    if (!day) return;
    if (targetIndex < 0 || targetIndex >= day.items.length) return;

    const updatedContainers = containers.map((d) => {
      if (d.dayNumber !== dayNumber) return d;
      const newItems = [...d.items];
      const [moved] = newItems.splice(currentIndex, 1);
      newItems.splice(targetIndex, 0, moved);
      return {
        ...d,
        items: newItems
      };
    });

    saveDraftChanges(updatedContainers);
  };

  // Toggle single item completion status
  const handleToggleItemComplete = (dayNumber: number, itemId: string) => {
    const updated = containers.map((day) => {
      if (day.dayNumber !== dayNumber) return day;
      return {
        ...day,
        items: day.items.map((it) =>
          it.id === itemId ? { ...it, completed: !it.completed } : it
        )
      };
    });
    saveDraftChanges(updated);
  };

  // Open Swap Modal
  const handleOpenSwap = (dayNumber: number) => {
    setSourceSwapDay(dayNumber);
    setIsSwapModalOpen(true);
  };

  // Execute Day Swap - Fixed activities stay in place!
  const handleExecuteSwap = (targetDayNumber: number) => {
    if (sourceSwapDay === null) return;
    const sourceDayObj = containers.find((d) => d.dayNumber === sourceSwapDay);
    const targetDayObj = containers.find((d) => d.dayNumber === targetDayNumber);

    if (!sourceDayObj || !targetDayObj) return;

    const performSwap = () => {
      const next = [...containers];
      const sIdx = next.findIndex((d) => d.dayNumber === sourceSwapDay);
      const tIdx = next.findIndex((d) => d.dayNumber === targetDayNumber);

      // Keep fixed items in their original day, only swap movable items
      const sFixed = next[sIdx].items.filter((it) => it.isFixed);
      const sMovable = next[sIdx].items.filter((it) => !it.isFixed);
      const tFixed = next[tIdx].items.filter((it) => it.isFixed);
      const tMovable = next[tIdx].items.filter((it) => !it.isFixed);

      next[sIdx] = {
        ...next[sIdx],
        items: [...sFixed, ...tMovable]
      };
      next[tIdx] = {
        ...next[tIdx],
        items: [...tFixed, ...sMovable]
      };
      saveDraftChanges(next);
      setIsSwapModalOpen(false);
      setSourceSwapDay(null);
    };

    const sourceMovableTitles = sourceDayObj.items.filter((it) => !it.isFixed).map((it) => it.title).join('、') || '無可移動行程';
    const targetMovableTitles = targetDayObj.items.filter((it) => !it.isFixed).map((it) => it.title).join('、') || '無可移動行程';

    setConfirmDialog({
      isOpen: true,
      title: `交換 Day ${sourceSwapDay} 與 Day ${targetDayNumber} 的可移動行程？`,
      message: `固定日期／固定時間活動將保留在原日期。\n\nDay ${sourceSwapDay} 可移動：${sourceMovableTitles}\n↕\nDay ${targetDayNumber} 可移動：${targetMovableTitles}`,
      confirmText: '確認交換',
      cancelText: '取消',
      onConfirm: () => {
        setConfirmDialog((c) => ({ ...c, isOpen: false }));
        performSwap();
      }
    });
  };

  // Open Add Modal
  const handleOpenAdd = (dayNumber: number) => {
    setTargetAddDay(dayNumber);
    setIsAddModalOpen(true);
  };

  // Handle selecting an item to add to target day
  const handleSelectAddPoolItem = (poolItem: PoolItem) => {
    if (targetAddDay === null) return;
    const placement = getItemPlacementInfo(poolItem.sourceKey, targetAddDay);

    const doAdd = () => {
      const newItem: CustomItineraryItem = {
        id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        sourceKey: poolItem.sourceKey,
        title: poolItem.title,
        subtitle: poolItem.subtitle,
        sourceType: poolItem.sourceType,
        categoryLabel: poolItem.categoryLabel,
        summary: poolItem.summary,
        location: poolItem.location,
        timeRange: poolItem.timeRange,
        tips: poolItem.tips,
        costEstimate: poolItem.costEstimate,
        completed: false,
        isFixed: poolItem.isFixed || false
      };

      const updated = containers.map((day) =>
        day.dayNumber === targetAddDay
          ? { ...day, items: [...day.items, newItem] }
          : day
      );
      saveDraftChanges(updated);
      setIsAddModalOpen(false);
      setTargetAddDay(null);
    };

    if (placement) {
      if (placement.isCompleted) {
        setConfirmDialog({
          isOpen: true,
          title: '已完成行程重複加入提醒',
          message: `這個行程已於 ${placement.isCurrentDay ? '本日' : `Day ${placement.dayNumber}`} 完成，是否仍要再次安排？`,
          confirmText: '再次安排',
          cancelText: '取消',
          onConfirm: () => {
            setConfirmDialog((c) => ({ ...c, isOpen: false }));
            doAdd();
          }
        });
      } else if (placement.isCurrentDay) {
        setConfirmDialog({
          isOpen: true,
          title: '重複安排提醒',
          message: `「${poolItem.title}」已安排於本日，仍要再次加入嗎？`,
          confirmText: '仍然加入',
          cancelText: '取消',
          onConfirm: () => {
            setConfirmDialog((c) => ({ ...c, isOpen: false }));
            doAdd();
          }
        });
      } else {
        setConfirmDialog({
          isOpen: true,
          title: '重複安排提醒',
          message: `這個行程已安排於 Day ${placement.dayNumber}，仍要加入 Day ${targetAddDay} 嗎？`,
          confirmText: '仍然加入',
          cancelText: '取消',
          onConfirm: () => {
            setConfirmDialog((c) => ({ ...c, isOpen: false }));
            doAdd();
          }
        });
      }
    } else {
      doAdd();
    }
  };

  // Handle removing item from a Day
  const handleRemoveItem = (dayNumber: number, itemId: string, itemTitle: string) => {
    setConfirmDialog({
      isOpen: true,
      title: '移除行程確認',
      message: `確定從 Day ${dayNumber} 移除「${itemTitle}」？（移除後仍可由「＋加入行程」再次選取）`,
      confirmText: '確定移除',
      cancelText: '取消',
      onConfirm: () => {
        const updated = containers.map((day) =>
          day.dayNumber === dayNumber
            ? { ...day, items: day.items.filter((it) => it.id !== itemId) }
            : day
        );
        saveDraftChanges(updated);
        setConfirmDialog((c) => ({ ...c, isOpen: false }));
        setOpenMenuId(null);
      }
    });
  };

  // Reset to default 6-day itinerary from defaultSchedule
  const handleResetToDefault = () => {
    setConfirmDialog({
      isOpen: true,
      title: '恢復 6 天 5 夜預設行程',
      message: '目前自行調整的草稿將會被清除，並恢復為程式碼中的預設行程 (defaultSchedule)，確定繼續嗎？',
      confirmText: '恢復預設',
      cancelText: '取消',
      onConfirm: () => {
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch {
          // Ignore
        }
        setContainers(getContainersFromDays(defaultSchedule.days));
        setIsDraft(false);
        setHasVersionConflict(false);
        setConflictDraft(null);
        setConfirmDialog((c) => ({ ...c, isOpen: false }));
      }
    });
  };

  // Resolve matching raw activity / details for View Details modal
  const getRawDetailsForDetailItem = () => {
    if (!detailItem) return null;
    const { item } = detailItem;

    if (item.sourceKey === 'fixed-d1-flight') {
      return { 
        type: 'day' as const, 
        data: MAIN_ITINERARY[0], 
        activities: MAIN_ITINERARY[0].activities.slice(0, 2) 
      };
    }
    if (item.sourceKey === 'main-day-1') {
      return { 
        type: 'day' as const, 
        data: MAIN_ITINERARY[0], 
        activities: MAIN_ITINERARY[0].activities.slice(2) 
      };
    }
    if (item.sourceKey === 'main-day-2') {
      return { 
        type: 'day' as const, 
        data: MAIN_ITINERARY[1], 
        activities: MAIN_ITINERARY[1].activities 
      };
    }
    if (item.sourceKey === 'main-day-3') {
      return { 
        type: 'day' as const, 
        data: MAIN_ITINERARY[2], 
        activities: MAIN_ITINERARY[2].activities 
      };
    }
    if (item.sourceKey === 'main-day-4-daytime' || item.sourceKey === 'main-day-4') {
      return { 
        type: 'day' as const, 
        data: MAIN_ITINERARY[3], 
        activities: MAIN_ITINERARY[3].activities.slice(0, 5) 
      };
    }
    if (item.sourceKey === 'fixed-d4-dragon-bridge') {
      return { 
        type: 'day' as const, 
        data: MAIN_ITINERARY[3], 
        activities: MAIN_ITINERARY[3].activities.slice(5) 
      };
    }
    if (item.sourceKey === 'main-day-5') {
      return { 
        type: 'day' as const, 
        data: MAIN_ITINERARY[4], 
        activities: MAIN_ITINERARY[4].activities 
      };
    }
    if (item.sourceKey === 'main-day-6-museum' || item.sourceKey === 'main-day-6') {
      return { 
        type: 'day' as const, 
        data: MAIN_ITINERARY[5], 
        activities: MAIN_ITINERARY[5].activities.slice(0, 5) 
      };
    }
    if (item.sourceKey === 'fixed-d6-flight') {
      return { 
        type: 'day' as const, 
        data: MAIN_ITINERARY[5], 
        activities: MAIN_ITINERARY[5].activities.slice(5) 
      };
    }

    if (item.sourceKey.startsWith('main-day-')) {
      const dayNumStr = item.sourceKey.replace('main-day-', '');
      if (item.sourceKey === 'main-day-5-b' && MAIN_ITINERARY[4].alternativePlanB) {
        const planBData = {
          ...MAIN_ITINERARY[4],
          title: MAIN_ITINERARY[4].alternativePlanB.title,
          subtitle: MAIN_ITINERARY[4].alternativePlanB.subtitle,
          theme: MAIN_ITINERARY[4].alternativePlanB.theme,
          coreActivities: MAIN_ITINERARY[4].alternativePlanB.coreActivities,
          meals: MAIN_ITINERARY[4].alternativePlanB.meals,
          transportation: MAIN_ITINERARY[4].alternativePlanB.transportation,
          weatherAdvice: MAIN_ITINERARY[4].alternativePlanB.weatherAdvice,
          activities: MAIN_ITINERARY[4].alternativePlanB.activities
        };
        return {
          type: 'day' as const,
          data: planBData,
          activities: MAIN_ITINERARY[4].alternativePlanB.activities
        };
      }
      const dayNum = parseInt(dayNumStr, 10);
      const rawDay = MAIN_ITINERARY.find((d) => d.dayNumber === dayNum);
      if (rawDay) return { type: 'day' as const, data: rawDay, activities: rawDay.activities };
    }

    if (item.sourceKey.startsWith('weather-module-')) {
      const wmId = item.sourceKey.replace('weather-module-', '');
      const wm = WEATHER_MODULES.find((m) => m.id === wmId);
      if (wm) return { type: 'weather_module' as const, data: wm };
    }

    return null;
  };

  return (
    <div id="my-itinerary-page" className="space-y-6">
      {/* Version Conflict Banner (Only shown when localStorage draft version differs from defaultSchedule) */}
      {hasVersionConflict && (
        <div id="alert-version-conflict" className="bg-amber-50 border border-amber-300/80 rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-amber-900">正式行程已有新版</h3>
                <p className="text-xs text-amber-700 mt-0.5">
                  程式碼中的正式行程已有更新版本，你目前瀏覽器中仍保存一份基於舊版本的個人未發布草稿。
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <button
                id="btn-accept-latest-official"
                onClick={handleAcceptLatestOfficial}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white transition-colors cursor-pointer shadow-sm"
              >
                使用最新正式行程
              </button>
              <button
                id="btn-keep-personal-draft"
                onClick={handleKeepPersonalDraft}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white hover:bg-amber-100/50 text-amber-800 border border-amber-300 transition-colors cursor-pointer"
              >
                保留我的草稿
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Banner & Control Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-0.5 rounded-full font-bold border border-blue-200 inline-flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" /> 自行編排
              </span>
              {/* Status Badge: Official vs Personal Draft */}
              {isDraft ? (
                <span id="badge-itinerary-status" className="bg-amber-50 text-amber-700 text-xs px-2.5 py-0.5 rounded-full font-semibold border border-amber-200 inline-flex items-center gap-1">
                  <FileEdit className="w-3 h-3 text-amber-600" /> 個人草稿 · 尚未發布
                </span>
              ) : (
                <span id="badge-itinerary-status" className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-0.5 rounded-full font-semibold border border-emerald-200 inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-600" /> 正式行程
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              我的行程編排
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              依照實際天候或偏好，一鍵交換可移動行程（固定活動自動保留）、加入備選模組或個別標記完成進度。
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto relative">
            <button
              id="btn-copy-schedule"
              onClick={handleCopyConfig}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200"
              title="將目前畫面行程設定轉為 JSON 複製至剪貼簿"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>複製目前設定</span>
            </button>

            <button
              id="btn-reset-itinerary"
              onClick={handleResetToDefault}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer border border-gray-200"
              title="清除草稿並恢復為程式碼中的預設行程 (defaultSchedule)"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>恢復預設行程</span>
            </button>

            {/* Copy success toast notification */}
            {copyToast && (
              <div 
                id="toast-copy-success"
                className="absolute -bottom-10 right-0 z-50 flex items-center gap-1.5 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-1 duration-200"
              >
                <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>目前行程設定已複製</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 6-Day Container Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {containers.map((day) => {
          const completedCount = day.items.filter((it) => it.completed).length;
          const totalCount = day.items.length;
          const isAllCompleted = totalCount > 0 && completedCount === totalCount;

          return (
            <div
              key={day.dayNumber}
              id={`my-day-card-${day.dayNumber}`}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Day Header with Progress Summary */}
              <div className="p-4 sm:p-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold px-2.5 py-0.5 rounded-lg bg-slate-900 text-white">
                      Day {day.dayNumber}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {day.date.slice(5)} ({day.weekday.replace('星期', '週')})
                    </span>
                  </div>

                  {/* Progress Summary Badge */}
                  <span
                    id={`day-progress-${day.dayNumber}`}
                    className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold transition-colors ${
                      isAllCompleted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : completedCount > 0
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-slate-100 text-slate-600 border border-gray-200'
                    }`}
                  >
                    {isAllCompleted ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{completedCount} / {totalCount} 已完成</span>
                      </>
                    ) : (
                      <span>{completedCount} / {totalCount} 已完成</span>
                    )}
                  </span>
                </div>

                {/* Day Header Action */}
                <div className="mt-2.5 flex items-center justify-end">
                  <button
                    id={`btn-swap-day-${day.dayNumber}`}
                    onClick={() => handleOpenSwap(day.dayNumber)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeftRight className="w-3 h-3" />
                    <span>交換整日</span>
                  </button>
                </div>
              </div>

              {/* Items List in this Day Container */}
              <div className="p-4 sm:p-5 flex-1 space-y-3">
                {day.items.length === 0 ? (
                  <div className="py-8 text-center border-2 border-dashed border-gray-200 rounded-xl bg-slate-50/50">
                    <p className="text-xs text-slate-400">當日尚未安排任何行程</p>
                    <button
                      onClick={() => handleOpenAdd(day.dayNumber)}
                      className="mt-2 text-xs text-blue-600 font-semibold hover:underline cursor-pointer inline-flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" /> 立即加入行程
                    </button>
                  </div>
                ) : (
                  day.items.map((item, idx) => {
                    const isDone = !!item.completed;
                    const canMoveUp = idx > 0;
                    const canMoveDown = idx < day.items.length - 1;
                    const showReorderControls = day.items.length > 1;

                    return (
                      <div
                        key={item.id}
                        id={`item-card-${item.id}`}
                        className={`relative p-3.5 rounded-xl border transition-all shadow-2xs group ${
                          isDone
                            ? 'bg-slate-50/80 border-gray-200 opacity-80'
                            : 'bg-white border-gray-200/90 hover:border-slate-400'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                item.isFixed
                                  ? 'bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-0.5'
                                  : 'bg-slate-100 text-slate-700'
                              }`}>
                                {item.isFixed && <Lock className="w-2.5 h-2.5 text-amber-800" />}
                                #{idx + 1} {item.categoryLabel || (item.isFixed ? '固定' : '行程')}
                              </span>
                              {item.timeRange && (
                                <span className="text-[10px] text-slate-400 font-medium">
                                  {item.timeRange}
                                </span>
                              )}

                              {/* In-Day Reorder Controls (Move Up / Move Down) */}
                              {showReorderControls && (
                                <div className="inline-flex items-center gap-0.5 ml-1 bg-slate-100/90 rounded-md p-0.5 border border-slate-200/80">
                                  <button
                                    id={`btn-move-up-${day.dayNumber}-${idx}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleMoveItem(day.dayNumber, idx, 'up');
                                    }}
                                    disabled={!canMoveUp}
                                    className={`p-1 rounded transition-colors cursor-pointer ${
                                      canMoveUp
                                        ? 'text-slate-600 hover:text-slate-950 hover:bg-white'
                                        : 'text-slate-300 cursor-not-allowed opacity-40'
                                    }`}
                                    title={canMoveUp ? '上移此模組順序' : '已在最上方'}
                                    aria-label="上移順序"
                                  >
                                    <ArrowUp className="w-3 h-3" />
                                  </button>
                                  <button
                                    id={`btn-move-down-${day.dayNumber}-${idx}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleMoveItem(day.dayNumber, idx, 'down');
                                    }}
                                    disabled={!canMoveDown}
                                    className={`p-1 rounded transition-colors cursor-pointer ${
                                      canMoveDown
                                        ? 'text-slate-600 hover:text-slate-950 hover:bg-white'
                                        : 'text-slate-300 cursor-not-allowed opacity-40'
                                    }`}
                                    title={canMoveDown ? '下移此模組順序' : '已在最下方'}
                                    aria-label="下移順序"
                                  >
                                    <ArrowDown className="w-3 h-3" />
                                  </button>
                                </div>
                              )}
                            </div>
                            <h4 className={`text-sm font-bold mt-1 line-clamp-1 ${
                              isDone ? 'text-slate-600' : 'text-slate-900'
                            }`}>
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                              {item.summary || item.subtitle}
                            </p>
                          </div>

                          {/* Item Right Actions: Toggle Completion & More Menu */}
                          <div className="relative shrink-0 flex items-center gap-1.5">
                            {/* Card-Level Completion Toggle Button */}
                            <button
                              id={`btn-toggle-item-${item.id}`}
                              onClick={() => handleToggleItemComplete(day.dayNumber, item.id)}
                              className={`text-[11px] px-2 py-0.5 rounded-full font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${
                                isDone
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300'
                                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-gray-200'
                              }`}
                              title={isDone ? '點擊取消完成' : '標記此行程為已完成'}
                            >
                              {isDone ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span>已完成</span>
                                </>
                              ) : (
                                <span>標記完成</span>
                              )}
                            </button>

                            <div className="relative">
                              <button
                                onClick={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                                className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                                title="更多選項"
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </button>

                              {/* Dropdown Menu */}
                              {openMenuId === item.id && (
                                <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-30 animate-in fade-in">
                                  <button
                                    onClick={() => {
                                      setOpenMenuId(null);
                                      setDetailItem({ item, dayNumber: day.dayNumber });
                                    }}
                                    className="w-full px-3 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2 cursor-pointer"
                                  >
                                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                                    <span>查看詳情</span>
                                  </button>
                                  {showReorderControls && canMoveUp && (
                                    <button
                                      onClick={() => {
                                        setOpenMenuId(null);
                                        handleMoveItem(day.dayNumber, idx, 'up');
                                      }}
                                      className="w-full px-3 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2 cursor-pointer"
                                    >
                                      <ArrowUp className="w-3.5 h-3.5 text-slate-500" />
                                      <span>上移順序</span>
                                    </button>
                                  )}
                                  {showReorderControls && canMoveDown && (
                                    <button
                                      onClick={() => {
                                        setOpenMenuId(null);
                                        handleMoveItem(day.dayNumber, idx, 'down');
                                      }}
                                      className="w-full px-3 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2 cursor-pointer"
                                    >
                                      <ArrowDown className="w-3.5 h-3.5 text-slate-500" />
                                      <span>下移順序</span>
                                    </button>
                                  )}
                                  <button
                                    onClick={() => {
                                      setOpenMenuId(null);
                                      handleToggleItemComplete(day.dayNumber, item.id);
                                    }}
                                    className="w-full px-3 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2 cursor-pointer"
                                  >
                                    <Check className="w-3.5 h-3.5 text-slate-500" />
                                    <span>{isDone ? '取消完成' : '標記完成'}</span>
                                  </button>
                                  <button
                                    onClick={() => handleRemoveItem(day.dayNumber, item.id, item.title)}
                                    className="w-full px-3 py-1.5 text-left text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                                    <span>移除此行程</span>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Card Bottom Quick Actions */}
                        <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-slate-500">
                          <button
                            onClick={() => setDetailItem({ item, dayNumber: day.dayNumber })}
                            className="font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-0.5 cursor-pointer"
                          >
                            <span>查看詳情</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                          <div className="flex items-center gap-2">
                            {isDone && (
                              <button
                                onClick={() => handleToggleItemComplete(day.dayNumber, item.id)}
                                className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                              >
                                取消完成
                              </button>
                            )}
                            <button
                              onClick={() => handleRemoveItem(day.dayNumber, item.id, item.title)}
                              className="text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                            >
                              移除
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Day Bottom Actions */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  id={`btn-add-to-day-${day.dayNumber}`}
                  onClick={() => handleOpenAdd(day.dayNumber)}
                  className="w-full py-2.5 rounded-xl border border-dashed border-gray-300 hover:border-slate-900 bg-slate-50/80 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-slate-600" />
                  <span>＋加入行程</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: 加入行程 (Add Item Modal) */}
      {/* ========================================================================= */}
      {isAddModalOpen && targetAddDay !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-slate-50/50">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  加入行程至 Day {targetAddDay}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  選擇要加入的可選行程模組
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsAddModalOpen(false);
                  setTargetAddDay(null);
                }}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Pool Items List */}
            <div className="p-5 overflow-y-auto space-y-3 flex-1">
              <p className="text-xs text-slate-500 mb-2">
                以下行程直接引用既有行程庫，可重複安排；行程狀態已清晰標註（本日／其他日／已完成）：
              </p>

              {availablePool.map((poolItem) => {
                const placement = getItemPlacementInfo(poolItem.sourceKey, targetAddDay);

                return (
                  <div
                    key={poolItem.sourceKey}
                    onClick={() => handleSelectAddPoolItem(poolItem)}
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-slate-900 hover:bg-slate-50/60 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {poolItem.categoryLabel}
                        </span>

                        {/* State Badges A / B / C / D */}
                        {placement && (
                          <>
                            {placement.isCompleted ? (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>{placement.isCurrentDay ? '✓ 已於本日完成' : `✓ 已於 Day ${placement.dayNumber} 完成`}</span>
                              </span>
                            ) : placement.isCurrentDay ? (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                                已排在本日
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                                已排在 Day {placement.dayNumber}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                        {poolItem.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {poolItem.summary}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 text-white group-hover:bg-blue-600 transition-colors">
                        選擇加入
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 bg-slate-50/50 flex justify-end">
              <button
                onClick={() => {
                  setIsAddModalOpen(false);
                  setTargetAddDay(null);
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-gray-200 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: Day ↔ Day 交換 (Swap Modal) */}
      {/* ========================================================================= */}
      {isSwapModalOpen && sourceSwapDay !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 max-w-lg w-full overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-slate-50/50">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  行程一鍵交換
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Day {sourceSwapDay} 要與哪一天交換？
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsSwapModalOpen(false);
                  setSourceSwapDay(null);
                }}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-2.5 max-h-[60vh] overflow-y-auto">
              <p className="text-xs text-slate-500 mb-1">
                注意：10/04 龍橋週末噴火秀、抵達與返台航班等固定活動將安全保留在原日期。
              </p>
              {containers
                .filter((d) => d.dayNumber !== sourceSwapDay)
                .map((targetDay) => {
                  const movableItem = targetDay.items.find((it) => !it.isFixed);
                  const firstItemTitle = movableItem?.title || targetDay.items[0]?.title || '目前無行程項目';

                  return (
                    <button
                      key={targetDay.dayNumber}
                      onClick={() => handleExecuteSwap(targetDay.dayNumber)}
                      className="w-full text-left p-3.5 rounded-xl border border-gray-200 hover:border-slate-900 hover:bg-slate-50 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                            Day {targetDay.dayNumber}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {targetDay.date.slice(5)} ({targetDay.weekday.replace('星期', '週')})
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-slate-900 mt-1 line-clamp-1">
                          {firstItemTitle}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          共 {targetDay.items.length} 個行程項目
                        </div>
                      </div>

                      <ArrowLeftRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:scale-110 transition-transform shrink-0" />
                    </button>
                  );
                })}
            </div>

            <div className="p-4 border-t border-gray-100 bg-slate-50/50 flex justify-end">
              <button
                onClick={() => {
                  setIsSwapModalOpen(false);
                  setSourceSwapDay(null);
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-gray-200 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: 查看詳情 (View Details Modal) */}
      {/* ========================================================================= */}
      {detailItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-slate-50/50">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  行程詳情 ｜ Day {detailItem.dayNumber}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {detailItem.item.title}
                </h3>
              </div>
              <button
                onClick={() => setDetailItem(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700">
              {/* Summary / Theme */}
              <div className="bg-blue-50/60 border border-blue-100 p-3.5 rounded-xl">
                <span className="text-xs font-bold text-blue-900 block mb-1">主題核心概念</span>
                <p className="text-blue-950 font-medium leading-relaxed">
                  {detailItem.item.summary}
                </p>
              </div>

              {/* Sub activities if matched raw day */}
              {(() => {
                const resolved = getRawDetailsForDetailItem();
                if (resolved && resolved.type === 'day') {
                  const rawDay = resolved.data;
                  return (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        當日時間軸活動細項
                      </h4>
                      <div className="space-y-2.5">
                        {((resolved as any).activities || rawDay.activities).map((act: any, i: number) => (
                          <div key={i} className="p-3 rounded-xl border border-gray-200 bg-white space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">{act.time}</span>
                              <span className="text-[11px] text-slate-500">{act.location}</span>
                            </div>
                            <div className="font-semibold text-slate-800">{act.title}</div>
                            <p className="text-xs text-slate-600 leading-relaxed">{act.description}</p>
                            {act.tips && (
                              <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200/60">
                                💡 {act.tips}
                              </div>
                            )}
                            {act.costEstimate && (
                              <div className="text-[11px] text-emerald-800 font-medium">
                                💰 {act.costEstimate}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Meals info */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-gray-200 space-y-1 text-xs">
                        <span className="font-bold text-slate-700 block">餐飲安排</span>
                        <div>早餐：{rawDay.meals.breakfast}</div>
                        <div>午餐：{rawDay.meals.lunch}</div>
                        <div>晚餐：{rawDay.meals.dinner}</div>
                        {rawDay.meals.snackOrCafe && <div>點心/咖啡：{rawDay.meals.snackOrCafe}</div>}
                      </div>

                      {/* Transport */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-gray-200 text-xs">
                        <span className="font-bold text-slate-700 block mb-0.5">交通方式</span>
                        <p>{rawDay.transportation}</p>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="space-y-2 text-xs">
                    <div><strong>地點/動線：</strong>{detailItem.item.location}</div>
                    {detailItem.item.tips && <div><strong>提醒備註：</strong>{detailItem.item.tips}</div>}
                    {detailItem.item.costEstimate && <div><strong>費用參考：</strong>{detailItem.item.costEstimate}</div>}
                  </div>
                );
              })()}
            </div>

            <div className="p-4 border-t border-gray-100 bg-slate-50/50 flex justify-end">
              <button
                onClick={() => setDetailItem(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-gray-200 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* UNIVERSAL CONFIRMATION DIALOG (防呆與重複提醒) */}
      {/* ========================================================================= */}
      {confirmDialog.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 max-w-md w-full p-5 space-y-4">
            <div>
              <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {confirmDialog.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed whitespace-pre-line">
                {confirmDialog.message}
              </p>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100">
              <button
                onClick={() => setConfirmDialog((c) => ({ ...c, isOpen: false }))}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                {confirmDialog.cancelText}
              </button>
              <button
                onClick={confirmDialog.onConfirm}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                {confirmDialog.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
