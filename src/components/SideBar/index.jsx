import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import picture from "../../assets/images/me.jpg";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import "./SideBar.css";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="SideBar">
      <div className={`SideBarContent Side-${open}`}>
        <div className="UserImage">
          <IconButton className="UserImageBtn">
            <Avatar src={picture} />
            <div className="UserImageOverlay">
              <p className="UserImageText">Mubangizi Allan</p>
            </div>
          </IconButton>
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
      <div className="SideControllerBtn">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
        >
          {!open ? <MenuOutlinedIcon /> : <CloseOutlinedIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default SideBar;
