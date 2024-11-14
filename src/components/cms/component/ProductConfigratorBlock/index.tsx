//"use client";
//'use client';
import React, { useEffect } from "react";
import FeatureSection from "./FeatureSection";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import Script from "next/script";

import {
  CTAButtonBlockDataFragment,
  DetailSectionDataFragment,
  IContentDataFragment,
  ProductConfiguratorDataFragment,
  ProductConfiguratorDataFragmentDoc,
} from "../../../../gql/graphql";
import CmsImage from "../../../shared/cms_image";
import CTAButtonBlock from "../CTAButtonBlock";
import { linkDataToUrl } from "@remkoj/optimizely-cms-nextjs/components";

// import $ from 'jquery';
// import "jquery-ui/ui/widgets/accordion";
// import 'jquery-ui/themes/base/all.css'; // Import jQuery UI CSS
import Styles from "../ProductConfigratorBlock/ProductConfigratorBlock.module.css";

function filterMaybeArray<T>(
  input: Array<T | null> | T | null | undefined
): Array<T> {
  if (!input) return [];
  if (!Array.isArray(input)) return [input];
  return input.filter((x) => x) as Array<T>;
}
interface ButtonData {
  text: string;
  url: any;
  className: string;
}
export type TileItems = Array<
  CTAButtonBlockDataFragment & IContentDataFragment
>;
export type SectionItems = Array<
  DetailSectionDataFragment & IContentDataFragment
>;
const ProductConfiguratorComponent: CmsComponent<
  ProductConfiguratorDataFragment
> = ({ data }) => {
  console.log(data);
  const utilityItems = filterMaybeArray(data.Buttons) as TileItems;
  const buttonData: ButtonData[] = utilityItems.map((item) => ({
    text: item.Text || "",
    url: item.Link ? linkDataToUrl(item.Link) : undefined,
    className: item.ClassName || "",
  }));

  const url1 = data.Link ? linkDataToUrl(data.Link) : undefined;
  const Models = filterMaybeArray(data.Models) as SectionItems;
  const GrilleDesigns = filterMaybeArray(data.GrilleDesigns) as SectionItems;
  const ExteriorColorOptions = filterMaybeArray(
    data.ExteriorColorOptions
  ) as SectionItems;

  // useEffect(() => {
  //   ($('#accordion') as any).accordion({
  //     icons: {
  //       header: 'custom-header-icon-plus', // Collapsed state icon
  //       activeHeader: 'custom-header-icon-minus', // Expanded state icon
  //     },
  //   });
  // }, []);

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive" // Ensures jQuery loads before other scripts
      />
      <Script
        src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
        strategy="afterInteractive" // Loads after page is interactive
      />
      <Script id="accordion-script">
        {`
        $(document).ready(function () {
          $('#accordion').accordion({
          collapsible: true,
            icons: {
              header: 'custom-header-icon-plus', // Collapsed state icon
              activeHeader: 'custom-header-icon-minus', // Expanded state icon
            },
          });
        });
        `}
      </Script>
      <div className="mx-auto container mt-6">
        <main className="self-center max-w-full w-[1217px]">
          <div className="flex gap-12 max-md:flex-col">
            <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className={`${Styles.ProductConfiguratorBlockLeft}`}>
                <div className="flex flex-col text-4xl text-teal-950 max-md:mt-6 max-md:max-w-full">
                  <h1 className="self-start">{data.Title}</h1>
                  <CmsImage
                    src={data.Image}
                    alt="hero-image"
                    aria-hidden
                    priority
                    width={220}
                    height={220}
                    className="object-contain mt-9 w-full aspect-square max-md:max-w-full"
                  />
                </div>
              </div>
            </section>
            <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className={`${Styles.ProductConfiguratorBlockRight}`}>
                <div className="flex flex-col items-start mt-20 w-full font-light max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-3xl tracking-wider text-zinc-600">
                    {data.Subtitle}
                  </h2>
                  <p className="mt-7 text-base leading-loose text-stone-500">
                    {data.des}
                  </p>
                 <div id="accordion" className="w-full">
                  {data.Models && <>
                     <h3>Models</h3>
                     <div className={`flex ${Styles.listItem}`}>
                       {Models.map((feature, index) => (
                         <FeatureSection
                           key={index}
                           title={feature.Title || ""}
                           image={feature.Image}
                         />
                       ))}
                     </div>
                   </>}
                   {data.GrilleDesigns && <>
                    <h3>Grille Designs</h3>
                    <div className={`flex ${Styles.listItem}`}>
                      {GrilleDesigns.map((feature, index) => (
                        <FeatureSection
                          key={index}
                          title={feature.Title || ""}
                          image={feature.Image}
                        />
                      ))}
                    </div></>}

                    {data.ExteriorColorOptions && <> <h3>Color Options</h3>
                    <div className={`flex ${Styles.listItem}`}>
                      {ExteriorColorOptions.map((feature, index) => (
                        <FeatureSection
                          key={index}
                          title={feature.Title || ""}
                          image={feature.Image}
                        />
                      ))}
                    </div></>}
                  </div>
                  <div
                    className={`py-2 mt-20 leading-loose  ${Styles.optionText}`}
                  >
                    <a href="#tabsComponent"> See all options and features</a>
                  </div>
                  <div className="flex set-btn-style gap-5 mt-16 text-sm font-bold text-center uppercase max-md:mt-10">
                    {buttonData.map((button, index) => (
                      <div key={index} className="primary_button">
                        <CTAButtonBlock
                          text={button.text}
                          url={button.url}
                          className={button.className}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
ProductConfiguratorComponent.displayName = "ProductConfiguratorBlock";
ProductConfiguratorComponent.getDataFragment = () => [
  "ProductConfiguratorData",
  ProductConfiguratorDataFragmentDoc,
];

export default ProductConfiguratorComponent;
