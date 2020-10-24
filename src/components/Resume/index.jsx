import React from "react";
import Layout from "../Layout";
import "./style.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import { experiences, learning } from "../../assets/data";
const Resume = () => {
  return (
    <Layout>
      <div className="Resume">
        <h1 className="SectionHeader resume">Resume</h1>
        <div className="ResumePath">
          <h2 className="ResumeTitle">
            <WorkOutlineIcon />
            Working Exerience
          </h2>
          <Timeline>
            {experiences.map((experience) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="TimePath">
                    <div className="PathDateTime">{experience.time}</div>
                    <div className="OtherContent">
                      <h2 className="PathHeader">{experience.title}</h2>
                      <h4 className="PathCompany">{experience.company}</h4>
                      <p className="PathInfo">{experience.resposibility}</p>
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
        <div className="ResumePath">
          <h2 className="ResumeTitle">
            <AssignmentOutlinedIcon />
            Educational Qualifications
          </h2>
          <Timeline>
            {learning.map((step) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="TimePath">
                    <div className="PathDateTime">{step.time}</div>
                    <div className="OtherContent">
                      <h2 className="PathHeader">{step.title}</h2>
                      <h4 className="PathCompany">{step.company}</h4>
                      <p className="PathInfo">{step.resposibility}</p>
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
