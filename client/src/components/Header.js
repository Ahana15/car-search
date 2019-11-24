import React from "react";

import "../assets/stylesheets/Header.css";

const Header = () => {
  return (
    <div className="header-contents">
      <div className="header-title">Dude Where's My Car?</div>
      <img className="header-icon" src="car.png" alt="Car search"></img>
    </div>
  );
};

export default Header;
