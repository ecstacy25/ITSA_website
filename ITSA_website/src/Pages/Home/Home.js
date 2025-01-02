// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Body from "../../components/Body/Body";
// import About from "../../components/aboutUs/About";
// import Service1 from "../../components/Service1/Service1";
// import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
// import Service2 from "../../components/Service2/Service2";
// import Logos1 from "../../components/Logos1/Logos1";
// import Steps from "../../components/Steps/Steps";
// import Testimonials from "../../components/Testimonials/Testimonials";
// import Blogs from "../../components/Blogs/Blogs";

// const components = [
//   { component: <Body />, direction: "top" },
//   { component: <About />, direction: "left" },
//   { component: <Service1 />, direction: "right" },
//   { component: <WhoWeAre />, direction: "bottom" },
//   { component: <Service2 />, direction: "top" },
//   { component: <Logos1 />, direction: "left" },
//   { component: <Steps />, direction: "right" },
//   { component: <Testimonials />, direction: "top" },
//   { component: <Blogs />, direction: "bottom" },
// ];

// const Section = ({ children, direction }) => {
//   const ref = useRef(null); // Reference to the element
//   const isInView = useInView(ref, { margin: "-100px" }); // Detect when it's in view

//   return (
//     <motion.div
//       ref={ref}
//       initial={{
//         opacity: 0,
//         y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
//         x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
//       }}
//       animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
//       transition={{ duration: 5.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const Home = () => {
//   return (
//     <div className="homes">
//       {components.map((item, index) => (
//         <Section key={index} direction={item.direction}>
//           {item.component}
//         </Section>
//       ))}
//     </div>
//   );
// };

// export default Home;




import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Body from "../../components/Body/Body";
import About from "../../components/aboutUs/About";
import Service1 from "../../components/Service1/Service1";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Service2 from "../../components/Service2/Service2";
import Logos1 from "../../components/Logos1/Logos1";
import Steps from "../../components/Steps/Steps";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blogs from "../../components/Blogs/Blogs";

const components = [
  { component: <Body />, direction: "top" },
  { component: <About />, direction: "left" },
  // { component: <Service1 />, direction: "right" },
  // { component: <WhoWeAre />, direction: "bottom" },
  { component: <Service2 />, direction: "top" },
  { component: <Logos1 />, direction: "left" },
  { component: <Steps />, direction: "right" },
  { component: <Testimonials />, direction: "top" },
  { component: <Blogs />, direction: "bottom" },
];

const Section = ({ children, direction }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
      initial={{
        opacity: 0,
        y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="w-full">
      {components.map((item, index) => (
        <Section key={index} direction={item.direction}>
          {item.component}
        </Section>
      ))}
    </div>
  );
};

export default Home;
