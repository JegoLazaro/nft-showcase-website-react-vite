import React from "react";
import Download from "./components/Download";
import Button from "./components/Button";
import Features from "./components/Features";
import SectionWrapper from "./components/SectionWrapper";
import assets from './assets'

const App = () => {
  return (
    <div className="">
      <>
        <SectionWrapper 
          title="NFT Mini Marketplace. Best Platform to Showcase Unique NFTs"
          description="Showcase, Snipe, & Sell Your Unique NFTs. Earn crypto, collect one of a kind NFTs. Join millions of people using the best NFT marketplace in the market."
          showBtn
          mockupImg = {assets.feature1}
          banner="banner"
        />
        <SectionWrapper 
          title="Smart User Interface Marketplace"
          description="Experience a modern and responsive UI of NFT Mini Marketplace. Sleak and stylish design and combination of colors for cleanest User Interface Design"
          
          mockupImg = {assets.feature2}
          // banner="banner"
          reverse
        />
        <Features />
        <SectionWrapper 
          title="Deployment"
          description="NFT Mini Marketplace. is built and deployed using Expo platform. This provides the application to run natively on both android and IOS devices."
          showBtn
          mockupImg = {assets.feature1}
          banner="banner"
        />
        {/* <SectionWrapper 
          title="Smart User Interface Marketplace"
          description="Experience a modern and responsive UI of NFT Mini Marketplace. Sleak and stylish design and combination of colors for cleanest User Interface Design"
          
          mockupImg = {assets.feature2}
          // banner="banner"
          reverse
        /> */}
      </>
    </div>
  );
  
};

export default App;
