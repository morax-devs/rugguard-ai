import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  AlertOctagon, 
  HelpCircle, 
  Sliders, 
  Cpu, 
  CheckCircle2, 
  Info,
  Scale,
  Lock,
  Flame,
  Users,
  Percent
} from 'lucide-react';
import { EDUCATIONAL_GLOSSARY } from '../data/sampleTokens';
import { getRiskCategory } from '../utils/riskEngine';

export default function AboutView() {
  // Interactive Sandbox State to demonstrate transparent rule-based logic
  const [sandboxLpLock, setSandboxLpLock] = useState(95); // 0 - 100
  const [sandboxHoneypotFail, setSandboxHoneypotFail] = useState(false);
  const [sandboxSellTax, setSandboxSellTax] = useState(2); // 0 - 99
  const [sandboxMintStatus, setSandboxMintStatus] = useState('renounced'); // 'renounced' | 'timelock' | 'active'
  const [sandboxHolderConc, setSandboxHolderConc] = useState(15); // 0 - 100
  const [sandboxBlacklist, setSandboxBlacklist] = useState(false);

  // Calculate sandbox score transparently
  const calculateSandboxScore = () => {
    let score = 0;

    // 1. Honeypot check: severe penalty if fail
    if (sandboxHoneypotFail) score += 35;

    // 2. Sell Tax: 0-5% is normal, >10% is penalty, >25% is severe
    if (sandboxSellTax > 25) {
      score += 25;
    } else if (sandboxSellTax > 10) {
      score += 15;
    } else if (sandboxSellTax > 5) {
      score += 6;
    }

    // 3. LP Lock: lower lock = higher danger
    if (sandboxLpLock < 30) {
      score += 22;
    } else if (sandboxLpLock < 70) {
      score += 12;
    } else if (sandboxLpLock < 90) {
      score += 4;
    }

    // 4. Minting
    if (sandboxMintStatus === 'active') {
      score += 15;
    } else if (sandboxMintStatus === 'timelock') {
      score += 6;
    }

    // 5. Holder concentration
    if (sandboxHolderConc > 60) {
      score += 15;
    } else if (sandboxHolderConc > 35) {
      score += 8;
    } else if (sandboxHolderConc > 20) {
      score += 3;
    }

    // 6. Blacklist
    if (sandboxBlacklist) {
      score += 12;
    }

    return Math.min(100, Math.max(0, score));
  };

  const sandboxScore = calculateSandboxScore();
  const sandboxCategory = getRiskCategory(sandboxScore);

  return (
    <div className="space-y-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Intro Header */}
      <div className="border-b border-white/[0.08] pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>METHODOLOGY & ARCHITECTURE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How RugGuard AI Assesses Crypto Token Risk
        </h1>
        <p className="mt-2 text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
          RugGuard AI relies exclusively on deterministic, rule-based heuristics to evaluate smart contract safety. 
          By simulating transactions and inspecting critical bytecode indicators, we provide 
          transparent risk scoring without black-box machine learning or external API dependencies.
        </p>
      </div>

      {/* Interactive Sandbox Section */}
      <div className="bg-[#0B101D] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-emerald-glow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Interactive Heuristics Sandbox</span>
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Adjust simulated contract parameters below to see how our rule-based scoring engine computes risk in real time.
            </p>
          </div>

          {/* Sandbox Live Result Badge */}
          <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Computed Score</span>
              <span className="text-2xl font-mono font-black" style={{ color: sandboxCategory.fillColor }}>
                {sandboxScore} / 100
              </span>
            </div>
            <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${sandboxCategory.badgeBg}`}>
              {sandboxCategory.category}
            </span>
          </div>
        </div>

        {/* Sandbox Interactive Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          
          {/* Control 1: LP Lock */}
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Liquidity Pool Locked</span>
              </span>
              <span className="text-emerald-400 font-bold">{sandboxLpLock}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sandboxLpLock}
              onChange={(e) => setSandboxLpLock(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <p className="text-[11px] text-slate-400">
              Low lock percentages (&lt;70%) severely elevate danger of sudden withdrawal.
            </p>
          </div>

          {/* Control 2: Honeypot Simulation */}
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <AlertOctagon className="w-3.5 h-3.5 text-rose-400" />
                <span>Honeypot Execution Test</span>
              </span>
              <span className={sandboxHoneypotFail ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                {sandboxHoneypotFail ? 'REVERTED (Fail)' : 'PASSED (Safe)'}
              </span>
            </div>
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setSandboxHoneypotFail(false)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  !sandboxHoneypotFail
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                Pass Normal
              </button>
              <button
                onClick={() => setSandboxHoneypotFail(true)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  sandboxHoneypotFail
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                Fail Revert (+35)
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              If retail sell transfers revert in the EVM trace, risk immediately spikes.
            </p>
          </div>

          {/* Control 3: Sell Tax */}
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-amber-400" />
                <span>Sell Tax / Slippage Fee</span>
              </span>
              <span className={`font-bold ${sandboxSellTax > 20 ? 'text-rose-400' : sandboxSellTax > 5 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {sandboxSellTax}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="99"
              value={sandboxSellTax}
              onChange={(e) => setSandboxSellTax(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <p className="text-[11px] text-slate-400">
              Sell taxes above 10% erode returns; 99% taxes confiscate all capital.
            </p>
          </div>

          {/* Control 4: Minting Function */}
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white font-semibold">Minting Authority</span>
              <span className="text-xs text-slate-300 uppercase font-bold">{sandboxMintStatus}</span>
            </div>
            <div className="grid grid-cols-3 gap-1 pt-1">
              {[
                { id: 'renounced', label: 'Disabled' },
                { id: 'timelock', label: 'Timelock' },
                { id: 'active', label: 'Active (+15)' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSandboxMintStatus(m.id)}
                  className={`py-1.5 rounded text-[11px] font-mono transition-all ${
                    sandboxMintStatus === m.id
                      ? 'bg-slate-800 text-white border border-slate-600 font-bold'
                      : 'bg-slate-900/60 text-slate-500 border border-slate-800'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-400">
              Unrestricted minting enables developers to print tokens and dump.
            </p>
          </div>

          {/* Control 5: Top 10 Concentration */}
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>Top 10 Holder Concentration</span>
              </span>
              <span className="text-cyan-400 font-bold">{sandboxHolderConc}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="95"
              value={sandboxHolderConc}
              onChange={(e) => setSandboxHolderConc(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <p className="text-[11px] text-slate-400">
              Whale clusters holding &gt;40% create severe slippage price-crash risks.
            </p>
          </div>

          {/* Control 6: Blacklist Toggle */}
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white font-semibold">Blacklist / Pause Ability</span>
              <span className={sandboxBlacklist ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                {sandboxBlacklist ? 'ACTIVE (+12)' : 'NONE'}
              </span>
            </div>
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setSandboxBlacklist(false)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  !sandboxBlacklist
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                None Detected
              </button>
              <button
                onClick={() => setSandboxBlacklist(true)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  sandboxBlacklist
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                Present (+12)
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Blacklists allow bad actors to freeze innocent wallet balances.
            </p>
          </div>

        </div>
      </div>

      {/* Educational Glossary: Common Scam Anatomy */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Scale className="w-5 h-5 text-emerald-400" />
          <span>DeFi Exploit Taxonomy & Mechanics</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EDUCATIONAL_GLOSSARY.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 bg-slate-900/60 rounded-xl border border-white/[0.07] hover:border-slate-700 transition-all"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{item.title}</span>
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                {item.summary}
              </p>
              <div className="mt-3 pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                <strong className="text-slate-300 font-semibold block mb-0.5">How scammers execute this:</strong>
                {item.howItWorks}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strict Disclaimer Banner */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/30 text-xs text-slate-300 space-y-2 font-mono">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>IMPORTANT DISCLAIMER & EDUCATIONAL SCOPE</span>
        </div>
        <p className="leading-relaxed">
          RugGuard AI is an interactive educational demonstration and software risk visualization prototype. 
          All token datasets, contract addresses, liquidity balances, and risk scores presented in this interface 
          are <strong>strictly simulated</strong> and do not represent live blockchain network audits, verified real-time 
          smart contract state, or endorsement of any cryptocurrency asset.
        </p>
        <p className="text-slate-400">
          Nothing in this application constitutes financial, legal, trading, or investment advice. Always conduct 
          independent due diligence and consult accredited professionals before committing capital.
        </p>
      </div>

    </div>
  );
}
