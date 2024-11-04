import React from 'react';
import Column from './Column';
import Heading from './Heading';
import FeatureList from './FeatureList';
import PricingSection from './PricingSection';

interface OverviewSectionProps {
  // Add any necessary props here
}

const ProductOverviewComponent: React.FC<OverviewSectionProps> = () => {
  return (
    <section className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <Column width="28%" background="bg-neutral-100">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/55a1f87f288a4c39862df294d0639360/32d5f243c88c34f532b9c2db1518d54a55355eaf7d877b0da9cbd8c2fb8a0d3f?apiKey=55a1f87f288a4c39862df294d0639360&"
            alt="Product showcase"
            className="object-contain max-w-full aspect-[1.31] w-[400px]"
          />
          <div className="flex gap-5 justify-between self-center mt-44 max-w-full w-[172px] max-md:mt-10">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="flex shrink-0 w-4 h-4 rounded-xl bg-teal-950"
                role="button"
                tabIndex={0}
                aria-label={`Slide ${index}`}
              />
            ))}
          </div>
        </Column>
        <Column width="72%" background="bg-cyan-900">
          <Heading level={2} className="py-5 text-4xl tracking-wider text-white whitespace-nowrap max-md:pr-5 max-md:max-w-full">
            Overview
          </Heading>
          <div className="mt-9 w-full max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <FeatureList
                features={[
                  { title: "Trim Options", items: ["exterior brickmould"] },
                  { title: "Exterior Color Options", items: ["DF White", "Commercial Brown", "Pebble", "Black", "Slate"] },
                  { title: "Exterior Clad Color Options", items: ["Extruded aluminum provides added durability and a crisp finish."] },
                  { title: "Glass Options", items: ["Dualpane", "Tripane", "Low-E", "Tinted", "Textured"] }
                ]}
              />
              <Column width="77%">
                <div className="max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <FeatureList
                      features={[
                        { title: "Sustainable Solutions", items: ["40 years ago, we began recycling wood waste to help reduce our impact on environmental resources, while maximizing our efficient use of materials. Today we are a leader in environmental sustainability. Choose JELD-WEN for a greener planet."] },
                        { title: "Warranty", items: ["limited lifetime"] },
                        { title: "Custom Capabilities", items: ["size", "shape", "glass types", "grille types", "grille designs"] },
                        { title: "Configuration", items: ["Fixed", "Picture"] }
                      ]}
                    />
                    <Column width="67%">
                      <FeatureList
                        features={[
                          { title: "Material", items: ["Vinyl Aluminum Hybrid"] },
                          { title: "Standard Features", items: ["Features matching sitelines to operational units"] },
                          { title: "DF Hybrid Windows", items: [] },
                          { title: "Divided Lites", items: ["simulated divided lites", "grilles between the glass"] },
                          { title: "ENERGY STAR® Qualified Options", items: ["yes"] },
                          { title: "ENERGY STAR® Certified Options", items: ["ENERGY STAR®"] },
                          { title: "Color Options", items: ["5 exterior colours, 1 interior colour"] }
                        ]}
                      />
                    </Column>
                  </div>
                </div>
              </Column>
            </div>
          </div>
        </Column>
      </div>
      <PricingSection />
    </section>
  );
};

export default ProductOverviewComponent;