import React from "react";
import "./Logos1.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";


const companies = [
  { id: 1, name: "First E & P", logo: logo1 },
  { id: 2, name: "ArdaghGroup", logo: logo2 },
  { id: 3, name: "Festival Hotel", logo: logo3 },
  { id: 4, name: "British Council", logo: logo4 },
  { id: 5, name: "Kwikpay", logo: logo5 },
  { id: 6, name: "9mobile", logo: logo6 },
  { id: 7, name: "UPDC", logo: logo7 },
  { id: 8, name: "Trewan", logo: logo8 },
];

const TrustedBy = () => {
  return (
    <div className="trusted-by">
      <div className="trusted-by-header">
        <h2>Trusted by Leading Businesses Across the Globe</h2>
        <p>
          From startups to industry leaders, we’re proud to power innovation for
          a diverse range of clients.
        </p>
      </div>
      <div className="companies-grid">
        {companies.map((company) => (
          <div className="company-card" key={company.id}>
            <img
              src={company.logo}
              alt={company.name}
              className="company-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
