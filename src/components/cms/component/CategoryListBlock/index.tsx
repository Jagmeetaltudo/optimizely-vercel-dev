import React from "react";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  CategoryListBlockDataFragment,
  CategoryListBlockDataFragmentDoc,
  CategoryTileBlockDataFragment,
  IContentDataFragment,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import CmsImage from "@/components/shared/cms_image";

export type TileItems = Array<
  CategoryTileBlockDataFragment & IContentDataFragment
>;

function filterMaybeArray<T>(
  input: Array<T | null> | T | null | undefined
): Array<T> {
  if (!input) return [];
  if (!Array.isArray(input)) return [input];
  return input.filter((x) => x) as Array<T>;
}

export const CategoryListBlockComponent: CmsComponent<
  CategoryListBlockDataFragment
> = ({ data }) => {
  const utilityItems = filterMaybeArray(data.CategoryTiles) as TileItems;
  return (
    <div className="flex flex-col">
      <div className="flex z-10 flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <h1 className="grow shrink text-5xl text-zinc-600 w-[654px] max-md:max-w-full max-md:text-4xl">
          {data.Title}
        </h1>
        <div className="flex gap-2.5 text-base font-light text-right text-stone-500">
          <CmsEditable
            as={RichText}
            cmsFieldName="TileDescription"
            text={data.Description?.json}
            className="flex-auto self-start"
          />
        </div>
      </div>
      <section className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {utilityItems.map((category, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
            >
              <div className="flex relative flex-col grow px-16 pt-52 pb-7 text-xl font-bold tracking-wide text-white uppercase whitespace-nowrap aspect-[1.185] max-md:px-5 max-md:pt-24 max-md:mt-5">
                <CmsImage
                  loading="lazy"
                  src={category?.TileImage}
                  alt="Inspirational background"
                  className="object-cover absolute inset-0 size-full"
                  layout="fill"
                />
                {category?.TileTitle}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

CategoryListBlockComponent.displayName = "CategoryListBlock";
CategoryListBlockComponent.getDataFragment = () => [
  "CategoryListBlockData",
  CategoryListBlockDataFragmentDoc,
];
export default CategoryListBlockComponent;
