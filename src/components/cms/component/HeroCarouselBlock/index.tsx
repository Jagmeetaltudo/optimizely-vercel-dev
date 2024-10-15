import {
  HeroBannerBlockDataFragment,
  HeroCarouselBlockDataFragment,
  HeroCarouselBlockDataFragmentDoc,
  IContentDataFragment,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import Carousel from "./Carousel";

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

interface slidesData {
  title: string;
  image: any;
  subtitle: string;
  buttons: any;
}

export const HeroCarouselBlockComponent: CmsComponent<
  HeroCarouselBlockDataFragment
> = ({ data }) => {
  const slides = filterMaybeArray(data?.Banners) as BannerItems;
  const slidesData: slidesData[] = slides.map((item) => ({
    title: item.BannerTitle || "",
    image: item.BannerImage,
    subtitle: item.BannerDescription || "",
    buttons: item.BannerButton,
  }));
  return <Carousel slidesData={slidesData} />;
};

HeroCarouselBlockComponent.displayName = "HeroCarouselBlock";
HeroCarouselBlockComponent.getDataFragment = () => [
  "HeroCarouselBlockData",
  HeroCarouselBlockDataFragmentDoc,
];

export default HeroCarouselBlockComponent;
