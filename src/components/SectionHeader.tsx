import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="bg-blue-600 text-white px-4 py-2 mb-4 text-sm font-bold uppercase tracking-wider">
      {title}
    </div>
  );
}