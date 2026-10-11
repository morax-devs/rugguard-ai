import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Copy, 
  Check, 
  Filter, 
  Sparkles, 
  ExternalLink, 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle,
  Play
} from 'lucide-react';
import { formatAddress } from '../utils/riskEngine';

export default function TokenSelector({ 
  tokens, 
  selectedToken, 
  onSelectToken, 
  onAnalyzeToken, 
  isScanning 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [copiedAddress, setCopiedAddress] = useState(null);

  // Filter tokens based on search and category
  const filteredTokens = useMemo(() => {
    return tokens.filter((token) => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        token.name.toLowerCase().includes(query) ||
        token.symbol.toLowerCase().includes(query) ||
        token.address.toLowerCase().includes(query);

      if (!matchesSearch) return false;

      if (selectedFilter === 'SAFE') return token.riskScore <= 25;
      if (selectedFilter === 'WARNING') return token.riskScore > 25 && token.riskScore <= 65;
      if (selectedFilter === 'HAZARD') return token.riskScore > 65;
      return true;
    });
  }, [tokens, searchQuery, selectedFilter]);

  const handleCopy = (address, e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="bg-[#0B101D] border border-white/[0.08] rounded-2xl p-5 shadow-xl">
      
      {/* Header and Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.07]">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>Select & Inspect Token</span>
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Choose a simulated token contract or search by name / symbol / address
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {[
            { id: 'ALL', label: 'All Samples (3)' },
            { id: 'SAFE', label: 'Safe / Low Risk' },
            { id: 'WARNING', label: 'Caution' },
            { id: 'HAZARD', label: 'Critical Hazard' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all shrink-0 ${
                selectedFilter === filter.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-emerald-glow-sm'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="mt-4 relative">
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by token name, $SYMBOL, or 0x contract address..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 font-mono transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Token Cards Grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {filteredTokens.length > 0 ? (
          filteredTokens.map((token) => {
            const isSelected = selectedToken?.id === token.id;
            const isSafe = token.riskScore <= 25;
            const isWarning = token.riskScore > 25 && token.riskScore <= 65;

            return (
              <div
                key={token.id}
                onClick={() => onSelectToken(token.id)}
                className={`relative rounded-xl p-4 cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-slate-900/95 border-emerald-500 shadow-emerald-glow ring-1 ring-emerald-500/50'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Selected</span>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  {/* Token Avatar / Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border ${
                    isSafe
                      ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30'
                      : isWarning
                      ? 'bg-amber-950/60 text-amber-400 border-amber-500/30'
                      : 'bg-rose-950/60 text-rose-400 border-rose-500/30'
                  }`}>
                    {token.symbol.substring(0, 3)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-base truncate">
                        {token.name}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        ${token.symbol}
                      </span>
                    </div>

                    {/* Network & Contract address */}
                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-400 font-mono">
                      <span>{token.networkBadge}</span>
                      <span>•</span>
                      <span className="text-slate-400 truncate" title={token.address}>
                        {formatAddress(token.address, 4)}
                      </span>
                      <button
                        onClick={(e) => handleCopy(token.address, e)}
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Copy Address"
                      >
                        {copiedAddress === token.address ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Simulated Metrics snapshot */}
                <div className="mt-3.5 pt-3 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 text-[11px] block">Simulated MC:</span>
                    <span className="text-white font-medium">{token.marketCap}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Risk Score:</span>
                    <span className={`font-bold ${
                      isSafe ? 'text-emerald-400' : isWarning ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {token.riskScore} / 100 ({token.riskCategory})
                    </span>
                  </div>
                </div>

                {/* Select / Click CTA */}
                <div className="mt-3 flex items-center justify-between pt-2 text-[11px] font-mono text-slate-400 border-t border-white/[0.04]">
                  <span>{token.indicators.length} risk vectors</span>
                  <span className={`transition-colors ${isSelected ? 'text-emerald-400 font-semibold' : 'hover:text-white'}`}>
                    {isSelected ? 'Ready for Analysis' : 'Click to select →'}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-3 py-8 px-4 text-center bg-slate-950/40 rounded-xl border border-slate-800/80">
            <Search className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-sm text-slate-300 font-medium">No sample tokens found</p>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Try searching "Nexus", "MoonApe", "SafuElon", or clear your filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('ALL');
              }}
              className="mt-3 px-3 py-1.5 bg-slate-800 text-xs text-emerald-400 rounded-lg hover:bg-slate-700 font-mono"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>

      {/* Primary Action Button: "Analyze Token" */}
      <div className="mt-5 pt-4 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
          <span className="text-emerald-400 font-semibold">Active Selection:</span>
          {selectedToken ? (
            <span className="text-white bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {selectedToken.name} (${selectedToken.symbol})
            </span>
          ) : (
            <span className="text-slate-500">None selected</span>
          )}
        </div>

        <button
          onClick={onAnalyzeToken}
          disabled={!selectedToken || isScanning}
          className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg ${
            !selectedToken || isScanning
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
              : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-glow hover:shadow-emerald-glow-lg border border-emerald-300/40 cursor-pointer transform active:scale-95'
          }`}
        >
          {isScanning ? (
            <>
              <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              <span>Scanning Contract Heuristics...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Analyze Token</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
