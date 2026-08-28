import React, { useState } from 'react';
import { 
  Clock, MapPin, AlertCircle, Utensils, Car, ShieldAlert,
  ChevronRight, Info, Coffee, Umbrella, Camera, DollarSign,
  Share2, Check, CalendarCheck, ShieldCheck, AlertTriangle
} from 'lucide-react';
import { MAIN_ITINERARY } from '../data/itineraryData';
import { Activity } from '../types';

export const DayTimeline: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const currentDay = MAIN_ITINERARY[selectedDayIndex];
  const [copiedLink, setCopiedLink] = useState(false);

  const getCategoryBadge = (category: Activity['category']) => {
    switch (category) {
      case 'food':
        return <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium border border-amber-100"><Utensils className="w-3 h-3 text-amber-600" /> 美食推薦</span>;
      case 'sightseeing':
        return <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100"><Camera className="w-3 h-3 text-blue-600" /> 景點必訪</span>;
      case 'relax':
        return <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-100"><Coffee className="w-3 h-3 text-emerald-600" /> 休閒放鬆</span>;
      case 'transport':
        return <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200"><Car className="w-3 h-3 text-slate-500" /> 交通接駁</span>;
      case 'nightlife':
        return <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-medium border border-purple-100"><Coffee className="w-3 h-3 text-purple-600" /> 夜景小吃</span>;
      case 'shopping':
        return <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-medium border border-rose-100"><DollarSign className="w-3 h-3 text-rose-600" /> 採買換匯</span>;
      default:
        return null;
    }
  };

  const handleShareDay = (dayTitle: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div id="day-timeline-container" className="space-y-6">
      {/* Day Selector Ribbon */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">選擇日期切換</span>
          <span className="text-xs text-slate-500">2026.10.01 - 10.06 完整行程</span>
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
                <div className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {day.title.split('➔')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Main Content */}
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
                onClick={() => handleShareDay(currentDay.title)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                title="分享此日行程"
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
              <span>交通接駁方式</span>
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
              <span>天氣與雨季對策</span>
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
              六日深度時程規劃與注意事項
            </h3>
            <span className="text-xs text-slate-400">共 {currentDay.activities.length} 個節點</span>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-4 pl-4 sm:pl-6 space-y-6">
            {currentDay.activities.map((act, actIdx) => (
              <div
                key={actIdx}
                id={`activity-${currentDay.dayNumber}-${actIdx}`}
                className="relative group bg-white hover:bg-slate-50/60 p-4 sm:p-5 rounded-2xl border border-gray-100 transition-all shadow-xs"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[25px] sm:-left-[33px] top-5 w-4 h-4 rounded-full bg-white border-4 border-slate-900 shadow-xs"></div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-white">
                      <Clock className="w-3 h-3 text-slate-300" />
                      {act.time}
                    </span>
                    {getCategoryBadge(act.category)}
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

                <p className="text-sm text-slate-600 leading-relaxed">
                  {act.description}
                </p>

                {/* Practical Notes & Requirements Panel (Opening Hours, Reservation, Restrictions) */}
                {(act.openingHours || act.reservation || (act.restrictions && act.restrictions.length > 0)) && (
                  <div className="mt-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5 text-[11px] uppercase tracking-wide">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                      重要須知與規範
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
                            <span className="font-semibold text-slate-900">預約規定：</span>
                            <span className="text-slate-600">{act.reservation}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {act.restrictions && act.restrictions.length > 0 && (
                      <div className="pt-1.5 border-t border-slate-200/60">
                        <div className="flex items-center gap-1 text-amber-800 font-semibold mb-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>遊客限制與注意事項：</span>
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
