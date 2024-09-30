import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  ButtonBlockPropertyDataFragment,
  CTADefaultTileDataFragment,
  CTADefaultTileDataFragmentDoc,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import ButtonBlock from "@/components/component/block/button_block";
import button from "@/components/shared/button";

const CTADefaultTileElement: CmsComponent<CTADefaultTileDataFragment> = ({
  data: { Title, Description, Image, Link },
  inEditMode,
}) => {
  const buttonClasses: string[] = [];

  return (
    <div className="relative mt-28 p-0 ctaTile-without-image">
      <figure className="mb-0">
        {(Image || inEditMode) && (
          <CmsEditable
            as={Image}
            cmsFieldName="CTATileImage"
            src={Image}
            alt={""}
            width={48}
            height={48}
            className="w-full object-cover object-right h-[540px] md:h-[360px] lg:h-auto"
          />
        )}
      </figure>
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-0 md:m-12">
        <div className="text-center max-w-[780px]">
          {(Title || inEditMode) && (
            <CmsEditable as="h2" cmsFieldName="CTATileTitle" className="text-[38px] font-normal leading-normal tracking-[0.76px] mb-8 md:tracking-normal md:mb-8 lg:text-[48px]">
              {Title}
            </CmsEditable>
          )}
          {(Description || inEditMode) && (
            <CmsEditable as="p" cmsFieldName="CTATileDescription">
              {Description}
            </CmsEditable>
          )}
        {/*   <div className="flex justify-center">
            {
              <CmsEditable
                as={ButtonBlock}
                cmsFieldName="CTATileButton"
                contentLink={{ key: null }}
                data={{
                  ...button,
                  __typename: undefined, // Remove data type, so only data fields will be matched
                  " $fragmentName": undefined, // Remove fragment source, so only data fields will be matched
                  className:
                    `${
                      (
                        button as
                          | ButtonBlockPropertyDataFragment
                          | undefined
                          | null
                      )?.className ?? ""
                    } ${buttonClasses.join(" ")}`.trim() || undefined, // Apply additional classes
                }}
              />
            }
          </div> */}
        </div>
      </div>
    </div>
  );
};
CTADefaultTileElement.getDataFragment = () => ['CTADefaultTileData', CTADefaultTileDataFragmentDoc]

export default CTADefaultTileElement;
