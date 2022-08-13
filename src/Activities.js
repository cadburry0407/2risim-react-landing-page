import React from 'react';

import Svg from './components/Svg';

import './styles/activities.scss';

import activityOne from './images/activities-1.png';
import activityTwo from './images/activities-2.png';
import activityThree from './images/activities-3.png';
import activityFour from './images/activities-4.png';

const Activities = () => {
  return (
    <>
      <div className="activities-container" id="activities">
        <div className="container">
          <div className="activities">
            <div className="activities__heading heading-main">
              <h1 className="heading-1">Activities</h1>
              <button className="btn-more">
                View all
                <Svg
                  spriteName="icon-arrow-right-line"
                  className="text-light-svg"
                />
              </button>
            </div>
            <div className="activities-item">
              <div className="activities-item-one">
                <img src={activityOne} alt="Sailing" className="img-item" />
                <h5 className="heading-5">Sailing</h5>
              </div>
            </div>
            <div className="activities-item">
              <div className="activities-item-one">
                <img src={activityTwo} alt="Sailing" className="img-item" />
                <h5 className="heading-5">Climbing</h5>
              </div>
            </div>
            <div className="activities-item">
              <div className="activities-item-one">
                <img src={activityThree} alt="Sailing" className="img-item" />
                <h5 className="heading-5">Skiing</h5>
              </div>
            </div>
            <div className="activities-item">
              <div className="activities-item-one">
                <img src={activityFour} alt="Sailing" className="img-item" />
                <h5 className="heading-5">Hiking</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
