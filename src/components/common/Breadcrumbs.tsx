import React from 'react';
import { Link } from '../../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-xs text-[#667085] ${className}`}>
      <Link to="/" className="flex items-center hover:text-[#155EEF] transition-colors" aria-label="Home">
        <Home className="w-3.5 h-3.5" />
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-[#667085]/60 flex-shrink-0" />
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-[#155EEF] transition-colors truncate max-w-[200px]">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-[#17202A] truncate max-w-[260px]" aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
