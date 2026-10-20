import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SearchModal } from './components/common/SearchModal';
import { FinancialCalculatorModal } from './components/common/FinancialCalculatorModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { ClientsPage } from './pages/ClientsPage';
import { ExpertsPage } from './pages/ExpertsPage';
import { ExpertDetailPage } from './pages/ExpertDetailPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ComingSoonPage } from './pages/ComingSoonPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Route Dispatcher
  const renderRoute = () => {
    // Exact routes
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/services') {
      return <ServicesPage />;
    }
    if (currentPath === '/industries') {
      return <IndustriesPage />;
    }
    if (currentPath === '/clients') {
      return <ClientsPage />;
    }
    if (currentPath === '/experts') {
      return <ExpertsPage />;
    }
    if (currentPath === '/news') {
      return <NewsPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/quote') {
      return <QuotePage />;
    }
    if (currentPath === '/privacy') {
      return <LegalPage initialTab="privacy" />;
    }
    if (currentPath === '/terms') {
      return <LegalPage initialTab="terms" />;
    }
    if (currentPath === '/cookies') {
      return <LegalPage initialTab="cookies" />;
    }
    if (currentPath === '/coming-soon') {
      return <ComingSoonPage />;
    }

    // Dynamic routes
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').split('?')[0].split('#')[0];
      return <ServiceDetailPage slug={slug} />;
    }

    if (currentPath.startsWith('/industries/')) {
      const slug = currentPath.replace('/industries/', '').split('?')[0].split('#')[0];
      return <IndustryDetailPage slug={slug} />;
    }

    if (currentPath.startsWith('/experts/')) {
      const slug = currentPath.replace('/experts/', '').split('?')[0].split('#')[0];
      return <ExpertDetailPage slug={slug} />;
    }

    if (currentPath.startsWith('/news/')) {
      const slug = currentPath.replace('/news/', '').split('?')[0].split('#')[0];
      return <NewsDetailPage slug={slug} />;
    }

    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17202A] font-sans antialiased selection:bg-[#155EEF] selection:text-white">
      <Header />
      <main className="flex-grow">
        {renderRoute()}
      </main>
      <Footer />

      {/* Global Command Search & Financial Calculator Modals */}
      <SearchModal />
      <FinancialCalculatorModal />
    </div>
  );
};

export function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
