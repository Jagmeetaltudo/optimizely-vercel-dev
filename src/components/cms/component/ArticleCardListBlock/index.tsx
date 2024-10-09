import {
  ArticleCardBlockDataFragment,
  ArticleCardBlockDataFragmentDoc,
  ArticleCardListBlockDataFragment,
  IContentDataFragment,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import ArticleCardBlockComponent from "../ArticleCardBlock";
export type TileItems = Array<
  ArticleCardBlockDataFragment & IContentDataFragment
>;

function filterMaybeArray<T>(
  input: Array<T | null> | T | null | undefined
): Array<T> {
  if (!input) return [];
  if (!Array.isArray(input)) return [input];
  return input.filter((x) => x) as Array<T>;
}
export const ArticleCardListBlockComponent: CmsComponent<
  ArticleCardListBlockDataFragment
> = ({ data }) => {
  const utilityItems = filterMaybeArray(data.Articles) as TileItems;
  return (
    <section className="flex flex-col">
      <header className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1239px] max-md:max-w-full">
        <CmsEditable
          as="h1"
          cmsFieldName="Title"
          className="self-start text-5xl text-zinc-600 max-md:max-w-full max-md:text-4xl"
        ></CmsEditable>
        <CmsEditable
          as={RichText}
          cmsFieldName="Description"
          text={data.Description?.json}
          className="flex gap-2.5 text-base font-light text-right text-stone-500"
        />
      </header>
      <div className="mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {utilityItems.map((item, index) => (
            <ArticleCardBlockComponent
              key={index}
              data={item}
              contentLink={{ key: null }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ArticleCardListBlockComponent.displayName = "ArticleCardListBlock";
ArticleCardListBlockComponent.getDataFragment = () => [
  "ArticleCardListBlockData",
  ArticleCardBlockDataFragmentDoc,
];
export default ArticleCardListBlockComponent;
