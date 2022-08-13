import React from 'react';

import './styles/destinations.scss';
import popularOne from './images/popular-1.png';
import popularTwo from './images/popular-2.png';
import popularThree from './images/popular-3.png';
import popularFour from './images/popular-4.png';
import popularFive from './images/popular-5.png';
import popularSix from './images/popular-6.png';

const Destinations = () => {
  return (
    <div className="destinations-container" id="destinations">
      <div className="container">
        <div className="destinations">
          <h1 className="heading-1">Popular Destinations</h1>

          <div className="popular-items">
            <figure>
              <img src={popularOne} alt="Big Sur" className="img-item" />
            </figure>

            <h3 className="heading-3">Big Sur</h3>
            <p className="text-light">California, USA</p>
          </div>
          <div className="popular-items">
            <figure>
              <img src={popularTwo} alt="Prescott" className="img-item" />
            </figure>

            <h3 className="heading-3">Prescott</h3>
            <p className="text-light">Arizona, USA</p>
          </div>
          <div className="popular-items">
            <figure>
              <img src={popularThree} alt="Fort Mayers" className="img-item" />
            </figure>

            <h3 className="heading-3">Fort Mayers</h3>
            <p className="text-light">Florida, USA</p>
          </div>
          <div className="popular-items">
            <figure>
              <img src={popularFour} alt="Tucson" className="img-item" />
            </figure>

            <h3 className="heading-3">Tucson</h3>
            <p className="text-light">Arizona, USA</p>
          </div>
          <div className="popular-items">
            <figure>
              <img src={popularFive} alt="St. Joseph" className="img-item" />
            </figure>

            <h3 className="heading-3">St. Joseph</h3>
            <p className="text-light">Michigan, USA</p>
          </div>
          <div className="popular-items">
            <figure>
              <img src={popularSix} alt="Madrid" className="img-item" />
            </figure>

            <h3 className="heading-3">Madrid</h3>
            <p className="text-light">Spain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
