import React from "react";
import "./Home.css";
import { IconButton } from "@material-ui/core";
import { HomeLayout } from "../Layout";
import GitLightIcon from "../../assets/icons/github_light.svg";
import LinkedInLightIcon from "../../assets/icons/linkedin.svg";
import TwitterLightIcon from "../../assets/icons/twitter.svg";

function Home() {
  return (
    <HomeLayout>
      <div className="Container">
        <div className="HomeMainContent">
          <h1>Hi, I am Mubangizi Allan</h1>
          <p>
            I am a fullstack web developer. I can provide clean code and pixel
            perfect design. I also make websites interactive and write organised
            REST APIs.
          </p>
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
                href="https://www.linkedin.com/in/mubangizi-allan-0ab932102/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={LinkedInLightIcon} alt="" />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://twitter.com/mubangiziallan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={TwitterLightIcon} alt="" />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
