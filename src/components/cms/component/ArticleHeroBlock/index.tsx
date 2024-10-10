import CmsImage from "@/components/shared/cms_image";
import {
  ArticleHeroBlockDataFragment,
  ArticleHeroBlockDataFragmentDoc,
  ButtonBlockPropertyDataFragment,
} from "@/gql/graphql";
import Button from "@/components/shared/button";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsComponent, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import * as React from "react";
import ButtonBlock from "@/components/component/block/button_block";
import button from "@/components/shared/button";

export const ArticleHeroBlockComponent: CmsComponent<
  ArticleHeroBlockDataFragment
> = ({ data }) => {
  const buttonClasses: string[] = [];

  return (
    <section className="flex relative flex-col">
       <CmsImage
          loading="lazy"
          src={data?.Image}
          alt="Inspirational background"
          className="object-contain z-0 w-full aspect-[2.57] max-md:max-w-full"
          layout="fill"
        />
        <CmsEditable
                as="h2"
                cmsFieldName="Title"
                className="text-3xl uppercase text-teal-950"
        ></CmsEditable>
        <CmsEditable
                as={RichText}
                cmsFieldName="Description"
                text={data.Description?.json}
                className="mt-10 text-base font-light text-teal-950"
        />
        </section>
        
  );
};

ArticleHeroBlockComponent.displayName = "ArticleHeroBlock";
ArticleHeroBlockComponent.getDataFragment = () => [
  "ArticleHeroBlockData",
  ArticleHeroBlockDataFragmentDoc,
];
export default ArticleHeroBlockComponent;
