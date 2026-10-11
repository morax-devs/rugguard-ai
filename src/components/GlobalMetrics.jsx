import React from 'react';
import { Bookmark, Shield, Sparkles } from 'lucide-react';

export default function GlobalMetrics() {
  const metrics = [
    { label: 'Investor Funds Protected', value: '$250M+' },
    { label: 'Smart Contract Scans', value: '3.8M+' },
    { label: 'Detection Accuracy', value: '92.3%' },
    { label: 'Chains Supported', value: '150+' },
    { label: 'Verified Rug pulls', value: '80000+' },
  ];

  return (
    <div className="space-y-3">
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white tracking-tight font-sans">
          Global Metrics
        </h2>
        <button 
          className="w-8 h-8 rounded-full bg-[#121620] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          title="Save Dashboard View"
          aria-label="Bookmark"
        >
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      {/* 5 Cards Row matching screenshot */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="ambient-orange-card rounded-2xl p-4 transition-all duration-200 hover:border-white/20 group"
          >
            <span className="text-[11px] font-sans text-slate-400 block mb-1.5 font-medium truncate">
              {item.label}
            </span>
            <span className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
