import React from "react";
import styles from "./HeaderNav.module.css";
import CmsImage from "@/components/shared/cms_image";
import { ContentReference, Link } from "@/gql/graphql";

interface TopBarProps {
  links: Link[];
  findastore: ContentReference | undefined;
  searchIcon: ContentReference | undefined;
}

const TopBar: React.FC<TopBarProps> = (props) => {
  return (
    <div className={styles.topBar}>
      <nav className={styles.leftNav}>
        <div className={styles.leftNavLinks}>
          {props.links.map((link, index) => (
            <a
              className={styles.navLink}
              href={link.url?.default as string}
              key={index}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className={styles.storeLocator}>
          <CmsImage
            loading="lazy"
            src={props.findastore}
            className={styles.icon}
            alt=""
            width={100}
            height={100}
          />
          <a href="#find-store">Find A STORE</a>
        </div>
      </nav>
      <div className={styles.rightNav}>
        <button aria-label="Shopping cart">
          <CmsImage
            loading="lazy"
            src={props.searchIcon}
            className={styles.cartIcon}
            alt=""
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
