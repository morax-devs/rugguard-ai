import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  Copy, 
  Check, 
  ExternalLink, 
  Info, 
  RefreshCw, 
  Share2, 
  FileText,
  Lock,
  Layers,
  Cpu,
  Coins,
  BarChart3,
  Calendar
} from 'lucide-react';
import RiskGauge from './RiskGauge';
import IndicatorList from './IndicatorList';
import { formatAddress, getRiskCategory } from '../utils/riskEngine';

export default function AnalysisPanel({ 
  token, 
  onReanalyze, 
  isScanning 
}) {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedReport, setCopiedReport] = useState(false);
  const [activeTab, setActiveTab] = useState('indicators'); // 'indicators' | 'technical'

  if (!token) return null;

  const risk = getRiskCategory(token.riskScore);

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(token.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyReport = () => {
    const reportSummary = `[RugGuard AI Security Report - Simulated Demo]
Token: ${token.name} ($${token.symbol})
Address: ${token.address}
Risk Score: ${token.riskScore}/100 (${token.riskCategory})
Executive Summary: ${token.overview}
Indicators Evaluated: ${token.indicators.map(i => `${i.name}: ${i.value} (${i.status})`).join('; ')}
Note: Generated in local simulation mode. Not financial advice or a certified blockchain audit.`;
    navigator.clipboard?.writeText(reportSummary);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2000);
  };

  return (
    <div className="bg-[#0B101D] border border-white/[0.08] rounded-2xl p-5 md:p-6 shadow-2xl space-y-6">
      
      {/* Top Banner: Prominent Simulation Disclaimer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-700/60 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <Info className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-white">SIMULATED AUDIT REPORT:</strong> Rule-based heuristic simulation. Not an on-chain audit or financial advice.
          </span>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={handleCopyReport}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            {copiedReport ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedReport ? 'Report Copied' : 'Copy Summary'}</span>
          </button>
          <button
            onClick={onReanalyze}
            disabled={isScanning}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
            title="Re-run simulation analysis"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
            <span>Re-analyze</span>
          </button>
        </div>
      </div>

      {/* Token Header Identity Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/[0.07]">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-xl font-mono border ${
            token.riskScore <= 25
              ? 'bg-emerald-950/70 text-emerald-400 border-emerald-500/40 shadow-emerald-glow-sm'
              : token.riskScore <= 65
              ? 'bg-amber-950/70 text-amber-400 border-amber-500/40 shadow-warning-glow'
              : 'bg-rose-950/70 text-rose-400 border-rose-500/40 shadow-danger-glow'
          }`}>
            {token.symbol.substring(0, 3)}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                {token.name}
              </h2>
              <span className="text-base font-mono font-semibold text-slate-400">
                ${token.symbol}
              </span>
              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold uppercase bg-slate-800 text-slate-300 border border-slate-700">
                {token.networkBadge}
              </span>
              <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${risk.badgeBg}`}>
                {token.badgeText}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1">
                <span>Contract:</span>
                <span className="text-slate-300 font-medium">{formatAddress(token.address, 6)}</span>
                <button
                  onClick={handleCopyAddress}
                  className="hover:text-white p-0.5 transition-colors"
                  title="Copy full address"
                >
                  {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Simulated Age: {token.created}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          {token.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Grid: Risk Gauge & Overview Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Risk Gauge & Quick Stats (4 or 5 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <RiskGauge score={token.riskScore} />

          {/* Quick Metrics Grid */}
          <div className="p-4 bg-slate-950/70 rounded-2xl border border-white/[0.07] space-y-3 font-mono text-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block border-b border-white/[0.06] pb-1.5">
              Simulated Financial Metrics
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-slate-400 block text-[11px]">Market Cap</span>
                <span className="text-white font-bold text-sm">{token.marketCap}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Total Liquidity</span>
                <span className="text-white font-bold text-sm">{token.liquidity}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">24h Volume</span>
                <span className="text-white font-bold text-sm">{token.volume24h}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Simulated Holders</span>
                <span className="text-white font-bold text-sm">{token.holdersCount}</span>
              </div>
            </div>
          </div>

          {/* Heuristic Summary Card */}
          <div className="p-4 bg-slate-950/70 rounded-2xl border border-white/[0.07]">
            <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Automated Risk Synthesis
            </span>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {token.overview}
            </p>
          </div>
        </div>

        {/* Right Column: Detailed Indicators & Deep-Dive Explanations (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* View Mode Tabs */}
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-2">
            <button
              onClick={() => setActiveTab('indicators')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'indicators'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-emerald-glow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Risk Indicators & Explanations ({token.indicators.length})
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'technical'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-emerald-glow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Simulated Contract Bytecode Spec
            </button>
          </div>

          {/* Tab 1: Indicators with Plain-English Explanations */}
          {activeTab === 'indicators' ? (
            <IndicatorList indicators={token.indicators} />
          ) : (
            <div className="p-5 bg-slate-950/70 rounded-2xl border border-white/[0.07] space-y-4">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>Simulated Smart Contract Bytecode Specification</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {Object.entries(token.technicalBreakdown || {}).map(([key, val]) => (
                  <div key={key} className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[11px] capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-white font-semibold mt-0.5 block truncate">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs font-mono text-slate-400">
                <span className="text-emerald-400 font-semibold block mb-1">
                  Heuristic Parsing Method:
                </span>
                Contract decompiled to opcode primitives to simulate state changes before EVM transaction finalization.
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
