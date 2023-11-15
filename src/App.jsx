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
          mockupImg = {assets.feature4}
        />
      </>
    </div>
  );
};

export default App;
