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
import { experiences, learning, skills } from "../../assets/data";
import LinearProgress from "@material-ui/core/LinearProgress";
const Resume = () => {
  return (
    <Layout>
      <div className="Resume">
        <div className="SkillsInfo">
          <h1 className="SectionHeader skills">My Skills</h1>
          <div className="SkillsList">
            {skills.map((skill) => (
              <div className="SkillItem">
                <h3>{skill.name}</h3>
                <div className="SkillsBar">
                  <p className="SkillPercentage">{`${skill.percentage} %`}</p>
                  <LinearProgress
                    variant="determinate"
                    value={skill.percentage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ResumeInfo">
          <h1 className="SectionHeader resume">Resume</h1>
          <div className="ResumePath">
            <div className="ResumeTitle">
              <WorkOutlineIcon />
              <h2>Working Exerience</h2>
            </div>
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
            <div className="ResumeTitle">
              <AssignmentOutlinedIcon />
              <h2>Educational Qualifications</h2>
            </div>
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
      </div>
    </Layout>
  );
};

export default Resume;
