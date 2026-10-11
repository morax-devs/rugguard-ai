import React from 'react';
import { getRiskCategory } from '../utils/riskEngine';

export default function ArcRiskGauge({ score = 11 }) {
  const risk = getRiskCategory(score);

  // Horseshoe arc calculations:
  // An SVG semi-circle/horseshoe that spans 220 degrees from 160 deg to 380 deg
  const radius = 76;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  // Let 65% of circle be visible for the horseshoe shape
  const arcLength = circumference * 0.65;
  const strokeDashoffset = arcLength - (score / 100) * arcLength;

  return (
    <div className="ambient-cyan-card rounded-2xl p-5 flex flex-col justify-between h-full min-h-[310px] relative overflow-hidden">
      
      {/* Top Title */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-sans text-slate-400 font-medium">
          Vulnerability Index
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
          Automated
        </span>
      </div>

      {/* Horseshoe Arc Gauge matching the screenshot */}
      <div className="relative w-52 h-44 mx-auto flex items-center justify-center -mt-2">
        <svg
          height="180"
          width="210"
          viewBox="0 0 210 180"
          className="transform"
        >
          <defs>
            <linearGradient id="horseshoeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFA07A" />
              <stop offset="45%" stopColor="#FF6422" />
              <stop offset="70%" stopColor="#00D8F6" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Horseshoe Arc */}
          <path
            d="M 30 145 A 76 76 0 1 1 180 145"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Active Colored Arc based on score */}
          <path
            d="M 30 145 A 76 76 0 1 1 180 145"
            fill="none"
            stroke="url(#horseshoeGrad)"
            strokeWidth={strokeWidth}
            strokeDasharray={arcLength}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            filter="url(#arcGlow)"
            style={{
              transition: 'stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </svg>

        {/* Center Numbers matching screenshot */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-6 text-center">
          <span className="text-xs font-sans text-slate-400 font-medium">
            Risk Score
          </span>
          <span className="text-4xl font-extrabold font-mono text-white tracking-tight mt-0.5">
            {score}
          </span>
          <span className={`text-[11px] font-mono font-bold mt-1 px-2 py-0.5 rounded-full ${
            score <= 40 ? 'text-[#FFA07A] bg-[#FFA07A]/10' :
            score <= 80 ? 'text-amber-400 bg-amber-400/10' :
            'text-[#00D8F6] bg-[#00D8F6]/10'
          }`}>
            {risk.category}
          </span>
        </div>
      </div>

      {/* Legend Scale matching the screenshot */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FFA07A]" />
          <span>Low Risk <strong className="text-slate-300">0 - 40</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Moderate <strong className="text-slate-300">41 - 80</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00D8F6]" />
          <span>High Risk <strong className="text-slate-300">81 - 100</strong></span>
        </div>
      </div>

    </div>
  );
}
