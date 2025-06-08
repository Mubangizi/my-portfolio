import React from "react";
import { cerfificates, portfolios } from "../../assets/data";
import CertificateCard from "../CertificateCard";
import Layout from "../Layout";
import PortfolioCard from "../PortfolioCard";

import "./Portfolio.css";

export const Portfolio = () => (
  <div className="Portfolio">
    <h1 className="SectionHeader projects">Projects</h1>
    <div className="PortfolioProjects">
      {portfolios.map((portfolio) => (
        <PortfolioCard
          title={portfolio.title}
          image={portfolio.image}
          url={portfolio.url}
          info={portfolio.info}
        />
      ))}
    </div>
    <h1 className="SectionHeader certification">Certificates</h1>
    <div className="PortfolioProjects">
      {cerfificates.map((certificate) => (
        <CertificateCard
          name={certificate.name}
          org={certificate.issuing_organisation}
          date={certificate.issue_date}
          credential_url={certificate.credential_url}
          id={certificate.credential_id}
          image={certificate.image}
        />
      ))}
    </div>
  </div>
);

const PortfolioPage = () => (
  <Layout>
    <Portfolio />
  </Layout>
);

export default PortfolioPage;
