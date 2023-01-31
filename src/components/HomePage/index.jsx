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
            As a Full-stack Developer, I bring a wealth of experience and
            expertise to any project.
            <br />I am committed to delivering exceptional results and
            consistently meet high standards. My deep understanding of the
            software development lifecycle and broad range of technical skills
            allow me to tackle any challenge. <br /><br/>I am goal-oriented,
            dependable, and able to adapt to changing requirements, making me a
            valuable asset to any team. With a proven track record in developing
            robust and innovative software solutions, I am ready to take on any
            project and deliver outstanding results.
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
