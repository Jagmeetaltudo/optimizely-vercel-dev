import type DefaultFeaturedTileStyles from "./featuredtile_styles.opti-style.json";
import type { LayoutProps } from "@remkoj/optimizely-cms-react/components";
import type { ReactNode } from "react";

export type DefaultFeaturedLayoutProps = LayoutProps<
  typeof DefaultFeaturedTileStyles
>;
export type FeaturedTileProps = DefaultFeaturedLayoutProps;

export type FeaturedTileComponentProps<
  DT extends Record<string, any> = Record<string, any>,
  LP extends FeaturedTileProps = FeaturedTileProps
> = {
  data: DT;
  layoutProps: LP;
} & JSX.IntrinsicElements["div"];

export type FeaturedTile<
  DT extends Record<string, any> = Record<string, any>,
  LP extends FeaturedTileProps = FeaturedTileProps
> = (props: FeaturedTileComponentProps<DT, LP>) => ReactNode;
