import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  Cpu, 
  Lock, 
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';

export default function HeroSection({ selectedToken, onSelectToken, onAnalyzeToken, isScanning }) {
  const quickPills = [
    {
      id: 'nexus-defi',
      symbol: 'NXD',
      name: 'Nexus DeFi',
      score: 12,
      tier: 'Low Risk',
      color: 'emerald',
      tag: 'Safe Archetype'
    },
    {
      id: 'moonape-velocity',
      symbol: 'MAV',
      name: 'MoonApe Velocity',
      score: 56,
      tier: 'Moderate Risk',
      color: 'amber',
      tag: 'Caution Archetype'
    },
    {
      id: 'safuelon-rocket',
      symbol: 'SER',
      name: 'SafuElonRocket',
      score: 94,
      tier: 'Critical Hazard',
      color: 'rose',
      tag: 'Honeypot Scam Archetype'
    }
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-10 border-b border-white/[0.06]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 cyber-radial-glow pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>HEURISTIC AUDIT SIMULATOR</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulated Sample Data — Educational Demo Only</span>
          </div>
        </div>

        {/* Hero Title & Subtext */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            DeFi Token Risk Explorer, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Decoded in Plain English.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Understand smart contract security hazards before interacting. RugGuard AI models 
            critical token risks—such as unlocked liquidity pools, honeypot execution traps, 
            predatory sell taxes, and hidden mint privileges—using transparent, deterministic logic.
          </p>
        </div>

        {/* Quick Tokens Selection Row */}
        <div className="mt-8 pt-6 border-t border-white/[0.07]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Select Sample Token Archetype to Explore:</span>
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Click any token below to preview & inspect
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quickPills.map((pill) => {
              const isSelected = selectedToken?.id === pill.id;
              
              return (
                <button
                  key={pill.id}
                  onClick={() => onSelectToken(pill.id)}
                  className={`group relative text-left p-3.5 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-900/95 border-emerald-500 shadow-emerald-glow-sm ring-1 ring-emerald-500/50'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm font-sans tracking-tight">
                        {pill.name}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        ${pill.symbol}
                      </span>
                    </div>

                    {/* Score badge */}
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      pill.color === 'emerald'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : pill.color === 'amber'
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                    }`}>
                      {pill.score}/100 Risk
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
                    <span className="flex items-center gap-1.5 font-mono text-[11px]">
                      <span className={`w-2 h-2 rounded-full ${
                        pill.color === 'emerald' ? 'bg-emerald-400' :
                        pill.color === 'amber' ? 'bg-amber-400' : 'bg-rose-400'
                      }`} />
                      {pill.tier}
                    </span>
                    <span className="text-[11px] text-slate-400 group-hover:text-slate-300">
                      {pill.tag} →
                    </span>
                  </div>

                  {isSelected && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#070a10]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Security Vectors Pills / Highlights */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Liquidity Lock Analysis</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Honeypot Sandbox Simulation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Concentration & Sybil Checks</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Plain-English Risk Explanations</span>
          </div>
        </div>

      </div>
    </section>
  );
}
