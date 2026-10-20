import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { newsArticlesData } from '../data/news';
import { academyArticles } from '../data/clients';
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Sparkles, Tag } from 'lucide-react';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Finance', 'Tax Strategy', 'Investment', 'Macroeconomics', 'Technology'];

  const filteredArticles = newsArticlesData.filter(art => {
    const matchesCat = selectedCategory === 'All' || art.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const featuredArticle = newsArticlesData[0];

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="News & Strategic Perspectives | Finora Intelligence"
        description="Executive commentary, macroeconomic briefings, corporate taxation insights, and M&A trends curated by Finora's global partners."
      />

      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[{ label: 'News & Perspectives' }]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              <span>FINANCIAL INTELLIGENCE</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Executive Perspectives & Market Briefings.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Rigorous economic analysis, corporate tax policy updates, and forward-looking strategic playbooks published by our practice directors.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Lead Article */}
      <section className="py-12 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F7FA] rounded-3xl overflow-hidden border border-[#E4E7EC] grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full overflow-hidden">
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-4">
              <div className="flex items-center space-x-3 text-xs">
                <span className="bg-[#0B1F33] text-white px-2.5 py-1 rounded font-semibold">
                  Featured Lead
                </span>
                <span className="text-[#667085] flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredArticle.readTime}</span>
                </span>
                <span className="text-[#667085]">{featuredArticle.date}</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0B1F33] hover:text-[#155EEF] transition-colors">
                <Link to={`/news/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-sm text-[#667085] leading-relaxed line-clamp-3">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#17202A]">
                  <User className="w-4 h-4 text-[#155EEF]" />
                  <span>{featuredArticle.author.name}</span>
                </div>

                <Link
                  to={`/news/${featuredArticle.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#155EEF] hover:underline"
                >
                  <span>Read Full Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-[#E4E7EC] sticky top-[73px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B1F33] text-white'
                    : 'bg-[#F5F7FA] text-[#667085] hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#667085] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search perspectives & tags..."
              className="w-full pl-9 pr-4 py-2 bg-[#F5F7FA] border border-[#E4E7EC] rounded-lg text-xs text-[#17202A] placeholder:text-[#667085] focus:outline-none focus:border-[#155EEF]"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border border-[#E4E7EC] p-8">
              <p className="text-base font-semibold text-[#17202A]">No articles found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-[#155EEF] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={article.heroImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B1F33] text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="text-xs text-[#667085] flex items-center space-x-2">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-[#0B1F33] group-hover:text-[#155EEF] transition-colors line-clamp-2">
                        <Link to={`/news/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-[#667085] line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="text-[10px] text-[#667085] bg-[#F5F7FA] px-2 py-0.5 rounded border border-[#E4E7EC]">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#E4E7EC]/60 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#667085] truncate max-w-[140px]">
                      By {article.author.name}
                    </span>
                    <Link
                      to={`/news/${article.slug}`}
                      className="text-xs font-bold text-[#155EEF] group-hover:text-[#0D47C2] flex items-center space-x-1 pt-4"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Financial Academy Modules */}
      <section className="py-20 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            align="center"
            eyebrow="EXECUTIVE CURRICULUM"
            heading="Finora Financial Academy"
            description="Deep-dive study guides and operational frameworks designed for founders and financial controllers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academyArticles.map((acad) => (
              <div key={acad.id} className="p-6 bg-[#F5F7FA] rounded-2xl border border-[#E4E7EC] space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#155EEF] bg-[#EFF4FF] px-2.5 py-1 rounded">{acad.level}</span>
                  <span className="text-[#667085]">{acad.readTime}</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#0B1F33]">{acad.title}</h4>
                <p className="text-xs text-[#667085] leading-relaxed">{acad.description}</p>
                <Link to={`/news/${acad.slug}`} className="text-xs font-bold text-[#155EEF] hover:underline flex items-center space-x-1 pt-2">
                  <span>Start Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
