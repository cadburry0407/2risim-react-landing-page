import React from 'react';

import Svg from './components/Svg';

import './styles/about.scss';

import about from './images/about.png';

const About = () => {
  return (
    <>
      <div className="about-container" id="aboutus">
        <div className="container">
          <div className="about">
            <div className="about-item">
              <h1 className="heading-1">About Us</h1>
              <p className="text-light-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse a sapien justo. Nulla facilisis tristique imperdiet.
                Nullam a placerat odio. Sed in ex augue. Aliquam porta
                consectetur lorem sit amet ultrices. className aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
              <button className="btn-more">
                Read more
                <Svg
                  spriteName="icon-arrow-right-line"
                  className="text-light-svg"
                />
              </button>
            </div>
            <figure>
              <img src={about} alt="About Us" className="img-item" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
