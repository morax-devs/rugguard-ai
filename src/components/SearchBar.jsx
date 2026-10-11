import React, { useState } from 'react';
import { ChevronDown, ScanLine, Search, Sparkles } from 'lucide-react';

export default function SearchBar({ 
  searchQuery, 
  setSearchQuery, 
  onScan, 
  isScanning, 
  selectedChain, 
  setSelectedChain,
  sampleTokens,
  onSelectSampleToken,
  selectedToken
}) {
  const [chainDropdownOpen, setChainDropdownOpen] = useState(false);
  const [tokenDropdownOpen, setTokenDropdownOpen] = useState(false);

  const chains = ['EVM Chain', 'Ethereum', 'BNB Chain', 'Arbitrum', 'Polygon', 'Base'];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onScan();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        
        {/* EVM Chain Dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={() => setChainDropdownOpen(!chainDropdownOpen)}
            className="w-full sm:w-auto h-12 px-4 rounded-2xl bg-[#0E1117] border border-white/10 text-white text-xs font-medium flex items-center justify-between gap-3 hover:border-white/20 transition-colors"
          >
            <span>{selectedChain}</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>

          {chainDropdownOpen && (
            <div className="absolute top-14 left-0 z-40 w-44 rounded-xl bg-[#121620] border border-white/10 shadow-2xl p-1.5 space-y-1 font-mono text-xs">
              {chains.map((chain) => (
                <button
                  key={chain}
                  onClick={() => {
                    setSelectedChain(chain);
                    setChainDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                    selectedChain === chain ? 'bg-[#FF6422]/20 text-[#FF6422] font-semibold' : 'text-slate-300 hover:bg-white/[0.05]'
                  }`}
                >
                  {chain}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter token address or Smart Contract address..."
            className="w-full h-12 pl-4 pr-10 rounded-2xl bg-[#0E1117] border border-white/10 text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-[#FF6422]/60 focus:ring-1 focus:ring-[#FF6422]/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs font-mono"
            >
              Clear
            </button>
          )}
        </div>

        {/* Scan Button matching screenshot's orange gradient glow */}
        <button
          onClick={onScan}
          disabled={isScanning}
          className={`h-12 px-6 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2.5 transition-all btn-orange-glow shrink-0 ${
            isScanning ? 'opacity-80 cursor-wait' : 'cursor-pointer active:scale-95'
          }`}
        >
          <ScanLine className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
          <span>{isScanning ? 'Scanning...' : 'Scan'}</span>
        </button>

      </div>

      {/* Quick Sample Presets bar */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
        <span className="text-slate-500 font-mono text-[11px]">Quick Samples:</span>
        {sampleTokens.map((token) => (
          <button
            key={token.id}
            onClick={() => onSelectSampleToken(token.id)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border transition-all ${
              selectedToken?.id === token.id
                ? 'bg-[#FF6422]/15 text-[#FF6422] border-[#FF6422]/50 font-bold'
                : 'bg-[#0E1117] text-slate-400 border-white/5 hover:text-white hover:border-white/15'
            }`}
          >
            {token.name} (${token.symbol}) — {token.riskScore} Risk
          </button>
        ))}
      </div>
    </div>
  );
}
