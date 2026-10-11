import React from 'react';
import { getRiskCategory } from '../utils/riskEngine';
import { ShieldAlert, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function RiskGauge({ score }) {
  const risk = getRiskCategory(score);
  
  // SVG circular arc calculations
  const radius = 80;
  const strokeWidth = 14;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  // Let's create a 270 degree arc for gauge look
  const arcLength = circumference * 0.75;
  const strokeDashoffset = arcLength - (score / 100) * arcLength;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-2xl border border-white/[0.08] relative overflow-hidden">
      
      {/* Subtle radial glow background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${risk.fillColor} 0%, transparent 70%)`
        }}
      />

      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg
          height="192"
          width="192"
          className="transform -rotate-135"
        >
          {/* Background track */}
          <circle
            stroke="rgba(255, 255, 255, 0.08)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
            r={normalizedRadius}
            cx="96"
            cy="96"
          />

          {/* Foreground animated progress bar */}
          <circle
            stroke={risk.fillColor}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference}`}
            style={{ 
              strokeDashoffset,
              transition: 'stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.5s ease' 
            }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx="96"
            cy="96"
            className="filter drop-shadow-[0_0_8px_currentColor]"
          />
        </svg>

        {/* Center Score & Details */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-0.5">
            Risk Score
          </span>
          <div className="flex items-baseline justify-center">
            <span 
              className="text-4xl font-extrabold font-mono tracking-tight"
              style={{ color: risk.fillColor }}
            >
              {score}
            </span>
            <span className="text-sm font-mono text-slate-500 font-medium ml-1">
              /100
            </span>
          </div>

          <div className="mt-1 flex items-center gap-1">
            {score <= 25 ? (
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            ) : score <= 65 ? (
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            )}
            <span 
              className="text-xs font-bold font-mono tracking-tight"
              style={{ color: risk.fillColor }}
            >
              {risk.category}
            </span>
          </div>
        </div>
      </div>

      {/* Risk Tiers Scale Indicator */}
      <div className="w-full mt-4 pt-4 border-t border-white/[0.07]">
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1.5">
          <span>0 (Secure)</span>
          <span>50 (Moderate)</span>
          <span>100 (Critical)</span>
        </div>
        
        {/* Color bar */}
        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden flex">
          <div className="w-1/4 bg-emerald-500/80" title="Safe Zone (0-25)" />
          <div className="w-2/5 bg-amber-500/80" title="Caution Zone (26-65)" />
          <div className="w-1/3 bg-rose-500/80" title="Hazard Zone (66-100)" />
        </div>

        <div className="mt-2.5 text-center">
          <p className="text-xs text-slate-300 font-sans">
            {risk.description}
          </p>
        </div>
      </div>

    </div>
  );
}
