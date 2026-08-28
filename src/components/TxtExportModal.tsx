import React, { useState, useMemo } from 'react';
import { 
  Download, Copy, Check, FileText, Settings2, 
  Eye, RefreshCw, Sparkles, CheckSquare, Square
} from 'lucide-react';
import { generateItineraryTxt, downloadTxtFile, TxtExportOptions } from '../utils/txtGenerator';

export const TxtExportView: React.FC = () => {
  const [options, setOptions] = useState<TxtExportOptions>({
    includeMainItinerary: true,
    includeAlternatives: true,
    includeBudget: true,
    includeTips: true,
    includeRestaurants: true,
  });

  const [copied, setCopied] = useState(false);
  const [customFileName, setCustomFileName] = useState('2026-峴港六天五夜達人行程手冊.txt');

  const txtContent = useMemo(() => {
    return generateItineraryTxt(options);
  }, [options]);

  const handleDownload = () => {
    downloadTxtFile(txtContent, customFileName || '2026-峴港六天五夜達人行程手冊.txt');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(txtContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleOption = (key: keyof TxtExportOptions) => {
    setOptions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const totalLines = txtContent.split('\n').length;
  const totalChars = txtContent.length;

  return (
    <div id="txt-export-container" className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 mb-2 border border-slate-200">
              <FileText className="w-3.5 h-3.5 text-slate-900" /> 隨身純文字離線版
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              一鍵下載 TXT 格式行程手冊
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              免網路隨身查看：格式經過嚴格排版，支援各廠牌手機備忘錄、記事本（Notepad）與各類閱讀器，無亂碼。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              id="btn-download-txt-main"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              一鍵下載 .TXT 檔案
            </button>

            <button
              id="btn-copy-txt-main"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-gray-200 font-medium text-xs sm:text-sm transition-all cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">已複製到剪貼簿</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>複製全文內容</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Customization Options Bar */}
        <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2.5">
              自訂匯出包含項目：
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'includeMainItinerary' as const, label: '5日主行程與餐飲' },
                { key: 'includeAlternatives' as const, label: '四大備選玩法' },
                { key: 'includeBudget' as const, label: '預算費用分析' },
                { key: 'includeTips' as const, label: '天氣與安全防坑' },
                { key: 'includeRestaurants' as const, label: '必吃美食名單' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleOption(item.key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                    options[item.key]
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-[#F8F9FA] text-slate-500 border-gray-200/80 hover:bg-slate-100'
                  }`}
                >
                  {options[item.key] ? (
                    <CheckSquare className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <Square className="w-3.5 h-3.5 text-slate-400" />
                  )}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-3 text-xs">
            <div>
              <span className="text-slate-400 block mb-1 text-xs">自訂檔名：</span>
              <input
                type="text"
                value={customFileName}
                onChange={(e) => setCustomFileName(e.target.value)}
                className="px-3.5 py-1.5 bg-[#F8F9FA] border border-gray-200/80 rounded-xl text-slate-800 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 w-64"
              />
            </div>

            <div className="text-slate-400 self-end sm:self-center font-mono text-xs">
              <span>{totalLines} 行 ｜ {totalChars.toLocaleString()} 字元</span>
            </div>
          </div>
        </div>
      </div>

      {/* TXT Preview Box */}
      <div className="bg-slate-900 rounded-2xl border border-gray-200 shadow-sm overflow-hidden text-white">
        <div className="bg-slate-800/80 px-5 py-3 border-b border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-200">{customFileName}</span>
            <span className="text-slate-400">(UTF-8 純文本預覽)</span>
          </div>
          <button
            onClick={handleCopy}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full text-slate-200 hover:bg-white/20"
          >
            <Copy className="w-3 h-3" /> 快速複製
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-x-auto max-h-[600px] scrollbar-thin scrollbar-thumb-slate-700">
          <pre className="font-mono text-xs sm:text-sm text-slate-200 whitespace-pre leading-relaxed select-all">
            {txtContent}
          </pre>
        </div>
      </div>
    </div>
  );
};
