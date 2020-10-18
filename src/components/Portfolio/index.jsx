import React from "react";
import CertificateCard from "../CertificateCard";
import Layout from "../Layout";
import PortfolioCard from "../PortfolioCard";

import "./Portfolio.css";

const Portfolio = () => {
  const portfolios = [
    {
      title: "Crane cloud",
      image:
        "https://i1.wp.com/catmedia.ie/wp-content/uploads/2017/10/Space-BG-Black.jpg?fit=1200%2C889&ssl=1&w=640",
      url: "https://staging.cranecloud.io",
      info: "A cloud Platform as a Service provider",
    },
    {
      title: "Mobile Shop",
      image:
        "https://i1.wp.com/catmedia.ie/wp-content/uploads/2017/10/Space-BG-Black.jpg?fit=1200%2C889&ssl=1&w=640",
      url: "https://mobileshop.ug",
      info: "An E-commerce platform for electronics",
    },
    {
      title: "Infinity Comics",
      image:
        "https://i1.wp.com/catmedia.ie/wp-content/uploads/2017/10/Space-BG-Black.jpg?fit=1200%2C889&ssl=1&w=640",
      url: "https://infinitycomics.tv",
      info: "A content povider for African shows",
    },
  ];
  const cerfificates = [
    {
      name: "Technical Support Fundamentals",
      issuing_organisation: "Coursera",
      image: "tech_support.png",
      issue_date: "August 2020",
      credential_url:
        "https://www.coursera.org/account/accomplishments/certificate/Y6KPHEHRJTEG",
      credential_id: "Y6KPHEHRJTEG",
    },
    {
      name: "Architecting with Google Kubernetes Engine: Foundations",
      issuing_organisation: "Coursera",
      image: "kubernetes_cert.png",
      issue_date: "August 2020",
      credential_url:
        "https://www.coursera.org/account/accomplishments/certificate/Y3BMNVCBKRGB",
      credential_id: "Y3BMNVCBKRGB",
    },
    {
      name: "Python Data Structures",
      issuing_organisation: "Coursera",
      image: "data_structures_cert.png",
      issue_date: "September 2020",
      credential_url:
        "https://www.coursera.org/account/accomplishments/certificate/FEQSREM526PE",
      credential_id: "FEQSREM526PE",
    },
  ];
  return (
    <Layout>
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
    </Layout>
  );
};

export default Portfolio;
