import React from 'react';
import { NavLink } from 'react-router-dom';

//  <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
//         <div className="container-fluid">
//           
//             <NavLink to="/">
//               <img src="../Images/Dev.png" alt="" style={{ marginRight: '10px' }} />
//             </NavLink>

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
        <div className="d-flex align-items-center">
          <NavLink to="/">
            <img src="../Images/Dev.png" alt="" style={{ marginRight: '10px' }}/>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <NavLink to="/" activeClassName="active-styles">
                <li class="nav-item nav-link">Home</li>
              </NavLink>
              <NavLink to="/About" activeClassName="active-styles">
                <li class="nav-item nav-link">About</li>
              </NavLink>
              <NavLink to="/Services" activeClassName="active-styles">
                <li class="nav-item nav-link">Services</li>
              </NavLink>
              <NavLink to="/Contact" activeClassName="active-styles">
                <li class="nav-item nav-link">Contact</li>
              </NavLink>
              
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;



