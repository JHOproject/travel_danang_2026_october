import React, { useState } from 'react';
import { 
  Clock, MapPin, AlertCircle, Utensils, Car, ShieldAlert,
  ChevronRight, Info, Coffee, Umbrella, Camera, DollarSign,
  Share2, Check, CalendarCheck, ShieldCheck, AlertTriangle,
  Sparkles, Target, Scissors, RefreshCw, Layers, ArrowRight,
  Sun, CloudRain, Shield, ChevronDown, ChevronUp, Landmark
} from 'lucide-react';
import { MAIN_ITINERARY, WEATHER_MODULES, TWO_LEVEL_RAIN_GUIDE } from '../data/itineraryData';
import { Activity, DayPlan } from '../types';

export const DayTimeline: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [day5PlanChoice, setDay5PlanChoice] = useState<'A' | 'B'>('A');
  const [showWeatherMatrix, setShowWeatherMatrix] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const baseDay = MAIN_ITINERARY[selectedDayIndex];

  // If Day 5 is selected and Plan B is active, merge/substitute Plan B data
  const currentDay: DayPlan = (baseDay.dayNumber === 5 && day5PlanChoice === 'B' && baseDay.alternativePlanB) 
    ? {
        ...baseDay,
        title: baseDay.alternativePlanB.title,
        subtitle: baseDay.alternativePlanB.subtitle,
        theme: baseDay.alternativePlanB.theme,
        coreActivities: baseDay.alternativePlanB.coreActivities,
        optionalActivities: ['美溪沙灘日落散步', '精品手沖品鑑'],
        cutIfTiredOrRaining: ['沙灘漫步（可改在飯店房內或 SPA 館內徹底放鬆）'],
        meals: baseDay.alternativePlanB.meals,
        transportation: baseDay.alternativePlanB.transportation,
        weatherAdvice: baseDay.alternativePlanB.weatherAdvice,
        activities: baseDay.alternativePlanB.activities
      }
    : baseDay;

  const getCategoryBadge = (category: Activity['category']) => {
    switch (category) {
      case 'food':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-200/70"><Utensils className="w-3 h-3 text-amber-600" /> 美食推薦</span>;
      case 'sightseeing':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200/70"><Camera className="w-3 h-3 text-blue-600" /> 景點必訪</span>;
      case 'relax':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/70"><Coffee className="w-3 h-3 text-emerald-600" /> 休閒放鬆</span>;
      case 'transport':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200"><Car className="w-3 h-3 text-slate-500" /> 交通接駁</span>;
      case 'nightlife':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-semibold border border-purple-200/70"><Sparkles className="w-3 h-3 text-purple-600" /> 夜景盛宴</span>;
      case 'shopping':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-semibold border border-rose-200/70"><DollarSign className="w-3 h-3 text-rose-600" /> 採買換匯</span>;
      default:
        return null;
    }
  };

  const getWeatherBadge = (suitability?: Activity['weatherSuitability']) => {
    switch (suitability) {
      case 'sunny-preferred':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200" title="晴天體驗最佳，微雨需留意戶外地面">
            <Sun className="w-3 h-3 text-amber-500" /> 晴天必備
          </span>
        );
      case 'rain-safe':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200" title="微雨或多雲可照常進行">
            <CloudRain className="w-3 h-3 text-blue-500" /> 小雨可行
          </span>
        );
      case 'indoor-only':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200" title="全室內場所，完全不受風雨影響">
            <Landmark className="w-3 h-3 text-emerald-600" /> 全室內無阻
          </span>
        );
      case 'heavy-rain-avoid':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200" title="遇大雨、雷雨或強風應果斷取消">
            <AlertTriangle className="w-3 h-3 text-rose-600" /> 豪雨避免
          </span>
        );
      default:
        return null;
    }
  };

  const handleShareDay = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div id="day-timeline-container" className="space-y-6">
      {/* Day Selector Ribbon */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-slate-400" /> 選擇日期切換
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowWeatherMatrix(prev => !prev)}
              className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold border border-blue-200 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{showWeatherMatrix ? '收合天氣調度表' : '🌦️ 查看天氣調度與雨季對策'}</span>
            </button>
            <span className="text-xs text-slate-500 hidden sm:inline">2026.10.01 - 10.06 完整行程</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {MAIN_ITINERARY.map((day, idx) => {
            const isSelected = selectedDayIndex === idx;
            return (
              <button
                key={day.dayNumber}
                id={`day-select-btn-${day.dayNumber}`}
                onClick={() => setSelectedDayIndex(idx)}
                className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-[#F8F9FA] hover:bg-slate-100 text-slate-700 border-gray-200/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    Day {day.dayNumber}
                  </span>
                  <span className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                    {day.weekday.replace('星期', '週')}
                  </span>
                </div>
                <div className="text-sm font-semibold truncate mt-1">{day.date.slice(5)}</div>
                <div className={`text-[11px] truncate mt-0.5 font-medium ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {day.dayNumber === 1 && '抵達 ＆ 換匯教堂'}
                  {day.dayNumber === 2 && '巴拿山 ＆ 雲端佛手'}
                  {day.dayNumber === 3 && '五行山 ＆ 會安夜景'}
                  {day.dayNumber === 4 && '山茶半島 ＆ 龍橋秀'}
                  {day.dayNumber === 5 && '順化皇城 vs 峴港度假'}
                  {day.dayNumber === 6 && '占婆館 ＆ 送機返台'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expandable Weather Swap Matrix & Rain Strategy Panel */}
      {showWeatherMatrix && (
        <div className="bg-white rounded-2xl shadow-sm border border-blue-200 p-5 sm:p-6 space-y-6 transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-1">
                <Umbrella className="w-3.5 h-3.5 text-blue-600" /> 中越 10 月雨季機動調度心法
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                天氣模組化交換機制 (Day 2 ~ Day 5 隨氣候雷達互換)
              </h3>
            </div>
            <button
              onClick={() => setShowWeatherMatrix(false)}
              className="text-xs text-slate-400 hover:text-slate-700 cursor-pointer p-1"
            >
              ✕ 關閉
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WEATHER_MODULES.map((mod) => (
              <div key={mod.id} className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">{mod.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    mod.riskLevel === 'high' ? 'bg-rose-100 text-rose-700' :
                    mod.riskLevel === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    雨季敏感度：{mod.riskLevel === 'high' ? '高 (需晴天)' : mod.riskLevel === 'medium' ? '中 (雨天備案)' : '低 (全天候)'}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">適宜條件：</span>
                  <span className="text-slate-600">{mod.primaryCondition}</span>
                </div>
                <div>
                  <span className="font-semibold text-rose-700">避免天候：</span>
                  <span className="text-slate-600">{mod.avoidWhen}</span>
                </div>
                <div className="pt-2 border-t border-gray-200 text-slate-800 font-medium">
                  💡 <span className="font-semibold">調度對策：</span>{mod.swapAction}
                </div>
              </div>
            ))}
          </div>

          {/* Two Level Rain Guide Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
              <h4 className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <CloudRain className="w-4 h-4 text-blue-600" />
                {TWO_LEVEL_RAIN_GUIDE.level1.title}
              </h4>
              <p className="text-xs text-blue-800 leading-relaxed">
                {TWO_LEVEL_RAIN_GUIDE.level1.description}
              </p>
              <div className="text-xs text-blue-900 font-semibold pt-1">推薦行程：</div>
              <ul className="text-xs text-blue-800 list-disc list-inside space-y-0.5">
                {TWO_LEVEL_RAIN_GUIDE.level1.safeActivities.slice(0, 4).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
              <h4 className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                {TWO_LEVEL_RAIN_GUIDE.level2.title}
              </h4>
              <p className="text-xs text-rose-800 leading-relaxed">
                {TWO_LEVEL_RAIN_GUIDE.level2.description}
              </p>
              <div className="text-xs text-rose-900 font-semibold pt-1">極端天氣室內替換首選：</div>
              <ul className="text-xs text-rose-800 list-disc list-inside space-y-0.5">
                {TWO_LEVEL_RAIN_GUIDE.level2.recommendedList.slice(0, 4).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Selected Day Main Content Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Day Header Banner */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-white text-slate-900 font-bold text-xs px-2.5 py-0.5 rounded-full">
                  Day {currentDay.dayNumber}
                </span>
                <span className="text-slate-300 text-xs font-medium">
                  {currentDay.date} ({currentDay.weekday})
                </span>
                {baseDay.dayNumber === 5 && (
                  <span className="bg-amber-500/20 text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                    雙方案自選：目前檢視方案 {day5PlanChoice}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentDay.title}
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                {currentDay.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleShareDay}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                title="複製連結"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? '已複製連結' : '分享此日'}</span>
              </button>
            </div>
          </div>

          {/* Highlights pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-800">
            <span className="text-xs font-medium text-slate-400 mr-1">當日亮點：</span>
            {currentDay.highlights.map((hl, i) => (
              <span key={i} className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800/90 text-slate-200 border border-slate-700/80">
                {hl}
              </span>
            ))}
          </div>
        </div>

        {/* Day 5 Special Plan A / Plan B Toggle Bar */}
        {baseDay.dayNumber === 5 && (
          <div className="bg-amber-50/70 border-b border-amber-200 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
                  Day 5 雙方案自由切換（順化歷史 vs 峴港放鬆）
                </span>
                <span className="text-xs text-slate-600">
                  根據個人對「長途車程 (5hr)」與「歷史文化 vs SPA度假」的偏好點選切換：
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-amber-300 shadow-2xs shrink-0">
                <button
                  onClick={() => setDay5PlanChoice('A')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    day5PlanChoice === 'A'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  方案 A：順化皇城一日遊
                </button>
                <button
                  onClick={() => setDay5PlanChoice('B')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    day5PlanChoice === 'B'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  方案 B：峴港度假慢活日
                </button>
              </div>
            </div>

            {/* Comparison Matrix Table */}
            {baseDay.alternativePlanB && (
              <div className="bg-white rounded-xl border border-amber-200/80 p-3 text-xs overflow-x-auto">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-slate-700">
                  <div className="p-2 rounded-lg bg-[#F8F9FA]">
                    <span className="text-slate-400 block text-[10px]">往返車程</span>
                    <span className="font-bold text-slate-900">
                      {day5PlanChoice === 'A' ? '約 4.5~5 小時' : '0 小時 (市區 10 分)'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F8F9FA]">
                    <span className="text-slate-400 block text-[10px]">體力消耗</span>
                    <span className="font-bold text-slate-900">
                      {day5PlanChoice === 'A' ? '中偏高 (大面積步行)' : '極低 (全身舒壓)'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F8F9FA]">
                    <span className="text-slate-400 block text-[10px]">文化深度</span>
                    <span className="font-bold text-slate-900">
                      {day5PlanChoice === 'A' ? '★★★★★ (阮朝大內)' : '★★☆☆☆ (市區採買)'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F8F9FA]">
                    <span className="text-slate-400 block text-[10px]">放鬆指數</span>
                    <span className="font-bold text-slate-900">
                      {day5PlanChoice === 'A' ? '★★☆☆☆' : '★★★★★ (頂級SPA+泳池)'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F8F9FA] col-span-2 sm:col-span-1">
                    <span className="text-slate-400 block text-[10px]">雨季風險</span>
                    <span className="font-bold text-slate-900">
                      {day5PlanChoice === 'A' ? '中高 (長途山海路況)' : '極低 (全室內設施)'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3 Core Decision Answers Box (今日決策三問與快速判斷列) */}
        <div className="p-5 sm:p-6 bg-slate-50/80 border-b border-gray-200 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-slate-600" />
            今日快速決策導航（解答自由行三大核心問題）
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* 1. 今日核心 */}
            <div className="bg-white p-4 rounded-xl border border-blue-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-bold text-xs text-blue-900 mb-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">1</span>
                  <span>今日最核心去哪？(必排精華)</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-800">
                  {currentDay.coreActivities.map((core, ci) => (
                    <div key={ci} className="flex items-start gap-1.5 font-semibold">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>{core}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[11px] text-slate-400 mt-2.5 pt-2 border-t border-gray-100">
                主軸體驗：{currentDay.theme}
              </div>
            </div>

            {/* 2. 可刪除/下雨備案 */}
            <div className="bg-white p-4 rounded-xl border border-amber-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-bold text-xs text-amber-900 mb-2">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">2</span>
                  <span>若太累或下雨，優先刪除什麼？</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {currentDay.cutIfTiredOrRaining?.map((cut, ci) => (
                    <div key={ci} className="flex items-start gap-1.5">
                      <Scissors className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{cut}</span>
                    </div>
                  ))}
                  {currentDay.optionalActivities && currentDay.optionalActivities.length > 0 && (
                    <div className="text-[11px] text-slate-500 pt-1">
                      <span className="font-semibold text-slate-700">彈性選配：</span>
                      {currentDay.optionalActivities.join('、')}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-[11px] text-amber-700/80 mt-2.5 pt-2 border-t border-gray-100 font-medium">
                優先保證核心體驗與睡眠休息
              </div>
            </div>

            {/* 3. 天氣調度建議 */}
            <div className="bg-white p-4 rounded-xl border border-emerald-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-bold text-xs text-emerald-900 mb-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">3</span>
                  <span>若天氣不佳，該換成哪套？</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentDay.weatherSwapAdvice.suggestion}
                </p>
              </div>
              {currentDay.weatherSwapAdvice.targetDayNumber && (
                <div className="mt-2.5 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedDayIndex((currentDay.weatherSwapAdvice.targetDayNumber || 1) - 1)}
                    className="text-[11px] text-emerald-700 hover:text-emerald-900 font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>快速跳至 Day {currentDay.weatherSwapAdvice.targetDayNumber} 檢視</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Day Essential Meta Panels (Meals, Transport, Weather) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 sm:p-6 bg-[#F8F9FA]/60 border-b border-gray-100">
          {/* Meals */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2.5">
              <div className="w-6 h-6 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                <Utensils className="w-3.5 h-3.5" />
              </div>
              <span>今日餐飲安排</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-700">
              <p><span className="font-semibold text-slate-900">早：</span>{currentDay.meals.breakfast}</p>
              <p><span className="font-semibold text-slate-900">午：</span>{currentDay.meals.lunch}</p>
              <p><span className="font-semibold text-slate-900">晚：</span>{currentDay.meals.dinner}</p>
              {currentDay.meals.snackOrCafe && (
                <p><span className="font-semibold text-slate-900">茶：</span>{currentDay.meals.snackOrCafe}</p>
              )}
            </div>
          </div>

          {/* Transport */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2.5">
              <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                <Car className="w-3.5 h-3.5" />
              </div>
              <span>交通接駁動線</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {currentDay.transportation}
            </p>
          </div>

          {/* Weather & Tips */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2.5">
              <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                <Umbrella className="w-3.5 h-3.5" />
              </div>
              <span>天候應變指南</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {currentDay.weatherAdvice}
            </p>
          </div>
        </div>

        {/* Timeline Activities List */}
        <div className="p-5 sm:p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              當日時程規劃與景點須知
            </h3>
            <span className="text-xs text-slate-400 font-medium">共 {currentDay.activities.length} 個節點</span>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-4 pl-4 sm:pl-6 space-y-6">
            {currentDay.activities.map((act, actIdx) => (
              <div
                key={actIdx}
                id={`activity-${currentDay.dayNumber}-${actIdx}`}
                className={`relative group bg-white hover:bg-slate-50/60 p-4 sm:p-5 rounded-2xl border transition-all shadow-xs ${
                  act.isCore 
                    ? 'border-blue-200/80 bg-blue-50/10' 
                    : act.canSkipIfTired 
                      ? 'border-dashed border-gray-300' 
                      : 'border-gray-100'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute -left-[25px] sm:-left-[33px] top-5 w-4 h-4 rounded-full bg-white border-4 shadow-xs ${
                  act.isCore ? 'border-blue-600' : 'border-slate-900'
                }`}></div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-white">
                      <Clock className="w-3 h-3 text-slate-300" />
                      {act.time}
                    </span>
                    {getCategoryBadge(act.category)}
                    {act.isCore && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-2xs">
                        <Target className="w-3 h-3" /> 今日核心
                      </span>
                    )}
                    {act.isOptional && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-gray-200">
                        ✨ 彈性選配
                      </span>
                    )}
                    {act.canSkipIfTired && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        <Scissors className="w-3 h-3" /> 太累可刪
                      </span>
                    )}
                    {getWeatherBadge(act.weatherSuitability)}
                  </div>

                  {act.costEstimate && (
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-gray-200 inline-flex items-center gap-1 w-fit">
                      <DollarSign className="w-3 h-3 text-slate-500" />
                      {act.costEstimate}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-slate-900 mt-1">
                  {act.title}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-700">{act.location}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {act.description}
                </p>

                {/* Practical Notes & Requirements Panel (Opening Hours, Reservation, Restrictions) */}
                {(act.openingHours || act.reservation || (act.restrictions && act.restrictions.length > 0)) && (
                  <div className="mt-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5 text-[11px] uppercase tracking-wide">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                      重要須知與官方規範
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-200/60 text-slate-700">
                      {act.openingHours && (
                        <div className="flex items-start gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900">營業/營運時間：</span>
                            <span className="text-slate-600">{act.openingHours}</span>
                          </div>
                        </div>
                      )}

                      {act.reservation && (
                        <div className="flex items-start gap-1.5">
                          <CalendarCheck className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900">預約與行前確認：</span>
                            <span className="text-slate-600">{act.reservation}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {act.restrictions && act.restrictions.length > 0 && (
                      <div className="pt-1.5 border-t border-slate-200/60">
                        <div className="flex items-center gap-1 text-amber-800 font-semibold mb-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>法規限制與注意事項：</span>
                        </div>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
                          {act.restrictions.map((res, rIdx) => (
                            <li key={rIdx} className="leading-relaxed">
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Tips and backup flags */}
                <div className="space-y-2 mt-3 pt-3 border-t border-gray-100">
                  {act.tips && (
                    <div className="flex items-start gap-2 text-xs bg-amber-50/60 text-amber-900 p-3 rounded-xl border border-amber-100">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">達人叮嚀：</span>
                        {act.tips}
                      </div>
                    </div>
                  )}

                  {act.weatherBackup && (
                    <div className="flex items-start gap-2 text-xs bg-blue-50/60 text-blue-900 p-3 rounded-xl border border-blue-100">
                      <Umbrella className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">雨天備案：</span>
                        {act.weatherBackup}
                      </div>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {act.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {act.tags.map((t, ti) => (
                      <span key={ti} className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-gray-200/60">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Day navigation bottom bar */}
        <div className="flex items-center justify-between p-4 bg-[#F8F9FA] border-t border-gray-100 text-sm">
          <button
            disabled={selectedDayIndex === 0}
            onClick={() => setSelectedDayIndex((prev) => Math.max(0, prev - 1))}
            className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-slate-700 font-medium hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors shadow-xs"
          >
            ← 上一天
          </button>
          <span className="text-xs text-slate-500 font-medium">
            第 {selectedDayIndex + 1} / {MAIN_ITINERARY.length} 天
          </span>
          <button
            disabled={selectedDayIndex === MAIN_ITINERARY.length - 1}
            onClick={() => setSelectedDayIndex((prev) => Math.min(MAIN_ITINERARY.length - 1, prev + 1))}
            className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-slate-700 font-medium hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors shadow-xs"
          >
            下一天 →
          </button>
        </div>
      </div>
    </div>
  );
};
