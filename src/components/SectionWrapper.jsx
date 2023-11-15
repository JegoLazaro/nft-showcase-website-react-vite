import React from "react";
import styles from "../assets/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div
      className={`min-h-screen  ${styles.section} ${reverse? styles.bgWhite : ' bg-cyan-700'} ${banner} `}
    >
      <div className={`flex items-center ${reverse ? styles.boxReverseClass: styles.boxClass} w-11/12 sm:w-full minmd:3/4`}>
        <div className={` ${styles.descDiv} ${reverse ? 'fadeRightMini' : 'fadeLeftMini' } 
        ${reverse ? styles.textRight : styles.textLeft}
        `}>
          <h1 className={`
            ${reverse ? styles.blackText : styles.whiteText}
            ${styles.h1Text}
          `}>{title}</h1>
          <p className={`${reverse ? styles.blackText : styles.whiteText} ${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="exp://u.expo.dev/update/4bde7bb4-2b1c-4271-9ae5-9f58932c1b5f"
            />
          )}
          
        </div>
        <div
            className={` flex-1 ${styles.flexCenter} p-8 sm:px-0`}
        >
                  <img src={mockupImg} alt='mockup' className={` ${!reverse ? 'fadeRightMini' : 'fadeLeftMini' }  ${styles.sectionImg}`}/>

        </div>
      </div>

    </div>
  );
};

export default SectionWrapper;
