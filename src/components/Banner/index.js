import React from 'react';
import cn from 'classnames';
import './index.scss';

const Banner = ({ children, className }) => {
  return <div className={cn('banner-container', className)}>{children}</div>;
};

export default Banner;
