import React from 'react';
import cn from 'classnames';
import './index.scss';

const Banner = ({ children, className }) => {
  console.log("Rendering Banner.........")
  return <div className={cn('banner-container', className)}>{children}</div>;
};

export default Banner;
