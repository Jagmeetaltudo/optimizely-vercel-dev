import {
  FeaturedTileDataFragment,
  FeaturedTileDataFragmentDoc,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings, RichText } from "@remkoj/optimizely-cms-react/components";
import {
  CmsEditable,
  getServerContext,
} from "@remkoj/optimizely-cms-react/rsc";
import CmsImage from "@/components/shared/cms_image";
import React from "react";
import Styles from './FeatureTileRight.module.css';
import { type FeaturedTileProps } from "./types"
export const FeaturedTile: CmsComponent<FeaturedTileDataFragment, FeaturedTileProps> = async ({
  data,
  contentLink: { locale },
  layoutProps
}) => {
  const { factory } = getServerContext();
  const { featuredTileType } = extractSettings(layoutProps);
  switch (featuredTileType) {
    case "featuredtileright":
      return (
        <section className="relative w-full min-h-[560px] max-md:pr-5 max-md:max-w-full">
      <CmsImage
        src={data.image}
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
        <RichText text={data.description?.json} /></div>
      </div>
    </section>
      );
      case "featuredtileleft":
        return(
          <section className="relative w-full min-h-[560px] max-md:pr-5 max-md:max-w-full">
      <CmsImage
        src={data.image}
        alt="hero-image"
        aria-hidden
        priority
        fill
        className="object-cover z-0 w-full h-full max-md:max-w-full"
      />
      <div className="absolute inset-y-0 right-0 z-0 flex flex-col max-w-full w-[548px]">
        <div className="flex flex-col items-start px-14 py-36 bg-white bg-opacity-70 max-md:px-5 max-md:py-24 right-0 max-md:max-w-full min-h-[560px]">
          <h1 className="text-3xl self-stretch-title uppercase text-teal-950">{data.title}</h1>
          <div className="z-0 mt-10 text-base font-light text-teal-950 self-stretch-desc"><RichText text={data.description?.json}/></div>
     </div>
        </div>
    </section>
        );
        case "herobanner":
          return (
<>
      
      <CmsImage
        src={data.image}
        alt="hero-image"
        aria-hidden
        priority
        fill
        className="object-cover absolute inset-0 max-md:max-w-full"
      />
        <div className={Styles.bannerTextWrapper}>
          <div className="container">
            <div className={Styles.textbox}>
              <div className="row">
                <div className="col-12 col-md-7">
                  <h2>{data.title} </h2>
                </div>
                <div className="col-12 col-md-5">
                  <RichText text={data.description?.json} />
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
          );

  }
};FeaturedTile.getDataFragment = () => [
  "FeaturedTileData",
  FeaturedTileDataFragmentDoc,
];

export default FeaturedTile;
