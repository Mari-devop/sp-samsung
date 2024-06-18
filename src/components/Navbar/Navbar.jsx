import React from 'react';
import samsungLogo from '../../assets/images/Samsung Logo.png';
import '../../assets/css/components/navbar.css';

const Navbar = () => {
  return (
    <div className="sp-navbar">
      <div className="sp-navbar__logo-container">
        <img className="sp-navbar__logo-container-img" src={samsungLogo} alt="Samsung logo" />
      </div>
      <div className="logo-text-container logo-text-container--light">
        <p className="logo-text-container__title logo-text-container__title--normal">Bespoke Jet</p>
        <span className="logo-text-container__small-title logo-text-container__small-title--normal">TM</span>
      </div>
    </div>
  );
}

export default Navbar;
