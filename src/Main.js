import React from 'react';
import './styles/search.scss';
import './styles/slogan.scss';
import sprite from './images/sprite.svg';


const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="header-content">
          <div className="slogan">
            <h1>Discover the most engaging places</h1>
            <button className="btn-slogan">
              <svg>
                <use xlinkHref={`${sprite}#icon-global-line`}></use>
              </svg>
              Discover on 3D Globe
            </button>
          </div>

          <div className="search-container">
            <div className="search">
              <div className="search__location">
                <svg>
                  <use xlinkHref={`${sprite}#icon-map-pin-line`}></use>
                </svg>
                <div className="search__location-text">
                  <p>Location</p>
                  <h3>Explore nearby destinations</h3>
                </div>
              </div>
              <div className="search__activity">
                <svg>
                  <use xlinkHref={`${sprite}#icon-riding-line`}></use>
                </svg>
                <div className="search__activity-text">
                  <p>Activity</p>
                  <h3>All Activities</h3>
                </div>
              </div>
              <div className="search__when">
                <svg>
                  <use xlinkHref={`${sprite}#icon-calendar-event-fill`}></use>
                </svg>
                <div className="search__when-text">
                  <p>When</p>
                  <h3>Choose a Date</h3>
                </div>
              </div>
              <div className="search__guests">
                <svg>
                  <use xlinkHref={`${sprite}#icon-calendar-event-fill`}></use>
                </svg>
                <div className="search__guests-text">
                  <p>Guests</p>
                  <h3>1 guest</h3>
                </div>
              </div>
              <button className="btn-search">
                <svg>
                  <use xlinkHref={`${sprite}#icon-search-line`}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
