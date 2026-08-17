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
    badge: "BNB SMART CHAIN NETWORK",
    headlineLine1: "OKN",
    headlineLine2: "TOKEN",
    subheadline: "Powering the OKNexus Ecosystem",
    description:
      "OKN Token powers a secure, transparent, and AI-powered ecosystem built for the next generation of digital finance on Binance Smart Chain.",
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
    headline: "Security & Infrastructure",
    subtitle:
      "OKNexus connects proven infrastructure, open tooling, and AI-native blockchain execution into one ecosystem.",
    securityAudits: [
      { name: "CertiK", role: "SECURITY LEADER", verified: true },
      { name: "SOLIDProof", role: "VERIFIED AUDIT", verified: true },
    ],
    infrastructurePartners: [
      { name: "BNB Chain", category: "Powered by" },
      { name: "Blockscout", category: "Explorer" },
      { name: "Relay", category: "Interoperability" },
      { name: "Celestia", category: "Data Availability" },
      { name: "Arbitrum", category: "Execution L2" },
      { name: "Caldera", category: "Rollup Infra" },
    ],
  },

  about: {
    eyebrow: "A SMARTER BLOCKCHAIN FOR",
    headline: "The Next Generation of Digital Finance",
    description:
      "OKN Token is designed to make blockchain interactions faster, easier, and smarter for users, builders, and ecosystem partners.",
    features: [
      {
        id: "feat-1",
        title: "AI at Network Level",
        description:
          "AI lives in the chain itself, optimizing performance, transaction routing, security, and execution.",
        iconName: "brain",
      },
      {
        id: "feat-2",
        title: "Faster Experience",
        description:
          "Sub-second transaction finality, lower gas fees, and seamless Web3 interaction flows.",
        iconName: "zap",
      },
      {
        id: "feat-3",
        title: "Smarter for Builders",
        description:
          "An AI-native developer environment for decentralized apps, smart contracts, and cross-chain products.",
        iconName: "code",
      },
      {
        id: "feat-4",
        title: "Clearer Onchain Activity",
        description:
          "Deep contextual transaction intelligence, automated risk scoring, and real-time network behavior insights.",
        iconName: "activity",
      },
      {
        id: "feat-5",
        title: "Built for Growth",
        description:
          "Scalable Layer 1 infrastructure, robust token utility, multi-audited contracts, and a staged global rollout.",
        iconName: "trending",
      },
      {
        id: "feat-6",
        title: "Cross Chain Native",
        description:
          "Designed from first principles to connect global ecosystems without locking users into an isolated silo.",
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
    },
  },

  comparison: {
    eyebrow: "ECOSYSTEM BENCHMARK",
    headline: "How OKN Token compares to other AI blockchains",
    subhead:
      "AI-native Layer 1 execution with early presale access. Here's how it stacks up.",
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
        category: "Network Purpose",
        okn: "L1 for AI Data & Logic",
        near: "User-Owned AI & Sharding",
        render: "Distributed GPU Compute",
        bittensor: "Machine Intelligence Subnets",
      },
      {
        category: "Core Strength",
        okn: "Onchain AI Execution",
        near: "Chain Abstraction",
        render: "3D & AI Rendering",
        bittensor: "AI Model Monetization",
      },
      {
        category: "Consensus Mechanism",
        okn: "Hybrid PoS + AI Engine",
        near: "Nightshade PoS",
        near_suffix: "PoS",
        render: "Proof of Render / Burn",
        bittensor: "Proof of Intelligence",
      },
      {
        category: "Native AI Agents",
        okn: "Yes",
        near: "Yes",
        render: "No",
        bittensor: "Yes",
      },
      {
        category: "Cross-Chain Architecture",
        okn: "Native Multi-Chain Hub",
        near: "Aurora Bridge + MPC",
        render: "Solana Bridge",
        bittensor: "Substrate Compatible",
      },
      {
        category: "Ecosystem Exchange",
        okn: "Yes",
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
      "From onchain trading and autonomous AI agents to staking rewards and cross-chain execution, OKNexus is built to power the next generation of decentralized applications.",
    pillars: [
      {
        id: "exchange",
        title: "OKNexus Exchange",
        tag: "FLAGSHIP PLATFORM",
        description:
          "Institutional and decentralized trading engine built for speed, transparency, deep liquidity, and zero-slippage routing.",
        stats: "0.01s latency • $0 Gas Options",
      },
      {
        id: "ai-agents",
        title: "AI Prediction Agent",
        tag: "AUTONOMOUS INTELLIGENCE",
        description:
          "Onchain neural network monitoring liquidity flows, mempool risk signals, and order books for predictive execution.",
        stats: "Live Risk Scoring • Automated Balancing",
      },
      {
        id: "staking",
        title: "Staking & Yield Vaults",
        tag: "DEFI PRIMITIVES",
        description:
          "Lock OKN to secure consensus validation, capture exchange revenue share, and earn tiered multiplier yields.",
        stats: "Tiered Multipliers • Non-custodial",
      },
      {
        id: "crosschain",
        title: "Cross-Chain Instant Swaps",
        tag: "INTEROPERABILITY",
        description:
          "Frictionless bridging and atomic execution connecting BNB Smart Chain, Arbitrum, Ethereum, and Solana.",
        stats: "Multi-Chain Routing • Zero Slippage",
      },
      {
        id: "launchpad",
        title: "OKN Launchpad",
        tag: "INCUBATION",
        description:
          "Vetted early-stage Web3 and AI protocol launches with guaranteed tier allocation for OKN holders.",
        stats: "Vetted Tier Access • Community First",
      },
      {
        id: "security",
        title: "Institutional Custody & Wallet",
        tag: "SECURITY",
        description:
          "Multi-sig threshold architecture, biometric security, and full smart contract verification with real-time audit protection.",
        stats: "AssureDeFi KYC • Multi-Audited",
      },
    ],
  },

  utility: {
    eyebrow: "TOKEN UTILITY & VALUE FLOW",
    headline: "The Power Behind Every Network Interaction",
    description:
      "OKN is not a speculative token. It is the lifeblood utility engine driving transaction execution, governance rights, exchange fee discounts, and network yield distribution.",
    utilities: [
      {
        title: "Transaction & Gas Settlement",
        desc: "Power all transactions, smart contract executions, and state transitions across the OKNexus network with ultra-low, predictable fees.",
      },
      {
        title: "Staking & Revenue Share",
        desc: "Stake OKN in decentralized security pools to earn a proportionate share of OKNexus Exchange trading volume and sequencer fees.",
      },
      {
        title: "Decentralized Governance",
        desc: "Vote on protocol upgrades, grant distributions, parameter adjustments, and fee schedule optimizations.",
      },
      {
        title: "AI Agent Compute Credits",
        desc: "Deploy, run, and query autonomous onchain AI agents and predictive models using OKN as the computational gas token.",
      },
    ],
  },

  tokenomics: {
    eyebrow: "STRUCTURED FOR SUSTAINABILITY",
    headline: "Transparent Supply & Allocation",
    description:
      "A disciplined economic design with structured multi-year vesting, locked liquidity pools, and no hidden minting mechanics.",
    totalSupply: "5,000,000,000 OKN",
    allocations: [
      {
        name: "Community Rewards",
        percentage: 35,
        tokens: "1,750,000,000 OKN",
        color: "#3B82F6",
        vesting: "Programmatic on-chain distribution based on validator uptime",
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
        vesting: "100% locked into verified automated market maker liquidity",
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
        vesting: "Locked for 6 months, then quarterly release over 36 months",
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
      "A systematic, phase-by-phase rollout engineered to deliver real utility, robust infrastructure, and global adoption.",
    milestones: [
      {
        quarter: "Phase 01",
        year: "2025",
        title: "Genesis & Foundation",
        status: "Completed",
        points: [
          "OKN Token smart contract development (OpenZeppelin standards)",
          "Multi-stage CertiK & SolidProof security audits completed",
          "AssureDeFi KYC verification and institutional compliance",
          "Presale infrastructure and Merkle claim engine deployment",
        ],
      },
      {
        quarter: "Phase 02",
        year: "Q1-Q2 2026",
        title: "Ecosystem Alpha & Community Expansion",
        status: "In Progress",
        points: [
          "Telegram Mini-App and bot deployment (100k+ active champions)",
          "Public Presale entry stages ($0.05 stage live)",
          "Exchange alpha testnet with sub-second order book simulation",
          "Strategic liquidity agreements with Tier-1 Market Makers",
        ],
      },
      {
        quarter: "Phase 03",
        year: "Q3 2026",
        title: "TGE, Mainnet & Exchange Launch",
        status: "Upcoming",
        points: [
          "Official Token Generation Event (TGE) and initial DEX/CEX listings",
          "OKNexus Exchange mainnet launch with zero-slippage routing",
          "Automated on-chain staking vaults and revenue share activation",
          "First cohort of decentralized launchpad project incubations",
        ],
      },
      {
        quarter: "Phase 04",
        year: "Q4 2026+",
        title: "AI Autopilot & Global Scalability",
        status: "Upcoming",
        points: [
          "Autonomous onchain AI Prediction Agent full deployment",
          "Cross-chain multi-asset atomic swap network expansion",
          "Decentralized DAO governance handover and treasury activation",
          "Enterprise and institutional crypto payment gateway integration",
        ],
      },
    ] as RoadmapMilestone[],
  },

  community: {
    eyebrow: "GLOBAL COMMUNITY",
    headline: "Join a thriving network of 100,000+ pioneers.",
    description:
      "Connect with traders, developers, institutional partners, and crypto visionaries building the future of AI-powered decentralized finance.",
    stats: [
      { label: "Community Members", value: "100K+" },
      { label: "Participating Investors", value: "19.5K+" },
      { label: "Countries Represented", value: "85+" },
    ],
    socials: [
      { name: "Telegram", handle: "@OkNexusExchange", href: "https://t.me/OkNexusExchange" },
      { name: "X (Twitter)", handle: "@OkNexusExchange", href: "https://x.com/OkNexusExchange" },
      { name: "YouTube", handle: "@OkNexusExchange", href: "https://www.youtube.com/@OkNexusExchange" },
      { name: "Discord", handle: "OKNexus Discord", href: "https://discord.com" },
      { name: "Instagram", handle: "@oknexusexchange", href: "https://instagram.com" },
    ],
  },

  media: {
    headline: "AS FEATURED IN TOP WEB3 & FINANCIAL OUTLETS",
    outlets: [
      { name: "CoinDesk", logo: "/brand/coindesk.svg" },
      { name: "CoinMarketCap", logo: "/brand/cmc.svg" },
      { name: "CoinGecko", logo: "/brand/coingecko.svg" },
      { name: "Decrypt", logo: "/brand/decrypt.svg" },
      { name: "Blockworks", logo: "/brand/blockworks.svg" },
      { name: "Binance Feed", logo: "/brand/binance.svg" },
    ],
  },

  faq: {
    eyebrow: "GOT QUESTIONS?",
    headline: "Frequently Asked Questions",
    description:
      "Find immediate answers about the OKN presale, token economics, claim mechanics, and technical architecture.",
    items: [
      {
        question: "What is OKN Token?",
        answer:
          "OKN Token is the native utility and governance asset of the OKNexus ecosystem. It powers transaction fee settlement, AI trading engine access, decentralized governance, staking rewards, and cross-chain liquidity routing.",
      },
      {
        question: "What makes OKNexus different from traditional blockchains?",
        answer:
          "OKNexus integrates AI at the network consensus level to provide real-time transaction risk scoring, optimized routing, and autonomous agent capabilities, combined with sub-second finality and multi-chain interoperability.",
      },
      {
        question: "What is the current entry price and listing price?",
        answer:
          "The current presale stage entry price is $0.05 per OKN. The confirmed listing price at Token Generation Event (TGE) is scheduled at $0.30 per OKN, representing a +500% base price delta.",
      },
      {
        question: "How can I participate in the presale?",
        answer:
          "You can participate directly by connecting your supported Web3 wallet (such as MetaMask, Trust Wallet, or Binance Web3 Wallet) and acquiring OKN with BNB, USDT, or BUSD on BNB Smart Chain.",
      },
      {
        question: "Is the OKN smart contract audited and verified?",
        answer:
          "Yes. OKN smart contracts have undergone rigorous multi-phase security audits conducted by industry-leading security firms CertiK and SolidProof. Additionally, the project team is KYC-verified through AssureDeFi.",
      },
      {
        question: "What is the total supply and vesting schedule?",
        answer:
          "The maximum total supply is capped at 5,000,000,000 OKN on BNB Smart Chain. The presale allocation represents 30% of the total supply, unlocked with structured vesting to protect token health and maintain stable ecosystem liquidity.",
      },
      {
        question: "When will the Token Generation Event (TGE) occur?",
        answer:
          "The Token Generation Event and public market listing are scheduled for Q3 2026, following the completion of the mainnet validation phase and tier-1 exchange liquidity setups.",
      },
    ] as FaqItem[],
  },

  finalCta: {
    headlineLine1: "Every Stage Brings",
    headlineLine2: "A Higher Price",
    description:
      "The current $0.05 entry window is available for a limited time before the next scheduled increase.",
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
