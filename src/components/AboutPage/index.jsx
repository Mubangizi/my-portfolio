import React from "react";
import Layout from "../Layout";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import "./About.css";

export const About = () => {
  return (
    <div className="About">
      <h1 className="SectionHeader about-me">About Me</h1>
      <div className="AboutSection">
        <img
          className="FrontImage"
          src="https://lh3.googleusercontent.com/igSWHP1BIjzOlW-jX0acOGEBi7ZIK3ie5EnZHbuP6Sllrt0L3cXUvmPfBBQRu2XVgd0Y0fKeijGTq6s-ehmuqwW7GfBhqXK27i_X27tFrNGrt36dM1kypWgvhL9sE4HS83aL3wm1XK7dstmvdS9VyNLzn02SF0tdC_qMA0IeApjiyLGtLnE1B92zF9yam3qsQ01ysNnJK84CWix6MxGQeLogRYIflqKlJWTmhkpirgZJpveCYdy7xKbsiH0fOzZASIEArKyECnIZXztsW8lK8cur-Y_qnQ4kl6Gs6Cge42Ab2CLY4MpVG6BziNyoDkTsyUl7QaE66lP8-QA3XSveanNwVjtK8-eb1yeRVMr5zx89iTvpn0GhQuiSNekJdTLKhCsZ3M0Y0mddYb8ttHr8NHgMY04jFoTPh25G6XmKbu87qA9G3kEdWXe6-5mtrQ9Ld3Bf2d02WgnCI_jess6z_0nNunLfzjq0x0gkeM0rhYtmkqk73Yail-6kPDyWk2wuNKT3s5aAKAQWMR-AbeDKHPzKhX3595DRGFuEhSrO1cpr3daxzcBV1U59qLAfJrLSca-6hFpa5dY1c4_zUbrrB54otSknRKOpXlE-F8v5Ts6fk6cEedBw6odLqtS72urUF-awltUTPC9k5CQWitK6qLb3v5dPEdqbgXwaJbighXZDpXdnRtnUMxpgva-5=w998-h748-no?authuser=0"
          alt="Mubangizi Allan - Full Stack Developer"
        />
        <div className="AboutInfo">
          <h3>Mubangizi Allan</h3>
          <p className="AboutDescription">
            I am a seasoned Full-Stack Developer with over 5 years of experience
            in building enterprise-grade web systems. My expertise spans the
            entire software development lifecycle, from architecture design to
            deployment and maintenance. I excel at creating scalable,
            high-performance solutions that drive business growth while
            maintaining exceptional code quality and user experience.
          </p>
          <div className="AboutHighlights">
            <div className="HighlightItem">
              <span className="HighlightNumber">6+</span>
              <span className="HighlightText">Years Experience</span>
            </div>
            <div className="HighlightItem">
              <span className="HighlightNumber">10+</span>
              <span className="HighlightText">Systems Completed</span>
            </div>
            <div className="HighlightItem">
              <span className="HighlightNumber">30+</span>
              <span className="HighlightText">Happy Clients</span>
            </div>
          </div>
          <table className="AboutTable">
            <tr>
              <td className="AboutTableLabel">Nationality</td>
              <td>: Ugandan</td>
            </tr>
            <tr>
              <td className="AboutTableLabel">Languages</td>
              <td>: English (Fluent)</td>
            </tr>
            <tr>
              <td className="AboutTableLabel">Location</td>
              <td>: Kampala, Uganda</td>
            </tr>
            <tr>
              <td className="AboutTableLabel">Availability</td>
              <td>: Open to Opportunities</td>
            </tr>
          </table>
        </div>
      </div>

      <h1 className="SectionHeader services">Expertise</h1>
      <div className="AboutServices">
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <DescriptionOutlinedIcon />
          </div>
          <h4 className="ServiceTitle">System Architecture</h4>
          <p className="ServiceInfo">
            Designing scalable and maintainable system architectures with a
            focus on performance, security, and future-proofing. Expert in
            microservices and cloud-native solutions.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <CodeOutlinedIcon />
          </div>
          <h4 className="ServiceTitle">Full-Stack Development</h4>
          <p className="ServiceInfo">
            Building robust web applications using modern frameworks and best
            practices. Specializing in React, Node.js, and cloud technologies
            for scalable solutions.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <BuildOutlinedIcon />
          </div>
          <h4 className="ServiceTitle">API Development</h4>
          <p className="ServiceInfo">
            Creating secure, well-documented RESTful APIs and GraphQL services.
            Implementing authentication, rate limiting, and comprehensive error
            handling.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <CloudOutlinedIcon />
          </div>
          <h4 className="ServiceTitle">DevOps & Cloud</h4>
          <p className="ServiceInfo">
            Implementing CI/CD pipelines, containerization, and cloud
            infrastructure. Expert in AWS, Docker, and Kubernetes for scalable
            deployment solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <Layout>
    <About />
  </Layout>
);

export default AboutPage;
