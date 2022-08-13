import React from 'react';
import { useState, useEffect } from 'react';
import './styles/navbar.scss';

import logo from './images/logo.png';
import userPhoto from './images/user-photo.png';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.title = '2rism Travel Agency';
  }, []);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="nav" id="header">
        <div className="container">
          <a href="/" className="logo-link">
            <img src={logo} alt="2rism logo" className="nav__logo" />
          </a>

          <ul className="nav__links">
            <li>
              <a href="/" className="nav__links-item active">
                Home
              </a>
            </li>
            <li>
              <a href="#hotels" className="nav__links-item">
                Hotels
              </a>
            </li>
            <li>
              <a href="#hotels" className="nav__links-item">
                Restaurants
              </a>
            </li>
            <li>
              <a href="#tours" className="nav__links-item">
                Tours
              </a>
            </li>
            <li>
              <a href="#destinations" className="nav__links-item">
                Destinations
              </a>
            </li>
            <li>
              <a href="#activities" className="nav__links-item">
                Activites
              </a>
            </li>
            <li>
              <a href="#aboutus" className="nav__links-item">
                Contact
              </a>
            </li>
          </ul>

          <div className="nav__user">
            <div className="nav__user-profile">
              <p className="nav__user-profile-greeting">Halo</p>
              <p className="nav__user-profile-name">Ales Nesetril</p>
            </div>
            <img
              src={userPhoto}
              alt="userphoto"
              className="nav__user-picture"
            />
          </div>

          <button
            // className="nav__btn-toggle-menu"
            className={
              isActive
                ? 'nav__btn-toggle-menu activated'
                : 'nav__btn-toggle-menu '
            }
            id="menu-toggle-icon"
            onClick={handleToggle}
          >
            <i className="ri-menu-3-line open-menu-icon"></i>
            <i className="ri-close-line close-menu-icon"></i>
          </button>

          <div className={isActive ? 'menu activated' : 'menu'} id="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <a href="/">Home</a>
              </li>
              <li className="menu__list-item">
                <a href="#hotels">Hotels</a>
              </li>
              <li className="menu__list-item">
                <a href="#hotels">Restaurant Us</a>
              </li>
              <li className="menu__list-item">
                <a href="#tours">Tours</a>
              </li>
              <li className="menu__list-item">
                <a href="#destinations">Destinations</a>
              </li>
              <li className="menu__list-item">
                <a href="#activites">Activites</a>
              </li>
              <li className="menu__list-item">
                <a href="#aboutus">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
