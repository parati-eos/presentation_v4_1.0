import React from 'react';
import ParatiLogo from '../../Asset/parati-logo.png'
import '../css/ApplicationLandingNavbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <img src={ParatiLogo}></img>
      </div>
    </nav>
  );
}

export default Navbar;
