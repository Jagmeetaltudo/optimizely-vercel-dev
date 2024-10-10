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
    <section className="flex flex-col">
      <div className="flex relative flex-col items-end px-20 w-full min-h-[560px] max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d340f7b29fe6efdc0db60ca42217fdb07e6c0d45536ab0e98cfdb1a36def710?placeholderIfAbsent=true&apiKey=55a1f87f288a4c39862df294d0639360"
          alt="Coastal style interior design"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-y-0 right-0 z-0 flex flex-col max-w-full left-[892px] w-[548px]">
          <div className="flex flex-col items-start px-14 py-36 bg-white bg-opacity-70 max-md:px-5 max-md:py-24 max-md:max-w-full">
            <h2 className="text-5xl text-white max-md:text-4xl">
              {data.Title}
            </h2>
            <CmsEditable
              as={RichText}
              text={data.Description?.json}
              className="mt-8 mb-0 text-base font-light text-white max-md:mb-2.5"
              cmsFieldName="Description"
            />
          </div>
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
