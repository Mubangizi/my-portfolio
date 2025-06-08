import React from "react";
import Layout from "./components/Layout";
import { Home } from "./components/HomePage";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { About } from "./components/AboutPage";

const App = () => (
  <Layout>
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="portfolio">
      <Portfolio />
    </section>
    <section id="resume">
      <Resume />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </Layout>
);

export default App;
