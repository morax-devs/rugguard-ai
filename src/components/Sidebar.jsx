import React from 'react';
import { 
  LayoutGrid, 
  ScanLine, 
  PieChart, 
  Bell, 
  Settings, 
  Headphones, 
  Sparkles, 
  X,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, onOpenUpgradeModal }) {
  const mainNav = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'scan', label: 'Scan', icon: ScanLine },
    { id: 'reports', label: 'Reports', icon: PieChart },
    { id: 'alerts', label: 'Alerts', icon: Bell },
  ];

  const manageNav = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'support', label: 'Support', icon: Headphones },
  ];

  return (
    <aside className="w-60 bg-[#0A0C10] border-r border-white/[0.07] flex flex-col justify-between shrink-0 min-h-screen py-6 px-4">
      {/* Top Branding & Main Navigation */}
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-2.5 px-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6422] to-[#B83808] flex items-center justify-center text-white shadow-orange-glow-sm">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-white font-sans">
                RugGuard<span className="text-[#FF6422]">AI</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono tracking-tight">
              Threat Intelligence
            </p>
          </div>
        </div>

        {/* Main Nav Items matching screenshot */}
        <div className="space-y-1.5">
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'nav-item-active bg-[#121620] text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#FF6422]/20 text-[#FF6422]' : 'text-slate-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Manage Section */}
        <div className="mt-8 pt-6 border-t border-white/[0.06]">
          <span className="text-xs font-medium text-slate-500 px-3 block mb-2 font-sans">
            Manage
          </span>
          <div className="space-y-1.5">
            {manageNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'nav-item-active bg-[#121620] text-white font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#FF6422]/20 text-[#FF6422]' : 'text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Upgrade Pro Card from screenshot */}
      <div className="mt-6">
        <div className="relative p-3.5 rounded-2xl bg-gradient-to-b from-[#181C26] to-[#0E1117] border border-[#FF6422]/30 shadow-card-ambient">
          <button 
            className="absolute top-2.5 right-2.5 text-slate-500 hover:text-white p-0.5"
            aria-label="Dismiss upgrade"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#FF6422]/20 border border-[#FF6422]/40 flex items-center justify-center text-[#FF6422]">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight">
              Upgrade Pro!
            </span>
          </div>

          <p className="text-[11px] text-slate-400 leading-tight mb-2.5">
            Unlock real-time mempool sniffing & API webhooks.
          </p>

          <button
            onClick={onOpenUpgradeModal}
            className="w-full py-1.5 px-3 rounded-lg bg-gradient-to-r from-[#FF6422] to-[#D84810] text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-orange-glow-sm"
          >
            Activate Free Trial
          </button>
        </div>
      </div>

    </aside>
  );
}
