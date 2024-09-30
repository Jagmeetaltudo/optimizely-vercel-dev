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
      <div className="relative w-full aspect-[5/2] md:aspect-[5/1] lg:aspect-[3/1] lg:z-[-10] lg:shadow-xl">
        <CmsImage
          src={data.image}
          alt="hero-image"
          aria-hidden
          priority
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
            {(data.title || inEditMode) && (
              <CmsEditable
                as="h2"
                cmsFieldName="CTATileTitle"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              >
                {data.title}
              </CmsEditable>
            )}
            {(data.description || inEditMode) && (
              <CmsEditable
                as={RichText}
                cmsFieldName="CTATileDescription"
                text={data.description?.json}
                className="text-lg md:text-xl lg:text-2xl mb-6"
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
                    text: `${
                      (
                        button as
                          | ButtonBlockPropertyDataFragment
                          | undefined
                          | null
                      )?.text ?? ""
                    }`,
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
                    text: `${
                      (
                        button as
                          | ButtonBlockPropertyDataFragment
                          | undefined
                          | null
                      )?.text ?? ""
                    }`,
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
    </div>
  );
};
CTATileBlockComponent.displayName = "CTATileBlock";
CTATileBlockComponent.getDataFragment = () => [
  "CTATileBlockData",
  CTATileBlockDataFragmentDoc,
];
export default CTATileBlockComponent;
