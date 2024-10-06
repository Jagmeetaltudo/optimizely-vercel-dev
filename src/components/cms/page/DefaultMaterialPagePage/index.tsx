import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import {
  DefaultMaterialPageDataFragment,
  DefaultMaterialPageDataFragmentDoc,
} from "@/gql/graphql";
import {
  getServerContext,
  CmsContentArea,
} from "@remkoj/optimizely-cms-react/rsc";

export const DefaultMaterialPagePage: CmsComponent<
  DefaultMaterialPageDataFragment
> = async ({ data, contentLink }) => {
  const { factory } = getServerContext();

  return (
    <div className="outer-padding">
      <div className="mx-auto container">
        <div className="py-[32pt]">
          <CmsContentArea
            items={data.HeroCarousel}
            fieldName="HeroCarousel"
            className="w-full mt-[32pt]"
          />
          {/*   <CmsContentArea
            items={data.FeaturedTiles}
            fieldName="FeaturedTiles"
            className="w-full mt-[32pt]"
          />
          <CmsContentArea
            items={data.CategoryTiles}
            fieldName="CategoryTiles"
            className="w-full mt-[32pt]"
          /> */}
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
