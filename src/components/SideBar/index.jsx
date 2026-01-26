import React, { useState } from "react";
import { Avatar, IconButton, Tooltip } from "@material-ui/core";
import picture from "../../assets/images/me.jpg";
import { FiMenu, FiX } from "react-icons/fi";
import {
  IoHomeSharp,
  IoPersonSharp,
  IoDocumentTextSharp,
  IoBriefcaseSharp,
  IoMailSharp,
  IoSparklesSharp,
} from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaTwitter, FaRocket } from "react-icons/fa";
import "./SideBar.css";
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

  const navItems = [
    { id: "home", label: "Home", icon: <IoHomeSharp /> },
    { id: "about", label: "About", icon: <IoPersonSharp /> },
    { id: "resume", label: "Resume", icon: <IoDocumentTextSharp /> },
    { id: "portfolio", label: "Portfolio", icon: <IoBriefcaseSharp /> },
    { id: "contact", label: "Contact", icon: <IoMailSharp /> },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/mubangizi",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/mubangizi-allan/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/",
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
            <Avatar src={picture} className="UserAvatar" />
            <div className="UserImageOverlay">
              <p className="UserImageText">Mubangizi Allan</p>
            </div>
          </IconButton>
          <div>
            <h3 className="UserName">Mubangizi Allan</h3>
            <p className="UserTitle">Full-Stack Software Engineer</p>
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
        </div>
        <div className="NavItems">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="NavItem"
            >
              <span className="NavIcon">{item.icon}</span>
              <span className="NavLabel">{item.label}</span>
            </button>
          ))}
        </div>
        <div className="SideBarFooter">
          <div className="SocialLinks">
            {socialLinks.map((link) => (
              <Tooltip key={link.label} title={link.label} placement="top">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="SocialLink"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </Tooltip>
            ))}
          </div>
          <div className="RemarksSection">
            <p>© {currentYear}</p>
            <p className="RemarksName">Mubangizi Allan</p>
          </div>
        </div>
      </div>
      <div className="SideControllerBtn">
        <button
          onClick={handleDrawer}
          className="MenuToggle"
          aria-label="Toggle menu"
        >
          {!open ? <FiMenu /> : <FiX />}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
