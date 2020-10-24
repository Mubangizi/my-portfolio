import React from "react";
import Layout from "../Layout";
import picture from "../../assets/images/me.jpg";
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
          <div>
            <img src={picture} alt="" />
          </div>
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
                <td className="AboutTableLable">Age</td>
                <td>: 24</td>
              </tr>
              <tr>
                <td className="AboutTableLable">Nationality</td>
                <td>: Ugandan</td>
              </tr>
              <tr>
                <td className="AboutTableLable">Languages</td>
                <td>: English, Runyankole, Luganda</td>
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
            <h4 className="ServiceTitle">Web design</h4>
            <p className="ServiceInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              recusandae sapiente aperiam omnis reiciendis voluptates excepturi
            </p>
          </div>
          <div className="ServiceCard">
            <div className="ServiceIcon">
              <CodeOutlinedIcon />
            </div>
            <h4 className="ServiceTitle">Web Development</h4>
            <p className="ServiceInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing eli recusandae
              sapiente aperiam omnis reiciendis voluptate
            </p>
          </div>
          <div className="ServiceCard">
            <div className="ServiceIcon">
              <BuildOutlinedIcon />
            </div>

            <h4 className="ServiceTitle">Backend Systems</h4>
            <p className="ServiceInfo">
              Lorem ipsum dolor sit amet consectetur adipisicin recusandae
              sapiente aperiam omnis reicepturi
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
