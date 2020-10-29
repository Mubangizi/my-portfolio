import React from "react";
import "./Home.css";
import Layout from "../Layout";

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
        <div className="MySocial"></div>
      </div>
    </Layout>
  );
}

export default Home;