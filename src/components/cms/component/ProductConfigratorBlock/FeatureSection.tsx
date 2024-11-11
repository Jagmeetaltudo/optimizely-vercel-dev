import React from 'react';
import CmsImage from '../../../shared/cms_image';

interface FeatureSectionProps {
  title: string;
  image: any;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, image }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start self-stretch py-7 pr-3 max-md:max-w-full">
      <div className="flex flex-col">
        <h3 className="text-lg text-teal-950">{title}</h3>
      </div>
      <CmsImage
              src={image}
              alt="hero-image"
              aria-hidden
              priority
              fill
              className="object-contain shrink-0 w-4 aspect-square"
            />
    </div>
  );
};

export default FeatureSection;