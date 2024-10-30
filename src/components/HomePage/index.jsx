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
            As a seasoned Full-Stack Developer, I bring extensive expertise and
            a strong commitment to delivering high-quality solutions. My
            comprehensive knowledge of the software development lifecycle,
            coupled with a versatile skill set, allows me to address complex
            challenges effectively. <br />
            <br />I am Goal-driven, reliable, and adaptable, I consistently meet
            demanding standards and thrive in dynamic work environments.
            <br />
            <br />
            My proven track record of creating innovative, robust software
            highlights my value as a team member, ready to take on diverse
            projects and consistently exceed expectations.
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
    </HomeLayout>
  );
}

export default Home;
