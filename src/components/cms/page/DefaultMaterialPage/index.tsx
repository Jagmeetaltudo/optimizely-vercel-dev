import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import {
  DefaultMaterialPageDataFragment,
  DefaultMaterialPageDataFragmentDoc,
} from "@/gql/graphql";
import {
  getServerContext,
  CmsContentArea,
} from "@remkoj/optimizely-cms-react/rsc";
import React from "react";

export const DefaultMaterialPage: CmsComponent<
  DefaultMaterialPageDataFragment
> = async ({ data }) => {
  getServerContext();

  return (
    <>
      <CmsContentArea
        items={data.HeaderContent}
        fieldName="HeaderContent"
      />
     
            <CmsContentArea
              items={data.MainContent}
              fieldName="MainContent"
              className="w-full mt-[32pt]"
            />
      <CmsContentArea
        items={data.FooterContent}
        fieldName="FooterContent"
      />
    </>
  );
};
DefaultMaterialPage.getDataFragment = () => [
  "DefaultMaterialPageData",
  DefaultMaterialPageDataFragmentDoc,
];

export default DefaultMaterialPage;
