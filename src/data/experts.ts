import { ExpertItem } from '../types';

export const expertsData: ExpertItem[] = [
  {
    id: '1',
    slug: 'arthur-pendelton',
    name: 'Arthur Pendelton',
    position: 'CEO & Founder',
    category: 'Leadership',
    portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    shortBio: 'Former senior investment banker and institutional advisor with 25+ years guiding Fortune 500 boards and rapid-growth enterprises.',
    fullBio: 'Arthur Pendelton founded Finora with a single mission: to deliver Wall Street-caliber financial intelligence to growing enterprises and international organizations. Over a 25-year career spanning New York, London, and Zurich, Arthur has advised on more than $14 billion in corporate transactions, capital restructurings, and cross-border expansions.',
    specialization: ['Executive Leadership', 'Capital Architecture', 'Corporate Strategy', 'Cross-Border M&A'],
    careerHistory: [
      {
        year: '2016 – Present',
        role: 'CEO & Founder',
        organization: 'Finora Finance & Advisory',
        highlight: 'Scaled Finora across 4 international hubs serving 4,500+ client organizations.'
      },
      {
        year: '2008 – 2016',
        role: 'Managing Director, M&A',
        organization: 'Barclays Investment Bank (London)',
        highlight: 'Led corporate finance advisory for European industrial and consumer transactions.'
      },
      {
        year: '1999 – 2008',
        role: 'Vice President, Global Advisory',
        organization: 'Morgan Stanley (New York)',
        highlight: 'Structured debt and equity offerings for high-growth mid-market enterprises.'
      }
    ],
    education: [
      'MBA in Finance, The Wharton School, University of Pennsylvania',
      'B.S. in Economics (Summa Cum Laude), London School of Economics'
    ],
    certifications: [
      'Chartered Financial Analyst (CFA)',
      'FINRA Series 7, 24, 79 General Securities Principal'
    ],
    achievements: [
      'Recognized by Global Finance as Top 40 Under 40 Financial Architect (2012)',
      'Author of "The Resilient Balance Sheet: Navigating Uncertainty in Modern Enterprise"',
      'Member of the Bretton Woods Committee on Global Economic Governance'
    ],
    email: 'a.pendelton@finoragroup.com',
    linkedin: 'https://linkedin.com/in/arthur-pendelton-finora',
    phone: '+1 (212) 849-2041'
  },
  {
    id: '2',
    slug: 'elena-rostova',
    name: 'Elena Rostova',
    position: 'Managing Director & Partner',
    category: 'Leadership',
    portrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    shortBio: 'Seasoned management consultant specializing in operational scaling, enterprise turnaround, and organizational agility.',
    fullBio: 'Elena Rostova oversees Finora’s global client advisory engagements. Prior to joining Finora, Elena was a Senior Partner at a leading global management consulting firm where she spearheaded operational transformation and digital finance modernizations for global leaders.',
    specialization: ['Operational Scaling', 'Turnaround Management', 'Enterprise Governance', 'Digital Transformation'],
    careerHistory: [
      {
        year: '2018 – Present',
        role: 'Managing Director',
        organization: 'Finora Finance & Advisory',
        highlight: 'Expanded advisory practice by 340% and launched the Finora Innovation Lab.'
      },
      {
        year: '2010 – 2018',
        role: 'Partner, Corporate Restructuring',
        organization: 'McKinsey & Company (London / Frankfurt)',
        highlight: 'Led multi-million euro operational restructuring programs for industrial conglomerates.'
      },
      {
        year: '2004 – 2010',
        role: 'Senior Strategy Consultant',
        organization: 'Oliver Wyman (Zurich)',
        highlight: 'Advised financial institutions on risk modeling and Basel regulatory compliance.'
      }
    ],
    education: [
      'M.Sc. in Management & International Finance, HEC Paris',
      'B.A. in Applied Mathematics, Oxford University'
    ],
    certifications: [
      'Certified Management Consultant (CMC)',
      'Certified Insolvency and Restructuring Advisor (CIRA)'
    ],
    achievements: [
      'Delivered 20+ keynote addresses at the World Economic Forum & Global Advisory Summit',
      'Board Trustee at the International Financial Governance Institute'
    ],
    email: 'e.rostova@finoragroup.com',
    linkedin: 'https://linkedin.com/in/elena-rostova-finora',
    phone: '+44 20 7946 0912'
  },
  {
    id: '3',
    slug: 'marcus-vance',
    name: 'Marcus Vance',
    position: 'Finance Director & Head of FP&A',
    category: 'Finance',
    portrait: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    shortBio: 'Quantitative FP&A architect with deep expertise in 3-statement predictive modeling and SaaS metrics.',
    fullBio: 'Marcus Vance leads the Financial Planning & Analysis (FP&A) and Financial Management division at Finora. With an extensive background as a corporate controller and fractional CFO for fast-growth ventures, Marcus builds robust dynamic models that give executive leadership 20/20 visibility into future cash flows and burn rates.',
    specialization: ['Dynamic 3-Statement Modeling', 'Cash Flow Optimization', 'SaaS & Unit Economics', 'Budget Architecture'],
    careerHistory: [
      {
        year: '2019 – Present',
        role: 'Finance Director',
        organization: 'Finora Finance & Advisory',
        highlight: 'Developed Finora’s proprietary 13-week Dynamic Rolling Forecast Engine.'
      },
      {
        year: '2013 – 2019',
        role: 'VP of Finance & Corporate Controller',
        organization: 'Apex Cloud Technologies (San Francisco)',
        highlight: 'Scaled annual recurring revenue from $12M to $90M through Series B/C and debt financing.'
      }
    ],
    education: [
      'B.S. in Accounting and Computer Science, University of California, Berkeley'
    ],
    certifications: [
      'Certified Public Accountant (CPA) – New York & California',
      'Certified Corporate Financial Planning & Analysis Professional (FPAC)'
    ],
    achievements: [
      'Designed financial planning architectures deployed by over 200 mid-market companies',
      'Guest lecturer on Corporate Financial Engineering at Columbia University'
    ],
    email: 'm.vance@finoragroup.com',
    linkedin: 'https://linkedin.com/in/marcus-vance-finora',
    phone: '+1 (212) 849-2048'
  },
  {
    id: '4',
    slug: 'dr-sophia-al-mansoor',
    name: 'Dr. Sophia Al-Mansoor',
    position: 'Head of Tax Advisory & Cross-Border Structuring',
    category: 'Tax',
    portrait: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    shortBio: 'International tax jurist and strategist specializing in transfer pricing, OECD BEPS compliance, and R&D credit capture.',
    fullBio: 'Dr. Sophia Al-Mansoor brings over 18 years of international corporate tax expertise to Finora. A recognized authority on cross-border tax treaties and intellectual property migration, Sophia has defended clients in complex statutory tax audits and structured billions in tax-efficient global holding structures.',
    specialization: ['Cross-Border Tax Planning', 'Transfer Pricing Documentation', 'R&D Tax Incentives', 'M&A Deal Tax Structuring'],
    careerHistory: [
      {
        year: '2017 – Present',
        role: 'Head of Tax Advisory',
        organization: 'Finora Finance & Advisory',
        highlight: 'Structured international holding entities for 400+ multinational clients across US, EMEA, and MENA.'
      },
      {
        year: '2009 – 2017',
        role: 'Senior Tax Director',
        organization: 'PwC International Tax Services (Dubai & London)',
        highlight: 'Advised Fortune 100 technology and telecom clients on BEPS and transfer pricing compliance.'
      }
    ],
    education: [
      'Doctor of Juridical Science (S.J.D.) in International Taxation, Harvard Law School',
      'LL.M. in Corporate Taxation, New York University School of Law'
    ],
    certifications: [
      'Admitted to the Bar (New York & UK Solicitor)',
      'Chartered Tax Adviser (CTA Fellow)'
    ],
    achievements: [
      'Key contributor to OECD Task Force on the Digital Economy documentation',
      'Recovered over $140M in lawful R&D tax incentives for technology clients'
    ],
    email: 's.almansoor@finoragroup.com',
    linkedin: 'https://linkedin.com/in/sophia-almansoor-finora',
    phone: '+971 4 392 1090'
  },
  {
    id: '5',
    slug: 'david-chen',
    name: 'David Chen',
    position: 'Head of Investment Advisory',
    category: 'Investment',
    portrait: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    shortBio: 'Institutional portfolio manager with deep expertise in asset allocation, private markets, and corporate treasury management.',
    fullBio: 'David Chen oversees Finora’s independent investment advisory and corporate treasury services. He previously managed multi-asset institutional portfolios for sovereign wealth funds and premier family offices in Singapore and New York, consistently delivering risk-adjusted alpha through disciplined quantitative modeling.',
    specialization: ['Strategic Asset Allocation', 'Corporate Treasury Optimization', 'Private Equity & Debt', 'Macro Risk Hedging'],
    careerHistory: [
      {
        year: '2020 – Present',
        role: 'Head of Investment Advisory',
        organization: 'Finora Finance & Advisory',
        highlight: 'Directly advising over $2.1B in private market and treasury assets.'
      },
      {
        year: '2012 – 2020',
        role: 'Senior Portfolio Manager',
        organization: 'GIC Private Markets (Singapore)',
        highlight: 'Allocated institutional capital across global private equity and real estate syndicates.'
      }
    ],
    education: [
      'M.S. in Financial Engineering, Columbia University',
      'B.Eng. in Quantitative Finance, National University of Singapore'
    ],
    certifications: [
      'Chartered Financial Analyst (CFA)',
      'Financial Risk Manager (FRM)'
    ],
    achievements: [
      'Consistently generated top-decile Sharpe ratios for institutional balance sheet allocations',
      'Regular contributor to Bloomberg Markets and CNBC Asia'
    ],
    email: 'd.chen@finoragroup.com',
    linkedin: 'https://linkedin.com/in/david-chen-finora',
    phone: '+1 (212) 849-2055'
  },
  {
    id: '6',
    slug: 'victoria-thorne',
    name: 'Victoria Thorne',
    position: 'Head of Corporate Advisory & M&A',
    category: 'Advisory',
    portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    shortBio: 'Veteran transaction advisor having led 80+ middle-market transactions and Quality of Earnings assessments.',
    fullBio: 'Victoria Thorne leads Finora’s M&A and transaction advisory practice. Having guided both private equity buyers and founder-owned sellers through complex deal structures, Victoria provides institutional Quality of Earnings (QoE) analyses, working capital peg negotiations, and post-close synergy roadmaps that maximize realized transaction value.',
    specialization: ['Buy-Side & Sell-Side QoE', 'Transaction Structuring', 'Enterprise Valuation', 'Post-Merger Integration'],
    careerHistory: [
      {
        year: '2018 – Present',
        role: 'Head of M&A Advisory',
        organization: 'Finora Finance & Advisory',
        highlight: 'Advised on 80+ mid-market transactions with combined deal volume exceeding $3.2B.'
      },
      {
        year: '2011 – 2018',
        role: 'Director, Transaction Advisory Services',
        organization: 'Ernst & Young (EY) (Chicago & New York)',
        highlight: 'Led financial due diligence for private equity sponsors and strategic corporate acquirers.'
      }
    ],
    education: [
      'B.S. in Finance and Accountancy, University of Notre Dame'
    ],
    certifications: [
      'Certified Public Accountant (CPA)',
      'Certified Valuation Analyst (CVA)'
    ],
    achievements: [
      'Successfully defended over $350M in normalized EBITDA adjustments in private equity sales',
      'Frequent speaker at Association for Corporate Growth (ACG) Conferences'
    ],
    email: 'v.thorne@finoragroup.com',
    linkedin: 'https://linkedin.com/in/victoria-thorne-finora',
    phone: '+1 (312) 902-8812'
  },
  {
    id: '7',
    slug: 'james-okafor',
    name: 'James Okafor',
    position: 'Operations & Emerging Markets Director',
    category: 'Leadership',
    portrait: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop',
    shortBio: 'International finance specialist driving enterprise operations across EMEA, Sub-Saharan Africa, and emerging markets.',
    fullBio: 'James Okafor directs Finora’s African and emerging markets advisory hub in Lagos and London. With 16 years of experience across commercial banking, development finance, and cross-border trade finance, James helps businesses navigate emerging market currency controls, infrastructure grants, and supply chain financing.',
    specialization: ['Emerging Markets Finance', 'Trade Finance Syndication', 'Cross-Border Supply Chains', 'Corporate Governance'],
    careerHistory: [
      {
        year: '2021 – Present',
        role: 'Director, Emerging Markets',
        organization: 'Finora Finance & Advisory',
        highlight: 'Opened Finora Lagos regional hub and advised $450M in pan-African trade finance.'
      },
      {
        year: '2014 – 2021',
        role: 'Head of Corporate Banking',
        organization: 'Standard Chartered Bank (Lagos & London)',
        highlight: 'Managed regional corporate loan portfolios for multinational telecom and manufacturing firms.'
      }
    ],
    education: [
      'M.Sc. in Development Finance, University of Cape Town',
      'B.Sc. in Banking and Finance, University of Lagos'
    ],
    certifications: [
      'Fellow of the Chartered Institute of Bankers (FCIB)',
      'Project Management Professional (PMP)'
    ],
    achievements: [
      'Pioneered innovative local-currency debt swap models for African agritech enterprises',
      'Member of the African Development Bank Advisory Board on SME Finance'
    ],
    email: 'j.okafor@finoragroup.com',
    linkedin: 'https://linkedin.com/in/james-okafor-finora',
    phone: '+234 1 888 4120'
  },
  {
    id: '8',
    slug: 'claire-dupont',
    name: 'Claire DuPont',
    position: 'Head of Risk Management & Compliance',
    category: 'Finance',
    portrait: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop',
    shortBio: 'Forensic auditor and enterprise risk specialist creating ironclad internal controls, SOX compliance, and fraud defenses.',
    fullBio: 'Claire DuPont heads Finora’s Governance, Risk, and Compliance (GRC) division. A former forensic investigator and Big 4 audit director, Claire helps organizations identify subtle operational vulnerabilities, implement robust SOX 404 internal controls, and build hedging programs that shield balance sheets from unforeseen macro disruptions.',
    specialization: ['Enterprise Risk Management (ERM)', 'SOX 404 Internal Controls', 'Forensic Accounting Audits', 'Derivatives & Hedging'],
    careerHistory: [
      {
        year: '2019 – Present',
        role: 'Head of Risk & Compliance',
        organization: 'Finora Finance & Advisory',
        highlight: 'Architected enterprise risk management frameworks for 150+ pre-IPO and mid-market organizations.'
      },
      {
        year: '2010 – 2019',
        role: 'Director, Forensic & Internal Audit',
        organization: 'KPMG Advisory (Paris & New York)',
        highlight: 'Led forensic financial investigations and regulatory compliance audits for European banking groups.'
      }
    ],
    education: [
      'Master of Accounting and Auditing, Paris Dauphine University',
      'B.A. in International Business, Sciences Po Paris'
    ],
    certifications: [
      'Certified Fraud Examiner (CFE)',
      'Certified Internal Auditor (CIA)',
      'Certified in Risk Management Assurance (CRMA)'
    ],
    achievements: [
      '100% clean audit pass record for clients completing pre-IPO SOX 404 readiness',
      'Co-authored the Enterprise Risk Governance Playbook for Middle Market Firms'
    ],
    email: 'c.dupont@finoragroup.com',
    linkedin: 'https://linkedin.com/in/claire-dupont-finora',
    phone: '+33 1 44 82 91 00'
  }
];
