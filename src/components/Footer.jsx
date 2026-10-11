import React from 'react';
import { ShieldCheck, Lock, Terminal, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05080e] py-10 mt-16 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-sm">RugGuard AI</span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400 text-xs">
              Crypto Token Risk Explorer & Audit Simulator
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('dashboard')}
              className="hover:text-emerald-400 transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => onNavigate('explorer')}
              className="hover:text-emerald-400 transition-colors"
            >
              Token Explorer
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-emerald-400 transition-colors"
            >
              Methodology & Sandbox
            </button>
          </div>

          {/* Environment Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Zero-API Offline Simulator</span>
          </div>

        </div>

        {/* Disclaimer footer paragraph */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] text-center text-slate-400 text-[11px] leading-relaxed max-w-4xl mx-auto">
          <p>
            DISCLAIMER: RugGuard AI is a mock educational demonstration. All displayed token metrics, risk scores, contract addresses, and warnings are simulated through hardcoded rule-based heuristics. This software does not connect to live blockchain networks, is not a certified smart contract audit, and does not provide financial or investment advice.
          </p>
          <p className="mt-2 text-slate-400">
            © {new Date().getFullYear()} RugGuard AI Architecture. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
