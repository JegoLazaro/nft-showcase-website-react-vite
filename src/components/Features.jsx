import React from 'react';
import assets from '../assets';
import styles from '../assets/Global';


export const FeatureCard = ({iconUrl,iconText}) => (
  <div className={`${styles.featureCard}`}>
    <img src={iconUrl} alt='icon' className={`${styles.featureImg}`}/>
    <p className={`${styles.featureText}`}>{iconText}</p>
  </div>
)

const Features = ({banner}) => {
  return (
    <div className={`${styles.section} banner03 `}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>NFT Mini Marketplace is created using one of the best cross-platform technology, React Native.</p>
        </div>
        <div className={styles.flexWrap}>
          <a href='https://reactnative.dev/' >
            <FeatureCard iconUrl={assets.react} iconText="React Native"/>
          </a>
          <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript"/>
          </a>
          <a href='https://expo.dev/' >
          <FeatureCard iconUrl={assets.expo02} iconText="Expo"/>
          </a>
          <a href='https://expo.dev/' >
          <FeatureCard iconUrl={assets.figma_logo} iconText="Figma"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Features