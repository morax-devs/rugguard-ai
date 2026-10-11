import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { formatAddress } from '../utils/riskEngine';

export default function TokenOverviewCard({ token }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(token?.address || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rows = [
    { label: 'Market Cap', value: token?.marketCap || '$18.45M' },
    { label: 'Daily Volume', value: token?.volume24h || '$940.00K' },
    { label: 'Total Supply', value: '100,000,000' },
    { label: 'Circulating Supply', value: '88,240,000' },
    { label: 'FDV', value: token?.marketCap || '$18.45M' },
    { 
      label: 'Contracts', 
      value: formatAddress(token?.address, 5),
      isContract: true,
      rawAddress: token?.address
    },
    { label: 'Blockchain', value: token?.networkBadge || 'ERC-20' },
    { label: 'Age', value: token?.created || '14 months' },
  ];

  return (
    <div className="ambient-orange-card rounded-2xl p-5 flex flex-col justify-between h-full min-h-[310px]">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <h3 className="text-sm font-bold text-white font-sans">
          Token Overview
        </h3>
        <span className="text-[11px] font-mono text-slate-400">
          {token?.name} (${token?.symbol})
        </span>
      </div>

      {/* Spec list matching screenshot */}
      <div className="space-y-2 py-2 text-xs font-sans">
        {rows.map((row, idx) => (
          <div key={idx} className="flex items-center justify-between py-0.5">
            <span className="text-slate-400 font-medium">
              {row.label}
            </span>

            {row.isContract ? (
              <div className="flex items-center gap-1.5 font-mono text-white">
                <span title={row.rawAddress}>{row.value}</span>
                <button
                  onClick={handleCopy}
                  className="text-slate-500 hover:text-white transition-colors"
                  title="Copy full contract address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ) : (
              <span className="text-white font-mono font-medium">
                {row.value}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Bottom verified status */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Verified Source Code:</span>
        <span className="text-emerald-400 font-semibold">Matched (EVM)</span>
      </div>

    </div>
  );
}
