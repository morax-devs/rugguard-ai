import React from 'react';

export default function TopHoldingsCard({ token }) {
  // Holdings data proportional to token archetype
  const exchanges = token?.id === 'safuelon-rocket' ? [
    { name: 'Deployer Wallet', amount: '$32.40K', pct: '85.20%', isRisk: true },
    { name: 'Puppet Whale 1', amount: '$1.85K', pct: '4.86%', isRisk: true },
    { name: 'Puppet Whale 2', amount: '$1.12K', pct: '2.94%', isRisk: true },
    { name: 'PancakeSwap LP', amount: '$1.04K', pct: '2.73%', isRisk: false },
    { name: 'Holder #5', amount: '$420.00', pct: '1.10%', isRisk: false },
    { name: 'Holder #6', amount: '$290.00', pct: '0.76%', isRisk: false },
    { name: 'Holder #7', amount: '$210.00', pct: '0.55%', isRisk: false },
    { name: 'Retail Pool', amount: '$690.00', pct: '1.81%', isRisk: false },
  ] : [
    { name: 'Binance', amount: '$985.46M', pct: '80.46%', isRisk: false },
    { name: 'Bybit', amount: '$54.26M', pct: '6.42%', isRisk: false },
    { name: 'Bitget', amount: '$4.25M', pct: '0.85%', isRisk: false },
    { name: 'OKX', amount: '$3.75M', pct: '0.69%', isRisk: false },
    { name: 'Gate.io', amount: '$897.61K', pct: '0.45%', isRisk: false },
    { name: 'KuCoin', amount: '$325.34M', pct: '4.21%', isRisk: false },
    { name: 'MEXC', amount: '$100.10M', pct: '2.10%', isRisk: false },
    { name: 'Upbit', amount: '$425.87K', pct: '0.38%', isRisk: false },
  ];

  return (
    <div className="ambient-orange-card rounded-2xl p-5 flex flex-col justify-between h-full min-h-[260px]">
      
      {/* Header matching screenshot */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <h3 className="text-sm font-bold text-white font-sans">
          Top Exchanges by Holdings
        </h3>
        <span className="text-[11px] font-mono text-slate-400">
          Wallet Cluster
        </span>
      </div>

      {/* 4x2 Grid of Exchanges matching screenshot */}
      <div className="grid grid-cols-4 gap-2.5 py-2">
        {exchanges.map((item, idx) => (
          <div 
            key={idx}
            className={`p-2 rounded-xl border transition-all ${
              item.isRisk 
                ? 'bg-rose-950/20 border-rose-500/30' 
                : 'bg-[#121620]/80 border-white/[0.04]'
            }`}
          >
            <span className="text-[11px] font-medium text-slate-400 block truncate">
              {item.name}
            </span>
            <span className="text-xs font-bold font-mono text-white block mt-0.5 truncate">
              {item.amount}
            </span>
            <span className={`text-[10px] font-mono block ${item.isRisk ? 'text-rose-400' : 'text-slate-500'}`}>
              ({item.pct})
            </span>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Concentration Alert:</span>
        <span className={token?.id === 'safuelon-rocket' ? 'text-rose-400 font-bold' : 'text-slate-300'}>
          {token?.id === 'safuelon-rocket' ? 'High Sybil Whale Danger' : 'Standard Distribution'}
        </span>
      </div>

    </div>
  );
}
