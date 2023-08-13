import React, { useState } from "react";
import "./Header.scss";
import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";

const Header = () => {
  const [BurgerStatus, setBurgerStatus] = useState(false);

  const toggleBurgerNav = () => {
    setBurgerStatus(!BurgerStatus);
  };

  return (
    <div className="Container">
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <div className="Menu">
        <a href="#S">Model S</a>

        <a href="#3">Model 3</a>

        <a href="#X">Model X</a>

        <a href="#Y">Model Y</a>
      </div>
      <div className="RightMenu">
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <Menu className="CustomMenu" onClick={toggleBurgerNav} />
      </div>
      <div className={`BurgerNav ${BurgerStatus ? "open" : ""}`}>
        <div className="CustomClose" onClick={toggleBurgerNav}>
          <Close className="CustomClose" onClick={toggleBurgerNav} />
        </div>
        <li>
          <a href="#S">Model S</a>
        </li>
        <li>
          <a href="#3">Model 3</a>
        </li>
        <li>
          <a href="#X">Model X</a>
        </li>
        <li>
          <a href="#Y">Model Y</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Use Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
      </div>
    </div>
  );
};

export default Header;
