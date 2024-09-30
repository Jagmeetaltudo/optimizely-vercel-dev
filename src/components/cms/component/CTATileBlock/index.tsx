import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  ButtonBlockPropertyDataFragment,
  CTATileBlockDataFragment,
  CTATileBlockDataFragmentDoc,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import CmsImage from "@/components/shared/cms_image";
import ButtonBlock from "@/components/component/block/button_block";
import button from "@/components/shared/button";

export const CTATileBlockComponent: CmsComponent<CTATileBlockDataFragment> = ({
  data,
  inEditMode,
}) => {
  const buttonClasses: string[] = [];
  return (
    <div>
      <div className="article-image aspect-[5/2] md:aspect-[5/1] relative w-full lg:aspect-[3/1] lg:z-[-10] lg:shadow-xl">
        <CmsImage
          src={data.image}
          alt="hero-image"
          aria-hidden
          priority
          fill
          className="object-cover"
        />
      </div>
      <div>
        <div>
          {(data.title || inEditMode) && (
            <CmsEditable as="h2" cmsFieldName="CTATileTitle">
              {data.title}
            </CmsEditable>
          )}
          {(data.description || inEditMode) && (
            <CmsEditable
              as={RichText}
              cmsFieldName="CTATileDescription"
              text={data.description?.json}
            />
          )}
          <div>
            {
              <CmsEditable
                as={ButtonBlock}
                cmsFieldName="Link1"
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
            {
              <CmsEditable
                as={ButtonBlock}
                cmsFieldName="Link2"
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
          </div>
        </div>
      </div>
    </div>
  );
};
CTATileBlockComponent.displayName = "CTATileBlock";
CTATileBlockComponent.getDataFragment = () => [
  "CTATileBlockData",
  CTATileBlockDataFragmentDoc,
];
export default CTATileBlockComponent;
