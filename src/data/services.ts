import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: '1',
    slug: 'financial-management',
    number: '01',
    title: 'Financial Management',
    category: 'Corporate Finance',
    shortDescription: 'Helping businesses improve financial visibility, cash flow planning, performance metrics, and capital allocation.',
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    overview: 'Effective financial management is the backbone of sustainable business growth. Finora partners with leadership teams to institute rigorous financial controls, dynamic forecasting models, and actionable reporting systems that turn complex numbers into decisive strategic advantages.',
    whatWeDo: [
      'Comprehensive financial statement diagnostic and operational review',
      'Multi-scenario rolling cash flow forecasting and liquidity management',
      'Working capital optimization and balance sheet restructuring',
      'Custom KPI dashboards and executive management reporting',
      'Cost-center profitability analysis and expense rationalization'
    ],
    benefits: [
      {
        title: '360° Financial Clarity',
        description: 'Eliminate blind spots with real-time reporting architectures and deep operational performance tracking.'
      },
      {
        title: 'Disciplined Capital Allocation',
        description: 'Prioritize high-yield capital expenditures and optimize debt-to-equity ratios for sustained profitability.'
      },
      {
        title: 'Agile Strategic Decision-Making',
        description: 'Equip the C-suite with forward-looking predictive models to capitalize on emerging market opportunities.'
      }
    ],
    keyFeatures: [
      {
        title: 'Rolling Cash Flow Engine',
        description: '13-week and 12-month dynamic projection tools with built-in sensitivity tests.',
        iconName: 'Activity'
      },
      {
        title: 'Executive Financial Intelligence',
        description: 'Consolidated boardroom decks that translate ledger mechanics into executive growth levers.',
        iconName: 'PieChart'
      },
      {
        title: 'Working Capital Diagnostics',
        description: 'Continuous monitoring of Days Sales Outstanding (DSO) and Inventory Turnover benchmarks.',
        iconName: 'TrendingUp'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'We audit your current accounting frameworks, chart of accounts, and financial velocity.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Our quantitative analysts isolate margin leakage, overhead anomalies, and cash traps.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'We design bespoke financial architecture, performance dashboards, and capital controls.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Seamless integration with your finance teams, ERPs, and management rhythms.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Ongoing quarterly reviews, variance audits, and strategic capital reallocation.'
      }
    ],
    faqs: [
      {
        question: 'How quickly can we see improvements in financial visibility?',
        answer: 'Most clients experience immediate clarity within the first 30 days following the delivery of our initial diagnostic report and real-time dashboard setup.'
      },
      {
        question: 'Can Finora integrate with our existing ERP or accounting software?',
        answer: 'Yes, our teams work seamlessly with NetSuite, SAP, Microsoft Dynamics, QuickBooks Enterprise, Xero, and custom data warehouses.'
      },
      {
        question: 'Is this service geared toward mid-market or enterprise companies?',
        answer: 'We serve growing scale-ups ($5M-$50M ARR) as well as established mid-market enterprises navigating expansion, debt refinancing, or restructuring.'
      }
    ],
    relatedServiceSlugs: ['tax-advisory', 'business-advisory', 'risk-management']
  },
  {
    id: '2',
    slug: 'tax-advisory',
    number: '02',
    title: 'Tax Advisory',
    category: 'Tax & Compliance',
    shortDescription: 'Practical tax strategies designed to support compliant, tax-efficient operations and cross-border structuring.',
    heroImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop',
    overview: 'Finora provides proactive corporate tax planning and advisory services designed to minimize fiscal liability while strictly adhering to evolving global compliance standards. From R&D tax credit monetization to multi-jurisdictional supply chain restructuring, we safeguard your enterprise value.',
    whatWeDo: [
      'Strategic corporate income tax planning and compliance reviews',
      'Cross-border international tax structuring and transfer pricing documentation',
      'R&D tax credits, innovation incentives, and government grant advisory',
      'Transaction tax due diligence for mergers, acquisitions, and asset sales',
      'Indirect tax (VAT, GST, Sales Tax) optimization and dispute resolution'
    ],
    benefits: [
      {
        title: 'Proactive Fiscal Efficiency',
        description: 'Capture lawful credits and deductions while structuring operations for optimal effective tax rates.'
      },
      {
        title: 'Global Regulatory Certainty',
        description: 'Ensure cross-border compliance with OECD BEPS standards and bilateral tax treaty protocols.'
      },
      {
        title: 'Audit Readiness & Defense',
        description: 'Maintain ironclad documentation and defense strategies against statutory audits.'
      }
    ],
    keyFeatures: [
      {
        title: 'Transfer Pricing Architectures',
        description: 'Benchmarked economic studies matching international arm’s length principles.',
        iconName: 'Globe'
      },
      {
        title: 'M&A Tax Structuring',
        description: 'Asset vs. stock deal modeling, step-up valuations, and Section 338(h)(10) elections.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Incentive Capture Systems',
        description: 'Automated qualification pipelines for technology and manufacturing R&D credits.',
        iconName: 'Award'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Comprehensive review of multi-entity tax filings, nexus exposure, and past returns.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Quantification of tax leakage, unused tax credits, and statutory risk vulnerabilities.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Formulation of tax-advantaged holding structures and transfer pricing policies.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Execution of elections, entity reorganizations, and compliance calendar integration.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Continuous annual recalibration based on legislative changes and corporate milestones.'
      }
    ],
    faqs: [
      {
        question: 'How do you handle multi-state and international tax jurisdictions?',
        answer: 'Our global team has dedicated tax specialists across North America, Europe, the Middle East, and Asia, ensuring unified compliance across all operating footprints.'
      },
      {
        question: 'What is the ROI typically generated from an R&D tax credit study?',
        answer: 'Eligible technology and manufacturing clients often uncover hundreds of thousands in dollar-for-dollar tax credits that directly offset payroll or corporate income taxes.'
      },
      {
        question: 'Do you represent clients during tax audits?',
        answer: 'Yes, our certified tax advisors represent client interests from initial inquiry notices through formal appellate proceedings.'
      }
    ],
    relatedServiceSlugs: ['financial-management', 'accounting', 'corporate-finance']
  },
  {
    id: '3',
    slug: 'investment-advisory',
    number: '03',
    title: 'Investment Advisory',
    category: 'Wealth & Capital',
    shortDescription: 'Institutional-grade guidance for making informed investment, capital allocation, and asset preservation decisions.',
    heroImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop',
    overview: 'In an era of macro volatility, Finora delivers independent, fiduciary-driven investment advisory. We construct resilient portfolio allocations, evaluate private market transactions, and guide family offices and corporate treasuries toward long-term capital preservation and alpha generation.',
    whatWeDo: [
      'Strategic Asset Allocation (SAA) and tactical portfolio management',
      'Corporate treasury yield optimization and liquidity management',
      'Private equity, venture capital, and alternative asset due diligence',
      'ESG and impact investing integration without compromising return targets',
      'Hedging strategies for foreign exchange (FX) and interest rate risk'
    ],
    benefits: [
      {
        title: 'Risk-Adjusted Alpha',
        description: 'Proprietary quantitative modeling that balances capital appreciation with downside protection.'
      },
      {
        title: 'Institutional Access',
        description: 'Direct entry into top-tier private debt, real asset syndicates, and secondary market deals.'
      },
      {
        title: 'Unconflicted Fiduciary Counsel',
        description: 'Zero third-party product commissions—our guidance is strictly aligned with your success.'
      }
    ],
    keyFeatures: [
      {
        title: 'Monte Carlo Stress Testing',
        description: '10,000+ simulation runs across historical shocks, stagflation, and liquidity crunches.',
        iconName: 'BarChart3'
      },
      {
        title: 'Alternative Asset Screening',
        description: 'Deep-dive qualitative and forensic accounting checks on fund managers and GP track records.',
        iconName: 'Search'
      },
      {
        title: 'Yield Curve Positioning',
        description: 'Dynamic duration and credit quality management for corporate cash reserves.',
        iconName: 'DollarSign'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Define return mandates, liquidity covenants, risk tolerance, and time horizons.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Deconstruct existing portfolio correlations, fee structures, and factor exposures.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Formulate a customized Investment Policy Statement (IPS) and target allocation model.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Staged capital deployment across public equities, fixed income, and private markets.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Disciplined rebalancing, tax-loss harvesting, and quarterly performance attribution.'
      }
    ],
    faqs: [
      {
        question: 'Who are your typical investment advisory clients?',
        answer: 'We advise family offices, corporate balance sheets, high-net-worth business owners, endowment committees, and institutional foundations.'
      },
      {
        question: 'Do you take custody of client funds?',
        answer: 'No. All client assets are held at premier third-party institutional custodians (such as Charles Schwab, Fidelity, or BNY Mellon) in the client’s name.'
      },
      {
        question: 'How do you structure your fees?',
        answer: 'We utilize a transparent tiered percentage-of-assets or fixed retainer model with no hidden transaction spreads.'
      }
    ],
    relatedServiceSlugs: ['financial-management', 'risk-management', 'corporate-finance']
  },
  {
    id: '4',
    slug: 'business-advisory',
    number: '04',
    title: 'Business Advisory',
    category: 'Strategy & Growth',
    shortDescription: 'Strategic financial guidance for businesses navigating growth, market entry, restructuring, and capital raises.',
    heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    overview: 'Finora acts as your external Chief Strategy and Finance Officer. We help ambitious founders and leadership teams scale effectively, refine unit economics, negotiate favorable commercial terms, and architect robust corporate roadmaps that attract institutional capital.',
    whatWeDo: [
      'Growth stage capital readiness and pitch deck financial modeling',
      'Market expansion feasibility studies and international localization analysis',
      'Commercial contract review and pricing strategy optimization',
      'Turnaround consulting, debt workout, and distressed asset restructuring',
      'Board advisory, governance setup, and executive mentoring'
    ],
    benefits: [
      {
        title: 'Scalable Operational Unit Economics',
        description: 'Optimize Customer Acquisition Cost (CAC) to Lifetime Value (LTV) ratios for predictable scale.'
      },
      {
        title: 'Fundraising Credibility',
        description: 'Present institutional-grade financial projections that instill investor confidence.'
      },
      {
        title: 'De-risked Execution',
        description: 'Identify commercial pitfalls before deploying expensive headcount or market initiatives.'
      }
    ],
    keyFeatures: [
      {
        title: 'Strategic Roadmap 360',
        description: 'Quarter-by-quarter milestone mapping linking strategic vision to balance sheet realities.',
        iconName: 'Compass'
      },
      {
        title: 'Capital Raising Playbook',
        description: 'Data room staging, cap table simulation, and term sheet benchmarking.',
        iconName: 'Layers'
      },
      {
        title: 'Unit Economics Blueprint',
        description: 'Granular cohort analysis identifying highest-margin product lines and client segments.',
        iconName: 'Zap'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Understand competitive positioning, executive ambitions, and operational roadblocks.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Benchmark performance indicators against industry top-quartile performers.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Build strategic growth blueprints with stress-tested financial dependencies.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Facilitate weekly executive check-ins, OKR alignment, and partner negotiations.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Iterative feedback loops to refine sales velocity, gross margins, and enterprise valuation.'
      }
    ],
    faqs: [
      {
        question: 'Can you assist us with Series A/B fundraising?',
        answer: 'Yes, we prepare financial models, audit-ready data rooms, and assist founders during investor diligence Q&A.'
      },
      {
        question: 'What is the duration of an advisory engagement?',
        answer: 'Engagements range from 3-month focused transformation projects to multi-year fractional CFO/advisory retainers.'
      },
      {
        question: 'Do you help with crisis and turnaround situations?',
        answer: 'Yes, we have specialized turnaround experts who rapidly re-establish cash stability and renegotiate debt covenants.'
      }
    ],
    relatedServiceSlugs: ['financial-management', 'm-and-a-advisory', 'strategic-consulting']
  },
  {
    id: '5',
    slug: 'accounting',
    number: '05',
    title: 'Accounting & Reporting',
    category: 'Core Accounting',
    shortDescription: 'Reliable financial records, GAAP/IFRS compliant financial reporting, and end-to-end ledger governance.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    overview: 'Accurate accounting is the bedrock of business integrity. Finora provides modern, technology-enabled bookkeeping, month-end closing, and GAAP/IFRS financial reporting that delivers unquestionable accuracy to boards, investors, and regulators.',
    whatWeDo: [
      'Full-cycle accrual and cash-basis general ledger maintenance',
      'Timely month-end and year-end closing processes (Fast-Close 5-Day cycle)',
      'Multi-currency consolidation and intercompany reconciliation',
      'Preparation of GAAP / IFRS financial statements with notes',
      'Audit preparation and liaison with external Big 4 / national accounting firms'
    ],
    benefits: [
      {
        title: 'Audit-Proof Financial Statements',
        description: 'Flawless balance sheet reconciliations that breeze through external auditor scrutiny.'
      },
      {
        title: 'Speed of Information',
        description: 'Close your books within 5 business days of month-end for rapid executive decision-making.'
      },
      {
        title: 'Overhead Efficiency',
        description: 'Gain a complete team of CPAs and controllers at a fraction of in-house recruitment costs.'
      }
    ],
    keyFeatures: [
      {
        title: 'Automated Reconciliation Hub',
        description: 'Bank feeds, payment gateways, and AP/AR automation with 99.9% matching accuracy.',
        iconName: 'CheckCircle'
      },
      {
        title: 'Multi-Entity Consolidation',
        description: 'Effortless roll-up of parent, subsidiary, and joint-venture financials across currencies.',
        iconName: 'FolderTree'
      },
      {
        title: 'Audit Readiness Workspace',
        description: 'Pre-packaged workpapers, supporting schedules, and trail documentation.',
        iconName: 'FileText'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Review existing chart of accounts, closing checklists, and ERP integrations.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Identify ledger discrepancies, unearned revenue backlogs, and reconciliation bottlenecks.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Establish standardized standard operating procedures (SOPs) and monthly close timetables.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Deploy automated reconciliation tools and transition day-to-day transaction flows.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Deliver executive review packages with variance analysis by the 5th of each month.'
      }
    ],
    faqs: [
      {
        question: 'Do you handle backlog cleanup for messy books?',
        answer: 'Yes, our historical cleanup team can reconstruct and reconcile prior years of bookkeeping swiftly and accurately.'
      },
      {
        question: 'Are your accountants certified CPAs?',
        answer: 'All client accounts are supervised by certified CPAs and senior controllers with deep sector experience.'
      },
      {
        question: 'Can you assist during our annual statutory audit?',
        answer: 'We prepare the complete PBC (Provided by Client) list and work directly with your auditors to resolve inquiries quickly.'
      }
    ],
    relatedServiceSlugs: ['payroll-services', 'tax-advisory', 'compliance-advisory']
  },
  {
    id: '6',
    slug: 'payroll-services',
    number: '06',
    title: 'Payroll Services',
    category: 'Core Accounting',
    shortDescription: 'Seamless multi-state & international payroll management, tax withholdings, and employee benefits administration.',
    heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    overview: 'Modern workforces are increasingly distributed across jurisdictions. Finora takes the pain out of multi-state and global payroll, ensuring punctual disbursements, precise statutory withholdings, and seamless integration with your accounting ledger.',
    whatWeDo: [
      'Multi-state, salaried, hourly, and contractor compensation processing',
      'Federal, state, and local payroll tax filings and annual W-2 / 1099 distribution',
      'Executive incentive compensation, stock option, and equity grant tracking',
      'Health insurance, 401(k), pension, and voluntary deduction administration',
      'Global Employer of Record (EOR) and contractor compliance advisory'
    ],
    benefits: [
      {
        title: '100% On-Time Precision',
        description: 'Never miss a pay cycle, bonus run, or regulatory filing deadline.'
      },
      {
        title: 'Zero Compliance Penalties',
        description: 'Eliminate costly tax withholding errors across multiple state and municipal jurisdictions.'
      },
      {
        title: 'Direct Ledger Sync',
        description: 'Payroll journal entries automatically map to department cost centers without manual spreadsheets.'
      }
    ],
    keyFeatures: [
      {
        title: 'Multi-Jurisdiction Tax Engine',
        description: 'Automatic calculation of local taxes, unemployment insurance, and statutory disability funds.',
        iconName: 'CreditCard'
      },
      {
        title: 'Self-Service Employee Portal',
        description: 'Digital onboarding, paystub downloads, tax document access, and direct deposit changes.',
        iconName: 'Users'
      },
      {
        title: 'Executive Equity Integration',
        description: 'Accurate tax withholding on RSU vestings, ISO/NSO exercises, and profit distributions.',
        iconName: 'Award'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Audit current payroll providers, worker classifications, and tax registrations.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Identify nexus compliance gaps, wage compliance risks, and misclassified contractors.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Configure automated pay schedules, deduction rules, and ledger sync mappings.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Parallel run verification to guarantee accurate gross-to-net calculations before live cutover.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Dedicated account manager handling queries, quarterly reconciliations, and annual filings.'
      }
    ],
    faqs: [
      {
        question: 'Can you handle international employees and remote contractors?',
        answer: 'Yes, we manage cross-border contractor payouts and partner with leading EOR platforms for global full-time employees.'
      },
      {
        question: 'How do you handle worker classification (W-2 vs 1099)?',
        answer: 'We conduct rigorous classification assessments to protect your organization from Department of Labor and IRS misclassification penalties.'
      },
      {
        question: 'What happens if there is a tax filing discrepancy?',
        answer: 'Finora assumes full accountability for any filings we execute, resolving discrepancies directly with tax authorities.'
      }
    ],
    relatedServiceSlugs: ['accounting', 'tax-advisory', 'compliance-advisory']
  },
  {
    id: '7',
    slug: 'corporate-finance',
    number: '07',
    title: 'Corporate Finance',
    category: 'Corporate Finance',
    shortDescription: 'Capital structuring, debt syndication, equity valuation, and balance sheet optimization for large transactions.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    overview: 'Finora advises corporations on strategic capital structure decisions, securing senior debt, mezzanine financing, and equity capital on optimal commercial terms to fuel aggressive expansion programs and strategic acquisitions.',
    whatWeDo: [
      'Debt capacity modeling and covenant negotiation with commercial lenders',
      'Equity recapitalizations and dividend recap financing',
      'Valuation opinions for corporate transactions, 409A valuations, and disputes',
      'Structured trade finance and asset-backed lending solutions',
      'Treasury risk management and liquidity optimization'
    ],
    benefits: [
      {
        title: 'Lower Weighted Cost of Capital (WACC)',
        description: 'Optimize the debt/equity mix to reduce overall financing expenses.'
      },
      {
        title: 'Lender Network Access',
        description: 'Direct relationships with over 80+ institutional banks, private credit funds, and family offices.'
      },
      {
        title: 'Defensible Valuations',
        description: 'Certified appraisal models compliant with AICPA and IRS valuation guidelines.'
      }
    ],
    keyFeatures: [
      {
        title: 'Dynamic Debt Model',
        description: 'Interactive sensitivity analysis on DSCR, leverage ratios, and interest rate spikes.',
        iconName: 'TrendingUp'
      },
      {
        title: '409A Valuation Engine',
        description: 'Black-Scholes OPM and Backsolve methods vetted by Big 4 audit standards.',
        iconName: 'FileCheck'
      },
      {
        title: 'Capital Stack Structuring',
        description: 'Optimized tranche layering minimizing equity dilution for existing shareholders.',
        iconName: 'Layers'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Assess capital requirements, cash generation capacity, and historical financial performance.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Benchmark current debt terms, collateral coverage, and enterprise valuation parameters.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Design the optimal funding structure and author institutional Information Memorandums.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Drive competitive lender/investor auctions and lead term sheet negotiations.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Ensure smooth financial close, funds disbursement, and ongoing covenant tracking.'
      }
    ],
    faqs: [
      {
        question: 'What types of debt financing can Finora help secure?',
        answer: 'We assist with revolving credit facilities, term loans, asset-based lending (ABL), mezzanine debt, unitranche facilities, and equipment financing.'
      },
      {
        question: 'How long does a debt placement process usually take?',
        answer: 'Typically between 6 to 12 weeks from initial memo preparation to final loan documentation and disbursement.'
      },
      {
        question: 'Do you provide formal valuation reports for tax or litigation purposes?',
        answer: 'Yes, our certified valuation analysts (CVA) produce comprehensive, audit-defensible valuation opinions.'
      }
    ],
    relatedServiceSlugs: ['m-and-a-advisory', 'financial-management', 'investment-advisory']
  },
  {
    id: '8',
    slug: 'risk-management',
    number: '08',
    title: 'Risk Management',
    category: 'Governance & Risk',
    shortDescription: 'Identifying operational and financial vulnerabilities, stress-testing liquidity, and hedging enterprise risks.',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    overview: 'Unforeseen macro shocks and operational weaknesses can quickly erode years of value. Finora conducts forensic risk audits, sets up enterprise risk management (ERM) frameworks, and structures hedging programs against FX, commodity, and interest rate volatility.',
    whatWeDo: [
      'Enterprise Risk Management (ERM) design and framework implementation',
      'Financial risk stress testing and liquidity vulnerability assessments',
      'Foreign exchange (FX) and interest rate derivative hedging strategies',
      'Internal controls review (SOX 404 readiness and fraud prevention audits)',
      'Supply chain counterparty financial health screening'
    ],
    benefits: [
      {
        title: 'Resilience in Volatility',
        description: 'Shield cash flows and operating margins from currency fluctuations and rate hikes.'
      },
      {
        title: 'Fraud & Leakage Protection',
        description: 'Implement rigorous dual-control authorizations and forensic accounting safeguards.'
      },
      {
        title: 'Boardroom Governance Peace of Mind',
        description: 'Provide audit committees with clear heat maps and quantitative risk exposure metrics.'
      }
    ],
    keyFeatures: [
      {
        title: 'ERM Heatmap Matrix',
        description: 'Interactive visualization ranking likelihood and potential dollar impact across operational vectors.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'Derivative Hedging Model',
        description: 'Bespoke forward contracts, options collars, and swaps modeling for treasury protection.',
        iconName: 'Lock'
      },
      {
        title: 'Internal Controls Checklist',
        description: '120-point diagnostic based on the COSO Internal Control Integrated Framework.',
        iconName: 'ClipboardCheck'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Map all operational, credit, liquidity, and market risk touchpoints across the business.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Quantify Maximum Tolerable Loss (MTL) and Value at Risk (VaR) under adverse scenarios.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Formulate mitigation policies, hedging mandates, and revised internal delegation matrices.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Deploy real-time control checkpoints and onboard institutional hedging counterparties.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Regular risk committee reporting, stress test refreshes, and policy updates.'
      }
    ],
    faqs: [
      {
        question: 'How do you determine if FX hedging is needed for our business?',
        answer: 'We analyze your currency cash flows, supplier contracts, and pricing power to calculate net exposed risk before designing tailored hedging ratios.'
      },
      {
        question: 'Can you help prepare our company for SOX compliance?',
        answer: 'Yes, we design and document internal control systems (ITGC and business cycles) for pre-IPO and newly public organizations.'
      },
      {
        question: 'Do you conduct internal fraud investigations?',
        answer: 'Our forensic accounting team conducts discrete reviews to detect accounting anomalies and strengthen anti-fraud protocols.'
      }
    ],
    relatedServiceSlugs: ['compliance-advisory', 'financial-management', 'corporate-finance']
  },
  {
    id: '9',
    slug: 'financial-planning',
    number: '09',
    title: 'Financial Planning & FP&A',
    category: 'Corporate Finance',
    shortDescription: 'Multi-year budget architecture, operational forecasting, and capital roadmaps aligning resources with growth.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    overview: 'Finora builds forward-looking Financial Planning & Analysis (FP&A) engines. We transform fragmented departmental spreadsheets into integrated, dynamic 3-statement models that enable agile scenario modeling and proactive budget governance.',
    whatWeDo: [
      'Annual operating budget (AOP) design and departmental rollup',
      'Dynamic 3-statement financial modeling (P&L, Balance Sheet, Cash Flow)',
      'Headcount planning and compensation modeling with tax burdens',
      'Capital expenditure (CapEx) payback and IRR modeling',
      'Monthly budget vs. actual (BvA) variance reporting with actionable commentary'
    ],
    benefits: [
      {
        title: 'Predictable Resource Planning',
        description: 'Align hiring plans and marketing spend directly with revenue velocity.'
      },
      {
        title: 'Real-Time Scenario Testing',
        description: 'Model the balance sheet impact of price hikes, hiring freezes, or new product launches in seconds.'
      },
      {
        title: 'Accountability Across Departments',
        description: 'Empower division leaders with customized BvA dashboards and margin targets.'
      }
    ],
    keyFeatures: [
      {
        title: 'Integrated 3-Statement Model',
        description: 'Fully linked financial logic ensuring dynamic balance sheet and cash flow integrity.',
        iconName: 'LayoutGrid'
      },
      {
        title: 'Scenario Switchboard',
        description: 'Toggle instantly between Base, Bull, and Bear cases to stress-test runway and covenants.',
        iconName: 'Sliders'
      },
      {
        title: 'Departmental BvA Engine',
        description: 'Automated variance thresholds highlighting expense overruns before month-end.',
        iconName: 'AlertCircle'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Gather historical financials, sales funnels, compensation data, and contract terms.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Identify core operational drivers (drivers of revenue, churn, variable COGS, and fixed SG&A).'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Architect a modular financial model tailored to your exact business model dynamics.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Train department heads on budget submission templates and launch rolling forecast cadence.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Conduct monthly executive FP&A review sessions to evaluate performance and calibrate assumptions.'
      }
    ],
    faqs: [
      {
        question: 'How is FP&A different from traditional accounting?',
        answer: 'Accounting looks backward at historical transactions; FP&A looks forward, utilizing historical trends to forecast future cash flows, budgets, and strategic investments.'
      },
      {
        question: 'Can you build models for SaaS, eCommerce, or manufacturing companies?',
        answer: 'Yes, we have specialized driver-based templates for recurring revenue SaaS, inventory-heavy eCommerce, and manufacturing unit-costing.'
      },
      {
        question: 'Will our internal team be able to maintain the financial model after delivery?',
        answer: 'Yes, we build clean, transparent, documented Excel and Google Sheets models and provide comprehensive staff training.'
      }
    ],
    relatedServiceSlugs: ['financial-management', 'business-advisory', 'strategic-consulting']
  },
  {
    id: '10',
    slug: 'compliance-advisory',
    number: '10',
    title: 'Compliance Advisory',
    category: 'Governance & Risk',
    shortDescription: 'Regulatory governance, corporate secretarial management, and anti-money laundering (AML/KYC) compliance.',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    overview: 'Staying compliant across jurisdictions requires deep statutory expertise. Finora assists companies with regulatory filings, corporate secretarial management, AML/KYC policies, and ESG governance to maintain clean legal standing worldwide.',
    whatWeDo: [
      'Statutory compliance reviews and annual corporate filing management',
      'Anti-Money Laundering (AML), KYC, and OFAC sanctions program design',
      'Data protection and financial privacy compliance (GDPR, CCPA, GLBA)',
      'ESG reporting frameworks and sustainability disclosure preparation',
      'Whistleblower policy design and corporate governance documentation'
    ],
    benefits: [
      {
        title: 'Reputational Protection',
        description: 'Prevent compliance infractions that could damage brand equity or invite regulatory fines.'
      },
      {
        title: 'Seamless Global Entity Management',
        description: 'Maintain good standing across all domestic and international subsidiaries.'
      },
      {
        title: 'Investor & Bank Trust',
        description: 'Pass institutional KYC checks rapidly when opening corporate accounts or securing debt.'
      }
    ],
    keyFeatures: [
      {
        title: 'Compliance Calendar Monitor',
        description: 'Centralized dashboard tracking all regulatory deadlines, board filings, and renewals.',
        iconName: 'Calendar'
      },
      {
        title: 'AML/KYC Policy Toolkit',
        description: 'Turnkey risk-based compliance programs aligned with FinCEN and FATF guidelines.',
        iconName: 'FileText'
      },
      {
        title: 'ESG Metric Scorecard',
        description: 'Standardized sustainability disclosure data gathering aligned with ISSB and GRI standards.',
        iconName: 'Leaf'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Audit global entity registrations, corporate records, and regulatory licenses.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Identify lapsed filings, governance gaps, and emerging regulatory requirements.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Draft comprehensive compliance roadmaps, policy manuals, and escalation protocols.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Integrate automated tracking tools and conduct employee compliance training.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Continuous monitoring and periodic third-party compliance reviews.'
      }
    ],
    faqs: [
      {
        question: 'Do you manage international corporate secretarial filings?',
        answer: 'Yes, we manage annual returns, registered agent services, and director changes across 30+ jurisdictions.'
      },
      {
        question: 'How do you handle changes in financial regulations?',
        answer: 'Our regulatory intelligence team proactively notifies clients of legislative changes and adjusts internal policies before deadlines.'
      },
      {
        question: 'Can you help us build a whistleblowing hotline?',
        answer: 'Yes, we set up independent, confidential reporting channels and governance review protocols.'
      }
    ],
    relatedServiceSlugs: ['tax-advisory', 'risk-management', 'accounting']
  },
  {
    id: '11',
    slug: 'm-and-a-advisory',
    number: '11',
    title: 'M&A Advisory & Due Diligence',
    category: 'Strategy & Growth',
    shortDescription: 'Buy-side and sell-side transaction advisory, Quality of Earnings (QoE) reports, and post-merger integration.',
    heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
    overview: 'Executing successful acquisitions or achieving a premium exit requires rigorous preparation. Finora delivers institutional Quality of Earnings (QoE) analyses, financial due diligence, deal structuring, and post-merger integration services that maximize shareholder value.',
    whatWeDo: [
      'Sell-side readiness: Quality of Earnings (QoE) reports and data room curation',
      'Buy-side financial and tax due diligence for private equity and strategics',
      'Deal structuring, working capital peg negotiations, and earn-out mechanics',
      'Post-merger financial system integration and synergy tracking',
      'Carve-out and divestiture financial statement preparation'
    ],
    benefits: [
      {
        title: 'Maximized Exit Valuation',
        description: 'Uncover and defend normalized EBITDA adjustments to secure maximum deal multiples.'
      },
      {
        title: 'Downside Deal Protection',
        description: 'Identify hidden liabilities, customer concentration risks, and revenue recognition flaws.'
      },
      {
        title: 'Flawless Deal Execution',
        description: 'Maintain deal momentum while leadership stays focused on day-to-day business operations.'
      }
    ],
    keyFeatures: [
      {
        title: 'Quality of Earnings (QoE)',
        description: 'Deep forensic normalization of EBITDA, proof of cash, and working capital seasonality.',
        iconName: 'DollarSign'
      },
      {
        title: 'Synergy Realization Tracker',
        description: 'Quantitative milestones tracking cost rationalization and cross-sell post-acquisition.',
        iconName: 'Target'
      },
      {
        title: 'Virtual Data Room Management',
        description: 'Secure, indexed transaction repository built to withstand rigorous buyer scrutiny.',
        iconName: 'Database'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Evaluate transaction objectives, target company profile, and timeline parameters.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Perform rigorous Quality of Earnings analysis, customer cohort tests, and debt-like item audits.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Structure purchase agreements, define target working capital pegs, and draft indemnity protections.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Support closing mechanics, funds flow coordination, and escrow reconciliation.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Execute 100-day post-acquisition integration plan to capture projected financial synergies.'
      }
    ],
    faqs: [
      {
        question: 'What is a Quality of Earnings (QoE) report and why do we need one?',
        answer: 'A QoE report analyzes the sustainability and accuracy of historical earnings by stripping out non-recurring revenue, one-time expenses, and accounting anomalies, giving buyers and lenders confidence in normalized cash generation.'
      },
      {
        question: 'Do you represent both buyers and sellers?',
        answer: 'We represent strategic corporate buyers, private equity sponsors, and business founders preparing for full or partial recapitalizations.'
      },
      {
        question: 'How do you defend working capital during transaction close?',
        answer: 'We analyze 12-to-24 month trailing working capital trends to establish a fair benchmark peg, preventing unwarranted purchase price reductions.'
      }
    ],
    relatedServiceSlugs: ['corporate-finance', 'business-advisory', 'tax-advisory']
  },
  {
    id: '12',
    slug: 'strategic-consulting',
    number: '12',
    title: 'Strategic Consulting',
    category: 'Strategy & Growth',
    shortDescription: 'Enterprise transformation, organizational restructuring, cost optimization, and performance benchmarking.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    overview: 'Finora provides C-suite leaders with high-impact strategic advisory. We combine quantitative rigor with deep operational insight to solve complex organizational challenges, optimize operating models, and drive sustainable enterprise value creation.',
    whatWeDo: [
      'Enterprise operating model redesign and organizational streamlining',
      'Zero-based budgeting (ZBB) and cost restructuring programs',
      'Productivity benchmarking and process automation roadmaps',
      'Commercial pricing optimization and customer profitability rationalization',
      'Executive leadership alignment and strategic OKR deployment'
    ],
    benefits: [
      {
        title: 'Sustainable Margin Expansion',
        description: 'Unlock 150-400 bps of EBITDA improvement through disciplined operational rationalization.'
      },
      {
        title: 'Organizational Agility',
        description: 'Eliminate bureaucratic friction and align cross-functional teams around measurable KPIs.'
      },
      {
        title: 'Evidence-Based Strategy',
        description: 'Base major strategic pivots on deep market data and rigorous financial modeling.'
      }
    ],
    keyFeatures: [
      {
        title: 'Zero-Based Budget Framework',
        description: 'Systematic bottom-up cost justification targeting non-essential operational expenditure.',
        iconName: 'PieChart'
      },
      {
        title: 'Operating Model Blueprint',
        description: 'Realigned organizational hierarchies, reporting lines, and delegation authorities.',
        iconName: 'Users'
      },
      {
        title: 'EBITDA Bridge Analysis',
        description: 'Clear visual tracking of strategic initiatives from inception to realized P&L impact.',
        iconName: 'TrendingUp'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description: 'Conduct stakeholder interviews, workflow diagnostics, and cost-center mapping.'
      },
      {
        step: '02',
        title: 'Analyze',
        description: 'Quantify operational bottlenecks, overhead redundancies, and market positioning gaps.'
      },
      {
        step: '03',
        title: 'Strategize',
        description: 'Formulate an actionable transformation roadmap with quantified ROI expectations.'
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Embed program management office (PMO) to drive weekly sprint milestones and accountability.'
      },
      {
        step: '05',
        title: 'Optimize',
        description: 'Institutionalize continuous improvement metrics to ensure long-term value retention.'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure recommendations are actually implemented?',
        answer: 'Unlike traditional consulting firms that leave a slide deck, Finora embeds experienced operators to co-execute initiatives alongside your team.'
      },
      {
        question: 'What size companies benefit most from Strategic Consulting?',
        answer: 'We typically partner with companies generating $10M to $250M in annual revenue looking to break through growth plateaus or improve lagging margins.'
      },
      {
        question: 'Can you assist with digital transformation and automation?',
        answer: 'Yes, we identify manual, high-friction operational workflows and specify high-ROI automation and financial technology tools.'
      }
    ],
    relatedServiceSlugs: ['business-advisory', 'financial-management', 'm-and-a-advisory']
  }
];
