import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: '1',
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Navigating complex reimbursement models, clinical trial financing, and regulatory compliance for healthcare providers and biotech ventures.',
    overview: 'The healthcare and life sciences sector operates under intense regulatory oversight, shifting payer dynamics, and high capital expenditure demands. Finora delivers tailored financial architectures that enhance provider margins, accelerate clinical trial commercialization, and ensure compliant revenue cycle management.',
    challenges: [
      {
        title: 'Shifting Payer & Reimbursement Dynamics',
        description: 'Transitioning from fee-for-service to value-based care creates revenue forecasting volatility.'
      },
      {
        title: 'Long R&D & Clinical Trial Horizons',
        description: 'Biotech and medical device firms face substantial multi-year capital burn before commercialization.'
      },
      {
        title: 'Heavy Regulatory & Compliance Burdens',
        description: 'Navigating stringent compliance requirements (HIPAA, Stark Law, FDA audits) while maintaining operational efficiency.'
      }
    ],
    solutions: [
      {
        title: 'Revenue Cycle Optimization',
        description: 'Advanced analytics tracking denial rates, claims velocity, and collections efficiency.'
      },
      {
        title: 'Life Sciences Capital Syndication',
        description: 'Non-dilutive grant monetizations, venture debt modeling, and milestone-based equity staging.'
      },
      {
        title: 'Medical Practice M&A Rollups',
        description: 'Financial due diligence and shared services integration for private-equity backed provider platforms.'
      }
    ],
    stats: [
      { value: '$450M+', label: 'Healthcare Transactions Advised' },
      { value: '18%', label: 'Average Margin Improvement' },
      { value: '99.4%', label: 'Compliance Audit Pass Rate' }
    ],
    relevantServiceSlugs: ['financial-management', 'tax-advisory', 'm-and-a-advisory'],
    insights: [
      {
        title: 'The Value-Based Care Imperative',
        description: 'How specialized clinical groups are protecting EBITDA while shifting risk to commercial payers.'
      },
      {
        title: 'Monetizing Orphan Drug R&D Credits',
        description: 'Maximizing non-dilutive tax incentives to extend biotech operational runway by 14+ months.'
      }
    ],
    faqs: [
      {
        question: 'Do you work with physician practice management (PPM) groups?',
        answer: 'Yes, we advise specialty medical groups, dental support organizations (DSOs), and outpatient surgery centers on growth and financial governance.'
      },
      {
        question: 'Can you help biotech startups prepare for FDA milestone fundraising?',
        answer: 'We build granular cash burn models and data rooms tailored specifically to venture capital and life sciences investment funds.'
      }
    ]
  },
  {
    id: '2',
    slug: 'technology',
    name: 'Technology & SaaS',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Scaling high-velocity software, AI startups, and digital platforms with SaaS metrics, ARR forecasting, and venture fundraising support.',
    overview: 'Technology businesses thrive on rapid scale, innovative unit economics, and recurring revenue predictability. Finora partners with SaaS, fintech, and deep-tech companies to establish institutional metrics (ARR, NRR, CAC Payback), optimize global transfer pricing for IP, and close venture/private equity rounds.',
    challenges: [
      {
        title: 'ASC 606 Revenue Recognition',
        description: 'Handling complex multi-element subscription contracts, usage tiers, and deferred revenue schedules.'
      },
      {
        title: 'High Customer Acquisition Costs (CAC)',
        description: 'Balancing aggressive top-line growth with sustainable payback periods and net retention.'
      },
      {
        title: 'Global IP & Transfer Pricing',
        description: 'Protecting valuable proprietary software intellectual property across international operating subsidiaries.'
      }
    ],
    solutions: [
      {
        title: 'SaaS Metric FP&A Suite',
        description: 'Real-time cohort retention, churn analytics, and Rule of 40 operational tracking.'
      },
      {
        title: 'Venture & Growth Equity Readiness',
        description: 'Institutional-grade pitch models, clean cap table structuring, and data room curation.'
      },
      {
        title: 'R&D Tax Credit Monetization',
        description: 'Reclaiming up to 15-20% of engineering payroll through federal and state innovation credits.'
      }
    ],
    stats: [
      { value: '120+', label: 'Tech & SaaS Clients Advised' },
      { value: '$850M+', label: 'Venture Capital Rounds Supported' },
      { value: '3.4x', label: 'Average ARR Growth Acceleration' }
    ],
    relevantServiceSlugs: ['financial-planning', 'tax-advisory', 'business-advisory'],
    insights: [
      {
        title: 'Mastering the Rule of 40 in SaaS',
        description: 'Why modern software investors prioritize capital efficiency over unbridled top-line growth.'
      },
      {
        title: 'Optimizing Deferred Revenue Under ASC 606',
        description: 'Best practices for multi-year contract recognition and audit readiness.'
      }
    ],
    faqs: [
      {
        question: 'Do you support fractional CFO services for early-stage software companies?',
        answer: 'Yes, we provide fractional CFO and strategic advisory services starting from Seed/Series A through pre-IPO maturity.'
      },
      {
        question: 'How do you help SaaS companies improve Net Revenue Retention (NRR)?',
        answer: 'We conduct pricing elasticity studies, contract renewal analyses, and expansion revenue modeling to uncover expansion opportunities.'
      }
    ]
  },
  {
    id: '3',
    slug: 'real-estate',
    name: 'Real Estate & Infrastructure',
    iconName: 'Building',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Capital stack structuring, waterfall distributions, 1031 exchanges, and asset-level accounting for developers and REITs.',
    overview: 'Commercial real estate and infrastructure development demand sophisticated financial engineering. Finora provides syndication modeling, joint venture equity waterfalls, cost segregation tax studies, and debt placement for premier real estate developers, funds, and REITs.',
    challenges: [
      {
        title: 'Interest Rate & Refinancing Exposure',
        description: 'Managing maturing construction loans and floating rate debt in volatile macro environments.'
      },
      {
        title: 'Complex JV Equity Waterfalls',
        description: 'Calculating multi-tiered hurdle rates, preferred returns, and sponsor promotes accurately.'
      },
      {
        title: 'Tax Depreciation & Timing',
        description: 'Optimizing bonus depreciation, cost segregation, and qualifying Section 1031 tax-deferred exchanges.'
      }
    ],
    solutions: [
      {
        title: 'Dynamic Real Estate Financial Models',
        description: 'Argus-compatible pro-formas, lease rollover sensitivity, and development cash flow engines.'
      },
      {
        title: 'Cost Segregation Studies',
        description: 'Accelerating tax depreciation deductions on commercial properties to unlock immediate cash flow.'
      },
      {
        title: 'Debt & Mezzanine Syndication',
        description: 'Connecting developers with insurance companies, debt funds, and regional balance sheet lenders.'
      }
    ],
    stats: [
      { value: '$1.8B+', label: 'Real Estate Assets Modeled' },
      { value: '32%', label: 'Average Year-1 Tax Savings via Cost Seg' },
      { value: '45+', label: 'Active Development Projects Advised' }
    ],
    relevantServiceSlugs: ['corporate-finance', 'tax-advisory', 'investment-advisory'],
    insights: [
      {
        title: 'Navigating Commercial Loan Refinancing Waves',
        description: 'Strategies for real estate sponsors facing bridge debt maturities and higher cap rates.'
      },
      {
        title: 'Structuring Tax-Efficient Opportunity Zone Funds',
        description: 'Long-term capital gains elimination through qualified opportunity zone vehicle structuring.'
      }
    ],
    faqs: [
      {
        question: 'Can you handle multi-property fund accounting and investor distributions?',
        answer: 'Yes, we provide specialized fund administration, calculating quarterly distribution notices and issuing partner K-1s.'
      },
      {
        question: 'What property asset classes do you specialize in?',
        answer: 'Our portfolio covers multifamily, industrial logistics, medical office, mixed-use, and hospitality developments.'
      }
    ]
  },
  {
    id: '4',
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Standard costing, bill of materials (BOM) optimization, inventory valuation, and CapEx automation for industrial leaders.',
    overview: 'Precision manufacturing requires uncompromising control over unit costs, raw material inventory, and factory floor utilization. Finora assists mid-market and enterprise manufacturers with standard cost accounting, automated CapEx ROI modeling, and multi-facility supply chain restructuring.',
    challenges: [
      {
        title: 'Raw Material & Energy Price Volatility',
        description: 'Unpredictable commodity swings compressing gross margins without dynamic pricing mechanisms.'
      },
      {
        title: 'Inventory Holding Costs & Obsoleteness',
        description: 'Excess WIP and slow-moving SKU inventory trapping millions in operational cash flow.'
      },
      {
        title: 'High CapEx Automation Demands',
        description: 'Justifying multi-million dollar investments in robotics, CNC tooling, and Industry 4.0 IoT infrastructure.'
      }
    ],
    solutions: [
      {
        title: 'Standard Costing & Variance Analysis',
        description: 'Granular tracking of machine hour rates, labor efficiency, and material yield variances.'
      },
      {
        title: 'Supply Chain Working Capital Fixes',
        description: 'Re-negotiating vendor terms and aligning production schedules to trim inventory by 20-35%.'
      },
      {
        title: 'Equipment Leasing & Industrial Grants',
        description: 'Capturing state manufacturing incentives and structuring asset-backed equipment credit lines.'
      }
    ],
    stats: [
      { value: '80+', label: 'Manufacturing Facilities Optimized' },
      { value: '23%', label: 'Average Working Capital Freed' },
      { value: '$340M', label: 'Equipment Financings Arranged' }
    ],
    relevantServiceSlugs: ['financial-management', 'accounting', 'strategic-consulting'],
    insights: [
      {
        title: 'Modernizing Factory Floor Standard Costing',
        description: 'How dynamic activity-based costing (ABC) prevents loss-making SKU runs.'
      },
      {
        title: 'Securing State Advanced Manufacturing Incentives',
        description: 'Unlocking municipal tax abatements and utility subsidies for facility expansions.'
      }
    ],
    faqs: [
      {
        question: 'How do you handle inventory counts and UNICAP (Section 263A) calculations?',
        answer: 'We calculate precise Section 263A capitalization schedules and assist during physical inventory audits.'
      },
      {
        question: 'Can you help us evaluate whether to buy or lease heavy machinery?',
        answer: 'We build comprehensive total cost of ownership (TCO) models comparing purchase, synthetic leases, and fair-market value leases.'
      }
    ]
  },
  {
    id: '5',
    slug: 'agriculture',
    name: 'Agriculture & Agribusiness',
    iconName: 'Wheat',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Seasonal cash flow smoothing, crop insurance hedging, farm credit facilities, and AgTech investment advisory.',
    overview: 'Agribusiness faces distinct cyclicality driven by commodity cycles, climate patterns, and global food supply logistics. Finora provides agricultural producers, cooperatives, and food processors with seasonal liquidity forecasting, farm credit negotiation, and specialized agricultural tax planning.',
    challenges: [
      {
        title: 'Seasonal Cash Flow Asymmetry',
        description: 'Heavy planting and input outlays occurring months before harvest realizations.'
      },
      {
        title: 'Commodity Market Fluctuations',
        description: 'Grain, livestock, and produce pricing swings creating severe revenue uncertainty.'
      },
      {
        title: 'Succession & Farm Land Preservation',
        description: 'Passing family-owned multi-generation acreage without triggering catastrophic estate tax bills.'
      }
    ],
    solutions: [
      {
        title: 'Seasonal Operating Line Architecture',
        description: 'Optimized credit facilities synchronizing borrowing capacity directly with harvest cycles.'
      },
      {
        title: 'Commodity Futures & Derivative Hedging',
        description: 'Structuring forward contracts and collar options to lock in profitable floor prices.'
      },
      {
        title: 'Agricultural Tax Structuring',
        description: 'Leveraging farm income averaging, livestock capital gains rules, and conservation easements.'
      }
    ],
    stats: [
      { value: '350,000+', label: 'Acres Under Financial Advisory' },
      { value: '$190M', label: 'Farm Credit Facilities Structured' },
      { value: '100%', label: 'Generational Transition Success Rate' }
    ],
    relevantServiceSlugs: ['financial-management', 'tax-advisory', 'risk-management'],
    insights: [
      {
        title: 'Leveraging USDA & Farm Credit Programs',
        description: 'Navigating government guaranteed loan facilities for agricultural modernization.'
      },
      {
        title: 'AgTech Automation & Yield ROI',
        description: 'Evaluating the true payback period of autonomous tractors and precision irrigation.'
      }
    ],
    faqs: [
      {
        question: 'Do you work with agricultural cooperatives and food processors?',
        answer: 'Yes, we advise agricultural co-ops, grain elevators, wineries, and commercial food packing operations.'
      },
      {
        question: 'How do you handle farm estate and succession planning?',
        answer: 'We create family limited partnerships, trusts, and buy-sell agreements that keep farm equity intact across generations.'
      }
    ]
  },
  {
    id: '6',
    slug: 'transportation',
    name: 'Transportation & Logistics',
    iconName: 'Truck',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Fleet financing, fuel surcharge modeling, freight brokerage accounting, and cross-border logistics advisory.',
    overview: 'Transportation and logistics networks are the arteries of global commerce. Finora supports trucking carriers, 3PL providers, air freight operators, and maritime fleets with dynamic cost-per-mile financial modeling, fuel risk mitigation, and strategic equipment refinancing.',
    challenges: [
      {
        title: 'Fuel Price Unpredictability',
        description: 'Rapid spikes in diesel and jet fuel eating away thin freight contract margins.'
      },
      {
        title: 'High Capital Intensity & Fleet Maintenance',
        description: 'Managing tractor-trailer replacement cycles, battery EV transitions, and residual value risk.'
      },
      {
        title: 'Driver Shortages & Compensation Compliance',
        description: 'Navigating per diem allowances, independent contractor classification, and overtime rules.'
      }
    ],
    solutions: [
      {
        title: 'Cost-Per-Mile FP&A Engine',
        description: 'Real-time tracking of fuel, maintenance, driver pay, and deadhead mileage by lane.'
      },
      {
        title: 'Fleet Synthetic Leasing & Debt Structuring',
        description: 'Optimizing balance sheet treatment and tax depreciation for transport fleets.'
      },
      {
        title: 'Freight Brokerage M&A Rollups',
        description: 'Advising 3PLs on tuck-in acquisitions and technology integration.'
      }
    ],
    stats: [
      { value: '15,000+', label: 'Fleet Assets Under Advisory' },
      { value: '$280M', label: 'Transportation Debt Placed' },
      { value: '14.2%', label: 'Freight Lane Margin Expansion' }
    ],
    relevantServiceSlugs: ['corporate-finance', 'financial-management', 'payroll-services'],
    insights: [
      {
        title: 'Dynamic Fuel Surcharge Indexing',
        description: 'Protecting logistics margins from spot diesel price spikes through automated billing clauses.'
      },
      {
        title: 'Fleet Electrification Economics',
        description: 'Evaluating federal clean vehicle tax credits versus commercial charging infrastructure costs.'
      }
    ],
    faqs: [
      {
        question: 'Do you help freight brokers with factor line financing?',
        answer: 'Yes, we negotiate institutional accounts receivable factoring and asset-backed working capital lines on competitive terms.'
      },
      {
        question: 'Can you assist with multi-state IFTA fuel tax filings?',
        answer: 'Our logistics accounting specialists handle International Fuel Tax Agreement (IFTA) reconciliations and filings.'
      }
    ]
  },
  {
    id: '7',
    slug: 'construction',
    name: 'Construction & Engineering',
    iconName: 'HardHat',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Job costing, percentage-of-completion (PoC) accounting, surety bonding enhancement, and subcontractor risk audits.',
    overview: 'Construction projects run on tight margins, strict retainage schedules, and complex surety bonding covenants. Finora delivers robust job costing systems, Work-In-Progress (WIP) schedule integrity, and financial strategies that expand surety bonding capacity for general contractors and specialty trades.',
    challenges: [
      {
        title: 'Work-In-Progress (WIP) Over/Under-Billing',
        description: 'Miscalculating job profitability leading to surprise losses at project completion.'
      },
      {
        title: 'Surety Bonding Capacity Caps',
        description: 'Restricted bonding lines preventing contractors from bidding on lucrative public and mega-commercial tenders.'
      },
      {
        title: 'Cash Flow Retainage Delays',
        description: '10% retainage withholdings extending payment cycles 90-180 days past substantial completion.'
      }
    ],
    solutions: [
      {
        title: 'Percentage-of-Completion (ASC 606) WIP Audits',
        description: 'Rigorous monthly WIP reviews reconciling estimated vs. actual costs to complete.'
      },
      {
        title: 'Surety Bond Readiness Program',
        description: 'Balance sheet restructuring to maximize working capital and expand single/aggregate bond limits.'
      },
      {
        title: 'Joint Venture & Consortium Structuring',
        description: 'Financial architectures for multi-contractor joint bids on major infrastructure projects.'
      }
    ],
    stats: [
      { value: '$1.2B+', label: 'Contract Value Monitored on WIP' },
      { value: '42%', label: 'Average Surety Bonding Limit Increase' },
      { value: '65+', label: 'General & Specialty Contractors Advised' }
    ],
    relevantServiceSlugs: ['accounting', 'financial-management', 'risk-management'],
    insights: [
      {
        title: 'Mastering the WIP Schedule for Surety Underwriters',
        description: 'How clean over/under billing records unlock higher bonding capacity.'
      },
      {
        title: 'Managing Cash Retainage in Commercial Subcontracts',
        description: 'Strategies to accelerate final retainage releases and minimize receivable lag.'
      }
    ],
    faqs: [
      {
        question: 'How do you help contractors increase bonding capacity?',
        answer: 'We clean up balance sheet classifications, eliminate non-allowable assets, and present audited financial statements that surety underwriters trust.'
      },
      {
        question: 'Can you integrate with Procore, Sage 300 CRE, or Viewpoint?',
        answer: 'Yes, our construction accounting specialists integrate ERP job cost modules directly with general ledger reporting.'
      }
    ]
  },
  {
    id: '8',
    slug: 'energy',
    name: 'Energy & Renewables',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Project finance modeling, Investment Tax Credits (ITC/PTC), power purchase agreement (PPA) valuation, and clean tech advisory.',
    overview: 'The global energy transition is unleashing historic capital deployment into solar, wind, storage, and grid modernization. Finora guides clean energy developers, independent power producers (IPPs), and utilities through project finance modeling, tax equity partnerships, and Inflation Reduction Act (IRA) credit monetization.',
    challenges: [
      {
        title: 'Complex Tax Equity Structuring',
        description: 'Pairing developers with institutional tax equity investors under Section 48/45 IRA provisions.'
      },
      {
        title: 'Interconnection & Permitting Delay Costs',
        description: 'Multi-year grid queue delays creating development capital drag and carry costs.'
      },
      {
        title: 'Power Price & Offtaker Credit Risk',
        description: 'Evaluating long-term PPA off-taker stability and merchant electricity price exposure.'
      }
    ],
    solutions: [
      {
        title: 'IRA Tax Credit Transferability & Monetization',
        description: 'Facilitating direct transfer sales of Investment Tax Credits (ITC) and Production Tax Credits (PTC).'
      },
      {
        title: 'Project Finance Bankability Models',
        description: 'Dynamic debt-sizing models matching DSCR criteria for commercial lenders and green banks.'
      },
      {
        title: 'Decommissioning & Environmental Reserves',
        description: 'Financial structuring for long-term site restoration covenants and surety guarantees.'
      }
    ],
    stats: [
      { value: '2.4 GW', label: 'Renewable Capacity Advised' },
      { value: '$620M', label: 'Clean Energy Tax Credits Monetized' },
      { value: '30+', label: 'Utility-Scale Projects Financed' }
    ],
    relevantServiceSlugs: ['corporate-finance', 'tax-advisory', 'investment-advisory'],
    insights: [
      {
        title: 'Navigating IRA Tax Credit Transfer Markets',
        description: 'How corporate buyers are purchasing discounted clean energy tax credits to offset tax liabilities.'
      },
      {
        title: 'Bankable Battery Energy Storage (BESS) Modeling',
        description: 'De-risking battery arbitrage and ancillary grid service revenue streams.'
      }
    ],
    faqs: [
      {
        question: 'What is your experience with the Inflation Reduction Act (IRA)?',
        answer: 'We have structured over $600M in IRA tax credit transfers, domestic content bonuses, and energy community adders.'
      },
      {
        question: 'Do you work with distributed generation rooftop solar developers?',
        answer: 'Yes, we model both commercial & industrial (C&I) rooftop portfolios and utility-scale solar/storage projects.'
      }
    ]
  },
  {
    id: '9',
    slug: 'telecommunications',
    name: 'Telecommunications & Media',
    iconName: 'Radio',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Fiber rollout CapEx management, spectrum auction valuation, subscriber churn analysis, and broadband grant compliance.',
    overview: 'Telecommunications infrastructure requires intensive upfront capital deployment followed by long-tail subscriber cash flows. Finora provides fiber broadband providers, tower operators, and digital media enterprises with infrastructure CapEx planning, ARPU optimization, and federal broadband grant accounting.',
    challenges: [
      {
        title: 'Massive Infrastructure CapEx Rollouts',
        description: 'Managing multi-year fiber-to-the-home (FTTH) capital programs across municipal permits.'
      },
      {
        title: 'Subscriber Acquisition & ARPU Pressure',
        description: 'Balancing promotional discounting against churn and average revenue per user (ARPU).'
      },
      {
        title: 'Federal Broadband Grant Audits (BEAD)',
        description: 'Adhering to strict federal procurement, Davis-Bacon prevailing wages, and clawback guidelines.'
      }
    ],
    solutions: [
      {
        title: 'FTTH Passings & Take-Rate Financial Models',
        description: 'Cohort modeling forecasting revenue based on density passings and penetration timelines.'
      },
      {
        title: 'BEAD & USAC Grant Compliance Engine',
        description: 'Audit-ready grant accounting tracking allowable costs and matching fund requirements.'
      },
      {
        title: 'Telecom Tower Asset Carve-Outs',
        description: 'Advising carriers on monetizing passive tower and data center assets to infrastructure funds.'
      }
    ],
    stats: [
      { value: '1.2M+', label: 'Fiber Passings Financially Modeled' },
      { value: '$410M', label: 'Broadband Expansion Grants Managed' },
      { value: '19.5%', label: 'Average Subscriber Lifetime Value Gain' }
    ],
    relevantServiceSlugs: ['corporate-finance', 'financial-planning', 'compliance-advisory'],
    insights: [
      {
        title: 'Winning and Managing Federal BEAD Grants',
        description: 'Ensuring financial reporting compliance to prevent grant fund delays.'
      },
      {
        title: 'The Financial Architecture of Open-Access Fiber',
        description: 'Evaluating wholesale vs. retail broadband delivery economics.'
      }
    ],
    faqs: [
      {
        question: 'Do you help rural broadband providers with USDA ReConnect and BEAD grants?',
        answer: 'Yes, we manage application financial pro-formas, environmental cost tracking, and federal quarterly reporting.'
      },
      {
        question: 'Can you assist with cell tower lease valuations and securitizations?',
        answer: 'We evaluate ground lease portfolios and structure asset-backed securities for telecom real estate assets.'
      }
    ]
  },
  {
    id: '10',
    slug: 'retail',
    name: 'Retail & Consumer Goods',
    iconName: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Omnichannel inventory rationalization, contribution margin auditing, lease accounting, and DTC scaling advisory.',
    overview: 'Modern retail demands mastery of omnichannel fulfillment, variable customer acquisition economics, and agile supply chain logistics. Finora helps digital-native brands and physical retail chains optimize four-wall profitability, manage inventory turn rates, and comply with ASC 842 lease standards.',
    challenges: [
      {
        title: 'Omnichannel Margin Compression',
        description: 'Balancing marketplace fees, returns logistics, and rising digital ad costs against gross margins.'
      },
      {
        title: 'Inventory Seasonality & Markdown Erosion',
        description: 'Excess stock forcing deep discounts that wipe out seasonal profitability.'
      },
      {
        title: 'ASC 842 Retail Lease Liabilities',
        description: 'Capitalizing complex store footprint leases on the balance sheet without breaching debt covenants.'
      }
    ],
    solutions: [
      {
        title: 'True Contribution Margin Accounting',
        description: 'Deducting merchant processing, fulfillment, packaging, and return costs to calculate exact net margin per SKU.'
      },
      {
        title: 'Open-to-Buy (OTB) Inventory Forecasting',
        description: 'Dynamic procurement models preventing stock-outs while maximizing cash turn velocity.'
      },
      {
        title: 'Store Footprint Rationalization',
        description: 'Four-wall store EBITDA modeling guiding lease renewals, renegotiations, and relocations.'
      }
    ],
    stats: [
      { value: '250+', label: 'Retail & Consumer Brands Advised' },
      { value: '28%', label: 'Inventory Holding Cost Reduction' },
      { value: '$520M', label: 'Consumer Goods Revenue Analyzed' }
    ],
    relevantServiceSlugs: ['financial-management', 'accounting', 'business-advisory'],
    insights: [
      {
        title: 'Optimizing Contribution Margin in Omnichannel Retail',
        description: 'Why revenue is vanity and SKU-level contribution margin is sanity.'
      },
      {
        title: 'Navigating Multi-State Sales Tax Nexus for E-Commerce',
        description: 'Complying with South Dakota v. Wayfair thresholds without operational friction.'
      }
    ],
    faqs: [
      {
        question: 'Do you help direct-to-consumer (DTC) brands transition into wholesale retail?',
        answer: 'Yes, we model wholesale chargebacks, slotting fees, payment terms, and working capital buffers needed for big-box retail launches.'
      },
      {
        question: 'How do you handle multi-state economic nexus sales tax compliance?',
        answer: 'We integrate automated sales tax calculation engines (Avalara, TaxJar) with your e-commerce platform and manage multi-state returns.'
      }
    ]
  },
  {
    id: '11',
    slug: 'professional-services',
    name: 'Professional Services',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Utilization rate tracking, partner equity compensation, realization rate optimization, and firm succession planning.',
    overview: 'Law firms, architecture studios, engineering consultancies, and marketing agencies run on human intellectual capital. Finora helps professional service partnerships optimize billable realization rates, structure tax-efficient partner draws, and execute seamless equity succession plans.',
    challenges: [
      {
        title: 'Billable Utilization & Realization Gaps',
        description: 'Time write-downs and unbilled work-in-progress eroding gross consultancy profitability.'
      },
      {
        title: 'Partner Compensation & Equity Disputes',
        description: 'Structuring transparent profit-sharing mechanisms that reward both origination and execution.'
      },
      {
        title: 'Firm Succession & Partner Buy-Ins',
        description: 'Structuring affordable equity buy-in plans for rising partners without destabilizing working capital.'
      }
    ],
    solutions: [
      {
        title: 'Realization & Billability Analytics',
        description: 'Granular dashboards correlating consultant hourly cost with realized client billing rates.'
      },
      {
        title: 'Partner Equity & Compensation Models',
        description: 'Designing eat-what-you-kill vs. lockstep profit allocation architectures.'
      },
      {
        title: 'Merger & Practice Group Acquisition Advisory',
        description: 'Financial due diligence for lateral partner group acquisitions and firm mergers.'
      }
    ],
    stats: [
      { value: '110+', label: 'Professional Service Firms Advised' },
      { value: '88.5%', label: 'Average Billable Realization Rate' },
      { value: '$160M', label: 'Partner Equity Transitions Facilitated' }
    ],
    relevantServiceSlugs: ['financial-management', 'tax-advisory', 'strategic-consulting'],
    insights: [
      {
        title: 'Structuring Modern Partner Compensation Formulas',
        description: 'Aligning partner incentives with firm profitability and long-term client retention.'
      },
      {
        title: 'Fixing the Realization Leak in Professional Services',
        description: 'Eliminating fee discounting habits and streamlining scope change orders.'
      }
    ],
    faqs: [
      {
        question: 'Do you work with legal, architectural, and consulting partnerships?',
        answer: 'Yes, we advise boutique and mid-sized professional practices across legal, accounting, engineering, and digital marketing sectors.'
      },
      {
        question: 'Can you help us transition from hourly billing to value-based fixed pricing?',
        answer: 'We build standardized scoping calculators and risk-adjusted pricing frameworks for value-based client engagements.'
      }
    ]
  },
  {
    id: '12',
    slug: 'non-profit',
    name: 'Non-Profit & Foundations',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Fund accounting, Form 990 compliance, restricted endowment stewardship, and federal grant audits (Single Audit / Uniform Guidance).',
    overview: 'Mission-driven organizations and endowments carry a public trust that demands total financial transparency and strict donor stewardship. Finora assists 501(c)(3) charities, private foundations, and educational institutions with restricted fund accounting, Form 990 preparation, and Uniform Guidance grant audits.',
    challenges: [
      {
        title: 'Restricted Donor Fund Governance',
        description: 'Strictly segregating donor-restricted endowments from general operating reserves.'
      },
      {
        title: 'Federal Uniform Guidance (Single Audit) Compliance',
        description: 'Passing rigorous audits on federal awards exceeding $750k in expenditure.'
      },
      {
        title: 'Form 990 Public Scrutiny',
        description: 'Preserving top-tier charity watchdog ratings (GuideStar, Charity Navigator) through clean expense categorization.'
      }
    ],
    solutions: [
      {
        title: 'Automated Fund Accounting Systems',
        description: 'Dedicated multi-ledger configurations ensuring complete donor restriction compliance.'
      },
      {
        title: 'Single Audit (Uniform Guidance) Readiness',
        description: 'Establishing procurement controls and payroll time-and-effort documentation for federal grants.'
      },
      {
        title: 'Endowment Investment Policy (IPS) Design',
        description: 'Aligning endowment asset allocations with long-term spending rate requirements.'
      }
    ],
    stats: [
      { value: '$480M+', label: 'Endowment & Grant Capital Governed' },
      { value: '100%', label: 'Single Audit (Uniform Guidance) Clean Rate' },
      { value: '75+', label: 'Foundations & Non-Profits Supported' }
    ],
    relevantServiceSlugs: ['accounting', 'compliance-advisory', 'investment-advisory'],
    insights: [
      {
        title: 'Mastering Functional Expense Allocation on Form 990',
        description: 'Accurately demonstrating program impact while minimizing perceived overhead ratios.'
      },
      {
        title: 'Endowment Spending Policies in Volatile Markets',
        description: 'Balancing intergenerational equity with annual operational grant commitments.'
      }
    ],
    faqs: [
      {
        question: 'Do you help organizations prepare for their annual Single Audit?',
        answer: 'Yes, we prepare the Schedule of Expenditures of Federal Awards (SEFA) and ensure compliance with 2 CFR 200 Uniform Guidance.'
      },
      {
        question: 'Can you assist the Board Audit & Finance Committee?',
        answer: 'We prepare executive board packages, present financial statements, and train committee members on fiduciary obligations.'
      }
    ]
  }
];
