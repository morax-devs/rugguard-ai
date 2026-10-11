import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SCAN_STEPS } from '../utils/riskEngine';

export default function ScanningState({ token, onScanComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs([`[0.00s] Initializing RugGuard AI Heuristic Scanner v2.4...`]);

    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        const next = prev + 1;
        if (next < SCAN_STEPS.length) {
          setLogs((l) => [
            ...l,
            `[${(next * 0.3).toFixed(2)}s] ${SCAN_STEPS[next].title}: ${SCAN_STEPS[next].detail}`
          ]);
          return next;
        } else {
          clearInterval(stepInterval);
          setTimeout(() => {
            onScanComplete();
          }, 350);
          return prev;
        }
      });
    }, 320);

    return () => clearInterval(stepInterval);
  }, [token, onScanComplete]);

  return (
    <div className="bg-[#0B101D] border border-emerald-500/30 rounded-2xl p-6 shadow-emerald-glow relative overflow-hidden">
      
      {/* Background scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.04] to-transparent animate-scan pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        
        {/* Animated Radar Pulse */}
        <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
          <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping opacity-40" />
          <div className="absolute inset-2 rounded-full border border-emerald-500/30" />
          <div className="absolute inset-6 rounded-full border border-emerald-500/40" />
          
          {/* Sweeping radar needle */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-tl from-emerald-500/30 to-transparent animate-radar" />
          </div>

          <Shield className="w-8 h-8 text-emerald-400 relative z-10 glow-beacon" />
        </div>

        {/* Status text & Progress */}
        <div className="flex-1 text-center md:text-left min-w-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs border border-emerald-500/30 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SANDBOX SIMULATION IN PROGRESS
            </span>
            <span className="text-xs font-mono text-slate-400">
              Evaluating {token.name} (${token.symbol})
            </span>
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight">
            Running Automated Smart Contract Security Heuristics
          </h3>

          {/* Progress bar */}
          <div className="mt-3 w-full bg-slate-900 rounded-full h-2 border border-slate-800 overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-300 ease-out shadow-emerald-glow-sm"
              style={{ width: `${Math.min(100, ((currentStepIndex + 1) / SCAN_STEPS.length) * 100)}%` }}
            />
          </div>

          {/* Current Step Description */}
          <p className="text-xs font-mono text-emerald-400 mt-2 truncate">
            → {SCAN_STEPS[currentStepIndex]?.title}: {SCAN_STEPS[currentStepIndex]?.detail}
          </p>
        </div>

      </div>

      {/* Terminal log window */}
      <div className="mt-5 p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1 max-h-32 overflow-y-auto">
        <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-1 mb-1">
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span>Trace Execution Log (Local Sandbox)</span>
          </span>
          <span>PID: {Math.floor(1000 + Math.random() * 9000)}</span>
        </div>
        {logs.map((log, index) => (
          <div key={index} className="text-slate-300">
            {log}
          </div>
        ))}
      </div>

    </div>
  );
}
