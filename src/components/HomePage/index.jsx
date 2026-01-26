import React, { useEffect, useState } from "react";
import { IconButton, Typography, Button } from "@material-ui/core";
import { HomeLayout } from "../Layout";
import GitLightIcon from "../../assets/icons/github_light.svg";
import LinkedInLightIcon from "../../assets/icons/linkedin.svg";
import TwitterLightIcon from "../../assets/icons/twitter.svg";
import { Portfolio } from "../Portfolio";
import { Contact } from "../Contact";
import { Resume } from "../Resume";
import "./Home.css";

const SocialButton = ({ href, icon, label }) => (
  <IconButton
    className="social-button"
    aria-label={label}
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={icon} alt={label} />
  </IconButton>
);

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

  return (
    <div className="Container">
      <div className={`HomeMainContent ${isVisible ? "fade-in" : ""}`}>
        <div className="hero-section">
          <Typography variant="h1" className="greeting">
            Hi, I'm <span className="highlight">Mubangizi Allan</span>
          </Typography>
          <Typography variant="h2" className="title">
            Full-Stack Software Engineer
          </Typography>
          <Typography variant="body1" className="description">
            Building scalable, high-performance web applications with modern
            technologies and clean architecture
          </Typography>
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
              className="cta-button"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cta-button cta-button-secondary"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="MySocial">
          <IconButton>
            <a
              href="https://github.com/mubangizi"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={GitLightIcon} alt="" />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://www.linkedin.com/in/mubangizi-allan/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={LinkedInLightIcon} alt="" />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://twitter.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={TwitterLightIcon} alt="" />
            </a>
          </IconButton>
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
