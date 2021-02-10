import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/block.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <h1>
        cubitt <br /> designs
      </h1>
    </Link>

    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
