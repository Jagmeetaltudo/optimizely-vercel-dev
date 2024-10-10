'use client';

import React, { useState } from 'react';
import BlogCard from '../ArticleCardBlock/ArticleCardBlock';

interface BlogData {
  title: string;
  image: any;
}

interface BlogCarouselProps {
  blogData: BlogData[];
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ blogData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (blogData.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogData.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {blogData.map((blog, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <BlogCard title={blog.title} image={blog.image} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </div>
  );
};

export default BlogCarousel;