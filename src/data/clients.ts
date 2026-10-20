import { CaseStudyItem, TestimonialItem } from '../types';

export const clientLogos = [
  { name: 'Vanguard Logistics Group', symbol: 'VLG', sector: 'Transportation' },
  { name: 'Helix Cloud Systems', symbol: 'HCS', sector: 'Technology' },
  { name: 'Meridian Capital Partners', symbol: 'MCP', sector: 'Real Estate' },
  { name: 'Solaris Energy Group', symbol: 'SEG', sector: 'Renewables' },
  { name: 'Lumina Health Alliance', symbol: 'LHA', sector: 'Healthcare' },
  { name: 'Stratum Industrial Corp', symbol: 'SIC', sector: 'Manufacturing' },
  { name: 'Aegis Global Advisory', symbol: 'AGA', sector: 'Professional Services' }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: '1',
    number: 'Case Study 01',
    title: 'Financial Transformation',
    subtitle: 'From Decentralized Ledger Chaos to Audit-Ready 5-Day Close',
    clientIndustry: 'Transportation & Logistics',
    clientScale: '$85M Annual Revenue across 14 Operating Subsidiaries',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    challenge: 'A rapidly expanding logistics group had acquired 6 regional freight companies over 3 years. Fragmented accounting systems, conflicting charts of accounts, and delayed billing cycles caused 28-day month-end close lag, severe cash flow blindness, and debt covenant breach risk.',
    strategy: 'Finora deployed a dedicated 4-person SWAT team of senior controllers and FP&A architects to design a unified cloud ERP chart of accounts, standardize freight billing SOPs, and implement automated bank feed reconciliations across all 14 subsidiaries.',
    solution: 'We instituted a synchronized 5-day month-end close timetable, built an automated 13-week dynamic rolling cash flow model, and renegotiated bank credit lines with institutional lenders based on clean audited historical financials.',
    results: [
      'Reduced monthly close cycle from 28 days down to 4.5 business days',
      'Unlocked $4.2M in dormant working capital through expedited DSO collections',
      'Refinanced $30M senior credit facility at 140 basis points lower interest spread',
      'Achieved 100% clean audit opinion with zero material weaknesses'
    ],
    metrics: [
      { value: '84%', label: 'Reduction in Close Time' },
      { value: '$4.2M', label: 'Working Capital Unlocked' },
      { value: '-140 bps', label: 'Debt Financing Cost Savings' }
    ],
    testimonialQuote: 'Finora completely revolutionized our financial visibility. For the first time in our company’s history, our executive board has real-time clarity on cash flows across all 14 terminals.',
    testimonialAuthor: 'Jonathan Sterling',
    testimonialRole: 'Chief Executive Officer, Vanguard Logistics'
  },
  {
    id: '2',
    number: 'Case Study 02',
    title: 'Business Growth Strategy',
    subtitle: 'Scaling ARR from $8M to $35M and Closing a Tier-1 Series B Round',
    clientIndustry: 'Technology & Enterprise SaaS',
    clientScale: 'Pre-Series B B2B Software Platform with 140+ Employees',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    challenge: 'An enterprise AI software company was experiencing triple-digit user growth but struggled with complex multi-year ASC 606 revenue recognition, high CAC payback periods, and unstandardized investor metrics that stalled Series B term sheet negotiations.',
    strategy: 'Finora acted as the company’s external strategic finance arm, rebuilding their cohort unit economics model, setting up automated deferred revenue recognition schedules, and staging an institutional-grade data room.',
    solution: 'We reconstructed the 5-year financial model with dynamic Rule of 40 scoring, quantified R&D tax credits that generated $850k in cash rebates, and coached executive leadership through technical investor diligence sessions.',
    results: [
      'Successfully closed a $28M Series B round led by a Tier-1 venture fund at a 25% valuation premium',
      'Optimized CAC payback from 21 months down to 11.4 months through pricing restructuring',
      'Recaptured $850,000 in non-dilutive R&D federal and state tax credits',
      'Increased Net Revenue Retention (NRR) from 104% to 122%'
    ],
    metrics: [
      { value: '$28M', label: 'Series B Capital Secured' },
      { value: '11.4 mo', label: 'Optimized CAC Payback' },
      { value: '122%', label: 'Net Revenue Retention' }
    ],
    testimonialQuote: 'The Finora team was instrumental in our Series B success. Their models and diligence readiness gave our venture investors total confidence in our numbers.',
    testimonialAuthor: 'Rachel K. Chen',
    testimonialRole: 'Founder & CEO, Helix Cloud Systems'
  },
  {
    id: '3',
    number: 'Case Study 03',
    title: 'Investment Optimization',
    subtitle: 'Corporate Treasury Restructuring & Multi-Asset Yield Enhancement',
    clientIndustry: 'Real Estate & Family Office',
    clientScale: '$320M Commercial Property Portfolio & Treasury Reserves',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    challenge: 'A prominent multi-generational commercial real estate group held over $65M in idle transaction proceeds across fragmented commercial bank checking accounts, earning less than 0.8% APY while facing inflation erosion and bank deposit concentration risk.',
    strategy: 'Finora drafted a board-approved Corporate Investment Policy Statement (IPS) establishing a 3-tier liquidity architecture, segregated third-party institutional custody, and structured tax-advantaged fixed income allocations.',
    solution: 'We deployed capital across short-duration US Treasuries, AAA-rated municipal paper, and specialized real estate debt syndicates with full liquidity covenants for upcoming development acquisitions.',
    results: [
      'Increased annual corporate treasury yield from $520k to $3.1M with zero capital loss risk',
      'Executed cost segregation studies on 4 premier retail assets, creating $6.8M in Year-1 tax deductions',
      'Eliminated commercial bank counterparty concentration risk via segregated DVP custody',
      'Constructed dynamic JV waterfall models for upcoming $90M multifamily development project'
    ],
    metrics: [
      { value: '+$2.58M', label: 'Annual Incremental Yield' },
      { value: '$6.8M', label: 'Year-1 Tax Savings Unlocked' },
      { value: '100%', label: 'Fiduciary Asset Protection' }
    ],
    testimonialQuote: 'Finora transformed our passive balance sheet into a dynamic profit center without taking on speculative risk. Their tax advisory alone paid for their fees tenfold.',
    testimonialAuthor: 'Lawrence H. Meridian',
    testimonialRole: 'Managing Partner, Meridian Capital Partners'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Finora helped us turn complicated financial information into a clear, actionable strategy our leadership team could execute immediately. Their FP&A insights were transformative.',
    name: 'Sarah Montgomery',
    position: 'Chief Financial Officer',
    company: 'Aura Technology Group',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    industry: 'Technology'
  },
  {
    id: '2',
    quote: 'In our 20 years of operations, we have never worked with an advisory firm that combines deep quantitative modeling with such practical business understanding.',
    name: 'David O’Connor',
    position: 'Managing Director',
    company: 'Apex Industrial Systems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    industry: 'Manufacturing'
  },
  {
    id: '3',
    quote: 'The tax structuring and cross-border advisory from Finora saved our healthcare platform millions during our European acquisition. They are our most trusted advisors.',
    name: 'Dr. Evelyn Martinez',
    position: 'Executive Vice President',
    company: 'BioNexus Healthcare Solutions',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    industry: 'Healthcare'
  },
  {
    id: '4',
    quote: 'From restructuring our capital stack to optimizing daily cash conversion, Finora has been a key driver behind our 3x valuation expansion over the last three years.',
    name: 'Alexander Ward',
    position: 'Founder & CEO',
    company: 'Meridian Urban Developments',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    industry: 'Real Estate'
  },
  {
    id: '5',
    quote: 'The speed and precision of their accounting and controllership team is unmatched. We cut our month-end close from three weeks to four days within 60 days of onboarding.',
    name: 'Helena Vance-Price',
    position: 'Chief Operating Officer',
    company: 'Solaris Energy Holdings',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    industry: 'Energy'
  },
  {
    id: '6',
    quote: 'Finora’s M&A advisory and Quality of Earnings defense were the difference between a stalled transaction and a record-breaking exit multiple for our founders.',
    name: 'Tariq Al-Hashemi',
    position: 'Principal Investor',
    company: 'Crestview Capital Partners',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    industry: 'Private Equity'
  }
];

export const academyArticles = [
  {
    id: 'ac-1',
    title: 'Financial Planning Fundamentals: The 5 Pillars of Enterprise Health',
    description: 'Master the foundational frameworks of cash conversion, debt-to-equity balancing, and dynamic operational budgeting.',
    level: 'Foundational',
    readTime: '12 min',
    slug: 'building-dynamic-cash-flow-model',
    category: 'Finance'
  },
  {
    id: 'ac-2',
    title: 'Understanding Business Cash Flow: Operational vs. Non-Operating Flows',
    description: 'Learn why EBITDA does not equal cash and how working capital swings can secretly drain healthy businesses.',
    level: 'Intermediate',
    readTime: '15 min',
    slug: 'building-dynamic-cash-flow-model',
    category: 'Accounting'
  },
  {
    id: 'ac-3',
    title: 'Building an Institutional Investment Strategy for Corporate Treasuries',
    description: 'A step-by-step masterclass on duration matching, liquidity tiering, and fiduciary asset protection.',
    level: 'Advanced',
    readTime: '18 min',
    slug: 'institutional-treasury-strategies-rate-cuts',
    category: 'Investment'
  }
];
