// App.js
import React from "react";
import "./Service1.css";
import icon0 from '../../assets/icon0.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
const services = [
  {
    icons: icon0, // Replace with actual icons
    title: "Process Automation",
    description:
      "Maximize efficiency and reduce errors with our custom automation workflows, streamlining repetitive tasks so your team can focus on what matters most.",
    color: "rgba(255, 255, 255, 1)",
    link: "Read More",
  },
  {
    icons: icon1,
    title: "Device Health Management Service (DHMS)",
    description:
      "Our DHMS ensures your devices are always in top shape, extending their lifespan and improving performance.",
    color: "rgba(17, 21, 46, 1)",
    link: "Read More",
  },
  {
    icons: icon2,
    title: "IT Infrastructure Setup",
    description:
      "Our experts design and deploy IT infrastructures customized to meet your unique business needs.",
    color: "rgba(255, 255, 255, 1)",
    link: "Read More",
  },
  {
    icons: icon3,
    title: "Device Procurement",
    description:
      "We assist you in sourcing and procuring the ideal devices, ranging from laptops to desktop solutions that perfectly fit your business needs.",
    color: "rgba(17, 21, 46, 1)",
    link: "Read More",
  },
  {
    icons: icon4,
    title: "Bespoke Software Design",
    description:
      "We create custom software solutions designed specifically for your business needs, ensuring that every feature aligns perfectly with your goals.",
    color: "rgba(255, 255, 255, 1)",
    link: "Read More",
  },
  {
    icons: icon5,
    title: "Managed IT Services",
    description:
      "Our experts design and deploy IT infrastructures customized to meet your unique business needs.",
    color: "rgba(17, 21, 46, 1)",
    link: "Read More",
  },
];

const Cores = () => {
  return (
    <div className="apps">
      <div className="head">
        <h1>Our Core IT Services</h1>
        <p>We offer a great number of IT services</p>
      </div>
      
      <div className="servicez">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundColor: service.color }}
          >
            <div className="icons">
              <img src={service.icons} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a className="ted" href="#">{service.link} &#10148;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cores;
