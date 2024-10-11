import React from "react";
import styles from "./Footer.module.css";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  FooterDataFragment,
  FooterDataFragmentDoc,
  JWSocialIcon,
  FooterColumn,
  Link as OptiLink,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import CmsLink from "@/components/shared/cms_link";
import CmsImage from "@/components/shared/cms_image";
import Link from "next/link";
import FooterCol from "./FooterColumn";

function filterMaybeArray<T>(
  input: Array<T | null> | T | null | undefined
): Array<T> {
  if (!input) return [];
  if (!Array.isArray(input)) return [input];
  return input.filter((x) => x) as Array<T>;
}

export const FooterComponent: CmsComponent<FooterDataFragment> = async ({
  data,
}) => {
  const icons = filterMaybeArray(data.icons) as JWSocialIcon[];
  const footerCols = filterMaybeArray(data.columns) as FooterColumn[];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumns}>
            {footerCols.map((column, index) => (
              <FooterCol
                links={column.ColumnItems as OptiLink[]}
                Icon={column.Icon || undefined}
                Title={column.Title as string}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footerDescription}>
            <CmsImage
              loading="lazy"
              src={data.Logo}
              alt="JELD-WEN logo"
              className={styles.footerLogo}
              width={100}
              height={100}
            />

            <CmsEditable
              as={RichText}
              cmsFieldName="FooterText"
              text={data.footertext?.json}
              className="styles.footerText"
            />
          </div>
          <div className={styles.socialLinks}>
            {icons &&
              icons.map(
                (icon, index) =>
                  icon && (
                    <Link href={icon.Link?.default as string} key={index}>
                      <CmsImage
                        src={icon.IconValue}
                        alt="Social Icon"
                        width={24}
                        height={24}
                      />
                    </Link>
                  )
              )}
          </div>
        </div>
        <div className={styles.topBorder} />
        <div className={styles.footerBottom}>
          <div className={styles.footerLinks}>
            {data.links &&
              data.links.map(
                (link, index) => link && <CmsLink key={index} href={link} />
              )}
          </div>
          <div className={styles.copyright}>
            <p className={styles.footerText}>{data.copyrighttext}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterComponent.displayName = "Footer";
FooterComponent.getDataFragment = () => ["FooterData", FooterDataFragmentDoc];

export default FooterComponent;
