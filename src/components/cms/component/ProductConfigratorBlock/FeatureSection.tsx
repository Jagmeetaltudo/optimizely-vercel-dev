import React from 'react';

interface FeatureSectionProps {
  title: string;
  options: string[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, options }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start self-stretch py-7 pr-3 max-md:max-w-full">
      <div className="flex flex-col">
        <h3 className="text-lg text-teal-950">{title}</h3>
        {options.map((option, index) => (
          <div key={index} className="self-start mt-5 text-base text-zinc-800">
            {option}
          </div>
        ))}
      </div>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/d8d0db7cf8b96d14f2d7ab7452eb5eb673a22ba1b7e5a25cef72aa8f5e5d0dbd?apiKey=55a1f87f288a4c39862df294d0639360&" 
        alt="" 
        className="object-contain shrink-0 w-4 aspect-square" 
      />
    </div>
  );
};

export default FeatureSection;