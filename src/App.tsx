import React, { useState } from 'react';
import { Header } from './components/Header';
import { MyItinerary } from './components/MyItinerary';
import { DayTimeline } from './components/DayTimeline';
import { AlternativePlans } from './components/AlternativePlans';
import { BudgetCalculator } from './components/BudgetCalculator';
import { SafetyWeatherGuide } from './components/SafetyWeatherGuide';
import { FoodGuide } from './components/FoodGuide';
import { TxtExportView } from './components/TxtExportModal';
import { 
  Download, FileText, Sparkles, Heart, 
  MapPin, PhoneCall, ShieldCheck, Compass, MessageSquare
} from 'lucide-react';
import { generateItineraryTxt, downloadTxtFile } from './utils/txtGenerator';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('my-itinerary');

  const handleFloatingDownload = () => {
    const txt = generateItineraryTxt();
    downloadTxtFile(txt, '2026-峴港六天五夜達人行程手冊.txt');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans flex flex-col selection:bg-slate-900 selection:text-white">
      {/* Top Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenTxtModal={() => setActiveTab('txt-export')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'my-itinerary' && <MyItinerary />}
        {activeTab === 'itinerary' && <DayTimeline />}
        {activeTab === 'alternatives' && <AlternativePlans />}
        {activeTab === 'budget' && <BudgetCalculator />}
        {activeTab === 'safety-weather' && <SafetyWeatherGuide />}
        {activeTab === 'food-guide' && <FoodGuide />}
        {activeTab === 'txt-export' && <TxtExportView />}
      </main>

      {/* Floating Action Button for Instant TXT Download */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <button
          id="btn-floating-download"
          onClick={handleFloatingDownload}
          className="flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer border border-slate-800"
          title="一鍵下載行程 TXT 檔"
        >
          <Download className="w-4 h-4 text-white" />
          <span className="text-sm font-medium hidden sm:inline">一鍵下載行程 (.txt)</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-white text-slate-500 border-t border-gray-200 text-xs py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-slate-900 font-bold text-sm mb-1">
              2026 峴港・中越魅力之行 (10.01 - 10.06)
            </div>
            <p className="text-slate-500">
              飯店：峴港半島飯店 (Peninsula Hotel) ｜ 雨季彈性對策・美食地圖・隨身離線 TXT 手冊
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button 
              onClick={() => setActiveTab('my-itinerary')} 
              className="text-slate-900 font-bold hover:underline transition-colors cursor-pointer"
            >
              我的行程
            </button>
            <button 
              onClick={() => setActiveTab('itinerary')} 
              className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              6日主行程
            </button>
            <button 
              onClick={() => setActiveTab('alternatives')} 
              className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              備選玩法
            </button>
            <button 
              onClick={() => setActiveTab('budget')} 
              className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              預算分析
            </button>
            <button 
              onClick={() => setActiveTab('txt-export')} 
              className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              下載 TXT
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
