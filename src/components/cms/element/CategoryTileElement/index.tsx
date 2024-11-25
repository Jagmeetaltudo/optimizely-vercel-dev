import React from "react";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { IContentDataFragment } from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import CmsImage from "@/components/shared/cms_image";
import {
  CategoryTileElementDataFragment,
  CategoryTileElementDataFragmentDoc,
} from "../../../../gql/graphql";

export const CategoryTileElement: CmsComponent<
  CategoryTileElementDataFragment
> = ({ data, contentLink }) => {
  return (
    <CmsEditable
      as="div"
      className="flex flex-col mb-5 max-md:w-full max-md:mb-4"
      cmsId={contentLink.key}
    >
      <div className="flex card-items relative flex-col grow px-8 pt-36 pb-5 text-xl font-bold tracking-wide text-white uppercase whitespace-nowrap aspect-[1.185] max-md:px-4 max-md:pt-20 mr-3">
        <CmsImage
          loading="lazy"
          src={data?.CategoryTileImage}
          alt="Inspirational background"
          className="object-contain absolute inset-0 w-full h-full"
          layout="fill"
        />
        <a
          className="card-image-overlay"
          href={(data?.CategoryTileLink as any)?.default}
        >
          <h4>{data?.CategoryTileTitle}</h4>
        </a>
      </div>
    </CmsEditable>
  );
};

CategoryTileElement.displayName = "CategoryTileElement";
CategoryTileElement.getDataFragment = () => [
  "CategoryTileElementData",
  CategoryTileElementDataFragmentDoc,
];
export default CategoryTileElement;

function getServerContext(): { factory: any } {
  throw new Error("Function not implemented.");
}
