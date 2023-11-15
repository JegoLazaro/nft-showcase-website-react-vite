import React from "react";
import styles from "../assets/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}
    >
      <div className={`flex items-center ${styles.boxClass} `}>
        <div className={` ${styles.descDiv} fadeLeftMini `}>
          <h1 className={`${styles.h1Text}`}>{title}</h1>
          <p className={`${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="exp://u.expo.dev/update/4bde7bb4-2b1c-4271-9ae5-9f58932c1b5f"
            />
          )}
          
        </div>
        <div
            className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}
        >
                  <img src={mockupImg} alt='mockup' className={styles.sectionImg}/>

        </div>
      </div>

    </div>
  );
};

export default SectionWrapper;
