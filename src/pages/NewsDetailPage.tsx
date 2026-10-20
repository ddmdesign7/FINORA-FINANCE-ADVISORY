import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { newsArticlesData } from '../data/news';
import {
  Clock,
  Calendar,
  User,
  Share2,
  Bookmark,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Linkedin,
  Twitter,
  Link as LinkIcon,
  Check
} from 'lucide-react';

interface NewsDetailPageProps {
  slug: string;
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const article = newsArticlesData.find(a => a.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#0B1F33]">Briefing Article Not Found</h1>
        <p className="text-[#667085]">The briefing you requested does not exist or has been archived.</p>
        <Link to="/news" className="inline-flex items-center space-x-2 text-[#155EEF] font-bold">
          <span>View All Market Perspectives</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedArticles = newsArticlesData
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const fallbackArticles = relatedArticles.length >= 2
    ? relatedArticles
    : newsArticlesData.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="space-y-0">
      <SEOHelmet
        title={`${article.title} | Finora Perspectives`}
        description={article.excerpt}
        ogImage={article.heroImage}
        ogType="article"
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'News & Perspectives', to: '/news' },
              { label: article.title }
            ]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="bg-[#155EEF] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-white/70 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-xs text-white/70">•</span>
              <span className="text-xs text-white/70">{article.date}</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="pt-4 flex items-center justify-between border-t border-white/15 text-xs text-white/70">
              <div className="flex items-center space-x-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-7 h-7 rounded-full object-cover border border-white/30"
                />
                <span>Published by <strong className="text-white">{article.author.name}</strong> ({article.author.role})</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyLink}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center space-x-1 cursor-pointer"
                  title="Copy link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#12B76A]" /> : <LinkIcon className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Key Executive Takeaways Card */}
          <div className="bg-[#EFF4FF] rounded-2xl p-6 sm:p-8 border border-[#155EEF]/20 space-y-4">
            <h3 className="font-display font-bold text-lg text-[#0B1F33] flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#155EEF]" />
              <span>Executive Briefing Summary</span>
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#17202A]">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>Strategic financial resilience requires real-time sensitivity modeling rather than backward-looking quarterly balance reviews.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>Tax minimization and capital expenditure timing directly dictate effective free cash flow and EBITDA exit multiples.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>Deploying institutional governance early dramatically accelerates debt syndication and equity fundraising rounds.</span>
              </div>
            </div>
          </div>

          {/* Rich Article Body */}
          <article className="bg-white rounded-2xl p-6 sm:p-12 border border-[#E4E7EC] shadow-xs space-y-8 text-[#17202A] leading-relaxed text-sm sm:text-base">
            {article.contentSections.map((sec, sIdx) => (
              <div key={sIdx} className="space-y-4">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0B1F33] pt-4 pb-2 border-b border-[#E4E7EC]">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[#667085] leading-relaxed">
                    {p}
                  </p>
                ))}
                {sec.callout && (
                  <div className="p-6 bg-[#F5F7FA] border-l-4 border-[#155EEF] rounded-r-xl my-4 text-[#0B1F33] font-serif italic text-base">
                    "{sec.callout}"
                  </div>
                )}
              </div>
            ))}

            {/* Tags Row */}
            <div className="pt-8 mt-8 border-t border-[#E4E7EC] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#17202A] uppercase">Topics:</span>
                {article.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-[#F5F7FA] text-[#667085] px-3 py-1 rounded-full border border-[#E4E7EC]">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 bg-[#F5F7FA] hover:bg-[#EFF4FF] hover:text-[#155EEF] text-xs font-semibold rounded-lg border border-[#E4E7EC] transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Article</span>
                </button>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <div className="space-y-6 pt-4">
            <SectionHeading
              eyebrow="CONTINUE READING"
              heading="Related Perspectives & Briefings"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fallbackArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-xs flex flex-col justify-between group"
                >
                  <div className="h-36 overflow-hidden">
                    <img src={rel.heroImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-[#155EEF] uppercase">{rel.category}</span>
                    <h4 className="font-display font-bold text-sm text-[#0B1F33] group-hover:text-[#155EEF] transition-colors line-clamp-2">
                      <Link to={`/news/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-[#667085] line-clamp-2">{rel.excerpt}</p>
                  </div>
                  <div className="p-5 pt-0 border-t border-[#E4E7EC]/60">
                    <Link to={`/news/${rel.slug}`} className="text-xs font-bold text-[#155EEF] flex items-center space-x-1 pt-3">
                      <span>Read Briefing</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
