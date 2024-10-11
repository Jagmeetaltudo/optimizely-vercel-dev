"use client";
import { useState } from "react";
import styles from "./HeaderNav.module.css";
import { JWHeaderColumn, JWMainNavigation } from "@/gql/graphql";
import FeaturedContent from "./FeaturedContent";
import exp from "constants";
import ContentSection from "./ContentSection";

interface NavigationProps {
  mainNavs: JWMainNavigation[];
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  return (
    <nav className={styles.navigationLinks}>
      {props.mainNavs.map((nav, index) => (
        <div
          key={index}
          className={styles.navLinkContainer}
          onMouseEnter={() => setOpenDropdown(index)}
          onMouseLeave={() => setOpenDropdown(null)}
          onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
        >
          <div className={styles.navLink}>{nav.Title}</div>
          {openDropdown === index && (
            <div className={styles.dropdown}>
              <ContentSection
                headercols={nav.HeaderColumns as JWHeaderColumn[]}
              />
              <FeaturedContent />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
