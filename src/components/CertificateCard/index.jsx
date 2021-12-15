import React from "react";
import "./CertificateCard.css";

const CertificateCard = ({ name, org, date, credential_url, id, image }) => (
  <div className="CertificateCard">
    <a href={credential_url} rel="noopener noreferrer" target="_blank">
      <img
        src={require(`../../assets/images/certificates/${image}`)}
        alt={name}
      />
    </a>
    <h3>
      <a href={credential_url} rel="noopener noreferrer" target="_blank">
        {name}
      </a>
    </h3>
    <p className="CertDate">{date}</p>
    <p>{org}</p>
  </div>
  );

export default CertificateCard;
