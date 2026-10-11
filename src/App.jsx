import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import GlobalMetrics from './components/GlobalMetrics';
import SearchBar from './components/SearchBar';
import ThreatRadar from './components/ThreatRadar';
import ArcRiskGauge from './components/ArcRiskGauge';
import TokenOverviewCard from './components/TokenOverviewCard';
import TopHoldingsCard from './components/TopHoldingsCard';
import LiquiditySecurityChecklist from './components/LiquiditySecurityChecklist';
import HolderFlowTable from './components/HolderFlowTable';
import BootLoadingScreen from './components/BootLoadingScreen';
import IndicatorDetailModal from './components/IndicatorDetailModal';
import AboutView from './components/AboutView';
import { SAMPLE_TOKENS } from './data/sampleTokens';
import { 
  Menu, 
  X, 
  ShieldCheck, 
  Info, 
  Sparkles, 
  RefreshCw,
  Bell,
  CheckCircle2,
  AlertTriangle,
  Play
} from 'lucide-react';

export default function App() {
  // Initial page loading animation state
  const [isBooting, setIsBooting] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'scan' | 'reports' | 'alerts' | 'settings' | 'support'
  const [selectedTokenId, setSelectedTokenId] = useState('nexus-defi');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChain, setSelectedChain] = useState('EVM Chain');
  const [isScanning, setIsScanning] = useState(false);
  const [activeIndicatorModal, setActiveIndicatorModal] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);

  // Active token data
  const currentToken = SAMPLE_TOKENS.find(t => t.id === selectedTokenId) || SAMPLE_TOKENS[0];

  // Handle Scan action
  const handleScan = () => {
    setIsScanning(true);
    // Simulate scan trace
    setTimeout(() => {
      // If search query matches any token, switch to it
      const query = searchQuery.trim().toLowerCase();
      const matched = SAMPLE_TOKENS.find(t => 
        t.name.toLowerCase().includes(query) ||
        t.symbol.toLowerCase().includes(query) ||
        t.address.toLowerCase().includes(query)
      );

      if (matched) {
        setSelectedTokenId(matched.id);
      }
      setIsScanning(false);
    }, 1200);
  };

  const handleSelectSample = (id) => {
    setSelectedTokenId(id);
    const target = SAMPLE_TOKENS.find(t => t.id === id);
    if (target) {
      setSearchQuery(target.address);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 flex flex-col font-sans selection:bg-[#FF6422]/20 selection:text-[#FF6422]">
      
      {/* 1. INITIAL PAGE BOOT & LOADING ANIMATION */}
      {isBooting && (
        <BootLoadingScreen onFinished={() => setIsBooting(false)} />
      )}

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar (Desktop) */}
        <div className="hidden lg:block shrink-0">
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            onOpenUpgradeModal={() => setUpgradeModalOpen(true)}
          />
        </div>

        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div className="relative w-64 bg-[#0A0C10] h-full shadow-2xl">
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="absolute top-4 right-4 text-slate-400 p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <Sidebar 
                activeTab={activeTab} 
                setActiveTab={(tab) => {
                  setActiveTab(tab);
                  setMobileSidebarOpen(false);
                }} 
                onOpenUpgradeModal={() => {
                  setUpgradeModalOpen(true);
                  setMobileSidebarOpen(false);
                }}
              />
            </div>
            <div 
              className="flex-1 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileSidebarOpen(false)}
            />
          </div>
        )}

        {/* Main Dashboard Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          
          {/* Mobile Top Header */}
          <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#0A0C10] border-b border-white/[0.07]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300"
              >
                <Menu className="w-5 h-5" />
              </button>
              <span className="font-extrabold text-sm text-white">RugGuard<span className="text-[#FF6422]">AI</span></span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF6422]/15 text-[#FF6422] border border-[#FF6422]/30">
              DEMO
            </span>
          </div>

          {/* Top Banner Notice */}
          <div className="bg-[#0B0E14] border-b border-white/[0.05] px-6 py-2 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D8F6] animate-pulse" />
              <span>Simulated Sandbox Environment • Rule-Based DeFi Risk Explorer</span>
            </div>
            <button
              onClick={() => setIsBooting(true)}
              className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
              title="Re-run the initial boot sequence animation"
            >
              <RefreshCw className="w-3 h-3 text-[#FF6422]" />
              <span>Replay Boot Animation</span>
            </button>
          </div>

          {/* Tab Views */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1440px] mx-auto w-full">
            
            {/* 1. DASHBOARD VIEW (Exact layout matching the Dribbble screenshot) */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                
                {/* Global Metrics Bar */}
                <GlobalMetrics />

                {/* Search & Scan Action Bar */}
                <SearchBar 
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onScan={handleScan}
                  isScanning={isScanning}
                  selectedChain={selectedChain}
                  setSelectedChain={setSelectedChain}
                  sampleTokens={SAMPLE_TOKENS}
                  onSelectSampleToken={handleSelectSample}
                  selectedToken={currentToken}
                />

                {/* Middle 3 Cards Grid (Threat Count, Risk Score, Token Overview) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <ThreatRadar token={currentToken} />
                  <ArcRiskGauge score={currentToken.riskScore} />
                  <TokenOverviewCard token={currentToken} />
                </div>

                {/* Bottom 3 Cards Grid (Top Exchanges, Liquidity Analysis, CEX Holding Analysis) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <TopHoldingsCard token={currentToken} />
                  <LiquiditySecurityChecklist 
                    token={currentToken} 
                    onSelectIndicator={(indicator) => setActiveIndicatorModal(indicator)}
                  />
                  <HolderFlowTable token={currentToken} />
                </div>

              </div>
            )}

            {/* 2. SCAN / HEURISTICS DEEP-DIVE TAB */}
            {activeTab === 'scan' && (
              <div className="space-y-6">
                <div className="pb-3 border-b border-white/[0.08]">
                  <h2 className="text-xl font-bold text-white">Advanced Contract Scanner</h2>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Direct bytecode inspection and rule-based honeypot simulation
                  </p>
                </div>

                <SearchBar 
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onScan={handleScan}
                  isScanning={isScanning}
                  selectedChain={selectedChain}
                  setSelectedChain={setSelectedChain}
                  sampleTokens={SAMPLE_TOKENS}
                  onSelectSampleToken={handleSelectSample}
                  selectedToken={currentToken}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ThreatRadar token={currentToken} />
                  <ArcRiskGauge score={currentToken.riskScore} />
                </div>
              </div>
            )}

            {/* 3. REPORTS & METHODOLOGY TAB */}
            {(activeTab === 'reports' || activeTab === 'settings') && (
              <AboutView />
            )}

            {/* 4. ALERTS TAB */}
            {activeTab === 'alerts' && (
              <div className="p-8 rounded-2xl bg-[#0E1117] border border-white/10 text-center space-y-3">
                <Bell className="w-10 h-10 text-[#FF6422] mx-auto animate-bounce" />
                <h3 className="text-lg font-bold text-white">Live Mempool Sniffer Alerts</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  RugGuard AI simulated alerts flag any sudden LP removals or blacklist updates within 1 block execution.
                </p>
                <div className="pt-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                    All 3 Sample Contracts Currently Monitored
                  </span>
                </div>
              </div>
            )}

            {/* 5. SUPPORT TAB */}
            {activeTab === 'support' && (
              <div className="p-8 rounded-2xl bg-[#0E1117] border border-white/10 space-y-4 max-w-xl">
                <h3 className="text-lg font-bold text-white">Security Support & FAQ</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  RugGuard AI is an educational demonstration designed to teach crypto users how smart contracts can be compromised through hidden honeypots, unlocked liquidity, and whale concentration.
                </p>
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-xs font-mono text-slate-400">
                  <span className="text-[#FF6422] font-semibold block mb-1">Local Mode:</span>
                  100% Client-side React application with zero external API dependencies.
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Plain-English Indicator Detail Modal */}
      {activeIndicatorModal && (
        <IndicatorDetailModal 
          indicator={activeIndicatorModal}
          onClose={() => setActiveIndicatorModal(null)}
        />
      )}

      {/* Upgrade Pro Modal */}
      {upgradeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#0E1117] border border-[#FF6422]/40 rounded-2xl p-6 shadow-2xl text-center space-y-4">
            <button
              onClick={() => setUpgradeModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-[#FF6422]/20 border border-[#FF6422]/50 flex items-center justify-center text-[#FF6422] mx-auto shadow-orange-glow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">RugGuard AI Pro Demo</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Pro includes simulated Telegram bot webhooks, real-time sandwich attack protection, and automated token revoking.
            </p>
            <button
              onClick={() => setUpgradeModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF6422] to-[#D84810] text-white text-xs font-bold shadow-orange-glow"
            >
              Close Demo Modal
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
