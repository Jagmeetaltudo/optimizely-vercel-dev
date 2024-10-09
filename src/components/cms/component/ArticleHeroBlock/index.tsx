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
    <div className="flex flex-col">
      <div className="flex relative flex-col items-end px-20 w-full min-h-[560px] max-md:pl-5 max-md:max-w-full">
        <CmsImage
          loading="lazy"
          src={data?.Image}
          alt="Inspirational background"
          className="object-cover absolute inset-0 size-full"
          layout="fill"
        />
        <div className="flex relative z-10 flex-col items-start px-20 py-28 max-w-full bg-cyan-900 bg-opacity-70 w-[435px] max-md:px-5 max-md:py-24">
          <div className="w-full text-5xl text-white max-md:text-4xl">
            {data?.Title}
          </div>
          <div className="mt-2.5 text-base font-light text-white">
            <CmsEditable
              as={RichText}
              cmsFieldName="TileDescription"
              text={data.Description?.json}
              className="flex-auto self-start"
            />
          </div>
          <div className="overflow-hidden px-12 py-6 mt-16 mb-0 max-w-full text-sm font-bold tracking-wide uppercase whitespace-nowrap bg-white text-teal-950 w-[183px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">
            {
              <CmsEditable
                as={ButtonBlock}
                cmsFieldName="Button"
                contentLink={{ key: null }}
                data={{
                  ...button,
                  __typename: undefined, // Remove data type, so only data fields will be matched
                  " $fragmentName": undefined, // Remove fragment source, so only data fields will be matched
                  text: `${
                    (
                      button as
                        | ButtonBlockPropertyDataFragment
                        | undefined
                        | null
                    )?.text ?? ""
                  }`,
                  className:
                    `${
                      (
                        button as
                          | ButtonBlockPropertyDataFragment
                          | undefined
                          | null
                      )?.className ?? ""
                    } ${buttonClasses.join(" ")}`.trim() || undefined, // Apply additional classes
                }}
              />
            }{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleHeroBlockComponent.displayName = "ArticleHeroBlock";
ArticleHeroBlockComponent.getDataFragment = () => [
  "ArticleHeroBlockData",
  ArticleHeroBlockDataFragmentDoc,
];
export default ArticleHeroBlockComponent;
