# RugGuard AI — Crypto Token Risk Explorer & Audit Simulator

**RugGuard AI** is a responsive single-page web application designed with a premium cybersecurity dashboard aesthetic. It provides transparent, rule-based simulated intelligence on DeFi smart contract risks, liquidity locks, honeypot execution traits, and tokenomic traps.

> **DISCLAIMER:** RugGuard AI is an educational simulation demo. All token profiles, contracts, liquidity reserves, and risk scores are hardcoded local sample data evaluated via deterministic heuristics. It does not connect to live blockchain networks, is not a certified smart contract audit, and does not provide financial advice.

---

## 🛡️ Key Features

1. **Cybersecurity Dashboard Theme**: Charcoal-black backdrop (`#070a10`), emerald green accents (`#10B981`), subtle glass borders, scanline and radar animations, and SaaS typography.
2. **Navigation & Views**: Top navigation bar with RugGuard AI logo, **Dashboard**, **Token Explorer**, and **About & Methodology** tabs, plus mobile responsive drawer.
3. **Hero Section**: Security value proposition, quick-switch archetype shortcuts, and clear demo notices.
4. **Three Realistic Simulated Token Archetypes**:
   - **Nexus DeFi ($NXD)** — Low Risk (Score: 12/100, audited 98.4% LP lock on Unicrypt, renounced mint, 0% taxes, multi-sig timelock).
   - **MoonApe Velocity ($MAV)** — Moderate Caution (Score: 56/100, 14-day lock expiration, 43.2% whale concentration, adjustable 8% sell tax, EOA admin).
   - **SafuElonRocket ($SER)** — Critical Hazard (Score: 94/100, honeypot revert fail on sell, 99% confiscatory sell tax, 88.8% unlocked LP in creator wallet, active blacklist function).
5. **Interactive Token Search & Selector**:
   - Filter by name, `$SYMBOL`, or `0x` contract address.
   - Filter pills (All, Safe / Low Risk, Caution, Critical Hazard).
   - Card previews with copyable contract addresses.
6. **"Analyze Token" Heuristic Scanner**:
   - High-tech simulated terminal and radar sweep animation.
   - 5-step heuristic verification process before results display.
7. **Comprehensive Analysis Panel**:
   - **SVG Circular Risk Gauge (0–100)** with color-coded tier badge.
   - **Simulated Metrics Grid**: Market Cap, Liquidity, 24h Volume, Holder Count.
   - **Security Indicators with Plain-English Explanations**: Deep dives explaining *why* each indicator affects the risk score, potential exploit vectors, and engine verdicts.
   - **Simulated Bytecode Spec**: Compiler version, gas usage, and proxy detection.
   - **Copy Report**: 1-click clipboard export of security summary.
8. **Interactive "What-If" Heuristic Sandbox (About View)**:
   - Adjust sliders for LP Lock %, Honeypot failure, Sell Tax %, Minting authority, Whale concentration, and Blacklist to observe the mathematical score update live.
9. **Educational Glossary**: Explaining Honeypots, Hard Rugs, Soft Rugs, and Minting Backdoors.

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Commands

1. **Install dependencies** (already installed):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at: `http://localhost:3000` (or the port Vite outputs).

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
RugGuard-ai/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutView.jsx         # 7 risk pillars, interactive What-If sandbox, and glossary
│   │   ├── AnalysisPanel.jsx     # Main risk results, metrics grid, bytecode spec, report copy
│   │   ├── EmptyState.jsx        # Fallback state when no token is active
│   │   ├── Footer.jsx            # Links and legal disclaimer
│   │   ├── HeroSection.jsx       # Hero banner, archetype pills, and quick highlights
│   │   ├── IndicatorList.jsx     # Expandable security indicators with plain-English breakdowns
│   │   ├── Navbar.jsx            # Brand header, navigation links, and mobile drawer
│   │   ├── RiskGauge.jsx         # Circular SVG risk score meter (0-100)
│   │   ├── ScanningState.jsx     # Radar sweep, terminal trace logs, and progress bar
│   │   └── TokenSelector.jsx     # Search input, filter pills, and "Analyze Token" CTA
│   ├── data/
│   │   └── sampleTokens.js       # Simulated dataset for Nexus DeFi, MoonApe, and SafuElon
│   ├── utils/
│   │   └── riskEngine.js         # Deterministic scoring logic, classifications, address helpers
│   ├── App.jsx                   # Primary layout, routing, and state manager
│   ├── index.css                 # Cyber-grid, glassmorphism, radar styles, and Tailwind imports
│   └── main.jsx                  # React application entry point
├── index.html                    # Root HTML with Google Fonts and favicon
├── package.json                  # Dependencies: react, react-dom, lucide-react, vite, tailwindcss
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Cybersecurity dark palette, custom glow shadows, and animations
└── vite.config.js                # Vite build and development configuration
```
