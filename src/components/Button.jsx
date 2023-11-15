import React from "react";
import styles from "../assets/Global";
import assets from "../assets";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      
      <div
        className={`${styles.btnBlack} h-12 `}
        onClick={() => window.open(link, "_blank")}
      >
        <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
        <div className="flex flex-col justify-start ml-4">
          <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
          <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
        </div>
      </div>
      <div className="">
        <img src={assets.ios_qr} alt="ios_qr" className=" w-32 ml-12" />
        <div className="flex flex-col ">
          <p className={`${styles.btnText} mt-2 text-black font-bold text-sm`}>Scan QR Code With Expo Go App</p>
        </div>
      </div>
    </div>
  );
};

export default Button;
