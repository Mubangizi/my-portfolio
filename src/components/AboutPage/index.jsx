import React from "react";
import Layout from "../Layout";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaLayerGroup,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaMobile,
} from "react-icons/fa";
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
            Full-Stack Software Engineer with 6+ years of experience delivering
            enterprise-grade web applications. I architect and build scalable
            systems from concept to production, specializing in modern JavaScript
            ecosystems, cloud infrastructure, and high-performance backends.
            Proven track record of shipping maintainable code that drives
            measurable business impact.
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
            <FaLayerGroup />
          </div>
          <h4 className="ServiceTitle">System Architecture</h4>
          <p className="ServiceInfo">
            Designing distributed systems that scale. Expertise in microservices
            architecture, event-driven patterns, and system design principles.
            Focus on maintainability, reliability, and performance optimization.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <FaCode />
          </div>
          <h4 className="ServiceTitle">Full-Stack Development</h4>
          <p className="ServiceInfo">
            Building production-ready applications with React, Node.js, and
            TypeScript. Expert in state management, API integration, and
            responsive UI development. Deliver clean, maintainable code that
            scales.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <FaServer />
          </div>
          <h4 className="ServiceTitle">Backend Engineering</h4>
          <p className="ServiceInfo">
            Developing RESTful and GraphQL APIs with robust authentication and
            authorization. Implementing caching strategies, rate limiting, and
            comprehensive monitoring for production systems.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <FaDatabase />
          </div>
          <h4 className="ServiceTitle">Database Engineering</h4>
          <p className="ServiceInfo">
            Designing efficient database schemas and optimizing queries for
            performance. Proficient in SQL and NoSQL databases, data modeling,
            indexing strategies, and migration planning.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <FaCloud />
          </div>
          <h4 className="ServiceTitle">Cloud & DevOps</h4>
          <p className="ServiceInfo">
            Implementing CI/CD pipelines and infrastructure as code. Expertise
            in AWS services, Docker containerization, Kubernetes orchestration,
            and automated deployment workflows.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <FaShieldAlt />
          </div>
          <h4 className="ServiceTitle">Security & Authentication</h4>
          <p className="ServiceInfo">
            Implementing secure authentication flows with OAuth2, JWT, and SSO.
            Expertise in encryption, security best practices, vulnerability
            assessment, and compliance standards.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <FaRocket />
          </div>
          <h4 className="ServiceTitle">Performance Optimization</h4>
          <p className="ServiceInfo">
            Analyzing and optimizing application performance across the stack.
            Proficient in profiling tools, caching strategies, CDN integration,
            and load testing for high-traffic systems.
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceIcon">
            <FaMobile />
          </div>
          <h4 className="ServiceTitle">Mobile Development</h4>
          <p className="ServiceInfo">
            Building cross-platform mobile applications with React Native.
            Experience with native integrations, offline-first architecture, and
            app store deployment processes.
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
