import React from "react";
import Download from "./components/Download";
import Button from "./components/Button";
import Features from "./components/Features";
import SectionWrapper from "./components/SectionWrapper";
import assets from './assets'
import styles from "./assets/Global";

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
          
          mockupImg = {assets.feature3}
          reverse
        />
        <SectionWrapper 
          title="App Showcasing"
          description="The NFT Mini Marketplace App features screens for browsing available NFTs, viewing selected ones, and accessing the user's profile with owned NFTs, bids, and favorites."
          
          mockupImg = {assets.feature4}
          banner="banner04"
          reverse
        />
        <Download />
        <div className="px-4 py-2 justify-center items-center flex-col text-center banner04">
          <p className={`text-md ${styles.blackText}`}>
            Earn, Collect, Enjoy – Your gateway to the best NFT marketplace. 
          </p>
          <p className={`text-sm ${styles.blackText} font-bold`}>
          © JGRL17 - 2023
          </p>
        </div>
      </>
    </div>
  );
  
};

export default App;
