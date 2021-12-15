import React from "react";
import Layout from "../Layout";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import "./About.css";

const AboutPage = () => {
  return (
    <Layout>
      <div className="About">
        <h1 className="SectionHeader about-me">About Me</h1>
        <div className="AboutSection">
          <img
            className="FrontImage"
            src="https://lh3.googleusercontent.com/igSWHP1BIjzOlW-jX0acOGEBi7ZIK3ie5EnZHbuP6Sllrt0L3cXUvmPfBBQRu2XVgd0Y0fKeijGTq6s-ehmuqwW7GfBhqXK27i_X27tFrNGrt36dM1kypWgvhL9sE4HS83aL3wm1XK7dstmvdS9VyNLzn02SF0tdC_qMA0IeApjiyLGtLnE1B92zF9yam3qsQ01ysNnJK84CWix6MxGQeLogRYIflqKlJWTmhkpirgZJpveCYdy7xKbsiH0fOzZASIEArKyECnIZXztsW8lK8cur-Y_qnQ4kl6Gs6Cge42Ab2CLY4MpVG6BziNyoDkTsyUl7QaE66lP8-QA3XSveanNwVjtK8-eb1yeRVMr5zx89iTvpn0GhQuiSNekJdTLKhCsZ3M0Y0mddYb8ttHr8NHgMY04jFoTPh25G6XmKbu87qA9G3kEdWXe6-5mtrQ9Ld3Bf2d02WgnCI_jess6z_0nNunLfzjq0x0gkeM0rhYtmkqk73Yail-6kPDyWk2wuNKT3s5aAKAQWMR-AbeDKHPzKhX3595DRGFuEhSrO1cpr3daxzcBV1U59qLAfJrLSca-6hFpa5dY1c4_zUbrrB54otSknRKOpXlE-F8v5Ts6fk6cEedBw6odLqtS72urUF-awltUTPC9k5CQWitK6qLb3v5dPEdqbgXwaJbighXZDpXdnRtnUMxpgva-5=w998-h748-no?authuser=0"
            alt=""
          />
          <div className="AboutInfo">
            <h3> I am Mubangizi Allan</h3>
            <p>
              I am a fullstack web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <table className="AboutTable">
              <tr>
                <td className="AboutTableLable">Full Name</td>
                <td>: Mubangizi Allan</td>
              </tr>
              <tr>
                <td className="AboutTableLable">Nationality</td>
                <td>: Ugandan</td>
              </tr>
              <tr>
                <td className="AboutTableLable">Languages</td>
                <td>: English</td>
              </tr>
              <tr>
                <td className="AboutTableLable">Address</td>
                <td>: Uganda, Kampala central </td>
              </tr>
              <tr>
                <td className="AboutTableLable">Freelance</td>
                <td>: Available</td>
              </tr>
            </table>
          </div>
        </div>

        <h1 className="SectionHeader services">Services</h1>
        <div className="AboutServices">
          <div className="ServiceCard">
            <div className="ServiceIcon">
              <DescriptionOutlinedIcon />
            </div>
            <h4 className="ServiceTitle">Application design</h4>
            <p className="ServiceInfo">
              Design Applications requirements and archtecture
            </p>
          </div>
          <div className="ServiceCard">
            <div className="ServiceIcon">
              <CodeOutlinedIcon />
            </div>
            <h4 className="ServiceTitle">Web Development</h4>
            <p className="ServiceInfo">
              Development of web applications with clean code
            </p>
          </div>
          <div className="ServiceCard">
            <div className="ServiceIcon">
              <BuildOutlinedIcon />
            </div>

            <h4 className="ServiceTitle">Backend Systems</h4>
            <p className="ServiceInfo">
              Designing and building backend systems like REST APIs
            </p>
          </div>
          <div className="ServiceCard">
            <div className="ServiceIcon">
              <BuildOutlinedIcon />
            </div>

            <h4 className="ServiceTitle">Dev ops</h4>
            <p className="ServiceInfo">
              Able to deliver applications and services at high velocity:
              evolving and improving products at a faster pace than
              organizations using traditional software development and
              infrastructure management processes.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
