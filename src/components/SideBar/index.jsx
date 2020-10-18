import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import picture from "../../assets/images/me.jpg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="UserImage">
        <Avatar src={picture} />
      </div>
      <div className="NavItems">
        <NavLink to={{ pathname: `/` }} exact={true}>
          Home
        </NavLink>
        <NavLink to={{ pathname: `/about` }}>About</NavLink>
        <NavLink to={{ pathname: `/resume` }}>Resume</NavLink>
        <NavLink to={{ pathname: `/portfolio` }}>Portfolios</NavLink>
        <NavLink to={{ pathname: `/contact` }}>Contact</NavLink>
      </div>
      <div className="RemarksSection">
        <p>© 2020 Mubangizi Allan</p>
      </div>
    </div>
  );
};

export default SideBar;
