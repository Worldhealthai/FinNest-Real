/**
 * ISA Providers Data - Real UK ISA Providers (2025)
 * Comprehensive list of major ISA providers in the UK market
 */

export interface ISAProvider {
  name: string;
  types: string[]; // Cash, Stocks & Shares, Lifetime, Innovative Finance
  category: 'bank' | 'investment-platform' | 'fintech' | 'building-society';
  description?: string;
}

export const ISA_PROVIDERS: ISAProvider[] = [
  // Investment Platforms - Stocks & Shares Specialists
  {
    name: 'Hargreaves Lansdown',
    types: ['Stocks & Shares', 'SIPP', 'Junior ISA'],
    category: 'investment-platform',
    description: 'UK\'s largest investment platform with over £105bn under administration',
  },
  {
    name: 'AJ Bell',
    types: ['Stocks & Shares', 'SIPP', 'Junior ISA'],
    category: 'investment-platform',
    description: 'Top-rated platform with full-service and beginner-friendly Dodl app',
  },
  {
    name: 'Vanguard',
    types: ['Stocks & Shares', 'SIPP'],
    category: 'investment-platform',
    description: 'Excellent choice for beginners with low-cost index funds',
  },
  {
    name: 'Fidelity',
    types: ['Stocks & Shares', 'SIPP', 'Junior ISA'],
    category: 'investment-platform',
    description: 'Global investment manager with comprehensive ISA options',
  },
  {
    name: 'Interactive Investor',
    types: ['Stocks & Shares', 'SIPP', 'Junior ISA'],
    category: 'investment-platform',
    description: 'UK\'s second-largest investment platform',
  },
  {
    name: 'InvestEngine',
    types: ['Stocks & Shares'],
    category: 'investment-platform',
    description: 'Which? Recommended Provider with low fees',
  },
  {
    name: 'Charles Stanley',
    types: ['Stocks & Shares', 'SIPP'],
    category: 'investment-platform',
    description: 'Established wealth manager with premium service',
  },
  {
    name: 'Bestinvest',
    types: ['Stocks & Shares', 'SIPP'],
    category: 'investment-platform',
    description: 'Award-winning platform with expert insights',
  },
  {
    name: 'iWeb',
    types: ['Stocks & Shares'],
    category: 'investment-platform',
    description: 'Great value provider with competitive fees',
  },
  {
    name: 'Nutmeg',
    types: ['Stocks & Shares', 'Lifetime ISA'],
    category: 'investment-platform',
    description: 'Digital wealth manager with managed portfolios',
  },

  // FinTech Providers - Modern Digital Solutions
  {
    name: 'Moneybox',
    types: ['Cash ISA', 'Stocks & Shares', 'Lifetime ISA'],
    category: 'fintech',
    description: 'App-based saving and investing with competitive rates',
  },
  {
    name: 'Plum',
    types: ['Cash ISA', 'Stocks & Shares'],
    category: 'fintech',
    description: 'AI-powered savings with up to 4.76% AER',
  },
  {
    name: 'Chip',
    types: ['Cash ISA'],
    category: 'fintech',
    description: 'Smart savings app with 4.42% rate',
  },
  {
    name: 'Dodl',
    types: ['Stocks & Shares'],
    category: 'fintech',
    description: 'Beginner-friendly app by AJ Bell',
  },
  {
    name: 'Freetrade',
    types: ['Stocks & Shares'],
    category: 'fintech',
    description: 'Commission-free trading platform',
  },
  {
    name: 'Trading 212',
    types: ['Stocks & Shares'],
    category: 'fintech',
    description: 'Popular commission-free platform',
  },

  // Major Banks
  {
    name: 'Barclays',
    types: ['Cash ISA', 'Stocks & Shares'],
    category: 'bank',
    description: 'Over 325 years of banking expertise',
  },
  {
    name: 'Halifax',
    types: ['Cash ISA', 'Stocks & Shares'],
    category: 'bank',
    description: 'Part of Lloyds Banking Group',
  },
  {
    name: 'Lloyds Bank',
    types: ['Cash ISA', 'Stocks & Shares'],
    category: 'bank',
    description: 'Major UK high street bank',
  },
  {
    name: 'NatWest',
    types: ['Cash ISA', 'Stocks & Shares'],
    category: 'bank',
    description: 'Great value provider for 2025',
  },
  {
    name: 'Royal Bank of Scotland',
    types: ['Cash ISA', 'Stocks & Shares'],
    category: 'bank',
    description: 'RBS Invest platform with competitive rates',
  },
  {
    name: 'Santander',
    types: ['Cash ISA'],
    category: 'bank',
    description: 'Established high street bank',
  },
  {
    name: 'HSBC',
    types: ['Cash ISA', 'Stocks & Shares'],
    category: 'bank',
    description: 'Global banking group',
  },
  {
    name: 'First Direct',
    types: ['Cash ISA'],
    category: 'bank',
    description: 'Award-winning digital bank',
  },

  // Building Societies
  {
    name: 'Nationwide',
    types: ['Cash ISA', 'Stocks & Shares'],
    category: 'building-society',
    description: 'UK\'s largest building society',
  },
  {
    name: 'Coventry Building Society',
    types: ['Cash ISA'],
    category: 'building-society',
    description: 'Competitive Cash ISA rates',
  },
  {
    name: 'Yorkshire Building Society',
    types: ['Cash ISA'],
    category: 'building-society',
    description: 'Strong Cash ISA offerings',
  },
  {
    name: 'Skipton Building Society',
    types: ['Cash ISA'],
    category: 'building-society',
    description: 'Competitive rates and good service',
  },

  // Other Notable Providers
  {
    name: 'Moneyfarm',
    types: ['Stocks & Shares'],
    category: 'investment-platform',
    description: 'Digital wealth manager',
  },
  {
    name: 'eToro',
    types: ['Stocks & Shares'],
    category: 'investment-platform',
    description: 'Social trading platform',
  },
  {
    name: 'Wealthify',
    types: ['Stocks & Shares'],
    category: 'investment-platform',
    description: 'Simple investment platform by Aviva',
  },
];

// Helper function to search providers by name
export const searchProviders = (query: string): ISAProvider[] => {
  if (!query.trim()) {
    return ISA_PROVIDERS;
  }

  const lowercaseQuery = query.toLowerCase().trim();
  return ISA_PROVIDERS.filter((provider) =>
    provider.name.toLowerCase().includes(lowercaseQuery)
  );
};

// Helper function to filter providers by ISA type
export const getProvidersByType = (isaType: string): ISAProvider[] => {
  return ISA_PROVIDERS.filter((provider) =>
    provider.types.some((type) => type.toLowerCase().includes(isaType.toLowerCase()))
  );
};

// Get popular providers (first 10)
export const getPopularProviders = (): ISAProvider[] => {
  return ISA_PROVIDERS.slice(0, 10);
};
