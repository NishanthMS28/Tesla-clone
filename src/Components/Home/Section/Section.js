import React from "react";
import "./Section.scss";
import { Fade } from "react-reveal";

const Section = ({ title, description, leftBtnTxt, rightBtnTxt, bgImage }) => {
  return (
    <div
      className="wrap"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <Fade bottom>
        <div className="ItemText">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Fade>
      <div>
        <Fade bottom>
          <div className="ButtonGroup">
            <div className="LeftButton">{leftBtnTxt}</div>
            {rightBtnTxt && (
              <div>
                <div className="RightButton">{rightBtnTxt}</div>
                <img src="/images/down-arrow.svg" className="DownArrow" />
              </div>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Section;
