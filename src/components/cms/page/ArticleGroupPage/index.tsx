import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import {
  ArticleGroupPageDataFragmentDoc,
  type ArticleGroupPageDataFragment,
} from "@/gql/graphql";
import { getArticles } from "./api";
import { CmsImage } from "@/components/shared/cms_image";
import { Button } from "@/components/shared/button";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import {
  getServerContext,
  CmsEditable,
  CmsContentArea,
} from "@remkoj/optimizely-cms-react/rsc";
import { getLabel } from "@/labels";
import { linkDataToUrl } from "@/components/shared/cms_link";
import { Card, type ColorOptions } from "@/components/shared/Card";

const cssClasses: Array<ColorOptions> = [
  "white",
  "blue",
  "dark_blue",
  "orange",
  "green",
  "red",
  "purple",
];
const buttonColor: Array<"dark" | "light"> = [
  "dark",
  "light",
  "light",
  "dark",
  "dark",
  "light",
  "light",
];

export const ArticleGroupPagePage: CmsComponent<
  ArticleGroupPageDataFragment
> = async ({ data, contentLink }) => {
  const articles = contentLink.key
    ? await getArticles(contentLink.key, contentLink.locale)
    : { total: 0, items: [] };
  const { factory } = getServerContext();
  const continueReading = await getLabel("Continue reading", {
    fallback: "Continue reading",
  });

  return (
    <CmsContentArea
      items={data.MainContent}
      fieldName="MainContent"
      className="w-full mt-[32pt]"
    />
  );
};
ArticleGroupPagePage.getDataFragment = () => [
  "ArticleGroupPageData",
  ArticleGroupPageDataFragmentDoc,
];

export default ArticleGroupPagePage;
