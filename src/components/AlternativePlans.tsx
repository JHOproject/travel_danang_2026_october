import React, { useState } from 'react';
import { 
  Compass, Sparkles, Landmark, Umbrella, 
  CheckCircle2, ArrowRight, DollarSign, Users, Award, Shield
} from 'lucide-react';
import { ALTERNATIVE_STYLES } from '../data/itineraryData';
import { AlternativeStyle } from '../types';

export const AlternativePlans: React.FC = () => {
  const [selectedStyleId, setSelectedStyleId] = useState<string>(ALTERNATIVE_STYLES[0].id);

  const selectedStyle = ALTERNATIVE_STYLES.find(s => s.id === selectedStyleId) || ALTERNATIVE_STYLES[0];

  const getStyleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'Umbrella':
        return <Umbrella className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div id="alternative-plans-container" className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 mb-2 border border-slate-200">
            <Award className="w-3.5 h-3.5 text-amber-500" /> 彈性客製選單
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            四大主題備選玩法：依照喜好與天候自由切換
          </h2>
          <p className="text-sm text-slate-500 mt-1.5">
            我們針對「初訪打卡」、「極致奢華放鬆」、「歷史古文明」以及「10月雨季/親子備案」量身打造了四套完整替換風格。
          </p>
        </div>

        {/* Style Selection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6">
          {ALTERNATIVE_STYLES.map((style) => {
            const isSelected = style.id === selectedStyleId;
            return (
              <button
                key={style.id}
                id={`alt-style-card-${style.id}`}
                onClick={() => setSelectedStyleId(style.id)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-[#F8F9FA] hover:bg-slate-100 text-slate-800 border-gray-200/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`p-2 rounded-xl ${isSelected ? 'bg-white/10 text-white' : 'bg-white text-slate-800 border border-gray-200 shadow-xs'}`}>
                      {getStyleIcon(style.iconName)}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {style.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base leading-snug">
                    {style.title.split('：')[1] || style.title}
                  </h3>

                  <p className={`text-xs mt-1.5 line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {style.coreVibe}
                  </p>
                </div>

                <div className={`mt-4 pt-2.5 border-t text-xs font-semibold ${
                  isSelected ? 'border-slate-800 text-white' : 'border-gray-200 text-slate-700'
                }`}>
                  {style.estimatedCostTWD}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Style Deep-Dive View */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Style Banner */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  {selectedStyle.tag}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedStyle.title.split('：')[0]}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedStyle.title}
              </h3>
            </div>

            <div className="bg-white/10 text-white border border-white/15 px-4 py-2 rounded-xl text-right sm:text-left">
              <span className="text-[11px] block opacity-70">預估每人預算</span>
              <span className="text-sm font-bold">{selectedStyle.estimatedCostTWD}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-slate-400 block text-xs">適合對象族群</span>
                <span className="text-slate-200 font-medium">{selectedStyle.targetAudience}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-slate-400 block text-xs">核心特色氛圍</span>
                <span className="text-slate-200 font-medium">{selectedStyle.coreVibe}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Style Highlights & Schedule Summary */}
        <div className="p-5 sm:p-6 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
              此玩法的必排核心亮點
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedStyle.keyHighlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#F8F9FA] p-3.5 rounded-xl border border-gray-100 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {i + 1}
                  </div>
                  <span className="font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-slate-400" />
              6 天 5 夜 替換路線概要規劃
            </h4>
            <div className="space-y-2.5">
              {selectedStyle.daysSummary.map((ds, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3.5 rounded-xl border border-gray-100 bg-[#F8F9FA] hover:bg-slate-100/80 transition-colors">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white font-mono text-xs font-bold">
                      {ds.day}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 bg-white border border-gray-200 px-2.5 py-0.5 rounded-full shadow-xs">
                      {ds.theme}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 flex-1 font-medium">
                    {ds.schedule}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
