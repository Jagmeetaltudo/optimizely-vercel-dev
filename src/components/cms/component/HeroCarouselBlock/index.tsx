import {
  HeroBannerBlockDataFragment,
  HeroCarouselBlockDataFragment,
  HeroCarouselBlockDataFragmentDoc,
  IContentDataFragment,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import CmsImage from "@/components/shared/cms_image";

export type BannerItems = Array<
  HeroBannerBlockDataFragment & IContentDataFragment
>;

function filterMaybeArray<T>(
  input: Array<T | null> | T | null | undefined
): Array<T> {
  if (!input) return [];
  if (!Array.isArray(input)) return [input];
  return input.filter((x) => x) as Array<T>;
}

export const HeroCarouselBlockComponent: CmsComponent<
  HeroCarouselBlockDataFragment
> = ({ data }) => {
  const utilityItems = filterMaybeArray(data?.Banners) as BannerItems;
  return (
    <section className="hero">
      <div className="hero-content">
        <section className="flex flex-col">
          {utilityItems?.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex relative flex-col items-start px-20 pt-14 pb-5 w-full min-h-[700px] max-md:px-5 max-md:max-w-full"
              >
                <CmsImage
                  loading="lazy"
                  src={item?.BannerImage}
                  alt="Inspirational background"
                  className="object-cover absolute inset-0 size-full"
                  layout="fill"
                />
                <div className="relative px-5 pt-5 pb-16 max-w-full bg-white bg-opacity-80 w-[604px]">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                      <h1 className="relative text-5xl text-teal-950 max-md:mt-10 max-md:text-4xl">
                        {item.BannerTitle ?? ""}
                      </h1>
                    </div>
                    <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                      <CmsEditable
                        as={RichText}
                        cmsFieldName="TileDescription"
                        text={item.BannerDescription?.json}
                      />
                    </div>
                  </div>
                </div>
                <button className="overflow-hidden relative z-10 px-12 py-7 mt-0 ml-44 text-sm font-bold tracking-wide text-white uppercase bg-cyan-900 max-md:px-5 max-md:ml-2.5">
                  {item.BannerButtonText}
                </button>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

HeroCarouselBlockComponent.displayName = "HeroCarouselBlock";
HeroCarouselBlockComponent.getDataFragment = () => [
  "HeroCarouselBlockData",
  HeroCarouselBlockDataFragmentDoc,
];

export default HeroCarouselBlockComponent;
