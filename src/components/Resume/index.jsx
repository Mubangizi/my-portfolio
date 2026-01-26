import React, { useState } from "react";
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
import LinearProgress from "@material-ui/core/LinearProgress";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { experiences, learning, skills } from "../../assets/data";

const parseDate = (dateStr) => {
  const months = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };

  const parts = dateStr.toLowerCase().split(" ");
  if (parts.length === 2) {
    const month = months[parts[0].substring(0, 3)];
    const year = parseInt(parts[1], 10);
    return month !== undefined && year ? new Date(year, month) : null;
  }
  return null;
};

const calculateDuration = (startStr, endStr) => {
  const start = parseDate(startStr);
  const end =
    endStr.toLowerCase() === "present" ? new Date() : parseDate(endStr);

  if (!start || !end) return "";

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0)
    return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
  if (remainingMonths === 0) return `${years} year${years !== 1 ? "s" : ""}`;
  return `${years} yr${years !== 1 ? "s" : ""} ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
};

const getOverallTimeRange = (items) => {
  if (!items?.length) return { range: "", duration: "" };
  if (items.length === 1) {
    const parts = String(items[0].time).split(" - ");
    const start = (parts[0] || "").trim();
    const end = (parts[1] || "").trim();
    return {
      range: items[0].time,
      duration: calculateDuration(start, end),
    };
  }

  const parseRange = (timeStr) => {
    const parts = String(timeStr).split(" - ");
    return {
      start: (parts[0] || "").trim(),
      end: (parts[1] || "").trim(),
    };
  };

  const first = parseRange(items[0].time); // most recent (top)
  const last = parseRange(items[items.length - 1].time); // earliest (bottom)

  if (!last.start || !first.end) return { range: items[0].time, duration: "" };

  const range = `${last.start} - ${first.end}`;
  const duration = calculateDuration(last.start, first.end);

  return { range, duration };
};

const groupConsecutiveByCompany = (items) =>
  items.reduce((acc, item) => {
    const prev = acc[acc.length - 1];
    if (prev && prev.company === item.company) {
      prev.items.push(item);
      return acc;
    }
    acc.push({ company: item.company, items: [item] });
    return acc;
  }, []);

const renderResponsibility = (resposibility, keyPrefix) => {
  if (Array.isArray(resposibility)) {
    return (
      <ul className="PathInfoList">
        {resposibility.map((point, idx) => (
          <li key={`${keyPrefix}-${idx}`} className="PathInfoPoint">
            {point}
          </li>
        ))}
      </ul>
    );
  }

  return <p className="PathInfo">{resposibility}</p>;
};

export const Resume = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const groupedExperiences = groupConsecutiveByCompany(experiences);

  // Sort skills by percentage (highest first) and limit initially
  const sortedSkills = [...skills].sort((a, b) => b.percentage - a.percentage);
  const initialSkillCount = 9;
  const displayedSkills = showAllSkills
    ? sortedSkills
    : sortedSkills.slice(0, initialSkillCount);

  return (
    <div className="Resume">
      <div className="SkillsInfo">
        <h1 className="SectionHeader skills">My Skills</h1>
        <div className="SkillsList">
          {displayedSkills.map((skill) => (
            <div className="SkillItem" key={skill.name}>
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
        <div className="ShowMoreBtnContainer">
          {sortedSkills.length > initialSkillCount && (
            <button
              className="ShowMoreBtn"
              onClick={() => setShowAllSkills(!showAllSkills)}
            >
              {showAllSkills ? (
                <>
                  <ExpandLessIcon /> Show Less
                </>
              ) : (
                <>
                  <ExpandMoreIcon /> Show More Skills (
                  {sortedSkills.length - initialSkillCount} more)
                </>
              )}
            </button>
          )}
        </div>
      </div>

      <h1 className="SectionHeader resume">Resume</h1>
      <div className="ResumePath">
        <div className="ResumeTitle">
          <WorkOutlineIcon />
          <h2>Working Exerience</h2>
        </div>
        <Timeline>
          {groupedExperiences.map((group) => (
            <TimelineItem key={`${group.company}-${group.items[0].time}`}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="TimePath">
                  <div className="PathDateTime">
                    {(() => {
                      const { range, duration } = getOverallTimeRange(
                        group.items,
                      );
                      return (
                        <>
                          <div>{range}</div>
                          {duration && (
                            <div className="DurationBadge">{duration}</div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                  <div className="OtherContent">
                    <h4 className="PathCompany">{group.company}</h4>

                    {group.items.length > 1 ? (
                      <div className="CompanyRoles">
                        {group.items.map((role) => {
                          const parts = String(role.time).split(" - ");
                          const start = (parts[0] || "").trim();
                          const end = (parts[1] || "").trim();
                          const roleDuration = calculateDuration(start, end);

                          return (
                            <div
                              key={`${role.company}-${role.title}-${role.time}`}
                              className="CompanyRole"
                            >
                              <div className="CompanyRoleHeader">
                                <h3 className="CompanyRoleTitle">
                                  {role.title}
                                </h3>
                                <div className="CompanyRoleMeta">
                                  <span className="CompanyRoleTime">
                                    {role.time}
                                  </span>
                                  {roleDuration && (
                                    <span className="CompanyRoleDuration">
                                      · {roleDuration}
                                    </span>
                                  )}
                                </div>
                              </div>
                              {renderResponsibility(
                                role.resposibility,
                                `${role.company}-${role.title}`,
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <>
                        <h2 className="PathHeader">{group.items[0].title}</h2>
                        {renderResponsibility(
                          group.items[0].resposibility,
                          `${group.items[0].company}-${group.items[0].title}`,
                        )}
                      </>
                    )}
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      <div className="ResumeTitle">
        <AssignmentOutlinedIcon />
        <h2>Educational Qualifications</h2>
      </div>
      <Timeline>
        {learning.map((step) => (
          <TimelineItem key={`${step.title}-${step.time}`}>
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
                  {renderResponsibility(
                    step.resposibility,
                    `${step.title}-${step.time}`,
                  )}
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

const ResumePage = () => (
  <Layout>
    <Resume />
  </Layout>
);

export default ResumePage;
