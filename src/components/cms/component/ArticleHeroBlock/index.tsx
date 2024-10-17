import CmsImage from "@/components/shared/cms_image";
import {
  ArticleHeroBlockDataFragment,
  ArticleHeroBlockDataFragmentDoc,
} from "@/gql/graphql";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsComponent, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import * as React from "react";

export const ArticleHeroBlockComponent: CmsComponent<
  ArticleHeroBlockDataFragment
> = ({ data }) => {
  return (
    <section className="relative w-full min-h-[560px] max-md:pr-5 max-md:max-w-full">
    <CmsImage
      src={data.Image}
      alt="hero-image"
      aria-hidden
      priority
      fill
      className="object-cover z-0 w-full h-full max-md:max-w-full"
    />
    <div className="absolute inset-y-0 right-0 z-0 flex flex-col max-w-full w-[548px]">
      <div className="flex flex-col items-start px-14 py-36 bg-white bg-opacity-70 max-md:px-5 max-md:py-24 right-0 max-md:max-w-full min-h-[560px]">
        <h1 className="text-3xl self-stretch-title uppercase text-teal-950">{data.Title}</h1>
        <CmsEditable
          as={RichText}
          cmsFieldName="TileDescription"
          text={data.Description?.json}
          className="mt-10 text-base font-light text-teal-950 self-stretch-desc"
        />
      </div>
    </div>
  </section>
  );
};

ArticleHeroBlockComponent.displayName = "ArticleHeroBlock";
ArticleHeroBlockComponent.getDataFragment = () => [
  "ArticleHeroBlockData",
  ArticleHeroBlockDataFragmentDoc,
];
export default ArticleHeroBlockComponent;
