import React from 'react';
import { X, Info, ShieldCheck, AlertTriangle, AlertOctagon, CheckCircle2 } from 'lucide-react';

export default function IndicatorDetailModal({ indicator, onClose }) {
  if (!indicator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0E1117] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00D8F6]/15 border border-[#00D8F6]/30 flex items-center justify-center text-[#00D8F6]">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-sans">
                {indicator.label || indicator.name}
              </h3>
              <span className="text-[10px] font-mono text-slate-400">
                Rule-Based Security Explainer
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Callout */}
        <div className="p-3 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">Detection Status:</span>
          <span className="text-emerald-400 font-bold">
            {indicator.detail || indicator.value || 'Evaluated in Sandbox'}
          </span>
        </div>

        {/* Plain-English Explanation */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-1.5">
            <span>Plain-English Impact on Risk:</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
            {indicator.explanation}
          </p>
        </div>

        {/* Why Scammers Use This */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1">
          <strong className="block font-semibold">Investor Protection Tip:</strong>
          <p className="text-[11px] leading-tight text-amber-300/90 font-sans">
            Contracts with unrestricted administrative toggles or blacklists should be approached with extreme caution, as owners can freeze funds without warning.
          </p>
        </div>

        {/* Close Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium transition-colors"
          >
            Close Explainer
          </button>
        </div>

      </div>
    </div>
  );
}
