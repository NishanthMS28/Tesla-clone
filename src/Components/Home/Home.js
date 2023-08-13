import React from "react";
import "./Home.scss";
import Section from "./Section/Section";

const Home = () => {
  return (
    <div className="container">
      <Section
        title="Model S"
        description="Order Online for the Touchless Delivery"
        bgImage="/images/model-s.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for the Touchless Delivery"
        bgImage="/images/model-y.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for the Touchless Delivery"
        bgImage="/images/model-3.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for the Touchless Delivery"
        bgImage="/images/model-x.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        bgImage="/images/solar-panel.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        bgImage="/images/solar-roof.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        bgImage="/images/accessories.avif"
        leftBtnTxt="Shop now"
      />
    </div>
  );
};

export default Home;
