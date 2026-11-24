export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "brain" | "zap" | "code" | "activity" | "trending" | "layers";
}

export interface ComparisonRow {
  category: string;
  okn: string;
  near: string;
  render: string;
  bittensor: string;
}

export interface TokenAllocation {
  name: string;
  percentage: number;
  tokens: string;
  color: string;
  vesting: string;
}

export interface RoadmapMilestone {
  quarter: string;
  year: string;
  title: string;
  status: "Completed" | "In Progress" | "Upcoming";
  points: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteContent = {
  hero: {
    badge: "BINANCE SMART CHAIN NETWORK",
    headlineLine1: "OKN",
    headlineLine2: "TOKEN",
    subheadline: "Powering the OKNexus Ecosystem",
    description:
      "OKN Token powers a secure, transparent, and AI-assisted ecosystem built for the next generation of digital finance on Binance Smart Chain.",
    primaryCta: {
      label: "Buy OKN",
      href: "#presale",
    },
    secondaryCta: {
      label: "Explore Ecosystem",
      href: "#ecosystem",
    },
    kycBadge: {
      text: "KYC VERIFIED PROJECT",
      handle: "@AssureDeFi",
      verifiedUrl: "https://assuredefi.com",
    },
    presaleCard: {
      title: "Current Entry",
      badge: "$0.05 ENTRY WINDOW",
      currentPrice: "$0.05",
      currentStageLabel: "Current stage price",
      nextStagePrice: "$0.08",
      listingPrice: "$0.30",
      listingPriceGain: "+500%",
      raisedAmount: "$17M+",
      investorCount: "19,523",
      ctaText: "Join Presale",
    },
  },

  trustStrip: {
    headline: "Powered by Binance Smart Chain",
    subtitle:
      "OKNexus connects Binance Smart Chain infrastructure, AssureDeFi KYC compliance, and AI-assisted Web3 execution into one ecosystem.",
    securityAudits: [
      { name: "AssureDeFi", role: "KYC VERIFIED", verified: true },
      { name: "BscScan", role: "VERIFIED CONTRACT", verified: true },
    ],
    infrastructurePartners: [
      { name: "Binance Smart Chain", category: "Powered by" },
      { name: "AssureDeFi", category: "KYC Verified" },
      { name: "BscScan", category: "Explorer" },
      { name: "Chainlink", category: "Oracle Pricing" },
      { name: "OpenZeppelin", category: "Contract Standards" },
      { name: "CoinSniper", category: "Featured Listing" },
    ],
  },

  about: {
    eyebrow: "A SMARTER ECOSYSTEM FOR",
    headline: "The Next Generation of Digital Finance",
    description:
      "OKN Token is designed to make digital asset trading, staking, and onchain participation faster, clearer, and smarter for users and ecosystem partners.",
    features: [
      {
        id: "feat-1",
        title: "AI Trading Intelligence",
        description:
          "24/7 AI agents analyze liquidity flows, strategy signals, and market risk directly alongside OKNexus Exchange.",
        iconName: "brain",
      },
      {
        id: "feat-2",
        title: "Faster BSC Settlement",
        description:
          "Low-fee Binance Smart Chain execution, sub-second exchange matching, and frictionless wallet swaps.",
        iconName: "zap",
      },
      {
        id: "feat-3",
        title: "OpenZeppelin Security",
        description:
          "Built with battle-tested BEP-20 smart contract standards, BscScan verification, and Merkle proof claim logic.",
        iconName: "code",
      },
      {
        id: "feat-4",
        title: "AssureDeFi KYC Verified",
        description:
          "Verified team accountability via AssureDeFi alongside transparent on-chain supply and liquidity lock tracking.",
        iconName: "activity",
      },
      {
        id: "feat-5",
        title: "Built for Growth",
        description:
          "Capped 5B token supply, Chainlink-verified claim pricing, staking rewards, and multi-stage market expansion.",
        iconName: "trending",
      },
      {
        id: "feat-6",
        title: "Cross-Chain Ready",
        description:
          "Bridging BNB Smart Chain with Ethereum, Arbitrum, and Solana liquidity via OKNexus Exchange swap rails.",
        iconName: "layers",
      },
    ] as FeatureItem[],
    stageCard: {
      headline: "The $0.05 Window Won't Last",
      subhead:
        "Join OKN Token at the current presale price before the next scheduled stage increase.",
      effectivePrice: "$0.05",
      bonusLabel: "+500% GAIN",
      originalPrice: "$0.08",
      listingPrice: "$0.30",
      cta: "Join Presale",
      stageLadder: [
        { label: "Stage 1 (Current Entry)", price: "$0.05", status: "LIVE" },
        { label: "Stage 2 (Next Round)", price: "$0.08", status: "NEXT" },
        { label: "TGE Public Listing", price: "$0.30", status: "+500% DELTA" },
      ],
    },
  },

  comparison: {
    eyebrow: "ECOSYSTEM BENCHMARK",
    headline: "How OKN Token compares to other AI ecosystems",
    subhead:
      "Early $0.05 presale access paired with an active Binance Smart Chain exchange, Mini-App, and AI trading stack.",
    headers: ["Category", "OKN Token", "NEAR", "Render", "Bittensor"],
    rows: [
      {
        category: "Token Price",
        okn: "$0.05 presale",
        near: "$2.11",
        render: "$5.84",
        bittensor: "$320.10",
      },
      {
        category: "Network Foundation",
        okn: "Binance Smart Chain (BEP-20)",
        near: "Sharded L1",
        render: "Solana SPL",
        bittensor: "Substrate L1",
      },
      {
        category: "Core Utility",
        okn: "Exchange + AI Trading + Launchpad",
        near: "Chain Abstraction",
        render: "Distributed GPU Render",
        bittensor: "AI Model Subnets",
      },
      {
        category: "Verification & KYC",
        okn: "AssureDeFi KYC + BscScan",
        near: "Public Foundation",
        render: "Foundation",
        bittensor: "Open Protocol",
      },
      {
        category: "Native AI Agents",
        okn: "Yes (24/7 Trading Agent)",
        near: "Yes",
        render: "No",
        bittensor: "Yes",
      },
      {
        category: "Telegram Mini-App",
        okn: "Live (28K+ Community)",
        near: "No",
        render: "No",
        bittensor: "No",
      },
      {
        category: "Ecosystem Exchange",
        okn: "Yes (Spot, P2P & Swap)",
        near: "No",
        render: "No",
        bittensor: "No",
      },
    ] as ComparisonRow[],
  },

  ecosystem: {
    eyebrow: "A CONNECTED ECOSYSTEM",
    headline: "One network. Endless possibilities.",
    description:
      "From spot trading, P2P escrow, and cross-chain swaps on OKNexus Exchange to our 28K+ Telegram Mini-App community, OKN powers every layer.",
    pillars: [
      {
        id: "exchange",
        title: "OKNexus Exchange",
        tag: "FLAGSHIP PLATFORM",
        description:
          "High-speed centralized and Web3 trading platform with spot markets, escrow P2P rails, OTC desk, and zero-slippage swap routing.",
        stats: "0.01s latency • Spot, P2P & Swap",
      },
      {
        id: "ai-agents",
        title: "24/7 AI Trading Agent",
        tag: "AUTONOMOUS INTELLIGENCE",
        description:
          "Automated strategy assistant monitoring liquidity flows, order books, and risk management signals around the clock.",
        stats: "Live Risk Scoring • Automated Execution",
      },
      {
        id: "staking",
        title: "Staking & Yield Vaults",
        tag: "DEFI PRIMITIVES",
        description:
          "Stake OKN to earn tiered yield multipliers, capture fee discounts, and unlock ecosystem launchpad allocations.",
        stats: "Tiered Multipliers • On-Chain Rewards",
      },
      {
        id: "crosschain",
        title: "Cross-Chain Instant Swaps",
        tag: "INTEROPERABILITY",
        description:
          "One-click liquidity routing connecting Binance Smart Chain, Ethereum, Arbitrum, and Solana wallets seamlessly.",
        stats: "Multi-Chain Routing • Non-Custodial",
      },
      {
        id: "launchpad",
        title: "OKN Launchpad & Card",
        tag: "UTILITY & SPEND",
        description:
          "Guaranteed allocation tiers for vetted Web3 launches alongside upcoming OKNexus crypto-spend debit card support.",
        stats: "Vetted Tier Access • Crypto Spend",
      },
      {
        id: "security",
        title: "AssureDeFi KYC & Custody",
        tag: "SECURITY & COMPLIANCE",
        description:
          "Project KYC verified by AssureDeFi, OpenZeppelin smart contract standards, and BscScan verified BEP-20 deployment.",
        stats: "AssureDeFi KYC • BscScan Verified",
      },
    ],
  },

  utility: {
    eyebrow: "TOKEN UTILITY & VALUE FLOW",
    headline: "The Power Behind Every Network Interaction",
    description:
      "OKN is the core utility asset driving exchange fee discounts, AI trading agent access, staking rewards, governance voting, and launchpad tiers.",
    utilities: [
      {
        title: "Exchange Fee Discounts & Gas",
        desc: "Settle trading fees across OKNexus Exchange spot, P2P, and instant swap markets with reduced fee tiers for OKN holders.",
      },
      {
        title: "Staking & Reward Pools",
        desc: "Stake OKN tokens to unlock flexible and locked APY pools, Telegram Mini-App multipliers, and ecosystem loyalty yields.",
      },
      {
        title: "Decentralized Governance",
        desc: "Vote on protocol upgrades, new token listings, treasury grants, and ecosystem parameter adjustments.",
      },
      {
        title: "AI Trading & Launchpad Access",
        desc: "Unlock 24/7 AI Trading Agent analytics and guaranteed allocation tiers in OKNexus Launchpad token offerings.",
      },
    ],
  },

  tokenomics: {
    eyebrow: "STRUCTURED FOR SUSTAINABILITY",
    headline: "Transparent Supply & Allocation",
    description:
      "A disciplined economic design on Binance Smart Chain with multi-year vesting, locked DEX liquidity, and a fixed 5,000,000,000 cap.",
    totalSupply: "5,000,000,000 OKN",
    allocations: [
      {
        name: "Community Rewards",
        percentage: 35,
        tokens: "1,750,000,000 OKN",
        color: "#6366F1",
        vesting: "Programmatic on-chain emissions & Telegram Mini-App rewards",
      },
      {
        name: "Public Sale",
        percentage: 25,
        tokens: "1,250,000,000 OKN",
        color: "#7C3AED",
        vesting: "15% at TGE, linear monthly release over 18 months",
      },
      {
        name: "DEX Liquidity",
        percentage: 15,
        tokens: "750,000,000 OKN",
        color: "#10B981",
        vesting: "100% locked into verified AMM liquidity pools",
      },
      {
        name: "Team & Advisors",
        percentage: 12,
        tokens: "600,000,000 OKN",
        color: "#F59E0B",
        vesting: "12-month cliff, followed by 24-month linear vesting",
      },
      {
        name: "Ecosystem",
        percentage: 8,
        tokens: "400,000,000 OKN",
        color: "#06B6D4",
        vesting: "Locked for 6 months, quarterly release over 36 months",
      },
      {
        name: "Treasury",
        percentage: 5,
        tokens: "250,000,000 OKN",
        color: "#EC4899",
        vesting: "Multi-sig controlled, 48-month strategic linear release",
      },
    ] as TokenAllocation[],
  },

  roadmap: {
    eyebrow: "EXECUTION TIMELINE",
    headline: "Built on milestones, not promises.",
    description:
      "A systematic, phase-by-phase rollout delivering real exchange liquidity, AssureDeFi compliance, and 28K+ community adoption.",
    milestones: [
      {
        quarter: "Phase 01",
        year: "2025",
        title: "Genesis & Foundation",
        status: "Completed",
        points: [
          "OKN BEP-20 smart contract deployment on Binance Smart Chain",
          "OpenZeppelin security standards & BscScan contract verification",
          "AssureDeFi KYC verification completed for institutional compliance",
          "Merkle claim engine and Chainlink oracle pricing integration",
        ],
      },
      {
        quarter: "Phase 02",
        year: "Q1-Q2 2026",
        title: "Mini-App & Presale Expansion",
        status: "In Progress",
        points: [
          "Telegram Mini-App & @okntoken_bot scaled to 28,000+ community members",
          "Featured presale listing live on CoinSniper ($0.05 Stage 1 entry)",
          "OKNexus Exchange Spot, P2P & Instant Swap platform rollout",
          "Market maker liquidity provisioning for PancakeSwap & CEX debut",
        ],
      },
      {
        quarter: "Phase 03",
        year: "Q3 2026",
        title: "TGE, Listings & Staking",
        status: "Upcoming",
        points: [
          "Official Token Generation Event (TGE) at $0.30 listing target",
          "PancakeSwap DEX liquidity lock & centralized exchange listings",
          "Automated on-chain OKN staking vaults and fee-discount tiers",
          "First cohort of OKNexus Launchpad Web3 project offerings",
        ],
      },
      {
        quarter: "Phase 04",
        year: "Q4 2026+",
        title: "AI Trading Agent & Spend Card",
        status: "Upcoming",
        points: [
          "Full deployment of the 24/7 OKNexus AI Trading Agent suite",
          "OKNexus Mastercard crypto-spend debit card activation",
          "Cross-chain atomic bridge expansion (ETH, Arbitrum, Solana)",
          "Decentralized DAO governance handover to OKN token holders",
        ],
      },
    ] as RoadmapMilestone[],
  },

  community: {
    eyebrow: "GLOBAL COMMUNITY",
    headline: "Join 28,000+ Telegram pioneers.",
    description:
      "Connect with traders, builders, and community champions shaping the OKNexus Exchange & OKN Token ecosystem on Binance Smart Chain.",
    stats: [
      { label: "Telegram", value: "28K+" },
      { label: "Investors", value: "19.5K+" },
      { label: "Countries", value: "85+" },
    ],
    socials: [
      { name: "Telegram", handle: "@oknexus_eco", href: "https://t.me/oknexus_eco" },
      { name: "X (Twitter)", handle: "@OkNexusEco", href: "https://x.com/OkNexusEco" },
      { name: "YouTube", handle: "@Oknexusexchange2022", href: "https://www.youtube.com/@Oknexusexchange2022" },
      { name: "Discord", handle: "OKNexus Discord", href: "https://discord.gg/Mt66r4Sg7r" },
      { name: "Facebook", handle: "OKNexus Facebook", href: "https://www.facebook.com/share/1EkrNc96ep/?mibextid=wwXIfr" },
      { name: "Instagram", handle: "@oknexusexchange", href: "https://www.instagram.com/oknexusexchange" },
      { name: "Threads", handle: "@oknexusexchange", href: "https://www.threads.com/@oknexusexchange" },
      { name: "Bluesky", handle: "@oknexusexchange.com", href: "https://bsky.app/profile/oknexusexchange.com" },
      { name: "TikTok", handle: "@oknexusexchange", href: "https://www.tiktok.com/@oknexusexchange" },
    ],
  },

  media: {
    headline: "LISTED & FEATURED ACROSS WEB3 PLATFORMS",
    outlets: [
      { name: "CoinSniper", href: "https://coinsniper.net" },
      { name: "BscScan", href: "https://bscscan.com/token/0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377" },
      { name: "AssureDeFi", href: "https://assuredefi.com" },
      { name: "BNB Smart Chain", href: "https://www.bnbchain.org" },
      { name: "OKNexus Exchange", href: "https://oknexusexchange.com" },
      { name: "Telegram Mini-App", href: "https://t.me/okntoken_bot?start=login" },
    ],
  },

  faq: {
    eyebrow: "GOT QUESTIONS?",
    headline: "Frequently asked questions",
    description:
      "Find immediate answers about the OKN presale, Binance Smart Chain contract, AssureDeFi KYC, and claim process.",
    items: [
      {
        question: "What is OKN Token?",
        answer:
          "OKN Token ($OKN) is the native BEP-20 utility and governance token of the OKNexus Ecosystem on Binance Smart Chain. It powers OKNexus Exchange trading fee discounts, 24/7 AI trading agents, staking yields, launchpad access, and governance.",
      },
      {
        question: "Which blockchain powers OKN Token?",
        answer:
          "OKN Token is powered by Binance Smart Chain (BSC / BEP-20), verified on BscScan at contract 0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377, delivering fast low-cost transactions and Chainlink oracle claim pricing.",
      },
      {
        question: "Is OKN Token KYC verified?",
        answer:
          "Yes. OKN Token is KYC verified by AssureDeFi (@AssureDeFi) and deployed using OpenZeppelin BEP-20 smart contract standards with transparent supply tracking and Merkle claim verification.",
      },
      {
        question: "What is the current presale price and listing target?",
        answer:
          "Stage 1 presale entry is currently $0.05 per OKN, stepping up to $0.08 in the next stage, with a scheduled Token Generation Event (TGE) listing target of $0.30.",
      },
      {
        question: "How large is the OKN community and how do I join?",
        answer:
          "Our Telegram community has grown to over 28,000 active members participating in @okntoken_bot tasks, daily check-ins, and presale allocation rounds across 85+ countries.",
      },
      {
        question: "Where is OKN Token listed and tracked?",
        answer:
          "OKN Token is featured on CoinSniper, publicly verifiable on BscScan, KYC-archived on AssureDeFi, and integrated directly with OKNexus Exchange and our Telegram Mini-App.",
      },
      {
        question: "What is the total supply and vesting structure?",
        answer:
          "The total supply is strictly capped at 5,000,000,000 OKN. Allocations include 35% Community Rewards, 25% Public Sale, 15% locked DEX Liquidity, 12% Team & Advisors (12-month cliff), 8% Ecosystem, and 5% Treasury.",
      },
    ] as FaqItem[],
  },

  finalCta: {
    headlineLine1: "Every Stage Brings",
    headlineLine2: "A Higher Price",
    description:
      "The current $0.05 entry window on Binance Smart Chain is available before the next scheduled increase.",
    cta: "Join Presale",
    secondaryCta: "Read the Whitepaper",
  },

  footer: {
    brandName: "OKN TOKEN",
    tagline: "Trade Smarter. Build Together. Grow Together.",
    copyright: "© 2026 OKNexus Ecosystem. All Rights Reserved.",
    kycBadge: {
      text: "KYC VERIFIED PROJECT",
      handle: "@AssureDeFi",
    },
  },
};
