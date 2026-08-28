import React, { useState } from 'react';
import { 
  Utensils, Star, MapPin, DollarSign, Lightbulb,
  Search
} from 'lucide-react';
import { RECOMMENDED_RESTAURANTS } from '../data/itineraryData';

export const FoodGuide: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', label: '全部餐廳美食' },
    { id: 'michelin', label: '米其林/必比登' },
    { id: 'seafood', label: '海鮮大排檔' },
    { id: 'street', label: '道地小吃煎餅' },
    { id: 'cafe', label: '咖啡與甜點' }
  ];

  const filteredList = RECOMMENDED_RESTAURANTS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filterCategory === 'michelin') return item.category.includes('米其林');
    if (filterCategory === 'seafood') return item.category.includes('海鮮');
    if (filterCategory === 'street') return item.category.includes('小吃') || item.category.includes('煎餅');
    if (filterCategory === 'cafe') return item.category.includes('咖啡');

    return true;
  });

  return (
    <div id="food-guide-container" className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 mb-2 border border-slate-200">
            <Utensils className="w-3.5 h-3.5 text-amber-500" /> 舌尖上的峴港
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            峴港必吃道地美食與口碑餐廳推薦
          </h2>
          <p className="text-sm text-slate-500 mt-1.5">
            精選中越代表性風味：涵蓋米其林推薦炸魚餅米線、酥脆越式煎餅、美溪沙灘在地活海鮮與手工布拉塔起司披薩。
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-5 border-t border-gray-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜尋餐廳、菜名（如：米線、煎餅、海鮮、披薩）..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-xs sm:text-sm bg-[#F8F9FA] border border-gray-200/80 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-900 focus:bg-white text-slate-900"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                  filterCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-[#F8F9FA] text-slate-600 hover:bg-slate-200/80 border border-gray-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredList.map((res, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow transition-shadow p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                  {res.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  {res.rating}
                </span>
              </div>

              <h3 className="font-bold text-base text-slate-900 mt-2">
                {res.name}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {res.vietnameseName}
              </p>

              <div className="mt-4 space-y-2.5 text-xs">
                <div className="bg-[#F8F9FA] p-3 rounded-xl border border-gray-100">
                  <span className="font-semibold text-slate-800 block mb-0.5">招牌必點：</span>
                  <span className="text-slate-600">{res.specialty}</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-600">
                  <DollarSign className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>價位：{res.priceRange}</span>
                </div>

                <div className="flex items-start gap-1.5 text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{res.address}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-gray-100">
              <div className="flex items-start gap-2 text-xs text-slate-700 bg-[#F8F9FA] p-3 rounded-xl border border-gray-200/80">
                <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{res.proTip}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

