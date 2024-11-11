
'use client';
import React, {useEffect} from 'react';
import CmsImage from '../../../shared/cms_image';

import $ from 'jquery';
import "jquery-ui/ui/widgets/accordion";
import 'jquery-ui/themes/base/all.css'; // Import jQuery UI CSS

interface FeatureSectionProps {
  title: string;
  image: any;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, image }) => {

    useEffect(() => {
    $('#accordion').accordion({
      icons: {
        header: 'custom-header-icon-plus', // Collapsed state icon
        activeHeader: 'custom-header-icon-minus', // Expanded state icon
      },
    });
  }, []);


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