import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  AlertOctagon, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Info,
  CheckCircle,
  XCircle,
  ExternalLink
} from 'lucide-react';

export default function IndicatorList({ indicators = [] }) {
  const [expandedId, setExpandedId] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleExpand = (id) => {
    if (expandAll) {
      setExpandAll(false);
      setExpandedId(null);
    } else {
      setExpandedId(expandedId === id ? null : id);
    }
  };

  const handleToggleExpandAll = () => {
    setExpandAll(!expandAll);
    setExpandedId(null);
  };

  return (
    <div className="space-y-3">
      {/* Header with expand all toggle */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span>Security Vector Breakdown</span>
            <span className="text-xs font-mono font-normal text-slate-400">
              ({indicators.length} heuristic checks)
            </span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5 font-sans">
            Click on any indicator to view the plain-English explanation of why it affects the risk assessment.
          </p>
        </div>

        <button
          onClick={handleToggleExpandAll}
          className="text-xs font-mono text-emerald-400 hover:text-emerald-300 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 transition-colors"
        >
          {expandAll ? 'Collapse All' : 'Expand All Explanations'}
        </button>
      </div>

      {/* List of Indicators */}
      <div className="space-y-3 pt-1">
        {indicators.map((indicator, index) => {
          const isExpanded = expandAll || expandedId === indicator.id;
          const isSafe = indicator.status === 'safe';
          const isWarning = indicator.status === 'warning';
          const isDanger = indicator.status === 'danger';

          return (
            <div
              key={indicator.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isDanger
                  ? 'bg-rose-950/20 border-rose-500/30'
                  : isWarning
                  ? 'bg-amber-950/15 border-amber-500/30'
                  : 'bg-slate-900/50 border-white/[0.07] hover:border-slate-700'
              }`}
            >
              {/* Indicator Row Header */}
              <div
                onClick={() => toggleExpand(indicator.id)}
                className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none"
              >
                <div className="flex items-start sm:items-center gap-3 min-w-0">
                  {/* Status Icon */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isSafe
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : isWarning
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                  }`}>
                    {isSafe && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                    {isWarning && <AlertTriangle className="w-5 h-5 text-amber-400" />}
                    {isDanger && <AlertOctagon className="w-5 h-5 text-rose-400" />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-white text-sm">
                        {indicator.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                        {indicator.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                      {indicator.headline}
                    </p>
                  </div>
                </div>

                {/* Right Value & Toggle */}
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <div className="text-right">
                    <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md block ${
                      isSafe
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        : isWarning
                        ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                        : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                    }`}>
                      {indicator.value}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                      Risk impact: {indicator.scoreImpact}
                    </span>
                  </div>

                  <div className="text-slate-400 hover:text-white p-1">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Collapsible Plain-English Explanation Deep Dive */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-white/[0.06] bg-slate-950/60 text-xs text-slate-300 space-y-3">
                  
                  {/* Plain-English explanation */}
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold text-xs mb-1.5">
                      <Info className="w-3.5 h-3.5" />
                      <span>Why This Affects The Risk Assessment (Plain-English):</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed text-xs font-sans">
                      {indicator.explanation}
                    </p>
                  </div>

                  {/* Risk Factors / Vulnerabilities */}
                  {indicator.riskFactors && indicator.riskFactors.length > 0 && (
                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-white/[0.05]">
                      <span className="text-[11px] font-mono font-semibold text-slate-400 block mb-1">
                        Potential Exploit Vectors / Hazards:
                      </span>
                      <ul className="space-y-1 list-disc list-inside text-slate-300 text-[11px]">
                        {indicator.riskFactors.map((factor, i) => (
                          <li key={i}>{factor}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Engine Verdict */}
                  {indicator.verdict && (
                    <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-slate-400">
                      <span>Audit Verdict:</span>
                      <span className={`font-semibold ${
                        isSafe ? 'text-emerald-400' : isWarning ? 'text-amber-400' : 'text-rose-400'
                      }`}>
                        {indicator.verdict}
                      </span>
                    </div>
                  )}

                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}
