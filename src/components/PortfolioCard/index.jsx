import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = ({ image, title, url, info }) => (
  <div className="PortfolioCard">
    <a href={url} rel="noopener noreferrer" target="_blank">
      <img
        src={require(`../../assets/images/projects/${image}`)}
        alt={title}
      />
    </a>
    <h3>
      <a href={url} rel="noopener noreferrer" target="_blank">
        {title}
      </a>
    </h3>
    <p>{info}</p>
  </div>
  );

export default PortfolioCard;
