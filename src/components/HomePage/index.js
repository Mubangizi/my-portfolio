import React from "react";
import "./Home.css";
import SideBar from "../SideBar";

function Home() {
  return (
    <div className="Home">
      <SideBar />
      <div className="HomeMainContent">
        <h1>Welcome To My Page</h1>
      </div>
    </div>
  );
}

export default Home;
