import React from "react";
import Button from "./Button";
import ecom1 from "../assets/amazon.png";
import ecom2 from "../assets/flipkart.png";

const style1 = `text-lg font-semibold`;

const HeroLeft = () => {
  return (
    <div className="uppercase w-2/5">
      <h1 className="text-8xl font-extrabold">your feet deserves the best</h1>
      <p className="py-8 font-medium w-3/5 text-gray-700">
        your feet deserves the best and we're here to help with our shoes.your
        feet deserves the best and we're here to help with our shoes.
      </p>
      <div className="text-bold flex btn gap-6 pb-8 ">
        <Button className={style1} title="SHOP NOW" />
        <Button title="CATEGORY" />
      </div>
      <div className="text-gray-700">Also Available On</div>
      <div className="e-com flex align-middle gap-3 my-2">
        <img src={ecom2} alt="" />
        <img src={ecom1} alt="" />
      </div>
    </div>
  );
};

export default HeroLeft;
