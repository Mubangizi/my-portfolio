import React from "react";
import "./Home.css";
import Layout from "../Layout";
import GitLightIcon from "../../assets/icons/github_light.svg";
import LinkedInLightIcon from "../../assets/icons/linkedin.svg";
import TwitterLightIcon from "../../assets/icons/twitter.svg";
import { IconButton } from "@material-ui/core";

function Home() {
  return (
    <Layout>
      <div className="HomeMainContent">
        <h1>Hi, I am Mubangizi Allan</h1>
        <p>
          I am a fullstack web developer. I can provide clean code and pixel
          perfect design. I also make websites interactive and write organised
          REST APIs.
        </p>
        <div className="MySocial">
          <IconButton>
            <img src={GitLightIcon} alt="" />
          </IconButton>
          <IconButton>
            <img src={LinkedInLightIcon} alt="" />
          </IconButton>
          <IconButton>
            <img src={TwitterLightIcon} alt="" />
          </IconButton>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
