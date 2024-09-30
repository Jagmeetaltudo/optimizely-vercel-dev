import {
  TitleAndDescriptionElementDataFragment,
  TitleAndDescriptionElementDataFragmentDoc,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import {
  CmsEditable,
  getServerContext,
} from "@remkoj/optimizely-cms-react/rsc";

export const TitleAndDescriptionElement: CmsComponent<
  TitleAndDescriptionElementDataFragment
> = async ({ data, contentLink: { locale } }) => {
  const { factory } = getServerContext();
  return (
    <>
      <h3 className="my-0 mt-[16px]">{data?.TestTitle ?? ""}</h3>
      {data?.TestDescription && (
        <RichText factory={factory} text={data?.TestDescription?.json} />
      )}
      <CmsEditable as="h2" cmsFieldName="TestTitle" />
      <CmsEditable
        as={RichText}
        cmsFieldName="TestDescription"
        text={data?.TestDescription?.json}
      />

      <div className="flex justify-between mb-[16px]">
        <p className="text-[12px] text-pale-sky my-0">
          {data?.TestTitle ?? ""}
        </p>
        <p className="text-[12px] text-pale-sky my-0">
          {data?.TestDescription?.json ?? ""}
        </p>
      </div>
    </>
  );
};
TitleAndDescriptionElement.getDataFragment = () => [
  "TitleAndDescriptionElementData",
  TitleAndDescriptionElementDataFragmentDoc,
];

export default TitleAndDescriptionElement;
