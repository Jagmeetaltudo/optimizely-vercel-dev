import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import {
  DefaultMaterialPageDataFragment,
  DefaultMaterialPageDataFragmentDoc,
} from "@/gql/graphql";
import { getArticles } from "./api";
import {
  getServerContext,
  CmsContentArea,
} from "@remkoj/optimizely-cms-react/rsc";
import { getLabel } from "@/labels";

export const DefaultMaterialPagePage: CmsComponent<
  DefaultMaterialPageDataFragment
> = async ({ data, contentLink }) => {
  const articles = contentLink.key
    ? await getArticles(contentLink.key, contentLink.locale)
    : { total: 0, items: [] };
  const { factory } = getServerContext();
  const continueReading = await getLabel("Continue reading", {
    fallback: "Continue reading",
  });

  return (
    <div className="outer-padding">
      <div className="mx-auto container">
        <div className="py-[32pt]">
          <CmsContentArea
            items={data.MainContent}
            fieldName="HeroCarousel"
            className="w-full mt-[32pt]"
          />
           <CmsContentArea
            items={data.MainContent}
            fieldName="FeaturedTiles"
            className="w-full mt-[32pt]"
          />
           <CmsContentArea
            items={data.MainContent}
            fieldName="CategoryTiles"
            className="w-full mt-[32pt]"
          />
        </div>
      </div>
    </div>
  );
};
DefaultMaterialPagePage.getDataFragment = () => [
  "DefaultMaterialPageData",
  DefaultMaterialPageDataFragmentDoc,
];

export default DefaultMaterialPagePage;
