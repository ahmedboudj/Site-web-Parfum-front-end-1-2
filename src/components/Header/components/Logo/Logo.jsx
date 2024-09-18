import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
    </div>
  );
};

export default Logo;
