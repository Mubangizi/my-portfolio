import { Container } from "@material-ui/core";
import React from "react";
import SideBar from "../SideBar";
import "./Layout.css";

const Layout = ({ children }) => (
  <div className="Layout">
    <SideBar />
    <main>
      <Container>{children}</Container>
    </main>
  </div>
  );

export const HomeLayout = ({ children }) => (
  <div className="Layout">
    <div className="LiveBackground">
      <SideBar />
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  </div>
  );

export default Layout;
