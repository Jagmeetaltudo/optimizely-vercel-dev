"use client";

import React, {
  useState,
  useEffect,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";
import Slider, { Settings } from "react-slick";
import Styles from "../../../cms/component/HeroCarouselBlock/HeroCarousel.module.css";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  cssEase: "linear",
};
export type CarouselProps = PropsWithChildren<{
  itemCount: number;
}>;

export const HeroCarousel: FunctionComponent<CarouselProps> = ({
  itemCount,
  children,
}) => {
  return (
    <section className="relative w-full min-h-[560px] max-md:pr-5 max-md:max-w-full">
      <div className={`${Styles.heroBannerSlider}`}>
        <div>
          <Slider {...settings}>{children}</Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
