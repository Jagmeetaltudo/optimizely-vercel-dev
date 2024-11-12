import React from 'react';
import CmsImage from '../../../shared/cms_image';

interface FeatureSectionProps {
  title: string;
  image: any;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, image }) => {
  return (
   <div className='flex-col ml-5 w-1/5'>
        <p className="text-lg text-teal-950">{title}</p>
  
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