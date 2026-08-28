import React, { useState } from 'react';
import { 
  DollarSign, Calculator, Plane, Hotel, Car, Utensils, 
  Ticket, Sparkles, ArrowRight, RefreshCw, CheckCircle2, TrendingUp
} from 'lucide-react';
import { BUDGET_TIERS, TRIP_INFO } from '../data/itineraryData';
import { BudgetTier } from '../types';

export const BudgetCalculator: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>(BUDGET_TIERS[1].id);
  const [numberOfTravelers, setNumberOfTravelers] = useState<number>(2);
  const [twdInput, setTwdInput] = useState<number>(1000);
  const [vndInput, setVndInput] = useState<number>(800000);

  const selectedTier = BUDGET_TIERS.find(t => t.id === selectedTierId) || BUDGET_TIERS[1];

  const handleTwdChange = (val: number) => {
    setTwdInput(val);
    setVndInput(Math.round(val * 800));
  };

  const handleVndChange = (val: number) => {
    setVndInput(val);
    setTwdInput(Math.round(val / 800));
  };

  return (
    <div id="budget-calculator-container" className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 mb-2 border border-slate-200">
            <DollarSign className="w-3.5 h-3.5 text-amber-500" /> 2026 最新行情深度精算
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            不同玩法花費分析 ＆ 互動預算計算機
          </h2>
          <p className="text-sm text-slate-500 mt-1.5">
            我們針對「小資輕裝」、「經典玩家」與「奢華尊榮」三種檔次進行細項拆解（包含機票、半島飯店住宿、包車、門票、SPA 與美食）。
          </p>
        </div>

        {/* Currency Quick Tool */}
        <div className="mt-6 p-5 rounded-2xl bg-slate-900 text-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">實用台幣 ⇄ 越南盾匯率速算器</h4>
              <p className="text-xs text-slate-400">基準匯率：1 TWD ≈ 800 VND（快速口訣：越盾去 3 個 0 乘 1.25 ＝ 台幣）</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <div className="flex items-center bg-white/10 border border-white/15 rounded-xl px-3 py-1.5">
              <span className="text-slate-400 mr-1.5 font-bold">NT$</span>
              <input
                type="number"
                value={twdInput}
                onChange={(e) => handleTwdChange(Number(e.target.value))}
                className="w-20 bg-transparent text-white font-mono font-bold focus:outline-none"
              />
            </div>
            <span className="text-slate-400 font-bold">≈</span>
            <div className="flex items-center bg-white/10 border border-white/15 rounded-xl px-3 py-1.5">
              <input
                type="number"
                value={vndInput}
                onChange={(e) => handleVndChange(Number(e.target.value))}
                className="w-28 bg-transparent text-white font-mono font-bold focus:outline-none"
              />
              <span className="text-slate-400 ml-1.5 font-bold">VND</span>
            </div>
          </div>
        </div>

        {/* Tier Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {BUDGET_TIERS.map((tier) => {
            const isSelected = tier.id === selectedTierId;
            return (
              <button
                key={tier.id}
                id={`budget-tier-btn-${tier.id}`}
                onClick={() => setSelectedTierId(tier.id)}
                className={`p-5 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-[#F8F9FA] hover:bg-slate-100 text-slate-800 border-gray-200/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/15 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {tier.name.split(' ')[0]}
                    </span>
                    {tier.id === 'comfort-standard' && (
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isSelected ? 'bg-white/10 text-white border-white/20' : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        推薦首選
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold mt-2.5">
                    {tier.name}
                  </h3>

                  <div className="mt-3">
                    <span className="text-2xl font-bold">
                      NT$ {tier.totalTWD.toLocaleString()}
                    </span>
                    <span className={`text-xs block ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                      / 每人預估 (約 {(tier.totalVND / 10000).toFixed(0)} 萬 VND)
                    </span>
                  </div>

                  <p className={`text-xs mt-2.5 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {tier.targetUser}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-xs font-medium ${
                  isSelected ? 'border-slate-800 text-slate-300' : 'border-gray-200 text-slate-500'
                }`}>
                  點擊查看費用拆解清單 ↓
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Tier Breakdown & Interactive Calculator */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">目前檢視</span>
            <h3 className="text-lg font-bold text-slate-900">
              【{selectedTier.name}】細項費用拆解表
            </h3>
          </div>

          <div className="flex items-center gap-2 bg-[#F8F9FA] p-1.5 rounded-full border border-gray-200/80">
            <span className="text-xs text-slate-600 font-medium px-2">出行人數：</span>
            {[1, 2, 4, 6].map((num) => (
              <button
                key={num}
                onClick={() => setNumberOfTravelers(num)}
                className={`px-3 py-1 text-xs font-bold rounded-full cursor-pointer transition-colors ${
                  numberOfTravelers === num
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {num} 人
              </button>
            ))}
          </div>
        </div>

        {/* Breakdown Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-800"><Plane className="w-4 h-4 text-blue-500" /> 1. 往返機票 (含稅)</span>
              <span className="font-mono font-bold text-slate-900">NT$ {(selectedTier.breakdown.flight * numberOfTravelers).toLocaleString()}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">單人約 NT$ {selectedTier.breakdown.flight.toLocaleString()} (直飛峴港含行李)</p>
          </div>

          <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-800"><Hotel className="w-4 h-4 text-orange-500" /> 2. 5晚半島飯店 (雙人分攤)</span>
              <span className="font-mono font-bold text-slate-900">NT$ {(selectedTier.breakdown.hotel * numberOfTravelers).toLocaleString()}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">單人約 NT$ {selectedTier.breakdown.hotel.toLocaleString()} (含每日豐盛海景自助早餐)</p>
          </div>

          <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-800"><Car className="w-4 h-4 text-green-500" /> 3. 6天當地交通 (包車+Grab)</span>
              <span className="font-mono font-bold text-slate-900">NT$ {(selectedTier.breakdown.transport * numberOfTravelers).toLocaleString()}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">單人約 NT$ {selectedTier.breakdown.transport.toLocaleString()} (含機場接送、巴拿山、會安與順化)</p>
          </div>

          <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-800"><Utensils className="w-4 h-4 text-rose-500" /> 4. 6天餐飲美食</span>
              <span className="font-mono font-bold text-slate-900">NT$ {(selectedTier.breakdown.food * numberOfTravelers).toLocaleString()}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">單人約 NT$ {selectedTier.breakdown.food.toLocaleString()} (活海鮮、Pizza 4P's、米其林米線與咖啡)</p>
          </div>

          <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-800"><Ticket className="w-4 h-4 text-purple-500" /> 5. 景點門票與娛樂</span>
              <span className="font-mono font-bold text-slate-900">NT$ {(selectedTier.breakdown.activities * numberOfTravelers).toLocaleString()}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">單人約 NT$ {selectedTier.breakdown.activities.toLocaleString()} (巴拿山門票Buffet、竹籃船、水燈等)</p>
          </div>

          <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-800"><Sparkles className="w-4 h-4 text-amber-500" /> 6. SPA按摩與伴手禮</span>
              <span className="font-mono font-bold text-slate-900">NT$ {(selectedTier.breakdown.spaShopping * numberOfTravelers).toLocaleString()}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">單人約 NT$ {selectedTier.breakdown.spaShopping.toLocaleString()} (越式熱石草本按摩與樂天超市)</p>
          </div>
        </div>

        {/* Total Calculation Card (Clean Slate Card) */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-sm">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {numberOfTravelers} 人同行 ｜ 6 天 5 夜 預估總支出
            </span>
            <div className="text-3xl font-bold mt-1">
              NT$ {(selectedTier.totalTWD * numberOfTravelers).toLocaleString()}
            </div>
            <span className="text-xs text-slate-400 mt-0.5 block">
              約 {((selectedTier.totalVND * numberOfTravelers) / 10000).toLocaleString()} 萬 越南盾
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs space-y-1.5 max-w-sm">
            <div className="font-bold text-white">💡 達人省錢小撇步：</div>
            <div className="text-slate-300">• 4人同行分攤包車與海鮮費用最划算！</div>
            <div className="text-slate-300">• 美金 100 元新鈔在韓市場金店換匯，比在機場或台灣銀行省下 3~5% 匯差。</div>
          </div>
        </div>
      </div>
    </div>
  );
};
