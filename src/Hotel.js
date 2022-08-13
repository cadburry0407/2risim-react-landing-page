import React from 'react';

import Svg from './components/Svg';
import './styles/hotel.scss';
import hotelOne from './images/hotel-restaurant-1.png';
import hotelTwo from './images/hotel-restaurant-2.png';
import hotelThree from './images/hotel-restaurant-3.png';
import hotelFour from './images/hotel-restaurant-4.png';

const Hotel = () => {
  return (
    <div className="hotel-restaurant-container" id="hotels">
      <div className="container">
        <div className="hotel-restaurant">
          <div className="hotel-restaurant__heading heading-main">
            <h1 className="heading-1">Hotels and Restaurants</h1>
            <button className="btn-more">
              View all
              <Svg
                spriteName="icon-arrow-right-line"
                className="text-light-svg"
              />
            </button>
          </div>
          <div className="hotel-restaurant-item">
            <figure>
              <img
                src={hotelOne}
                alt="Monastero Santa Rosa Hotel & Spa"
                className="img-item"
              />
            </figure>

            <h3 className="heading-3">Monastero Santa Rosa Hotel & Spa</h3>
            <div className="ratings">
              <p className="text-light">
                <Svg
                  spriteName="icon-map-pin-line"
                  className="text-light-svg"
                />
                Salerno, Italy
              </p>
              <div className="stars">
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
              </div>
            </div>
          </div>
          <div className="hotel-restaurant-item">
            <figure>
              <img
                src={hotelTwo}
                alt="Grand Hotel Tremezzo"
                className="img-item"
              />
            </figure>

            <h3 className="heading-3">Grand Hotel Tremezzo</h3>
            <div className="ratings">
              <p className="text-light">
                <Svg
                  spriteName="icon-map-pin-line"
                  className="text-light-svg"
                />
                Lake Como, Italy
              </p>
              <div className="stars">
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-line" className="star-fill-svg" />
                <Svg spriteName="icon-star-line" className="star-fill-svg" />
              </div>
            </div>
          </div>
          <div className="hotel-restaurant-item">
            <figure>
              <img
                src={hotelThree}
                alt="The Oberoi Udaivilas, Udaipur"
                className="img-item"
              />
            </figure>

            <h3 className="heading-3">The Oberoi Udaivilas, Udaipur</h3>
            <div className="ratings">
              <p className="text-light">
                <Svg
                  spriteName="icon-map-pin-line"
                  className="text-light-svg"
                />
                Udaipur, India
              </p>
              <div className="stars">
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-line" className="star-fill-svg" />
              </div>
            </div>
          </div>
          <div className="hotel-restaurant-item">
            <figure>
              <img
                src={hotelFour}
                alt="AKA Beverly Hills"
                className="img-item"
              />
            </figure>

            <h3 className="heading-3">AKA Beverly Hills</h3>

            <div className="ratings">
              <p className="text-light">
                <Svg
                  spriteName="icon-map-pin-line"
                  className="text-light-svg"
                />
                Los Angeles, United States
              </p>
              <div className="stars">
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-fill" className="star-fill-svg" />
                <Svg spriteName="icon-star-line" className="star-fill-svg" />
                <Svg spriteName="icon-star-line" className="star-fill-svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
