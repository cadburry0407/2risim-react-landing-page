import React from 'react';
import { Link } from 'react-scroll';

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
          <Link to="main" className="logo-link">
            <img src={logo} alt="2rism logo" className="nav__logo" />
          </Link>

          <ul className="nav__links">
            <li>
              <Link to="main" offset={-70} className="nav__links-item active">
                Home
              </Link>
            </li>
            <li>
              <Link to="hotels" className="nav__links-item">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="hotels" className="nav__links-item">
                Restaurants
              </Link>
            </li>
            <li>
              <Link to="tours" className="nav__links-item">
                Tours
              </Link>
            </li>
            <li>
              <Link to="destinations" className="nav__links-item">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="activities" className="nav__links-item">
                Activities
              </Link>
            </li>
            <li>
              <Link to="aboutus" className="nav__links-item">
                Contact
              </Link>
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
                <Link to="main" offset={-70}>
                  Home
                </Link>
              </li>
              <li className="menu__list-item">
                <Link to="hotels">Hotels</Link>
              </li>
              <li className="menu__list-item">
                <Link to="hotels">Restaurant Us</Link>
              </li>
              <li className="menu__list-item">
                <Link to="tours">Tours</Link>
              </li>
              <li className="menu__list-item">
                <Link to="destinations">Destinations</Link>
              </li>
              <li className="menu__list-item">
                <Link to="activities">Activities</Link>
              </li>
              <li className="menu__list-item">
                <Link to="aboutus">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
