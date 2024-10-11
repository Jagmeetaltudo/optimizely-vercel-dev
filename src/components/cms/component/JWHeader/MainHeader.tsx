
import React, { useState } from "react";
import styles from "./HeaderNav.module.css";
import TopBar from "./TopBar";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  JWHeaderDataFragment,
  JWHeaderDataFragmentDoc,
  JWHeaderTopBar,
  JWMainNavigation,
  Link,
} from "@/gql/graphql";
import CmsImage from "@/components/shared/cms_image";
import { CmsLink } from "@remkoj/optimizely-cms-nextjs/components";
import FeaturedContent from "./FeaturedContent";
import Navigation from "./Navigation";

export const MainHeaderComponent: CmsComponent<JWHeaderDataFragment> = async ({
  data,
}) => {


  const topBar = data.topbar as JWHeaderTopBar;
  const mainNavs = data.mainNav as JWMainNavigation[];

  return (
    <header className={styles.headerNav}>
      <div className={styles.mainContainer}>
        <TopBar
          findastore={topBar.FindAStore || undefined}
          links={topBar.LeftNavigationLinks as Link[]}
          searchIcon={topBar.SearchIcon || undefined}
        />
        <CmsImage
          loading="lazy"
          src={data.logo}
          className={styles.logo}
          alt="Company logo"
          width={150}
          height={150}
        />
        <CmsImage
          loading="lazy"
          src={data.bannerr}
          className={styles.banner}
          alt="Banner image"
          width={150}
          height={150}
        />
        <Navigation mainNavs={mainNavs} />
      </div>
    </header>
  );
};

MainHeaderComponent.displayName = "JWHeader";
MainHeaderComponent.getDataFragment = () => [
  "JWHeaderData",
  JWHeaderDataFragmentDoc,
];

export default MainHeaderComponent;
