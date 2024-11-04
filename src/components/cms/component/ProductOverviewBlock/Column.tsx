import React from 'react';

interface ColumnProps {
  width: string;
  background?: string;
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ width, background, children }) => {
  return (
    <div className={`flex flex-col ${width} max-md:ml-0 max-md:w-full`}>
      <div className={`flex flex-col pt-48 pr-20 pb-10 pl-10 mx-auto w-full ${background} max-md:px-5 max-md:pt-24 max-md:max-w-full`}>
        {children}
      </div>
    </div>
  );
};

export default Column;