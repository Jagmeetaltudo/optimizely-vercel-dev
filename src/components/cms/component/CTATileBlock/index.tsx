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
import button, { Button } from "@/components/shared/button";
import { linkDataToUrl } from "@remkoj/optimizely-cms-nextjs/components";

export const CTATileBlockComponent: CmsComponent<CTATileBlockDataFragment> = ({
  data,
  inEditMode,
}) => {
  const url1 = data.Link1 ? linkDataToUrl(data.Link1) : undefined;
  const url2 = data.Link2 ? linkDataToUrl(data.Link2) : undefined;
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
              <Button url={url1} buttonVariant="default" buttonType="primary">
                {data.Link1Text}
              </Button>
              <Button url={url2} buttonVariant="default" buttonType="secondary">
                {data.Link2Text}
              </Button>
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
