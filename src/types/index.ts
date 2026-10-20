export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  heroImage: string;
  overview: string;
  whatWeDo: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  keyFeatures: {
    title: string;
    description: string;
    iconName: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServiceSlugs: string[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  image: string;
  shortDescription: string;
  overview: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  relevantServiceSlugs: string[];
  insights: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ExpertItem {
  id: string;
  slug: string;
  name: string;
  position: string;
  category: 'Leadership' | 'Finance' | 'Tax' | 'Investment' | 'Advisory';
  portrait: string;
  shortBio: string;
  fullBio: string;
  specialization: string[];
  careerHistory: {
    year: string;
    role: string;
    organization: string;
    highlight: string;
  }[];
  education: string[];
  certifications: string[];
  achievements: string[];
  email: string;
  linkedin: string;
  phone: string;
}

export interface NewsArticleItem {
  id: string;
  slug: string;
  title: string;
  category: 'Finance' | 'Accounting' | 'Tax' | 'Investment' | 'Business' | 'Markets' | 'Leadership' | 'Technology';
  excerpt: string;
  heroImage: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tableOfContents: {
    id: string;
    title: string;
  }[];
  contentSections: {
    heading: string;
    paragraphs: string[];
    callout?: string;
  }[];
  tags: string[];
  relatedSlugs: string[];
}

export interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  clientIndustry: string;
  clientScale: string;
  image: string;
  challenge: string;
  strategy: string;
  solution: string;
  results: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating?: number;
  industry?: string;
}

export interface ConsultationFormData {
  // Step 1: Personal
  fullName: string;
  email: string;
  phone: string;
  // Step 2: Business
  company: string;
  industry: string;
  companySize: string;
  // Step 3: Service
  serviceNeeded: string;
  // Step 4: Project
  budget: string;
  timeline: string;
  message: string;
}
