import React, { useState } from "react";
import { Avatar, IconButton, Tooltip } from "@material-ui/core";
import picture from "../../assets/images/me.jpg";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import "./SideBar.css";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  const handleDrawer = () => {
    setOpen(!open);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/mubangizi",
      label: "GitHub",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://linkedin.com/in/your-profile",
      label: "LinkedIn",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/your-handle",
      label: "Twitter",
    },
  ];

  return (
    <div className="SideBar">
      <div className={`SideBarContent Side-${open}`}>
        <div className="UserImage">
          <IconButton
            className="UserImageBtn"
            onClick={() => scrollToSection("home")}
          >
            <Avatar src={picture} />
            <div className="UserImageOverlay">
              <p className="UserImageText">Mubangizi Allan</p>
            </div>
          </IconButton>
          <div className="UserGitProfile ItemUnderline">
            <a
              href="https://github.com/mubangizi"
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/mubangizi
            </a>
          </div>
        </div>
        <div className="NavItems">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("resume")}>Resume</button>
          <button onClick={() => scrollToSection("portfolio")}>
            Portfolios
          </button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
        <div>
          <div className="SocialLinks">
            {socialLinks.map((link) => (
              <Tooltip key={link.label} title={link.label} placement="top">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="SocialLink"
                >
                  {link.icon}
                </a>
              </Tooltip>
            ))}
          </div>
          <div className="RemarksSection">
            <p>© {currentYear} Mubangizi Allan</p>
          </div>
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
