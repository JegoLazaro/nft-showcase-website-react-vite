import styles from "../assets/Global";
import assets from "../assets";
import React,{ useState } from "react";

const Button = ({ assetUrl, link }) => {
  const [showDefaultQR, setShowDefaultQR] = useState(true);

  const toggleQRCode = () => {
    setShowDefaultQR((prev) => !prev);
  };
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
          <p className={`${styles.btnText} font-bold text-sm sm:text-xs`}>Expo Store</p>
        </div>
      </div>
      <div className="">
        <img src={showDefaultQR ? assets.ios_qr : assets.android_qr} alt="ios_qr" className=" w-32 ml-14" />
        <div className="flex flex-col ml-4">
          <p className={`${styles.btnText} mt-2 text-black font-bold text-sm`}>
            Scan QR Code With Expo Go App
          </p>
        </div>
        <div className="flex justify-evenly">
        <div
          className={`${styles.btnBlack} h-12 active:bg-slate-700 mr-2`}
          onClick={toggleQRCode}
        >
          <img
            src={assets.apple_logo}
            alt="apple_icon"
            className={styles.btnIcon}
          />
          <p className="text-white sm:text-xs">IOS QR</p>
        </div>
        <div
          className={`${styles.btnBlack} h-12 active:bg-slate-700 ml-2`}
          onClick={toggleQRCode}

        >
          <img
            src={assets.android_logo}
            alt="apple_icon"
            className={styles.btnIcon}
          />
          <p className="text-white sm:text-xs">Android QR</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
