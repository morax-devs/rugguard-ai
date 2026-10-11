/**
 * RugGuard AI - Transparent Rule-Based Risk Engine
 * 
 * Computes deterministic, explainable risk scores (0-100) based on
 * fundamental DeFi smart contract security vectors.
 * 
 * Scoring Philosophy:
 * - 0–25: Low Risk / High Integrity (audited, high LP lock, renounced/multisig, honeypot pass)
 * - 26–65: Moderate Risk / Caution Advised (moderate locks, centralized admin, dynamic taxes)
 * - 66–100: Critical Hazard / High Rugpull Danger (honeypot fail, unlocked LP, 99% taxes, mint backdoors)
 */

export function getRiskCategory(score) {
  if (score <= 25) {
    return {
      category: 'Low Risk',
      color: 'emerald',
      label: 'High Integrity',
      severity: 'LOW',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      fillColor: '#10B981',
      glowClass: 'shadow-emerald-glow',
      description: 'Transparent contract parameters with locked liquidity and decentralized governance. Low immediate exploit indicators detected in simulated analysis.'
    };
  }
  if (score <= 65) {
    return {
      category: 'Moderate Risk',
      color: 'amber',
      label: 'Caution Advised',
      severity: 'MEDIUM',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      fillColor: '#F59E0B',
      glowClass: 'shadow-warning-glow',
      description: 'Elevated speculative factors: shorter liquidity lock windows, centralized owner privileges, or dynamic trading taxes require active monitoring.'
    };
  }
  return {
    category: 'Critical Hazard',
    color: 'rose',
    label: 'High Rugpull Hazard',
    severity: 'CRITICAL',
    badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    fillColor: '#EF4444',
    glowClass: 'shadow-danger-glow',
    description: 'Severe structural hazards detected. Highly probable malicious logic (honeypot, confiscatory taxes, or unlocked deployer liquidity). High capital loss probability.'
  };
}

export function formatAddress(address, chars = 6) {
  if (!address) return '';
  if (address.length <= chars * 2 + 2) return address;
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
}

export const SCAN_STEPS = [
  { id: 1, title: 'Bytecode & ABI Extraction', detail: 'Fetching decompiled bytecode and matching verified signatures...' },
  { id: 2, title: 'Liquidity Pool Verification', detail: 'Querying automated market maker reserves and vault time-locks...' },
  { id: 3, title: 'EVM Honeypot Simulation', detail: 'Executing isolated buy/sell trace in virtual sandboxed environment...' },
  { id: 4, title: 'Owner & Governance Analysis', detail: 'Inspecting administrative roles, proxy delegatecalls, and mint permissions...' },
  { id: 5, title: 'Heuristic Risk Aggregation', detail: 'Synthesizing 7-pillar weighted score and generating plain-English security report...' },
];
