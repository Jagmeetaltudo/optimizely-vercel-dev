import {
  CTAButtonBlockDataFragment,
  FeaturedTileBlockDataFragment,
  FeaturedTileBlockDataFragmentDoc,
  IContentDataFragment,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import React from "react";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import CmsImage from "@/components/shared/cms_image";
import { linkDataToUrl } from "@/components/shared/cms_link";
import CTAButtonBlock from "../CTAButtonBlock";
export type TileItems = Array<
  CTAButtonBlockDataFragment & IContentDataFragment
>;

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
export const FeaturedTileBlockComponent: CmsComponent<
  FeaturedTileBlockDataFragment
> = ({ data }) => {
  const utilityItems = filterMaybeArray(data.CTA) as TileItems;
  const buttonData: ButtonData[] = utilityItems.map((item) => ({
    text: item.Text || "",
    url: item.Link ? linkDataToUrl(item.Link) : undefined,
    className: item.ClassName || "",
  }));
  return data.Position === "Left" ? (
    <section className="relative w-full min-h-[560px] max-md:pr-5 max-md:max-w-full">
      <CmsImage
        src={data.backgroundImage}
        alt="hero-image"
        aria-hidden
        priority
        fill
        className="object-cover absolute inset-0 max-md:max-w-full"
      />
      <div className="relative flex flex-col min-h-[560px] items-start px-20 py-36 max-w-full bg-white bg-opacity-70 w-[548px] max-md:px-5 max-md:py-24 h-full">
        <h1 className="self-stretch  self-stretch-title text-3xl uppercase text-teal-950 max-md:mr-2.5">
          {data.title}
        </h1>

         <div className="mt-10 text-base font-light text-teal-950 self-stretch-desc">
        {data.TileDescription}</div>
        {buttonData.map((button, index) => (
          <div key={index} className="primary_button">
            <CTAButtonBlock text={button.text} url={button.url} className={button.className} />
          </div>
        ))}
      </div>
    </section>
  ) : (
    <section className="relative w-full min-h-[560px] max-md:pr-5 max-md:max-w-full">
      <CmsImage
        src={data.backgroundImage}
        alt="hero-image"
        aria-hidden
        priority
        fill
        className="object-cover z-0 w-full h-full max-md:max-w-full"
      />
      <div className="absolute inset-y-0 right-0 z-0 flex flex-col max-w-full w-[548px]">
        <div className="flex flex-col items-start px-14 py-36 bg-white bg-opacity-70 max-md:px-5 max-md:py-24 right-0 max-md:max-w-full min-h-[560px]">
          <h1 className="text-3xl self-stretch-title uppercase text-teal-950">{data.title}</h1>
          <div className="z-0 mt-10 text-base font-light text-teal-950 self-stretch-desc">{data.TileDescription}</div>
           {buttonData.map((button, index) => (
            <div key={index} className="primary_button">
          <CTAButtonBlock text={button.text} url={button.url} className={button.className} />
     </div>
        ))}
          
        </div>
      </div>
    </section>
  );
};
FeaturedTileBlockComponent.displayName = "FeaturedTileBlock";
FeaturedTileBlockComponent.getDataFragment = () => [
  "FeaturedTileBlockData",
  FeaturedTileBlockDataFragmentDoc,
];

export default FeaturedTileBlockComponent;