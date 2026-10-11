import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function HolderFlowTable({ token }) {
  const isScam = token?.id === 'safuelon-rocket';

  const rows = isScam ? [
    {
      name: 'Deployer (Private)',
      iconBg: 'bg-rose-500/20 text-rose-400',
      symbol: 'DP',
      netflow: '+$31,200.00',
      isPositive: true,
      score: '12.40',
      badge: 'F',
      badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30'
    },
    {
      name: 'Puppet Cluster #1',
      iconBg: 'bg-rose-500/20 text-rose-400',
      symbol: 'PC',
      netflow: '+$4,120.00',
      isPositive: true,
      score: '18.15',
      badge: 'D-',
      badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30'
    },
    {
      name: 'PancakeSwap Pool',
      iconBg: 'bg-amber-500/20 text-amber-400',
      symbol: 'PS',
      netflow: '-$28,500.00',
      isPositive: false,
      score: '45.00',
      badge: 'C',
      badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    },
  ] : [
    {
      name: 'Binance',
      iconBg: 'bg-amber-400/20 text-amber-300',
      symbol: 'BN',
      netflow: '+$2,44,478.26',
      isPositive: true,
      score: '93.21',
      badge: 'AAA',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    },
    {
      name: 'Bybit',
      iconBg: 'bg-slate-700/60 text-slate-200',
      symbol: 'BY',
      netflow: '-$44,478.75',
      isPositive: false,
      score: '71.25',
      badge: 'AA',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    },
    {
      name: 'Bitget',
      iconBg: 'bg-cyan-500/20 text-cyan-300',
      symbol: 'BG',
      netflow: '+$1,14,478.20',
      isPositive: true,
      score: '81.21',
      badge: 'AAA',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    },
  ];

  return (
    <div className="ambient-orange-card rounded-2xl p-5 flex flex-col justify-between h-full min-h-[260px]">
      
      {/* Header matching screenshot */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <h3 className="text-sm font-bold text-white font-sans">
          CEX Holding Analysis
        </h3>
        <button 
          className="text-slate-400 hover:text-white transition-colors"
          title="Open Explorer on Etherscan"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Table Header */}
      <div className="overflow-x-auto py-1">
        <table className="w-full text-left text-xs font-sans">
          <thead>
            <tr className="text-slate-500 text-[11px] border-b border-white/[0.04]">
              <th className="pb-2 font-medium">CEX Name</th>
              <th className="pb-2 font-medium text-center">Daily NetFlow</th>
              <th className="pb-2 font-medium text-right">Skynet Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                
                {/* Name with icon */}
                <td className="py-2.5">
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[9px] ${row.iconBg}`}>
                      {row.symbol}
                    </div>
                    <span className="font-medium text-white text-xs">
                      {row.name}
                    </span>
                  </div>
                </td>

                {/* NetFlow */}
                <td className="py-2.5 text-center font-mono text-[11px]">
                  <span className={row.isPositive ? 'text-emerald-400' : 'text-rose-400'}>
                    {row.netflow}
                  </span>
                </td>

                {/* Skynet Score & Badge */}
                <td className="py-2.5 text-right font-mono text-xs">
                  <div className="flex items-center justify-end gap-1.5">
                    <span className="text-white font-semibold">{row.score}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${row.badgeColor}`}>
                      {row.badge}
                    </span>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Order Book Liquidity:</span>
        <span className="text-emerald-400 font-medium">Sufficient Depth</span>
      </div>

    </div>
  );
}
