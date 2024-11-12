import React from "react";
import styles from "./HeaderNav.module.css";
import { JWHeaderColumn, Link as OptiLink } from "@/gql/graphql";
import Link from "next/link";
import { linkDataToUrl } from "@/components/shared/cms_link";

interface ContentColumnProps {
  title: string;
  items: OptiLink[];
  link: any;
}

interface ContentSectionProps {
  headercols: JWHeaderColumn[];
}

const ContentColumn: React.FC<ContentColumnProps> = ({
  title,
  items,
  link,
}) => (
  <div>
     <Link
          className={styles.columnItem}
          href={link}
        >
      <h2 className={styles.columnTitle}>{title}</h2>
    </Link>
    <div className={styles.columnContent}>
      {items?.map((item, index) => (
        <Link
          key={index}
          className={styles.columnItem}
          href={item?.url?.default as string}
        >
          {item.text}
        </Link>
      ))}
    </div>
  </div>
);

const ContentSection: React.FC<ContentSectionProps> = ({ headercols }) => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.contentColumns}>
        {headercols?.map((column, index) => (
          <React.Fragment key={index}>
            <ContentColumn
              title={column.HeaderColumnTitle as string}
              items={column.HeaderColumnSubLinks as OptiLink[]}
              link={column?.HeaderColumnLink ? linkDataToUrl(column.HeaderColumnLink) : ''}
            />
            {index < headercols?.length - 1 && (
              <div className={styles.columnSeparator} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
