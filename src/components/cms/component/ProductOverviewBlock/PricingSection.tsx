import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 mt-10 ml-24 max-w-full w-[1065px]">
      <div className="flex flex-col my-auto whitespace-nowrap text-teal-950">
        <div className="flex gap-1.5 self-start text-base font-light text-center">
          <div className="px-1.5 py-1 rounded-xl border-2 border-solid border-slate-400">$</div>
          <div className="px-1.5 py-1 rounded-xl border-2 border-solid border-slate-400">$</div>
        </div>
        <div className="mt-2.5 text-xl tracking-tight">Pricing</div>
      </div>
      <p className="grow shrink self-start text-base font-light leading-7 text-stone-500 w-[418px] max-md:max-w-full">
        Many options will influence the price of your window. To get an estimate, contact your JELD-WEN dealer.
      </p>
      <div className="flex gap-5 text-sm font-bold tracking-wide text-center uppercase">
        <a href="#" className="px-12 py-7 text-white bg-cyan-900 border border-cyan-900 border-solid max-md:px-5">
          WHERE TO BUY
        </a>
        <a href="#" className="px-12 py-7 border border-cyan-900 border-solid text-teal-950 max-md:px-5">
          GET HELP
        </a>
      </div>
    </div>
  );
};

export default PricingSection;