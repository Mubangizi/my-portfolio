import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { HomeLayout } from "../Layout";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import {
  IoBriefcaseSharp,
  IoMailSharp,
  IoSparklesSharp,
} from "react-icons/io5";
import { Portfolio } from "../Portfolio";
import { Contact } from "../Contact";
import { Resume } from "../Resume";
import "./Home.css";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div className="Container">
      <div className={`HomeMainContent ${isVisible ? "fade-in" : ""}`}>
        <div className="hero-section">
          {/* <div className="greeting-badge">
            <IoSparklesSharp className="sparkle-icon" />
            <span>Full-Stack Developer</span>
          </div> */}
          <Typography variant="h1" className="greeting">
            Hi, I'm <span className="highlight">Mubangizi Allan</span>
          </Typography>
          <Typography variant="h2" className="title">
            Full-Stack Software Engineer
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" className="description">
              Building scalable, high-performance web applications with modern
              technologies and clean architecture
            </Typography>
          </div>
        </div>

        <div className="content-section">
          <Typography variant="body1" className="bio">
            I specialize in end-to-end software development, transforming
            complex requirements into elegant, maintainable solutions. With deep
            expertise across the full development lifecycle, I deliver
            production-ready applications that scale and perform.
          </Typography>

          <Typography variant="body1" className="bio">
            My approach combines technical precision with pragmatic
            problem-solving. I excel in fast-paced environments, consistently
            shipping robust software that meets business objectives while
            maintaining high code quality standards.
          </Typography>

          <div className="cta-buttons">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="cta-button cta-primary"
            >
              <IoBriefcaseSharp />
              <span>View My Work</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cta-button cta-secondary"
            >
              <IoMailSharp />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        <div className="MySocial">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => (
  <HomeLayout>
    <Home />
    <Portfolio />
    <Resume />
    <Contact />
  </HomeLayout>
);

export default HomePage;
