import React from "react";
// import { KeyboardArrowDown2 } from "../../icons/KeyboardArrowDown2"; // Assuming this is used elsewhere
import "./body.css";


// const Frame = () => {
//   return (
//     <div className="frame">
//       <div className="overlap">
//         <div className="overlap-group">
//           <div className="ellipse" />

//           <div className="div-4">
//             <div className="group">
//               <div className="overlap-group-2">
//                 <div className="rectangle" />
//                 <div className="rectangle-2" />
//               </div>
//             </div>

//             <div className="div-5">
//               <div className="text-wrapper-3">Business Revenue</div>
//               <div className="text-wrapper-4">$120,000</div>
//             </div>

//             <p className="p">Since using innovative IT Services</p>
//           </div>

//           <img
//             className="african-woman-posing"
//             alt="African woman posing"
//             src={main}
//           />

//           <div className="div-6">
//             <div className="overlap-2">
//               <div className="div-7">
//                 <div className="rectangle-3" />
//                 <div className="rectangle-4" />
//                 <div className="rectangle-5" />
//                 <div className="rectangle-6" />
//                 <div className="rectangle-6" />
//               </div>

//               <div className="div-8">
//                 <div className="text-wrapper-5">80</div>
//                 <div className="text-wrapper-6">60</div>
//                 <div className="text-wrapper-6">40</div>
//                 <div className="text-wrapper-6">20</div>
//                 <div className="text-wrapper-6">8</div>
//               </div>

//               <div className="div-9">
//                 <div className="text-wrapper-5">Jan</div>
//                 <div className="text-wrapper-5">Feb</div>
//                 <div className="text-wrapper-5">Mar</div>
//                 <div className="text-wrapper-5">Apr</div>
//                 <div className="text-wrapper-5">May</div>
//               </div>
//             </div>

//             <div className="text-wrapper-7">Business Growth</div>
//           </div>

//           <div className="overlap-wrapper">
//             <div className="overlap-3">
//               <img
//                 className="img"
//                 alt="Ellipse"
//                 src="https://c.animaapp.com/MuT0Bg8Z/img/ellipse-1012.svg"
//               />
//               <img
//                 className="ellipse-2"
//                 alt="Ellipse"
//                 src="https://c.animaapp.com/MuT0Bg8Z/img/ellipse-1019.svg"
//               />
//               <div className="ellipse-3" />
//               <div className="ellipse-4" />
//               <div className="ellipse-5" />
//               <div className="ellipse-6" />
//               <div className="ellipse-7" />

//               <div className="div-10">
//                 <div className="text-wrapper-8">100%</div>
//                 <div className="text-wrapper-9">success</div>
//               </div>
//             </div>
//           </div>

//           <img
//             className="star"
//             alt="Star"
//             src="https://c.animaapp.com/MuT0Bg8Z/img/star-5.svg"
//           />
//           <img
//             className="vector"
//             alt="Vector"
//             src="https://c.animaapp.com/MuT0Bg8Z/img/vector-6.svg"
//           />
//           <img
//             className="star-2"
//             alt="Star"
//             src="https://c.animaapp.com/MuT0Bg8Z/img/star-5.svg"
//           />
//           <img
//             className="star-3"
//             alt="Star"
//             src="https://c.animaapp.com/MuT0Bg8Z/img/star-4.svg"
//           />
//           <img
//             className="star-4"
//             alt="Star"
//             src="https://c.animaapp.com/MuT0Bg8Z/img/star-4.svg"
//           />
//         </div>

//         <div className="div-11">
//           <div className="div-12">
//             <p className="discover-the-power">
//               DISCOVER THE POWER OF INNOVATIVE IT SOLUTION
//             </p>
//             <p className="text-wrapper-10">
//               Expert IT Services for Smarter Business Growth
//             </p>
//           </div>

//           <div className="primary-button">
//             <div className="text-wrapper-11">Get started today</div>
//           </div>
//         </div>

//         <div className="ellipse-8" />
//       </div>
//     </div>
//   );
// };

// export default Frame







import './body.css';
import main from "../../assets/Framez.png"

const Main = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p> DISCOVER THE POWER OF INNOVATIVE IT SOLUTION</p>
        <h1>Expert IT Services for Smarter Business Growth</h1>
        <button className="hero-button">Get started today</button>
      </div>
      <div className="hero-image1">
        <img src={main} alt="VR Experience" />
      </div>
    </div>
  );
}

export default Main;