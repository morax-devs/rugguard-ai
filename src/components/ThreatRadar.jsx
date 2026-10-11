import React from 'react';
import { formatAddress } from '../utils/riskEngine';

export default function ThreatRadar({ token }) {
  // Threat count determined by number of warning/danger indicators
  const threats = token?.indicators?.filter(i => i.status === 'danger' || i.status === 'warning') || [];
  const threatCountDisplay = String(threats.length).padStart(2, '0');

  // Custom threat pins based on token
  const threatPins = token?.id === 'safuelon-rocket' ? [
    { label: 'Rugpull', top: '18%', left: '46%', color: 'rose' },
    { label: 'TrapSwap', top: '48%', left: '72%', color: 'cyan' },
    { label: '99% Tax', top: '75%', left: '28%', color: 'rose' },
  ] : token?.id === 'moonape-velocity' ? [
    { label: 'Short Lock', top: '25%', left: '55%', color: 'amber' },
    { label: 'Whale Alert', top: '68%', left: '65%', color: 'cyan' },
  ] : [
    { label: 'Verified LP', top: '28%', left: '58%', color: 'emerald' },
    { label: 'Zero Tax', top: '65%', left: '35%', color: 'emerald' },
  ];

  return (
    <div className="ambient-cyan-card rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between h-full min-h-[310px]">
      
      {/* Top Header */}
      <div>
        <span className="text-xs font-sans text-slate-400 block font-medium">
          Threat Count
        </span>
        <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
          {threatCountDisplay}
        </span>
      </div>

      {/* Center Radar / Sonar Grid */}
      <div className="relative w-52 h-52 mx-auto my-auto flex items-center justify-center">
        
        {/* Concentric circles */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/15" />
        <div className="absolute inset-5 rounded-full border border-cyan-500/20" />
        <div className="absolute inset-10 rounded-full border border-cyan-500/25" />
        <div className="absolute inset-16 rounded-full border border-cyan-500/30" />

        {/* Crosshair lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-[1px] bg-cyan-500/15" />
          <div className="h-full w-[1px] bg-cyan-500/15 absolute" />
        </div>

        {/* Radar Rotating Sweep Beam */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-tl from-cyan-400/30 via-cyan-400/10 to-transparent animate-radar-sweep" />
        </div>

        {/* Dynamic Threat Blip Pins matching screenshot */}
        {threatPins.map((pin, i) => (
          <div
            key={i}
            className="absolute z-20 transition-all duration-300"
            style={{ top: pin.top, left: pin.left }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${
                pin.color === 'rose' ? 'bg-rose-400 shadow-danger-glow' :
                pin.color === 'amber' ? 'bg-amber-400' :
                pin.color === 'emerald' ? 'bg-emerald-400' :
                'bg-cyan-400 shadow-cyan-glow-sm'
              } animate-ping absolute`} />
              
              <span className={`relative px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-tight shadow-lg border backdrop-blur-md ${
                pin.color === 'rose'
                  ? 'bg-rose-950/80 text-rose-300 border-rose-500/40'
                  : pin.color === 'amber'
                  ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                  : pin.color === 'emerald'
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                  : 'bg-cyan-950/80 text-cyan-300 border-cyan-400/50 shadow-cyan-glow-sm'
              }`}>
                {pin.label}
              </span>
            </div>
          </div>
        ))}

        {/* Center Node: Contract address */}
        <div className="relative z-10 w-24 h-24 rounded-full bg-[#0B111D]/90 border border-cyan-400/40 flex items-center justify-center text-center p-2 shadow-cyan-glow-sm backdrop-blur-sm">
          <span className="text-[10px] font-mono text-cyan-300 font-semibold break-all leading-tight">
            {formatAddress(token?.address, 4)}
          </span>
        </div>

      </div>

      {/* Bottom Subtitle */}
      <div className="text-center text-[11px] font-mono text-slate-500">
        Autonomous Sonar Bytecode Scan Active
      </div>

    </div>
  );
}
