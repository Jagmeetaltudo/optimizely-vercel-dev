import React from 'react';

interface ColorOptionProps {
  color: string;
  imageSrc: string;
}

const ColorOption: React.FC<ColorOptionProps> = ({ color, imageSrc }) => {
  return (
    <div className="flex flex-col flex-1 text-base leading-loose">
      <img loading="lazy" src={imageSrc} alt={`${color} color sample`} className="object-contain w-20 aspect-square rounded-[40px]" />
      <div className="self-center mt-4">{color}</div>
    </div>
  );
};

export default ColorOption;