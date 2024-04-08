import React from 'react';
import ParatiLogo from '../../Asset/parati-logo.png'
import '../css/LoginNavbar.css';

function Navbar() {
  return (
    <nav className='login-nav'>
      <div className="login-navbar-container">
        <img src={ParatiLogo} className="login-navbar-logo"></img>
      </div>
    </nav>
  );
}

export default Navbar;
