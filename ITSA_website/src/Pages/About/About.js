import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import About1 from '../../components/About1/About1'
import About2 from '../../components/About2/About2'
import WhatDrivesUs from '../../components/WhatDrivesUs/WhatDrivesUs';
import WhyChooseUs from '../../components/ChooseUs/ChooseUs';
import CoreValues from '../../components/CoreValues/CoreValues';
import BoardOfDirectors from '../../components/Directors/Directors';
import Partners from '../../components/aboutUs/About';
import Logos1 from '../../components/Logos1/Logos1';
import CallToAction from '../../components/CallToAction/CallToAction';



const components = [
  { component: <About1 />, direction: "top" },
  { component: <About2 />, direction: "left" },
  { component: <WhatDrivesUs />, direction: "right" },
  { component: <WhyChooseUs/>, direction: "bottom" },
  { component: <CoreValues/>, direction: "top" },
  { component: <BoardOfDirectors/>, direction: "left" },
  { component: <Partners/>, direction: "right" },
  { component: <Logos1/>, direction: "top" },
  { component: <CallToAction />, direction: "bottom" },
];

const Section = ({ children, direction }) => {
  const ref = useRef(null); // Reference to the element
  const isInView = useInView(ref, { margin: "-100px" }); // Detect when it's in view

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
        x: direction === "left" ? -0 : direction === "right" ? 0 : 0,
      }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 7.5 }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="About">
      {components.map((item, index) => (
        <Section key={index} direction={item.direction}>
          {item.component}
        </Section>
      ))}
    </div>
  );
};

export default About;