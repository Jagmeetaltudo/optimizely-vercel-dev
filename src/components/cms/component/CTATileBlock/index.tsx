import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  CTATileBlockDataFragment,
  CTATileBlockDataFragmentDoc,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import CmsImage from "@/components/shared/cms_image";
import { Button } from "@/components/shared/button";
import { linkDataToUrl } from "@remkoj/optimizely-cms-nextjs/components";

export const CTATileBlockComponent: CmsComponent<CTATileBlockDataFragment> = ({
  data,
  inEditMode,
}) => {
  const url1 = data.Link1 ? linkDataToUrl(data.Link1) : undefined;
  const url2 = data.Link2 ? linkDataToUrl(data.Link2) : undefined;
  return (
      <section className="flex relative flex-col justify-center items-center px-20 py-24 w-full min-h-[443px] max-md:px-5 max-md:max-w-full">
        <CmsImage
          src={data.image}
          alt="hero-image"
          aria-hidden
          priority
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
          <div className="flex relative flex-col max-w-full w-[768px]">
            {(data.title || inEditMode) && (
              <CmsEditable
                as="h2"
                cmsFieldName="CTATileTitle"
                className="text-5xl text-teal-950 max-md:max-w-full max-md:text-4xl"
              >
                {data.title}
              </CmsEditable>
            )}
            {(data.description || inEditMode) && (
              <CmsEditable
                as={RichText}
                cmsFieldName="CTATileDescription"
                text={data.description?.json}
                className="text-5xl text-teal-950 max-md:max-w-full"
              />
            )}
            <div>
              <Button url={url1} className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit" buttonVariant="default" buttonType="primary">
                {data.Link1Text}
              </Button>
              <Button url={url2} className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit" buttonVariant="default" buttonType="secondary">
                {data.Link2Text}
              </Button>
            </div>
          </div>
      </section>
  );
};
CTATileBlockComponent.displayName = "CTATileBlock";
CTATileBlockComponent.getDataFragment = () => [
  "CTATileBlockData",
  CTATileBlockDataFragmentDoc,
];
export default CTATileBlockComponent;
