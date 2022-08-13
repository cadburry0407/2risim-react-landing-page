import React from 'react';

import sprite from '../images/sprite.svg';

const Svg = (props) => {
  const { spriteName, className } = props;

  return (
    <>
      <svg className={className}>
        <use xlinkHref={`${sprite}#${spriteName}`}></use>
      </svg>
    </>
  );
};

export default Svg;
