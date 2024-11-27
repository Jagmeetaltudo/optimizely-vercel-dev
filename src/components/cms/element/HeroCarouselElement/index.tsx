import React from "react";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import CmsImage from "@/components/shared/cms_image";
import { HeroCarouselElementDataFragment, HeroCarouselElementDataFragmentDoc } from "../../../../gql/graphql";
import Styles from "./HeroCarousel.module.css";
export const HeroCarouselElement: CmsComponent<
HeroCarouselElementDataFragment
> = ({ data, contentLink }) => {
  return (
    
    <>
       <CmsImage
        src={data.HeroImage}
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
                  <h2>{data.HeroTitle} </h2>
                </div>
                <div className="col-12 col-md-5">
                  <p>{data.HeroDescription} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

HeroCarouselElement.displayName = "HeroCarouselElement";
HeroCarouselElement.getDataFragment = () => [
  "HeroCarouselElementData",
  HeroCarouselElementDataFragmentDoc,
];
export default HeroCarouselElement;

