import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, Terminal, Radio } from 'lucide-react';

export default function BootLoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState('Initializing RugGuard AI Core...');

  useEffect(() => {
    const steps = [
      { at: 15, text: 'Mounting EVM Sandbox Environment...' },
      { at: 35, text: 'Loading Decompiled Opcode Heuristics...' },
      { at: 60, text: 'Synchronizing 80,000+ Rugpull Signatures...' },
      { at: 85, text: 'Connecting Sonar Threat Radar Engine...' },
      { at: 100, text: 'Security Matrix Armed. Launching Dashboard...' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        const currentStep = steps.find(s => next >= s.at && prev < s.at);
        if (currentStep) {
          setStepText(currentStep.text);
        }

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinished();
          }, 350);
          return 100;
        }
        return next;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090D] select-none transition-opacity duration-500">
      
      {/* Background ambient radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FF6422]/15 via-[#00D8F6]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md px-6">
        
        {/* Animated Icon Core */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          {/* Outer rotating/pulsing ring */}
          <div className="absolute inset-0 rounded-full border border-[#FF6422]/30 animate-ping opacity-30" />
          <div className="absolute inset-1.5 rounded-full border border-[#00D8F6]/30 animate-pulse" />
          <div className="absolute inset-3 rounded-2xl bg-gradient-to-b from-[#161B26] to-[#0D1017] border border-white/10 flex items-center justify-center shadow-2xl">
            <ShieldCheck className="w-10 h-10 text-[#FF6422]" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D8F6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00D8F6]"></span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          RugGuard<span className="text-[#FF6422]">AI</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#FF6422]/15 text-[#FF6422] border border-[#FF6422]/30">
            PRO
          </span>
        </h1>
        <p className="text-xs text-slate-400 font-mono mt-1">
          Next-Gen Crypto Token Threat Intelligence
        </p>

        {/* Cyber Progress Bar */}
        <div className="w-72 mt-8">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
            <span className="truncate pr-2">{stepText}</span>
            <span className="text-[#FF6422] font-bold">{progress}%</span>
          </div>

          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-[#FF6422] via-[#FFA439] to-[#00D8F6] rounded-full transition-all duration-75 shadow-orange-glow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Diagnostics Ticker */}
        <div className="mt-6 flex items-center gap-2 text-[11px] font-mono text-slate-500">
          <Radio className="w-3 h-3 text-[#00D8F6] animate-pulse" />
          <span>SIMULATED AUDIT ENGINE • READY</span>
        </div>

        {/* Skip button */}
        <button
          onClick={onFinished}
          className="mt-8 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors underline"
        >
          Skip animation →
        </button>

      </div>
    </div>
  );
}
