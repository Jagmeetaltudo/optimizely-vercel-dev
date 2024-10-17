import CmsImage from "@/components/shared/cms_image";
import { linkDataToUrl } from "@/components/shared/cms_link";
import {
  CTAButtonBlockDataFragment,
  IContentDataFragment,
} from "@/gql/graphql";
import React from "react";
import CTAButtonBlock from "../CTAButtonBlock";
import Styles from "../HeroCarouselBlock/HeroCarousel.module.css";

interface CarouselSlideProps {
  title: string;
  subtitle: string;
  button: any;
  image: any;
}

export type TileItems = Array<
  CTAButtonBlockDataFragment & IContentDataFragment
>;

function filterMaybeArray<T>(
  input: Array<T | null> | T | null | undefined
): Array<T> {
  if (!input) return [];
  if (!Array.isArray(input)) return [input];
  return input.filter((x) => x) as Array<T>;
}
interface ButtonData {
  text: string;
  url: any;
  className: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  title,
  subtitle,
  button,
  image,
}) => {
  const utilityItems = filterMaybeArray(button) as TileItems;
  const buttonData: ButtonData[] = utilityItems.map((item) => ({
    text: item.Text || "",
    url: item.Link ? linkDataToUrl(item.Link) : undefined,
    className: item.ClassName || "",
  }));
  return (
    <>
      
      <CmsImage
        src={image}
        alt="hero-image"
        aria-hidden
        priority
        fill
        className="object-cover absolute inset-0 max-md:max-w-full"
      />
        <div className={Styles.bannerTextWrapper}>
          <div className="container">
            <div className={Styles.textbox}>
              <div className="row">
                <div className="col-12 col-md-7">
                  <h2>{title} </h2>
                </div>
                <div className="col-12 col-md-5">
                  <p>{subtitle} </p>
                </div>
              </div>
              <div className={Styles.btnWrap}>
                {buttonData.map((button, index) => (
                  <CTAButtonBlock
                    key={index}
                    text={button.text}
                    url={button.url.toString()}
                    className={button.className}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default CarouselSlide;
