import React from 'react';

import Svg from './components/Svg';

import './styles/tips.scss';

import tipsOne from './images/tips-advice-1.png';
import tipsTwo from './images/tips-advice-1.png';

const Tips = () => {
  return (
    <>
      <div className="tips-advice-container" id="tours">
        <div className="container">
          <div className="tips-advice">
            <div className="tips-advice__heading heading-main">
              <h1 className="heading-1">Travel Tips and Advice</h1>
              <button className="btn-more">
                View all
                <Svg
                  spriteName="icon-arrow-right-line"
                  className="text-light-svg"
                />
              </button>
            </div>

            <div className="tips-advice-item">
              <img
                src={tipsOne}
                alt="East Village Ice Cream Crawl"
                className="img-item"
              />
            </div>
            <div className="tips-advice__description">
              <h3 className="heading-3">East Village Ice Cream Crawl</h3>
              <p className="text-light-2">
                We will stop at five different world-className ice cream shops
                on this 1.5 mile 1.5 hour tour. At each ice cream store we'll
                explore the story behind the business and see what makes the ice
                cream unique as you savor every…
              </p>
              <div className="tips-advice__description-details">
                <div>
                  <Svg
                    spriteName="icon-calendar-2-line"
                    className="text-light-2-svg"
                  />
                  <p>Today</p>
                </div>
                <div>
                  <Svg
                    spriteName="icon-user-line"
                    className="text-light-2-svg"
                  />
                  <p>Maria Philips</p>
                </div>
                <div>
                  <Svg
                    spriteName="icon-chat-3-line"
                    className="text-light-2-svg"
                  />
                  <p>3</p>
                </div>
              </div>
            </div>

            <div className="tips-advice-item">
              <img
                src={tipsTwo}
                alt="Brooklyn Bridge cinematic walk"
                className="img-item"
              />
            </div>
            <div className="tips-advice__description">
              <h3 className="heading-3">
                Brooklyn Bridge cinematic photo walk
              </h3>
              <p className="text-light-2">
                This experience takes place at the Brooklyn Bridge Park and
                Brooklyn Bridge, but I’m always open to capture clients at
                different locations upon request for an additional charge.
              </p>
              <div className="tips-advice__description-details">
                <div>
                  <Svg
                    spriteName="icon-calendar-2-line"
                    className="text-light-2-svg"
                  />
                  <p>Today</p>
                </div>
                <div>
                  <Svg
                    spriteName="icon-user-line"
                    className="text-light-2-svg"
                  />
                  <p>James Calzoni</p>
                </div>
                <div>
                  <Svg
                    spriteName="icon-chat-3-line"
                    className="text-light-2-svg"
                  />
                  <p>17</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
