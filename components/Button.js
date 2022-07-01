import React from "react";

const Button = ({ assetUrl, link }) => {
  //console.log(assetUrl)
  return (
    <div
      className="bg-black hover:bg-black/75 flex items-center py-2 px-4 rounded-md mt-2 w-fit cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <img
        src={assetUrl.src}
        alt="expo_icon"
        className="w-5 h-5 minmd:w-10 minmd:h-10 object-contain"
      />
      <div className="flex flex-col justify-start ml-4">
        <p className="text-white font-IBMPlex minmd:text-lg font-normal text-xs">
          View It On
        </p>
        <p className="text-white font-IBMPlex minmd:text-lg font-bold text-sm">
          Expo Store
        </p>
      </div>
    </div>
  );
};

export default Button;
