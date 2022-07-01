import React from "react";
import assets from "../assets";
import Button from "./Button";

const Sectionwrapper = ({
  title,
  description,
  showBtn,
  banner,
  mockupImg,
  reverse,
}) => {
  //console.log("style1 = ", mockupImg);
  return (
    <div
      className={`min-h-screen flex justify-center items-center p-16 sm:p-8 ${banner} ${
        reverse ? "bg-white" : "bg-primary"
      }`}
    >
      <div
        className={`flex items-center w-11/12 sm:w-full minmd:w-3/4 ${
          reverse
            ? "flex-row-reverse md:flex-col-reverse fadeRightMini"
            : "flex-row md:flex-col fadeLeftMini"
        } `}
      >
        <div
          className={`flex-1 w-full flex justify-start flex-col md:mb-10 ${
            reverse ? "text-right" : "text-left"
          }`}
        >
          <h1
            className={`font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 ${
              reverse ? "text-black" : "text-white"
            }`}
          >
            {title}
          </h1>
          <p
            className={`my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 ${
              reverse ? "text-black" : "text-white"
            } `}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@mohit_maroliya/NFTMarketApp?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>

        <div className=" flex-1 p-8 sm:px-0 flex justify-center items-center">
          <img
            src={mockupImg}
            alt="mockup"
            className="w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sectionwrapper;
