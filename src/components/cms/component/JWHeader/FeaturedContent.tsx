import React from "react";
import styles from "./HeaderNav.module.css";

const FeaturedContent: React.FC = () => {
  return (
    <aside className={styles.featuredContent}>
      <div className={styles.featuredContentInner}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f22e548ef20dc2f21eafc45e02c64302f8c1c52fdb088e50633089f253a338e?apiKey=00a3660157ba4b838569d3ec33bb80c8&"
          alt="Indigenous inspired design"
          className={styles.featuredImage}
        />
        <h2 className={styles.featuredTitle}>
          Indigenous Inspired Design: Traditional vs Modern
        </h2>
        <p className={styles.featuredDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div className={styles.readMoreWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d2cba332e26542d7c608ff2ca3ac131f182706497c134e46891f949818a1895?apiKey=00a3660157ba4b838569d3ec33bb80c8&"
            alt=""
            className={styles.readMoreLine}
          />
          <span className={styles.readMoreText}>Read More</span>
        </div>
      </div>
    </aside>
  );
};

export default FeaturedContent;
