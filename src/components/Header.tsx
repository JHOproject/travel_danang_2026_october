import React from 'react';
import { Calendar, Plane, Hotel, Download, Copy, Check, MapPin, Sparkles, Umbrella } from 'lucide-react';
import { TRIP_INFO } from '../data/itineraryData';
import { generateItineraryTxt, downloadTxtFile } from '../utils/txtGenerator';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenTxtModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenTxtModal }) => {
  const [copied, setCopied] = React.useState(false);

  const handleQuickDownload = () => {
    const txtContent = generateItineraryTxt();
    downloadTxtFile(txtContent, '峴港6天5夜達人行程手冊_20261001-1006.txt');
  };

  const handleQuickCopy = () => {
    const txtContent = generateItineraryTxt();
    navigator.clipboard.writeText(txtContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header id="main-header" className="bg-white text-slate-900 border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      {/* Top Meta Bar */}
      <div className="bg-slate-50/80 border-b border-gray-100 text-slate-500 text-xs py-1.5 px-4 font-medium flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
          <span className="bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">達人精選</span>
          <span className="truncate">2026.10.01 - 10.06 ｜ 飯店：峴港半島飯店 (Peninsula Hotel) ｜ 雨季晴雨彈性指南</span>
        </div>
      </div>

      {/* Main Title & Action Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 6 天 5 夜 深度全景行程
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                <Umbrella className="w-3.5 h-3.5 text-blue-500" /> 10月雨季晴雨彈性對策
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              2026 峴港・中越魅力奢華之行
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-3xl">
              2026.10.01 - 10.06 | 飯店：峴港半島飯店 (Peninsula Hotel) ｜ 涵蓋巴拿山、會安古鎮、米其林美食與安全指南
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              id="btn-quick-download-txt"
              onClick={handleQuickDownload}
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              title="一鍵下載純文字 TXT 行程手冊，方便存在手機離線查看"
            >
              <Download className="w-4 h-4 text-white" />
              <span>一鍵下載行程 (.txt)</span>
            </button>

            <button
              id="btn-copy-txt"
              onClick={handleQuickCopy}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer border border-gray-200 flex items-center gap-1.5"
              title="複製全文至剪貼簿"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">已複製全文</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>複製全文</span>
                </>
              )}
            </button>

            <button
              id="btn-open-custom-export"
              onClick={onOpenTxtModal}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer border border-gray-200"
            >
              客製匯出
            </button>
          </div>
        </div>

        {/* Quick Travel Badges (Clean Minimalism Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-100 text-xs sm:text-sm">
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200/80 shadow-xs">
            <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <Plane className="w-4 h-4" />
            </div>
            <div className="truncate">
              <span className="text-slate-400 block text-[11px]">航班時間</span>
              <span className="font-semibold text-slate-800">10/1 09:00 抵達 ➔ 10/6 17:30 起飛</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200/80 shadow-xs">
            <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center shrink-0">
              <Hotel className="w-4 h-4" />
            </div>
            <div className="truncate">
              <span className="text-slate-400 block text-[11px]">住宿飯店</span>
              <span className="font-semibold text-slate-800 truncate" title={TRIP_INFO.hotel.name}>
                峴港半島飯店 (Peninsula Hotel)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200/80 shadow-xs">
            <div className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="truncate">
              <span className="text-slate-400 block text-[11px]">行程範圍</span>
              <span className="font-semibold text-slate-800">峴港 ＋ 巴拿山 ＋ 會安 ＋ 順化</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
        <nav className="flex space-x-2 max-w-7xl mx-auto py-2" aria-label="Tabs">
          {[
            { id: 'itinerary', label: '📅 6天5夜主行程', desc: '詳細每日時間軸與美食' },
            { id: 'alternatives', label: '🔄 4大替換玩法', desc: '奢華SPA/文化/雨季備案' },
            { id: 'budget', label: '💰 預算費用分析', desc: '三階花費與互動計算機' },
            { id: 'safety-weather', label: '🌦️ 天氣交通與安全', desc: '防騙/換匯/雨季攻略' },
            { id: 'food-guide', label: '🍜 峴港美食指南', desc: '必比登與在地海鮮名店' },
            { id: 'txt-export', label: '📄 TXT 下載專區', desc: '離線文本與自訂匯出' },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`tab-btn-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
