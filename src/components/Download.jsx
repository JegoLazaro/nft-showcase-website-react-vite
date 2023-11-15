import React from "react";
import styles from "../assets/Global";
import assets from "../assets";
import { FeatureCard } from "./Features";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite} `}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <h1 className={`text-2xl ${styles.blackText}`}>
          Download the Source Code Here
        </h1>
        <a href="https://github.com/JegoLazaro/nft-marketplace">
          {/* <p className={`${styles.pText} ${styles.blackText} underline`}>
            Get the Full Source Code on Github
          </p> */}
          <FeatureCard iconUrl={assets.github_logo} iconText=""/>
        </a>
      </div>
      <div className={styles.flexCenter}>
        <img src={assets.feature2} className={styles.fullImg}/>
      </div>
    </div>
  );
};

export default Download;
