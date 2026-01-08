import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`w-full min-h-screen flex flex-col justify-center relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
};