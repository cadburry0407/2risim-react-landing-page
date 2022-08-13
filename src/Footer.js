import React from 'react';

import Svg from './components/Svg';

import './styles/footer.scss';

import footerLogo from './images/footer-logo.png';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="container">
          <div className="footer">
            <div className="footer-one">
              <img src={footerLogo} alt="2rism logo" className="footer-logo" />
              <p>
                We always make our customers happy by providing as many choises
                as possible
              </p>
              <Svg spriteName="icon-facebook-circle-fill" className="" />
              <Svg spriteName="icon-twitter-fill" className="" />
              <Svg spriteName="icon-instagram-fill" className="" />
            </div>
            <div className="footer-two">
              <h4 className="heading-4">About</h4>
              <ul className="footer-links">
                <li>
                  <a className="footer-link-item" href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="footer-link-item" href="/">
                    Features
                  </a>
                </li>
                <li>
                  <a className="footer-link-item" href="/">
                    News
                  </a>
                </li>
                <li>
                  <a className="footer-link-item" href="/">
                    Menu
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-three">
              <h4 className="heading-4">Company</h4>
              <ul className="footer-links">
                <li>
                  <a className="footer-link-item" href="/">
                    Why 2rism
                  </a>
                </li>
                <li>
                  <a className="footer-link-item" href="/">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a className="footer-link-item" href="/">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="footer-link-item" href="/">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-four">
              <h4 className="heading-4">Company</h4>
              <ul className="footer-links">
                <li>
                  <a className="footer-link-item" href="/">
                    Account
                  </a>
                </li>
                <li>
                  <a className="footer-link-item" href="/">
                    Support Center
                  </a>
                </li>
                <li>
                  <a className="footer-link-item" href="/">
                    Feedback
                  </a>
                </li>
                <li>
                  <a className="footer-link-item" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-five">
              <h4 className="heading-4">
                Subscribe on our destination review newsletters
              </h4>
              <div className="subscribe-input">
                <div className="email">
                  <Svg spriteName="icon-mail-line" className="mail-icon" />
                  <input type="text" placeholder="Email Address" />
                </div>

                <button className="btn-subscribe">
                  <Svg
                    spriteName="icon-arrow-right-fill"
                    className="mail-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
