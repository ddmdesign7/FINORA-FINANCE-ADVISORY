import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
  description?: string;
  dark?: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  description,
  dark = false
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Parse numeric part and suffix e.g. "4,500+" -> number: 4500, suffix: "+"
  const cleanNumStr = value.replace(/[^0-9]/g, '');
  const targetNumber = parseInt(cleanNumStr, 10) || 0;
  const prefix = value.startsWith('$') ? '$' : value.startsWith('+') ? '+' : '';
  const suffix = value.replace(/[0-9$,+]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || targetNumber === 0) {
      if (hasAnimated && targetNumber === 0) setDisplayNumber(0);
      return;
    }

    let start = 0;
    const duration = 1600; // ms
    const stepTime = 20; // ms
    const steps = duration / stepTime;
    const increment = targetNumber / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setDisplayNumber(targetNumber);
        clearInterval(timer);
      } else {
        setDisplayNumber(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, targetNumber]);

  const formattedDisplay = targetNumber > 0
    ? (hasAnimated ? displayNumber.toLocaleString() : '0')
    : value;

  return (
    <div ref={ref} className="space-y-1">
      <div className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight ${dark ? 'text-white' : 'text-[#0B1F33]'}`}>
        <span className="text-[#D6A84F]">{prefix}</span>
        {formattedDisplay}
        <span className="text-[#155EEF]">{suffix}</span>
      </div>
      <div className={`text-sm sm:text-base font-semibold ${dark ? 'text-white/90' : 'text-[#17202A]'}`}>
        {label}
      </div>
      {description && (
        <div className={`text-xs ${dark ? 'text-white/60' : 'text-[#667085]'}`}>
          {description}
        </div>
      )}
    </div>
  );
};
