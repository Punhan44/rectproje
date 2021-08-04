import React from 'react';
import  {  WifiLoader } from "react-awesome-loaders";

const Loader = () => {
    return (
        <>
      <WifiLoader
        background={"transparent"}
        desktopSize={"50px"}
        mobileSize={"50px"}
        text={"Wifi Loader"}
        backColor="#E8F2FC"
        frontColor="#4645F6"
      />
    </>
    )
}

export default Loader

