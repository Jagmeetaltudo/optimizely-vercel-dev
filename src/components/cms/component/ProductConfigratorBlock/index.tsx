import React from 'react';
import FeatureSection from './FeatureSection';
import Button from './Button';

interface DFHybridFixedWindowProps {}

const ProductConfiguratorComponent: React.FC<DFHybridFixedWindowProps> = () => {
  const features = [
    { title: 'Model', options: ['Picture Interior', 'Picture Exterior'] },
    { title: 'Grille Designs', options: ['No Grille'] },
    { title: 'Interior Color Options', options: ['White'] },
  ];

  return (
    <main className="self-center max-w-full w-[1217px]">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-4xl text-teal-950 max-md:mt-6 max-md:max-w-full">
            <h1 className="self-start">DF Hybrid Fixed Window</h1>
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/183df40e6b598bfa892fee001fdd18ece05760b07cb66c9225c687a51ffb3504?apiKey=55a1f87f288a4c39862df294d0639360&" 
              alt="DF Hybrid Fixed Window" 
              className="object-contain mt-9 w-full aspect-square max-md:max-w-full" 
            />
          </div>
        </section>
        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start mt-20 w-full font-light max-md:mt-10 max-md:max-w-full">
            <h2 className="text-3xl tracking-wider text-zinc-600">
              Explore the Options
            </h2>
            <p className="mt-7 text-base leading-loose text-stone-500">
              Features matching sitelines to operational units
            </p>
            {features.map((feature, index) => (
              <FeatureSection 
                key={index} 
                title={feature.title} 
                options={feature.options} 
              />
            ))}
            <div className="py-2 mt-10 text-base font-bold leading-loose border-t-2 border-stone-400 text-teal-950">
              See all options and features
            </div>
            <div className="flex gap-5 mt-16 text-sm font-bold text-center uppercase max-md:mt-10">
              <Button variant="primary">WHERE TO BUY</Button>
              <Button variant="secondary">GET HELP</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductConfiguratorComponent;