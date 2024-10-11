import React from "react";
import styles from "./Footer.module.css";
import { ContentReference, Link as OptiLink } from "@/gql/graphql";
import CmsImage from "@/components/shared/cms_image";
import Image from "next/image";
import Link from "next/link";

interface FooterColumnProps {
  Icon: ContentReference | undefined;
  Title: string;
  links: OptiLink[];
}

const FooterCol: React.FC<FooterColumnProps> = ({ Icon, Title, links }) => {
  return (
    <div className={styles.footerColumn}>
      <div className={styles.columnContent}>
        <CmsImage
          src={Icon}
          loading="lazy"
          className={styles.columnIcon}
          alt={Title}
          width={100}
          height={100}
        />
        <Image
          loading="lazy"
          src="https://app-alll01saass8g3pp001.cms.optimizely.com/globalassets/footer-columns/divider.svg"
          alt=""
          width={100}
          height={100}
          className={styles.columnDivider}
        />
        <div className={styles.columnTextContent}>
          <div className={styles.columnTitle}>{Title}</div>
          {links.map((item, index) => (
            <div
              key={index}
              className={
                index === 0 ? styles.columnSubtitle : styles.columnText
              }
            >
              <Link href={item.url?.default as string}>{item.text}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterCol;
