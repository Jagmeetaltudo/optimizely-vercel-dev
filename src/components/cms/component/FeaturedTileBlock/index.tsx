import {
  FeaturedTileBlockDataFragment,
  FeaturedTileBlockDataFragmentDoc,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import React from "react";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import CmsImage from "@/components/shared/cms_image";

export const FeaturedTileBlockComponent: CmsComponent<
  FeaturedTileBlockDataFragment
> = ({ data }) => {
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
      <div className="relative flex flex-col items-start px-20 py-36 max-w-full bg-white bg-opacity-70 w-[548px] max-md:px-5 max-md:py-24">
        <h1 className="self-stretch text-3xl uppercase text-teal-950 max-md:mr-2.5">
          {data.title}
        </h1>

        <CmsEditable
          as={RichText}
          cmsFieldName="TileDescription"
          text={data.description?.json}
          className="mt-10 text-base font-light text-teal-950"
        />
        <button className="overflow-hidden px-12 py-6 text-sm font-bold tracking-wide text-white uppercase bg-cyan-900 max-md:px-5 mt-16 -mb-7 max-md:mt-10 max-md:mb-2.5">
          {data.buttontext}
        </button>
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
        className="object-contain z-0 w-full aspect-[2.57] max-md:max-w-full"
      />
      <div className="absolute inset-y-0 right-0 z-0 flex flex-col max-w-full left-[892px] w-[548px]">
        <div className="flex flex-col items-start px-14 py-36 bg-white bg-opacity-70 max-md:px-5 max-md:py-24 max-md:max-w-full">
          <h1 className="text-3xl uppercase text-teal-950">{data.title}</h1>
          <CmsEditable
            as={RichText}
            cmsFieldName="TileDescription"
            text={data.description?.json}
            className="z-0 w-full object-contain aspect-[2.57] max-md:max-w-full"
          />
          <button className="overflow-hidden px-12 py-6 mt-16 -mb-7 text-sm font-bold tracking-wide text-white uppercase bg-cyan-900 max-md:px-5 max-md:mt-10 max-md:mb-2.5">
            {data.buttontext}
          </button>
        </div>
      </div>
    </section>
  );
};
FeaturedTileBlockComponent.displayName = "FeaturedTileBlock";
FeaturedTileBlockComponent.getDataFragment = () => [
  "OfficeLocationData",
  FeaturedTileBlockDataFragmentDoc,
];

export default FeaturedTileBlockComponent;
