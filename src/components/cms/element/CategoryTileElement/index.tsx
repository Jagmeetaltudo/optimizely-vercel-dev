import React from "react";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  IContentDataFragment,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import CmsImage from "@/components/shared/cms_image";
import { CategoryTileElementDataFragment, CategoryTileElementDataFragmentDoc } from "../../../../gql/graphql";

export const CategoryTileElement: CmsComponent<
CategoryTileElementDataFragment
> = ({ data }) => {
  return (
      <div
        className="flex flex-col w-1/4 mb-5 max-md:ml-0 max-md:w-full"
       >
        <div className="flex card-items relative flex-col grow px-16 pt-52 pb-7 text-xl font-bold tracking-wide text-white uppercase whitespace-nowrap aspect-[1.185] max-md:px-5 max-md:pt-24 max-md:mt-5 mr-4">
          <CmsImage
            loading="lazy"
            src={data?.CategoryTileImage}
            alt="Inspirational background"
            className="object-contain absolute inset-0 size-full"
            layout="fill"
          />
          <a className="card-image-overlay" href={(data?.CategoryTileLink as any)?.default}>
            <h4>{data?.CategoryTileTitle}</h4>
          </a>
        </div>
      </div>
  );
};

CategoryTileElement.displayName = "CategoryTileElement";
CategoryTileElement.getDataFragment = () => [
  "CategoryTileElementData",
  CategoryTileElementDataFragmentDoc,
];
export default CategoryTileElement;