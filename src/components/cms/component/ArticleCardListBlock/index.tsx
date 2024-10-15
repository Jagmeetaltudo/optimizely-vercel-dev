import {
  ArticleCardBlockDataFragment,
  ArticleCardBlockDataFragmentDoc,
  ArticleCardListBlockDataFragment,
  IContentDataFragment,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import BlogCarousel from "./BlogCarousel";
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
interface BlogData {
  title: string;
  image: any;
}
export const ArticleCardListBlockComponent: CmsComponent<
  ArticleCardListBlockDataFragment
> = ({ data }) => {
  const utilityItems = filterMaybeArray(data.Articles) as TileItems;
  const blogData: BlogData[] = utilityItems.map(item => ({
    title: item.Title || '',
    image: item.Image
  }));
  return (
    <section className="flex flex-col my-8">
      <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1239px] max-md:max-w-full">
        <h1 className="text-5xl text-zinc-600 max-md:text-4xl">{data.Title}</h1>
        <p className="flex gap-2.5 text-base font-light text-right text-stone-500">
          <span className="flex-auto self-start">
            <CmsEditable
              as={RichText}
              cmsFieldName="Description"
              text={data.Description?.json}
            />
          </span>
        </p>
      </div>
      <div className="mt-6 w-full max-md:max-w-full">
        <BlogCarousel blogData={blogData} />
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
