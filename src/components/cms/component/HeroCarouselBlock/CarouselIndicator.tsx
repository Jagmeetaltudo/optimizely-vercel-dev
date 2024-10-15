import React from 'react';

interface CarouselIndicatorProps {
  isActive: boolean;
  onClick: () => void;
}

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({ isActive, onClick }) => {
  return (
    <button
      className={`flex shrink-0 w-4 h-4 rounded-full ${
        isActive ? 'bg-white' : 'bg-teal-950'
      }`}
      onClick={onClick}
      aria-label={`Go to slide ${isActive ? 'current' : ''}`}
    />
  );
};

export default CarouselIndicator;