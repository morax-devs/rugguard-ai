import React from 'react';
import { Shield, Sparkles, ArrowUp, Compass } from 'lucide-react';

export default function EmptyState({ onSelectToken }) {
  return (
    <div className="bg-[#0B101D] border border-white/[0.08] rounded-2xl p-10 text-center relative overflow-hidden">
      
      {/* Background Reticle */}
      <div className="w-20 h-20 mx-auto rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-4 shadow-emerald-glow-sm">
        <Compass className="w-10 h-10 animate-pulse text-emerald-400" />
      </div>

      <h3 className="text-xl font-bold text-white tracking-tight">
        No Token Analysis Active
      </h3>

      <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
        Select one of the sample tokens above or use the search bar to inspect simulated smart contract risks and warning indicators.
      </p>

      {/* Quick Select Buttons */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
        <button
          onClick={() => onSelectToken('nexus-defi')}
          className="px-3.5 py-2 rounded-xl text-xs font-mono bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all"
        >
          Inspect Nexus DeFi (Safe)
        </button>
        <button
          onClick={() => onSelectToken('moonape-velocity')}
          className="px-3.5 py-2 rounded-xl text-xs font-mono bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-all"
        >
          Inspect MoonApe (Caution)
        </button>
        <button
          onClick={() => onSelectToken('safuelon-rocket')}
          className="px-3.5 py-2 rounded-xl text-xs font-mono bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-all"
        >
          Inspect SafuElonRocket (Honeypot)
        </button>
      </div>

    </div>
  );
}
