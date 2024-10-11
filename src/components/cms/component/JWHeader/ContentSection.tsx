import React from "react";
import styles from "./HeaderNav.module.css";
import { JWHeaderColumn, Link as OptiLink } from "@/gql/graphql";
import Link from "next/link";

interface ContentColumnProps {
  title: string;
  items: OptiLink[];
}

interface ContentSectionProps {
  headercols: JWHeaderColumn[];
}

const ContentColumn: React.FC<ContentColumnProps> = ({ title, items }) => (
  <div>
    <h2 className={styles.columnTitle}>{title}</h2>
    <div className={styles.columnContent}>
      {items.map((item, index) => (
        <Link
          key={index}
          className={styles.columnItem}
          href={item.url?.default as string}
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
        {headercols.map((column, index) => (
          <React.Fragment key={index}>
            <ContentColumn
              title={column.HeaderColumnTitle as string}
              items={column.HeaderColumnLinks as OptiLink[]}
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
