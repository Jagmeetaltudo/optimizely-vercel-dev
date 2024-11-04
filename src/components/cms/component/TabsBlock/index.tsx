import React from 'react';
import TabComponent from './TabComponent';
import ColorOption from './ColorOption';
import { InteriorColorOption, ExteriorColorOption } from './types';
import TabsComponent from '../ProductConfigratorBlock';

const interiorColorOptions: InteriorColorOption[] = [
  { color: 'White', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/a77d1a01623714a61e08bd1f750335220fe9dd19ba13a9bd9252f1b0ea3edae5?apiKey=55a1f87f288a4c39862df294d0639360&' },
  { color: 'Black', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/3da14eb18c5b91001fd632f26db30595ef0d7825db146ac2a0769f60859a20d8?apiKey=55a1f87f288a4c39862df294d0639360&' },
];

const exteriorColorOptions: ExteriorColorOption[] = [
  { color: 'Commercial Brown', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/fbf6e966e7c43911e2897840b6ca901a86e189170190b2c4607b7183b45d6089?apiKey=55a1f87f288a4c39862df294d0639360&' },
  { color: 'Black', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/b41dbc4e5a3782e6ec5dacb2217977b39565ed4d056108c0f19675825243a52a?apiKey=55a1f87f288a4c39862df294d0639360&' },
  { color: 'DF White', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/be4a25f37d0233ce814d5224a94f9e5d2200120e521cf2e62905aefc278c63da?apiKey=55a1f87f288a4c39862df294d0639360&' },
  { color: 'Pebble', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/fb7f4dfa8960e91c182e153452ab293d530e10555773191c7a6748f44966236f?apiKey=55a1f87f288a4c39862df294d0639360&' },
  { color: 'Slate', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/cdf3e98c48850915f9c56485d18140e637cdaddcae67d3d3c8c49d425a10e62c?apiKey=55a1f87f288a4c39862df294d0639360&' },
];

const TabsBlockComponent: React.FC = () => {
  return (
    <section className="flex flex-col items-start self-center mt-20 max-w-full font-light text-zinc-800 w-[1225px] max-md:mt-10">
      <h2 className="text-4xl tracking-wider">Details & Options</h2>
      <nav className="flex flex-wrap gap-8 mt-14 text-sm text-center uppercase text-zinc-600 max-md:mt-10">
        <TabComponent label="Color Options" isActive={true} />
        <TabComponent label="SUSTAINABLE SOLUTIONS" />
        <TabComponent label="Glass Options" />
        <TabComponent label="Divided Lites" />
      </nav>
      <h3 className="self-stretch py-3.5 mt-10 text-2xl tracking-tight text-zinc-600 max-md:pr-5 max-md:max-w-full">
        Interior Colour Options
      </h3>
      <p className="self-stretch mt-9 text-base leading-7 max-md:mr-2.5 max-md:max-w-full">
        Add colour and excitement to the interior of your windows. In addition, to the standard white colour, we have a black colour option with s finish technology Finishield™ <br />
        that stands up to scratches and heat degradation and maintains consistent colour. FiniShield™ is backed by a 10-Year Limited Warranty.
      </p>
      <p className="mt-9 text-base leading-loose max-md:max-w-full">
        Note: Colours shown online may vary from actual finishing due to variations in monitors and browsers.
      </p>
      <div className="flex gap-10 mt-20 max-w-full text-center whitespace-nowrap w-[243px] max-md:mt-10">
        {interiorColorOptions.map((option, index) => (
          <ColorOption key={index} color={option.color} imageSrc={option.imageSrc} />
        ))}
      </div>
      <h3 className="self-stretch py-3.5 mt-12 text-2xl tracking-tight text-zinc-600 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        Exterior Colour Options
      </h3>
      <p className="mt-9 text-base leading-7 max-md:max-w-full">
        Add colour and excitement to your windows with a range of beautiful colours to accentuate your homes visual appeal and complement many popular trim and house paint <br />
        colours. Or let your imagination go wild and order custom painted windows in any colour you choose. Whichever colour you select, know that it will remain vivid and true year <br />
        after year.*Colours are subject to regional availability. Please contact your JELD-WEN dealer for more information.
      </p>
      <div className="flex flex-wrap gap-10 items-start mt-20 max-w-full text-sm text-center w-[733px] max-md:mt-10">
        {exteriorColorOptions.map((option, index) => (
          <ColorOption key={index} color={option.color} imageSrc={option.imageSrc} />
        ))}
      </div>
    </section>
  );
};

export default TabsBlockComponent;