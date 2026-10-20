import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  description,
  align = 'left',
  dark = false,
  className = ''
}) => {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className="flex items-center space-x-2" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          <span className="w-2 h-2 rounded-full bg-[#D6A84F]" />
          <span className={`text-xs font-bold uppercase tracking-widest ${dark ? 'text-[#D6A84F]' : 'text-[#155EEF]'}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${dark ? 'text-white' : 'text-[#0B1F33]'}`}>
        {heading}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-[#667085]'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
