import React from 'react';
import Heading from './Heading';

interface Feature {
  title: string;
  items: string[];
}

interface FeatureListProps {
  features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="flex flex-col grow items-start text-base text-white max-md:mt-10">
      {features.map((feature, index) => (
        <div key={index} className="mt-9 first:mt-0">
          <Heading level={3} className="text-2xl tracking-tight">
            {feature.title}
          </Heading>
          {feature.items.map((item, itemIndex) => (
            <div key={itemIndex} className="mt-4 font-light">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FeatureList;