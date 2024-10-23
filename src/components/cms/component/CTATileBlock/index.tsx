import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  CTATileBlockDataFragment,
  CTATileBlockDataFragmentDoc,
} from "@/gql/graphql";
import CmsImage from "@/components/shared/cms_image";
import { linkDataToUrl } from "@remkoj/optimizely-cms-nextjs/components";
import Button from "@/components/shared/button";

interface ActionButtonProps {
  text: string;
  variant: "primary" | "secondary";
}

export const CTATileBlockComponent: CmsComponent<CTATileBlockDataFragment> = ({
  data,
  inEditMode,
}) => {
  const url1 = data.Link1 ? linkDataToUrl(data.Link1) : undefined;
  const url2 = data.Link2 ? linkDataToUrl(data.Link2) : undefined;
  const baseClasses =
    "flex flex-col flex-1 grow shrink-0 basis-0 w-fit text-xl font-bold tracking-wide uppercase";
  const getVariantClasses = (variant: "primary" | "secondary") =>
    variant === "primary"
      ? "text-white bg-cyan-900"
      : "text-teal-950 border-solid border-[3px] border-teal-950";

  return (
    <section className="flex flex-col text-center my-8">
      <div className="flex relative flex-col justify-center items-center px-20 py-24 w-full min-h-[443px] max-md:px-5 max-md:max-w-full">
        <CmsImage
          src={data.image}
          alt="hero-image"
          aria-hidden
          priority
          fill
          className="object-cover z-0 w-full h-full max-md:max-w-full"
        />
        <div className="flex relative flex-col max-w-full w-[768px]">
          <h2 className="text-5xl text-teal-950 text-teal-large max-md:max-w-full max-md:text-4xl">
            {data.title}
          </h2>
          <div className="flex flex-wrap gap-5 self-center mt-16 max-w-full max-md:mt-10">
            <div className="primary_button">
              <Button
                url={url1}
                className={`${baseClasses} ${getVariantClasses("primary")}`}
              >
                {data.Link1Text}
              </Button>
            </div>
            <Button
              url={url2}
              className={`${baseClasses} ${getVariantClasses("secondary")}`}
            >
              <div className="px-16 py-9">{data.Link2Text}</div>
            </Button>
          </div>
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
