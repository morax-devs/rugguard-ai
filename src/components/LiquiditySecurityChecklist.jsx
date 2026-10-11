import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Info, ChevronRight } from 'lucide-react';

export default function LiquiditySecurityChecklist({ token, onSelectIndicator }) {
  // Checklist items mapping to token properties
  const isScam = token?.id === 'safuelon-rocket';
  const isWarning = token?.id === 'moonape-velocity';

  const checks = [
    {
      id: 'whitelist',
      label: 'Whitelist Require',
      status: isScam ? 'danger' : 'safe',
      detail: isScam ? 'Restricted transfer whitelist active' : 'No whitelist barrier detected',
      explanation: 'A whitelist requirement restricts trading to only developer-approved addresses. In scam tokens, buyers are tricked into buying but cannot sell without whitelist permissions.'
    },
    {
      id: 'trading-toggle',
      label: 'Trading Toggle',
      status: isScam ? 'danger' : isWarning ? 'warning' : 'safe',
      detail: isScam ? 'Deployer can pause trading permanently' : isWarning ? 'Timelocked trading pause' : 'Trading cannot be halted',
      explanation: 'A trading toggle allows contract admins to pause token transfers. Malicious creators use this to prevent retail buyers from escaping while they drain liquidity.'
    },
    {
      id: 'proxy',
      label: 'Proxy/Upgradeable',
      status: isScam ? 'danger' : 'safe',
      detail: isScam ? 'Hidden proxy delegatecall detected' : 'Immutable non-proxy contract',
      explanation: 'Upgradeable proxy contracts allow developers to change the underlying smart contract code at any time, potentially injecting malicious draining logic after community trust is built.'
    },
    {
      id: 'blacklist',
      label: 'Blacklist Function',
      status: isScam ? 'danger' : 'safe',
      detail: isScam ? 'setBotBlacklist active in bytecode' : 'No blacklist functionality present',
      explanation: 'A blacklist function gives developers the power to freeze individual wallet balances, confiscating tokens from specific traders.'
    },
  ];

  return (
    <div className="ambient-cyan-card rounded-2xl p-5 flex flex-col justify-between h-full min-h-[260px]">
      
      {/* Header matching screenshot */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <h3 className="text-sm font-bold text-white font-sans">
          Liquidity Analysis
        </h3>
        <span className="text-[11px] font-mono text-slate-400">
          Bytecode Audit
        </span>
      </div>

      {/* Checklist rows matching screenshot */}
      <div className="space-y-3 py-2 text-xs font-sans">
        {checks.map((check) => {
          const isSafe = check.status === 'safe';
          const isWarn = check.status === 'warning';
          
          return (
            <div 
              key={check.id}
              onClick={() => onSelectIndicator(check)}
              className="flex items-center justify-between p-2 rounded-xl bg-[#121620]/60 border border-white/[0.04] hover:border-[#00D8F6]/40 cursor-pointer transition-all group"
              title="Click to view plain-English explanation"
            >
              <div className="flex items-center gap-2">
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  {check.label}
                </span>
                <Info className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00D8F6] transition-colors" />
              </div>

              <div className="flex items-center gap-1.5">
                <span className={`text-[10px] font-mono ${
                  isSafe ? 'text-emerald-400' : isWarn ? 'text-amber-400' : 'text-rose-400'
                }`}>
                  {isSafe ? 'Safe' : isWarn ? 'Caution' : 'Hazard'}
                </span>
                {isSafe ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : isWarn ? (
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer status */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Click check for plain-English details</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
      </div>

    </div>
  );
}
