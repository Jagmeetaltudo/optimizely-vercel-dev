import {
  FeaturedTileBlockDataFragment,
  FeaturedTileBlockDataFragmentDoc,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import React from "react";
import Image from "next/image";

export const FeaturedTileBlockComponent: CmsComponent<
  FeaturedTileBlockDataFragment
> = ({ data }) => {
  return data.Position == "Left" ? (
    <section className="relative w-full min-h-[560px] max-md:pr-5 max-md:max-w-full">
      <Image
        loading="lazy"
        src={
          typeof data?.backgroundImageSrc === "string"
            ? data.backgroundImageSrc
            : ""
        }
        alt="Background image for hero section"
        className="object-cover absolute inset-0"
        fill
      />
      <div className="relative flex flex-col items-start px-20 py-36 max-w-full bg-white bg-opacity-70 w-[548px] max-md:px-5 max-md:py-24">
        <h1 className="self-stretch text-3xl uppercase text-teal-950 max-md:mr-2.5">
          {data.title}
        </h1>
        <p className="mt-10 text-base font-light text-teal-950">
          {data.description?.json}
        </p>
        <button className="overflow-hidden px-12 py-6 text-sm font-bold tracking-wide text-white uppercase bg-cyan-900 max-md:px-5 mt-16 -mb-7 max-md:mt-10 max-md:mb-2.5">
          {data.buttontext}
        </button>
      </div>
    </section>
  ) : (
    <section className="relative flex flex-col">
      <Image
        loading="lazy"
        src={
          typeof data?.backgroundImageSrc === "string"
            ? data.backgroundImageSrc
            : ""
        }
        alt="Background image for hero section"
        className="z-0 w-full object-contain aspect-[2.57] max-md:max-w-full"
        fill
      />
      <div className="absolute inset-y-0 right-0 z-0 flex flex-col max-w-full left-[892px] w-[548px]">
        <div className="flex flex-col items-start px-14 py-36 bg-white bg-opacity-70 max-md:px-5 max-md:py-24 max-md:max-w-full">
          <h1 className="text-3xl uppercase text-teal-950">{data.title}</h1>
          <p className="mt-10 text-base font-light text-teal-950">
            {data.description?.json}
          </p>
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
