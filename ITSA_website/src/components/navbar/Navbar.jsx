// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import "./navbar.css";

// function NavBar() {
//   const [click, setClick] = useState(false);
//   const [activeNav, setActiveNav] = useState("#Home");
//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//           <img className='logo' src={logo} alt='logo' width={40} />
//             {/* <i className="fas fa-code"></i> */}
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <a
//                 href='#Home'
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </a>
//               <a
//                 href='#about'
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About Us
//               </a>
//               <a
//                 href='#services'
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Services
//               </a>
//               <a
//                 href='#contacts'
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Contacts
//               </a>

//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"; // Replace with the actual path to your logo
import "./navbar.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <header className='header'>
        {/* Logo Section */}
        <NavLink exact to='/' className='nav-logo'>
          <img src={logo} alt='IT Service Desk Africa Logo' className='logo' />
        </NavLink>
        <div className='nav-container'>
          {/* Navigation Menu */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/About'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className='nav-item dropdown'>
              <a
                href='/Services'
                className='dropdown-btn nav-links'
                onClick={handleClick}
              >
                Services
              </a>
              <div className='dropdown-content'>
                <a href='/services/service1'>Service 1</a>
                <a href='/services/service2'>Service 2</a>
              </div>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact-us'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/partner-with-us'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Partner with Us
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/blog'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className='nav-item dropdown'>
              <button className='dropdown-btn nav-links' onClick={handleClick}>
                Download Drivers
              </button>
              <div className='dropdown-content'>
                <a href='/drivers/driver1'>Driver 1</a>
                <a href='/drivers/driver2'>Driver 2</a>
              </div>
            </li>
          </ul>

          {/* Hamburger Menu Icon */}
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
