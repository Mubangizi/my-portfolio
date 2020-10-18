import React from "react";
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
      </div>
    </Layout>
  );
};

export default Portfolio;
