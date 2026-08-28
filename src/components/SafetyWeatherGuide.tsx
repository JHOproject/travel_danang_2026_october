import React from 'react';
import { 
  ShieldCheck, Umbrella, Car, 
  Coins, UtensilsCrossed, PhoneCall, CheckCircle
} from 'lucide-react';
import { SAFETY_WEATHER_TIPS } from '../data/itineraryData';

export const SafetyWeatherGuide: React.FC = () => {
  return (
    <div id="safety-weather-container" className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 mb-2 border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> 達人私房避坑錦囊
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            天氣、交通、飲食安全與防坑指南
          </h2>
          <p className="text-sm text-slate-500 mt-1.5">
            針對 10 月初出發的雨季應對策略、峴港叫車防騙、海鮮防宰稱重技巧與換匯防偽要訣，讓您安心享受無憂假期。
          </p>
        </div>
      </div>

      {/* Main 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SAFETY_WEATHER_TIPS.map((cat, idx) => (
          <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3.5 border-b border-gray-100">
                <div className="p-2.5 rounded-xl bg-[#F8F9FA] text-slate-900 border border-gray-200 shadow-xs">
                  {idx === 0 && <Umbrella className="w-4 h-4 text-blue-600" />}
                  {idx === 1 && <Car className="w-4 h-4 text-emerald-600" />}
                  {idx === 2 && <UtensilsCrossed className="w-4 h-4 text-rose-600" />}
                  {idx === 3 && <Coins className="w-4 h-4 text-amber-600" />}
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {cat.category}
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                {cat.tips.map((tip, ti) => (
                  <li key={ti} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Assistance Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-sm">
        <div className="flex items-center gap-2 mb-3.5 text-slate-300 font-semibold text-xs uppercase tracking-widest">
          <PhoneCall className="w-3.5 h-3.5 text-white" />
          <span>緊急求助電話與駐外聯絡處</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
            <span className="text-slate-400 block text-[11px]">駐河內台北辦事處 (北越/中越)</span>
            <span className="text-white font-mono font-bold text-xs mt-0.5 block">+84-24-3833-5501</span>
          </div>
          <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
            <span className="text-slate-400 block text-[11px]">外交部緊急聯絡專線</span>
            <span className="text-white font-mono font-bold text-xs mt-0.5 block">+886-800-085-095</span>
          </div>
          <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
            <span className="text-slate-400 block text-[11px]">越南報警 / 救護車</span>
            <span className="text-white font-mono font-bold text-xs mt-0.5 block">113 (報警) / 115 (急救)</span>
          </div>
          <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
            <span className="text-slate-400 block text-[11px]">峴港半島飯店前台</span>
            <span className="text-white font-mono font-bold text-xs mt-0.5 block">+84 236 3816 666</span>
          </div>
        </div>
      </div>
    </div>
  );
};

