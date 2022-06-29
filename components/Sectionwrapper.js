import React from "react";
import mockupImg from "../assets/home_hero.png";
import styles from "../styles/global";
import assets from "../assets";
import Button from "./Button";

const Sectionwrapper = ({ title, description, showBtn, banner }) => {
  //console.log("style = ", assets.expo);
  return (
    <div
      className={`min-h-screen flex justify-center items-center p-16 sm:p-8 ${banner} `}
    >
      <div className={`flex items-center flex-row md:flex-col`}>
        <div className={`flex-1 w-full flex justify-start flex-col md:mb-10`}>
          <h1 className="font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13">
            {title}
          </h1>
          <p className="my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16">
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="deployed nft market place app"
            />
          )}
        </div>

        <div className=" flex-1 p-8 sm:px-0 flex justify-center items-center">
          <img
            src={mockupImg.src}
            alt="mockup"
            className="w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sectionwrapper;
