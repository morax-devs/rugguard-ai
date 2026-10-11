/**
 * RugGuard AI - Sample Token Dataset (SIMULATED DATA ONLY)
 * 
 * DISCLAIMER: All data provided below is strictly simulated for demonstration 
 * and educational purposes. Not actual blockchain security audits or financial advice.
 */

export const SAMPLE_TOKENS = [
  {
    id: 'nexus-defi',
    name: 'Nexus DeFi',
    symbol: 'NXD',
    address: '0x8a90C22E8f6C3481B2735767b4D73B6eE9064B92',
    network: 'Ethereum (Simulated)',
    networkBadge: 'ETH',
    created: '14 months ago',
    marketCap: '$18,450,000',
    liquidity: '$4,200,000',
    volume24h: '$940,000',
    holdersCount: '12,840',
    riskScore: 12,
    riskCategory: 'Low Risk',
    riskCategoryColor: 'emerald',
    badgeText: 'High Security Integrity',
    overview: 'Fully renounced or timelocked smart contract with audited 98.4% liquidity lock on Unicrypt and decentralized multi-signature governance. Low probability of automated exploit or malicious liquidity removal.',
    tags: ['DeFi Utility', 'Audited', 'Locked LP', 'Multi-Sig'],
    indicators: [
      {
        id: 'lp-lock',
        name: 'Liquidity Lock Ratio & Duration',
        category: 'Liquidity Security',
        status: 'safe',
        severity: 'LOW',
        value: '98.4% locked (320 days remaining)',
        scoreImpact: '+2 pts',
        headline: 'Liquidity is locked in an immutable time-vault.',
        explanation: 'Liquidity locking locks the pool tokens (LP) in a third-party smart contract vault (like Unicrypt). This prevents developers from abruptly pulling the trading pool funds (a "hard rug pull"). With 98.4% locked for nearly a year, holders can exit trades without sudden liquidity dry-up.',
        riskFactors: ['Short lock expirations can be sudden exit triggers', 'Unlocked LP permits immediate liquidity drain'],
        verdict: 'Excellent: Liquidity lock covers practically all active pool reserves for an extended duration.'
      },
      {
        id: 'mint-function',
        name: 'Token Minting Function',
        category: 'Supply Mechanics',
        status: 'safe',
        severity: 'LOW',
        value: 'Permanently Renounced / Disabled',
        scoreImpact: '+0 pts',
        headline: 'No new tokens can ever be created.',
        explanation: 'If a smart contract owner retains the ability to mint new tokens at will, they can silently mint billions of tokens out of thin air and dump them directly onto decentralized exchanges, crashing the price to zero. This contract has permanently disabled the mint function.',
        riskFactors: ['Unlimited minting allows unlimited token dilution and instant market crashing.'],
        verdict: 'Passed: Total supply is fixed and capped by immutable bytecode.'
      },
      {
        id: 'top-holders',
        name: 'Top 10 Holder Concentration',
        category: 'Wallet Distribution',
        status: 'safe',
        severity: 'LOW',
        value: '14.8% held by Top 10 (excluding LP pool)',
        scoreImpact: '+4 pts',
        headline: 'Broadly decentralized distribution across retail holders.',
        explanation: 'When a handful of private wallets hold 40–80% of a token, any single whale selling can cause a cascading price collapse. Here, the top 10 wallets hold under 15% combined, ensuring high decentralized distribution.',
        riskFactors: ['High concentration gives individual wallets the power to crash liquidity in one click.'],
        verdict: 'Low Risk: Organic holder spread with negligible whale single-point failure.'
      },
      {
        id: 'buy-sell-tax',
        name: 'Buy / Sell Transaction Fees (Slippage)',
        category: 'Trading Economics',
        status: 'safe',
        severity: 'LOW',
        value: '0% Buy / 0% Sell (Immutable)',
        scoreImpact: '+0 pts',
        headline: 'Standard ERC-20 zero-fee trading model.',
        explanation: 'Malicious contracts often conceal exorbitant hidden sell fees (e.g., 20% to 99%) that penalize or completely drain traders attempting to sell. This token enforces a permanent 0% trading fee with no dynamic fee alteration mechanisms.',
        riskFactors: ['Variable tax functions allow developers to raise sell taxes up to 100% after buyers enter.'],
        verdict: 'Optimal: Zero taxes and no fee modifying hooks detected in contract code.'
      },
      {
        id: 'honeypot-check',
        name: 'Honeypot Execution Simulation',
        category: 'Contract Execution',
        status: 'safe',
        severity: 'LOW',
        value: 'Passed (Normal Gas Limit: ~48,200)',
        scoreImpact: '+1 pt',
        headline: 'Buy and sell orders simulate cleanly without reverts.',
        explanation: 'A "honeypot" is a fraudulent contract where users can purchase tokens, but code prevents anyone other than the creator from selling. The virtual machine test-executed both buy and sell transactions; both completed successfully within expected gas boundaries.',
        riskFactors: ['Transfer restrictions and blacklist reverts trap investor capital permanently.'],
        verdict: 'Passed: Automated buy and sell calls executed without revert signals.'
      },
      {
        id: 'ownership-privileges',
        name: 'Contract Ownership & Governance',
        category: 'Administrative Control',
        status: 'safe',
        severity: 'LOW',
        value: 'Multi-Sig Safe (3-of-5 with 48h Timelock)',
        scoreImpact: '+3 pts',
        headline: 'No single private key controls contract operations.',
        explanation: 'Contracts managed by an individual private wallet (EOA) risk single-actor compromise or rogue developer actions. Multi-sig governance paired with a timelock requires consensus and provides the public a 48-hour advance window before any parameter updates take effect.',
        riskFactors: ['Single-key admin accounts can alter contract parameters without warning.'],
        verdict: 'Low Risk: Decentralized multi-signature governance with community visibility.'
      },
      {
        id: 'blacklist-pause',
        name: 'Blacklist / Wallet Freezing Capabilities',
        category: 'Administrative Control',
        status: 'safe',
        severity: 'LOW',
        value: 'No Blacklist or Pause Function Present',
        scoreImpact: '+2 pts',
        headline: 'Transfers cannot be censored or halted by deployer.',
        explanation: 'Some tokens include functions like `blacklistAddress()` or `pauseTrading()`. While occasionally intended for security, rogue creators abuse them to freeze specific wallets from selling while allowing insider dumping.',
        riskFactors: ['Blacklist functions give creators the power to selectively freeze trader balances.'],
        verdict: 'Clean: No address restriction or selective pausing bytecode detected.'
      }
    ],
    technicalBreakdown: {
      contractStandard: 'ERC-20 (OpenZeppelin 4.9)',
      compilerVersion: 'Solidity 0.8.20',
      optimizerRuns: 200,
      liquidityPlatform: 'Uniswap v3 + Unicrypt Vault',
      simulatedGasSell: '48,210 gas',
      lpBurntRatio: '0.0% (Locked via Vault)',
      proxyContract: 'No (Direct Implementation)'
    }
  },
  {
    id: 'moonape-velocity',
    name: 'MoonApe Velocity',
    symbol: 'MAV',
    address: '0x51E910aA843b0C379DF03e22394F74e6f663F102',
    network: 'BNB Chain (Simulated)',
    networkBadge: 'BSC',
    created: '22 days ago',
    marketCap: '$2,150,000',
    liquidity: '$340,000',
    volume24h: '$510,000',
    holdersCount: '3,410',
    riskScore: 56,
    riskCategory: 'Moderate Risk',
    riskCategoryColor: 'amber',
    badgeText: 'Caution Advised',
    overview: 'Speculative meme token exhibiting notable warning signs: short 14-day liquidity lock duration, elevated top-holder concentration (43.2%), adjustable 8% sell taxes, and a single private deployer wallet with privileged administrative control.',
    tags: ['Meme Token', 'Short Lock', 'Variable Tax', 'EOA Admin'],
    indicators: [
      {
        id: 'lp-lock',
        name: 'Liquidity Lock Ratio & Duration',
        category: 'Liquidity Security',
        status: 'warning',
        severity: 'MEDIUM',
        value: '65.0% locked (14 days remaining)',
        scoreImpact: '+16 pts',
        headline: 'Short lock expiration date poses imminent withdrawal risk.',
        explanation: 'Only 65% of the liquidity pool is locked, leaving 35% in private custody. Crucially, the lock expires in merely 14 days. If the developer chooses not to renew the lock upon expiration, they can legally withdraw the remaining $220K liquidity and abandon the project.',
        riskFactors: ['Impending unlock allows full pool drainage within two weeks.', '35% unlocked LP enables partial rug pulls anytime.'],
        verdict: 'Moderate Warning: Monitor lock renewal carefully before the 14-day cutoff.'
      },
      {
        id: 'mint-function',
        name: 'Token Minting Function',
        category: 'Supply Mechanics',
        status: 'warning',
        severity: 'MEDIUM',
        value: 'Timelocked Minting (24h cooldown)',
        scoreImpact: '+8 pts',
        headline: 'Owner retains authority to mint additional supply.',
        explanation: 'While the contract imposes a 24-hour timelock on mint operations, the owner still maintains the structural capability to increase total supply. Any supply expansion dilutes existing token holders and reduces per-token valuation.',
        riskFactors: ['Inflationary minting potential, even with a timelock delay.'],
        verdict: 'Caution: Token supply is not hard-capped.'
      },
      {
        id: 'top-holders',
        name: 'Top 10 Holder Concentration',
        category: 'Wallet Distribution',
        status: 'warning',
        severity: 'HIGH',
        value: '43.2% held by Top 10 Wallets',
        scoreImpact: '+14 pts',
        headline: 'High whale concentration creates severe dumping hazard.',
        explanation: 'Over 43% of total circulating supply is concentrated across just 10 wallet addresses. If two or three of these wallets execute market sells, the automated market maker (AMM) bonding curve will suffer massive slippage, potentially dropping the token price by 60–80% within minutes.',
        riskFactors: ['Whales and team insider wallets hold sufficient weight to crush pool reserves.'],
        verdict: 'Elevated Risk: Heavy concentration in early insider wallets.'
      },
      {
        id: 'buy-sell-tax',
        name: 'Buy / Sell Transaction Fees (Slippage)',
        category: 'Trading Economics',
        status: 'warning',
        severity: 'MEDIUM',
        value: '5% Buy / 8% Sell (Variable up to 15%)',
        scoreImpact: '+10 pts',
        headline: 'Above-average sell tax with dynamic modifier function.',
        explanation: 'A 5% buy and 8% sell tax reduces your trading efficiency, requiring a 14%+ price gain just to break even. Worse, the contract contains a `setFees()` method allowing the owner to raise fees up to a hardcoded 15% maximum at any time.',
        riskFactors: ['High friction on trades and owner power to increase slippage up to 15%.'],
        verdict: 'Caution: High friction trading tax with administrative adjustment privileges.'
      },
      {
        id: 'honeypot-check',
        name: 'Honeypot Execution Simulation',
        category: 'Contract Execution',
        status: 'safe',
        severity: 'LOW',
        value: 'Passed (Elevated Gas: ~78,500)',
        scoreImpact: '+3 pts',
        headline: 'Sells execute, but complex fee-splitting increases gas consumption.',
        explanation: 'The simulation confirmed that standard wallet addresses are permitted to execute sell transactions on PancakeSwap. However, the transaction consumes elevated gas due to automated reflection and marketing fee distribution logic.',
        riskFactors: ['High gas consumption on token transfers increases transaction failure rates during volatility.'],
        verdict: 'Passable: Transfers currently complete without reversion.'
      },
      {
        id: 'ownership-privileges',
        name: 'Contract Ownership & Governance',
        category: 'Administrative Control',
        status: 'warning',
        severity: 'MEDIUM',
        value: 'Single EOA Private Key (Deployer)',
        scoreImpact: '+5 pts',
        headline: 'All admin privileges rest in a single individual wallet.',
        explanation: 'The owner is an ordinary private wallet (EOA) rather than a multi-signature safe. If this private key is hacked, phished, or if the developer turns malicious, they can immediately alter fee rates or trigger maximum wallet restrictions.',
        riskFactors: ['Single point of failure: private key compromise directly compromises token parameters.'],
        verdict: 'Warning: Centralized administrative control.'
      }
    ],
    technicalBreakdown: {
      contractStandard: 'BEP-20 (Custom Meme Reflection)',
      compilerVersion: 'Solidity 0.8.19',
      optimizerRuns: 100,
      liquidityPlatform: 'PancakeSwap v2 + PinkLock',
      simulatedGasSell: '78,500 gas',
      lpBurntRatio: '0.0%',
      proxyContract: 'No'
    }
  },
  {
    id: 'safuelon-rocket',
    name: 'SafuElonRocket',
    symbol: 'SER',
    address: '0x3DF7781bEb2D512d7c5414890B97fDa3e68088BC',
    network: 'BNB Chain (Simulated)',
    networkBadge: 'BSC',
    created: '3 days ago',
    marketCap: '$650,000',
    liquidity: '$38,000',
    volume24h: '$120,000',
    holdersCount: '890',
    riskScore: 94,
    riskCategory: 'Critical Hazard',
    riskCategoryColor: 'rose',
    badgeText: 'Severe Rugpull Hazard',
    overview: 'High-severity malicious archetype exhibiting classic honeypot architecture: 99% sell tax trap, simulated sell orders reverted with EXCEED_SELL_QUOTA, 88.8% unlocked liquidity held in creator wallet, and an active wallet blacklisting mechanism.',
    tags: ['Honeypot Detected', 'Unlocked LP', '99% Tax Trap', 'Active Blacklist'],
    indicators: [
      {
        id: 'honeypot-check',
        name: 'Honeypot Execution Simulation',
        category: 'Contract Execution',
        status: 'danger',
        severity: 'CRITICAL',
        value: 'FAILED (Reverted: EXCEED_SELL_QUOTA)',
        scoreImpact: '+35 pts',
        headline: 'SELL ORDERS FAIL: Buyers are trapped and cannot liquidate.',
        explanation: 'During bytecode sandbox simulation, buy transactions succeeded smoothly, but all subsequent sell transactions failed with `Execution Reverted: EXCEED_SELL_QUOTA`. The creator deployed custom code preventing retail buyers from selling while leaving the sell channel open exclusively for white-listed deployer addresses.',
        riskFactors: ['Investors can put money into the token, but can never take money out.', 'The chart appears to go straight up because only buys are allowed.'],
        verdict: 'CRITICAL FAILURE: This token matches textbook honeypot scam mechanics.'
      },
      {
        id: 'buy-sell-tax',
        name: 'Buy / Sell Transaction Fees (Slippage)',
        category: 'Trading Economics',
        status: 'danger',
        severity: 'CRITICAL',
        value: '1% Buy / 99% Sell (Hidden Trap)',
        scoreImpact: '+25 pts',
        headline: '99% Sell tax skims virtually all proceeds upon liquidation.',
        explanation: 'The contract advertises a low 1% buy tax to entice unsuspecting retail buyers. However, hidden in the internal transfer calculation is a condition that levies a 99% tax on any transfer interacting with the liquidity pool router. If a sell were to succeed, the trader receives less than 1 cent on the dollar.',
        riskFactors: ['99% sell tax is a mathematical confiscation of investor principal.'],
        verdict: 'CRITICAL: Extreme confiscatory tax trap engineered to siphon funds.'
      },
      {
        id: 'lp-lock',
        name: 'Liquidity Lock Ratio & Duration',
        category: 'Liquidity Security',
        status: 'danger',
        severity: 'CRITICAL',
        value: '11.2% locked (88.8% in deployer wallet)',
        scoreImpact: '+18 pts',
        headline: 'Deployer can pull 88.8% of pool liquidity at any moment.',
        explanation: 'Only a token gesture of 11.2% of liquidity pool tokens was locked in a temporary locker to fool basic automated scanners. The deployer directly retains the remaining 88.8% of LP tokens, meaning they can call `removeLiquidity()` anytime and drain all BNB from the pool.',
        riskFactors: ['Deployer can unilaterally drain the entire $38,000 liquidity pool in a single transaction.'],
        verdict: 'Severe Danger: Liquidity is unbacked and vulnerable to instant rug pull.'
      },
      {
        id: 'mint-function',
        name: 'Token Minting Function',
        category: 'Supply Mechanics',
        status: 'danger',
        severity: 'HIGH',
        value: 'Active Unrestricted Mint (No Cap)',
        scoreImpact: '+10 pts',
        headline: 'Deployer can print arbitrary billions of tokens.',
        explanation: 'The contract contains an unrestricted `mint()` method accessible only by the owner without any supply limit or timelock. The deployer can generate quintillions of tokens and dump them into any remaining liquidity.',
        riskFactors: ['Infinite hyper-dilution risk directly controlled by anonymous deployer.'],
        verdict: 'High Hazard: Unrestricted minting privileges present in bytecode.'
      },
      {
        id: 'top-holders',
        name: 'Top 10 Holder Concentration',
        category: 'Wallet Distribution',
        status: 'danger',
        severity: 'HIGH',
        value: '81.5% concentrated in deployer & puppet cluster',
        scoreImpact: '+8 pts',
        headline: 'Massive sybil cluster controlled by project deployer.',
        explanation: 'Heuristic wallet clustering reveals that 8 of the top 10 wallets were funded from the exact same deployer transaction chain 3 days ago. The team controls over 80% of all tokens in circulation, giving them total market monopoly.',
        riskFactors: ['Total market dominance: any minor movement by the creator wipes out retail balances.'],
        verdict: 'Extreme Danger: Centralized puppet wallet syndicate.'
      },
      {
        id: 'blacklist-pause',
        name: 'Blacklist / Wallet Freezing Capabilities',
        category: 'Administrative Control',
        status: 'danger',
        severity: 'HIGH',
        value: 'Active Blacklist Function (`setBotBlacklist`)',
        scoreImpact: '+8 pts',
        headline: 'Owner can selectively blacklist any wallet from trading.',
        explanation: 'The contract includes an active `setBotBlacklist(address, bool)` function. The creator uses this to freeze individual wallets that attempt to interact with the contract or exit their positions.',
        riskFactors: ['Direct censorship and confiscation of specific user token balances.'],
        verdict: 'Hazardous: Arbitrary wallet freezing mechanism active.'
      }
    ],
    technicalBreakdown: {
      contractStandard: 'BEP-20 (Malicious Obfuscated)',
      compilerVersion: 'Solidity 0.8.24',
      optimizerRuns: 50,
      liquidityPlatform: 'PancakeSwap v2 (Fake Lock)',
      simulatedGasSell: 'OUT_OF_GAS / REVERT',
      lpBurntRatio: '0.0%',
      proxyContract: 'Yes (Hidden upgradeable delegatecall)'
    }
  }
];

export const EDUCATIONAL_GLOSSARY = [
  {
    title: 'Honeypot Trap',
    icon: 'AlertOctagon',
    summary: 'A smart contract where buy orders execute normally, but sell orders are blocked or taxed at 99%, trapping user funds forever.',
    howItWorks: 'Scammers modify the ERC-20 `transfer()` or `_beforeTokenTransfer()` hooks to check if the sender is not the owner, throwing a revert exception or imposing a 99% burn.'
  },
  {
    title: 'Hard Rug Pull',
    icon: 'Unlock',
    summary: 'When developers abruptly withdraw all liquidity (e.g. ETH or BNB) from the trading pool, making tokens worthless and unexchangeable.',
    howItWorks: 'If Liquidity Pool (LP) tokens are not locked in a reputable third-party smart contract vault, the deployer wallet can call `removeLiquidityWithPermit()` at any second.'
  },
  {
    title: 'Soft Rug Pull (Whale Dump)',
    icon: 'Users',
    summary: 'Creators or early insider syndicates holding 40%+ of supply gradually or violently dump tokens into retail liquidity without formally touching the LP pool.',
    howItWorks: 'Deployers distribute tokens across 10–20 puppet addresses during contract deployment to bypass basic holder concentration scanners.'
  },
  {
    title: 'Hidden Mint Backdoor',
    icon: 'Coins',
    summary: 'An administrative function allowing the contract owner to fabricate new tokens out of thin air.',
    howItWorks: 'The owner calls `mint(address to, uint256 amount)` and dumps the newly created supply into decentralized exchange liquidity, draining all base currency.'
  }
];
