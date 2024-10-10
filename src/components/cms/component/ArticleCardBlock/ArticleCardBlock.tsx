import { getLinkData, linkDataToUrl } from '@remkoj/optimizely-cms-nextjs/components';
import React from 'react';

interface BlogCardProps {
  title: string;
  image: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image }) => {
  const link = linkDataToUrl(getLinkData(image))
    const imgSrc = link?.href
  return (
    <article className="flex flex-col items-start p-4">
      <img loading="lazy" src={imgSrc} alt={title} className="object-cover w-full h-64" />
      <h2 className="mt-5 text-2xl font-light tracking-wide text-stone-500">{title}</h2>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d2cba332e26542d7c608ff2ca3ac131f182706497c134e46891f949818a1895?placeholderIfAbsent=true&apiKey=55a1f87f288a4c39862df294d0639360" alt="" className="mt-7 w-[86px]" />
      <button className="mt-1 text-sm font-bold tracking-wide uppercase text-teal-950">
        Read More
      </button>
    </article>
  );
};

export default BlogCard;