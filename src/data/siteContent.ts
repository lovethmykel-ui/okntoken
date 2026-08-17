export interface TrustPartner {
  name: string;
  category?: string;
  logo?: string;
  verified?: boolean;
}

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
  highlight?: boolean;
}

export interface TokenAllocation {
  name: string;
  percentage: number;
  color: string;
  vesting: string;
}

export interface RoadmapMilestone {
  quarter: string;
  year: string;
  status: "Completed" | "In Progress" | "Upcoming";
  title: string;
  points: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteContent = {
  announcement: {
    badge: "$0.10 ENTRY WINDOW",
    text: "Join the current presale stage before the next scheduled increase.",
    cta: "Join Presale",
  },
  
  navigation: {
    brandName: "OKN TOKEN",
    tagline: "Powering the OKNexus Ecosystem",
    links: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Ecosystem", href: "#ecosystem" },
      { name: "Utility", href: "#utility" },
      { name: "Tokenomics", href: "#tokenomics" },
      { name: "Roadmap", href: "#roadmap" },
      { name: "FAQ", href: "#faq" },
    ],
    primaryCta: {
      text: "Buy OKN",
      href: "#presale",
    },
  },

  hero: {
    eyebrow: "OKN TOKEN",
    headlineLine1: "Powering the",
    headlineLine2: "OKNexus Ecosystem",
    description: "OKN Token powers a secure, transparent, and AI-powered ecosystem built for the next generation of digital finance.",
    primaryCta: {
      text: "Buy OKN",
      href: "#presale",
    },
    secondaryCta: {
      text: "Explore Ecosystem",
      href: "#ecosystem",
    },
    kycBadge: {
      text: "KYC VERIFIED PROJECT",
      handle: "@AssureDeFi",
      verifiedUrl: "https://assuredefi.com",
    },
    presaleCard: {
      title: "Current Entry",
      badge: "$0.10 ENTRY WINDOW",
      currentPrice: "$0.10",
      currentStageLabel: "Current stage price",
      nextStagePrice: "$0.148",
      listingPrice: "$0.30",
      listingPriceGain: "+200%",
      raisedAmount: "$17M+",
      investorCount: "19,523",
      ctaText: "Join Presale",
    },
  },

  trustStrip: {
    headline: "Security & Infrastructure",
    subtitle: "OKNexus connects proven infrastructure, open tooling, and AI-native blockchain execution into one ecosystem.",
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
    description: "OKN Token is designed to make blockchain interactions faster, easier, and smarter for users, builders, and ecosystem partners.",
    features: [
      {
        id: "feat-1",
        title: "AI at Network Level",
        description: "AI lives in the chain itself, optimizing performance, transaction routing, security, and execution.",
        iconName: "brain",
      },
      {
        id: "feat-2",
        title: "Faster Experience",
        description: "Sub-second transaction finality, lower gas fees, and seamless Web3 interaction flows.",
        iconName: "zap",
      },
      {
        id: "feat-3",
        title: "Smarter for Builders",
        description: "An AI-native developer environment for decentralized apps, smart contracts, and cross-chain products.",
        iconName: "code",
      },
      {
        id: "feat-4",
        title: "Clearer Onchain Activity",
        description: "Deep contextual transaction intelligence, automated risk scoring, and real-time network behavior insights.",
        iconName: "activity",
      },
      {
        id: "feat-5",
        title: "Built for Growth",
        description: "Scalable Layer 1 infrastructure, robust token utility, multi-audited contracts, and a staged global rollout.",
        iconName: "trending",
      },
      {
        id: "feat-6",
        title: "Cross Chain Native",
        description: "Designed from first principles to connect global ecosystems without locking users into an isolated silo.",
        iconName: "layers",
      },
    ] as FeatureItem[],
    stageCard: {
      headline: "The $0.10 Window Won't Last",
      subhead: "Join OKN Token at the current presale price before the next scheduled stage increase.",
      effectivePrice: "$0.10",
      bonusLabel: "+0% BONUS",
      originalPrice: "$0.148",
      listingPrice: "$0.30",
      cta: "Join Presale",
    },
  },

  comparison: {
    eyebrow: "ECOSYSTEM BENCHMARK",
    headline: "How OKN Token compares to other AI blockchains",
    subhead: "AI-native Layer 1 execution with early presale access. Here's how it stacks up.",
    headers: ["Category", "OKN Token", "NEAR", "Render", "Bittensor"],
    rows: [
      {
        category: "Token Price",
        okn: "$0.132 presale",
        near: "$2.11",
        render: "$1.62",
        bittensor: "$207.65",
      },
      {
        category: "FDV",
        okn: "~$283.8M",
        near: "~$2.70B",
        render: "~$854.2M",
        bittensor: "~$4.34B",
      },
      {
        category: "Layer 1 Infrastructure",
        okn: "Yes",
        near: "Yes",
        render: "No",
        bittensor: "Yes",
        highlight: true,
      },
      {
        category: "User Facing AI",
        okn: "Yes",
        near: "Partial",
        render: "No",
        bittensor: "Partial",
        highlight: true,
      },
      {
        category: "Presale Access",
        okn: "Yes",
        near: "No",
        render: "No",
        bittensor: "No",
        highlight: true,
      },
      {
        category: "Audits",
        okn: "CertiK + SolidProof",
        near: "Varies",
        render: "Varies",
        bittensor: "Varies",
      },
    ] as ComparisonRow[],
  },

  ecosystem: {
    eyebrow: "OKNEXUS ECOSYSTEM",
    headline: "One Token. Multiple Possibilities.",
    description: "OKN fuels an expansive network of financial primitives, AI automation, and high-performance Web3 services.",
    pillars: [
      {
        id: "exchange",
        title: "OKNexus Exchange",
        tag: "Core Engine",
        description: "High-throughput spot, derivatives, and P2P trading with ultra-low latency and deep institutional liquidity.",
        stats: "0.01s Latency • Institutional Grade",
      },
      {
        id: "ai-agents",
        title: "AI Prediction & Trading Agents",
        tag: "AI Intelligence",
        description: "Autonomous algorithms that parse on-chain order books, transaction telemetry, and sentiment to execute optimal trades.",
        stats: "24/7 Autopilot • Risk Aware",
      },
      {
        id: "staking",
        title: "Staking & Yield Vaults",
        tag: "DeFi Primitives",
        description: "Lock OKN tokens to secure network validation, earn protocol fee distributions, and unlock governance tiers.",
        stats: "Tiered Multipliers • Non-Custodial",
      },
      {
        id: "crosschain",
        title: "Cross-Chain Instant Swaps",
        tag: "Interoperability",
        description: "Frictionless bridging and atomic cross-chain liquidity across Ethereum, Arbitrum, Solana, and major L1/L2 networks.",
        stats: "Multi-Chain Routing • Zero Slippage",
      },
      {
        id: "launchpad",
        title: "OKN Launchpad",
        tag: "Incubation",
        description: "Guaranteed allocation tiers for the most promising early-stage Web3, AI, and fintech decentralized projects.",
        stats: "Vetted Tier Access • Community First",
      },
      {
        id: "security",
        title: "Institutional Custody & Wallet",
        tag: "Security",
        description: "Multi-signature key security, biometric authentication, and smart-contract protected storage for all assets.",
        stats: "AssureDeFi KYC • Multi-Audited",
      },
    ],
  },

  utility: {
    eyebrow: "TOKEN UTILITY",
    headline: "More Than a Token. The Operating Fuel of OKNexus.",
    description: "Every interaction across the OKNexus ecosystem leverages OKN as its fundamental economic and governance backbone.",
    utilities: [
      {
        title: "Fee Discounts & Zero-Gas Swaps",
        desc: "Holders enjoy up to 80% discount on exchange trading fees and subsidized network gas fees across ecosystem smart contracts.",
      },
      {
        title: "Protocol Governance",
        desc: "Participate directly in key protocol proposals, liquidity incentive allocations, asset listings, and treasury distributions.",
      },
      {
        title: "Staking & Fee Sharing",
        desc: "Stake OKN in protocol revenue pools to capture real yield generated from exchange trading fees and swap volume.",
      },
      {
        title: "AI Feature Access Tiers",
        desc: "Unlock proprietary AI market intelligence algorithms, algorithmic signals, and automated copy-trading capabilities.",
      },
    ],
  },

  tokenomics: {
    eyebrow: "TRANSPARENT DISTRIBUTION",
    headline: "OKN Tokenomics",
    description: "OKN is the native utility token of the OKNexus ecosystem powering network usage, AI features, and long-term ecosystem growth.",
    callout: "The presale is part of the 30% Public Sale allocation unlocked at TGE.",
    allocations: [
      { name: "Public Sale", percentage: 30, color: "#8B5CF6", vesting: "TGE unlock, 36 mo linear vest" },
      { name: "Treasury", percentage: 15, color: "#06B6D4", vesting: "Strategic long-term ecosystem reserve" },
      { name: "Ecosystem", percentage: 15, color: "#EC4899", vesting: "Linear vest, 12 mo cliff, 24 mo vest" },
      { name: "Team", percentage: 10, color: "#3B82F6", vesting: "12 mo cliff, 24 mo linear vest" },
      { name: "Liquidity", percentage: 10, color: "#10B981", vesting: "Locked at TGE, 6 mo cliff, 18 mo vest" },
      { name: "Private Sale", percentage: 8, color: "#F59E0B", vesting: "Strategic institutional partners" },
      { name: "Rewards / Burn", percentage: 8, color: "#D946EF", vesting: "Protocol emissions & deflationary burns" },
      { name: "Seed / Marketing", percentage: 5, color: "#6366F1", vesting: "Vesting over 18 months" },
    ] as TokenAllocation[],
    stats: [
      { label: "Total Supply", value: "1,000,000,000 OKN", highlight: false },
      { label: "Initial Market Cap", value: "~$8.5M", highlight: false },
      { label: "FDV", value: "~$283.8M", highlight: true },
      { label: "Circulating at TGE", value: "~12%", highlight: false },
    ],
  },

  roadmap: {
    eyebrow: "STRATEGIC EXECUTION",
    headline: "OKNexus Roadmap",
    description: "A phased rollout from core infrastructure and AI features to ecosystem expansion and global network utility.",
    milestones: [
      {
        quarter: "Q1",
        year: "2025",
        status: "Completed",
        title: "Idea Foundation",
        points: [
          "Core vision defined: AI-native chain with transaction risk awareness",
          "Founding team and global contributor base assembled",
          "Early technical direction and design principles established",
          "First whitepaper and architecture litepaper published",
        ],
      },
      {
        quarter: "Q2",
        year: "2025",
        status: "Completed",
        title: "Early Access Community",
        points: [
          "Token infrastructure engineered and tested",
          "Independent third-party security audits completed",
          "Early supporter whitelist opened to global community",
          "Official verified channels launched across major platforms",
        ],
      },
      {
        quarter: "Q3",
        year: "2025",
        status: "Completed",
        title: "Beta Testnet",
        points: [
          "First public testnet brought online with high uptime",
          "Block explorer support and telemetry dashboard introduced",
          "Faucet and developer onboarding SDKs made available",
          "Initial feedback loops with validator community",
        ],
      },
      {
        quarter: "Q4",
        year: "2025",
        status: "Completed",
        title: "Advanced Testnet",
        points: [
          "AI transaction risk awareness prototype demonstrated",
          "Wallet and swap flow tested end-to-end under high load",
          "Network throughput and gas optimization improvements",
          "Expanded developer documentation and bounty program",
        ],
      },
      {
        quarter: "Q1",
        year: "2026",
        status: "Completed",
        title: "Infrastructure Scaling",
        points: [
          "Core infrastructure prepared for production-scale workloads",
          "Network tooling and validator node operations hardened",
          "Explorer and indexing microservices strengthened",
          "Groundwork laid for upcoming AI feature suite",
        ],
      },
      {
        quarter: "Q2",
        year: "2026",
        status: "In Progress",
        title: "Mainnet Preparation",
        points: [
          "Mainnet release candidate deployed to staging and stress-tested",
          "Additional comprehensive smart contract security reviews",
          "Institutional developer tooling & API documentation published",
          "Strategic liquidity and ecosystem partner onboarding",
        ],
      },
      {
        quarter: "Q3",
        year: "2026",
        status: "Upcoming",
        title: "Token Launch",
        points: [
          "Production mainnet goes live globally",
          "Token Generation Event (TGE) and public exchange listings",
          "On-chain staking and decentralized governance enabled",
          "Builder grant programs and ecosystem fund deployment",
        ],
      },
    ] as RoadmapMilestone[],
  },

  community: {
    eyebrow: "GLOBAL MOVEMENT",
    headline: "Our Community 100K+",
    description: "A growing community of holders, builders, and supporters backed by leading voices across Web3.",
    stats: [
      { label: "Community Members", value: "100K+" },
      { label: "Community Investors", value: "10,814" },
      { label: "KOL Partners", value: "40+" },
    ],
    socials: [
      { name: "Telegram", href: "https://t.me/oknexus", handle: "@oknexus" },
      { name: "X (Twitter)", href: "https://x.com/oknexus", handle: "@OKNexus" },
      { name: "Discord", href: "https://discord.gg/oknexus", handle: "discord.gg/oknexus" },
      { name: "YouTube", href: "https://youtube.com/@oknexus", handle: "@OKNexusOfficial" },
      { name: "Instagram", href: "https://instagram.com/oknexus", handle: "@oknexus" },
    ],
  },

  media: {
    headline: "As Featured In",
    outlets: [
      { name: "Cointelegraph", highlight: "Tier 1 Media" },
      { name: "CoinMarketCap", highlight: "Tracked" },
      { name: "Yahoo Finance", highlight: "Editorial" },
      { name: "Cryptonews", highlight: "Featured" },
      { name: "Benzinga", highlight: "Market Pulse" },
      { name: "Techopedia", highlight: "Analysis" },
    ],
  },

  faq: {
    eyebrow: "KNOWLEDGE BASE",
    headline: "Frequently Asked Questions",
    description: "Everything you need to know about OKN Token, the presale stages, and the OKNexus ecosystem.",
    items: [
      {
        question: "What is OKN Token?",
        answer: "OKN Token is the native utility and governance asset of the OKNexus ecosystem. It powers transaction fee settlement, AI trading engine access, decentralized governance, staking rewards, and cross-chain liquidity routing.",
      },
      {
        question: "What makes OKNexus different from traditional blockchains?",
        answer: "OKNexus integrates AI at the network consensus level to provide real-time transaction risk scoring, optimized routing, and autonomous agent capabilities, combined with sub-second finality and multi-chain interoperability.",
      },
      {
        question: "What is the current entry price and listing price?",
        answer: "The current presale stage entry price is $0.10 per OKN. The confirmed listing price at Token Generation Event (TGE) is scheduled at $0.30 per OKN, representing a +200% base price delta.",
      },
      {
        question: "How can I participate in the presale?",
        answer: "You can participate directly by connecting your supported Web3 wallet (such as MetaMask, WalletConnect, or Coinbase Wallet) and acquiring OKN with ETH, USDT, or USDC on the Ethereum and Arbitrum networks.",
      },
      {
        question: "Is the OKN smart contract audited and verified?",
        answer: "Yes. OKN smart contracts have undergone rigorous multi-phase security audits conducted by industry-leading security firms CertiK and SolidProof. Additionally, the project team is KYC-verified through AssureDeFi.",
      },
      {
        question: "What is the total supply and vesting schedule?",
        answer: "The maximum total supply is capped at 1,000,000,000 OKN. The presale allocation represents 30% of the total supply, unlocked at TGE with structured 36-month vesting to protect token health and maintain stable ecosystem liquidity.",
      },
      {
        question: "When will the Token Generation Event (TGE) occur?",
        answer: "The Token Generation Event and public market listing are scheduled for Q3 2026, following the completion of the mainnet validation phase and tier-1 exchange liquidity setups.",
      },
    ] as FaqItem[],
  },

  finalCta: {
    headlineLine1: "Every Stage Brings",
    headlineLine2: "A Higher Price",
    description: "The current $0.10 entry window is available for a limited time before the next scheduled increase.",
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
    sections: [
      {
        title: "Quick Links",
        links: [
          { name: "Home", href: "#hero" },
          { name: "About", href: "#about" },
          { name: "Tokenomics", href: "#tokenomics" },
          { name: "Roadmap", href: "#roadmap" },
        ],
      },
      {
        title: "Ecosystem",
        links: [
          { name: "OKNexus Exchange", href: "https://exchange.oknexus.io" },
          { name: "Wallet", href: "#ecosystem" },
          { name: "Docs", href: "#docs" },
          { name: "Blog", href: "#blog" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Whitepaper", href: "#whitepaper" },
          { name: "Brand Kit", href: "#brand" },
          { name: "Help Center", href: "#faq" },
          { name: "Contact", href: "#contact" },
        ],
      },
    ],
  },
};
