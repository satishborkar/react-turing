import React from 'react';
import cn from 'classnames';
import './index.scss';

const Section = ({ children, className, header }) => {
  console.log("Rendering Section.........")
  return (
    <div className={cn('sub-section-container', className)}>
      <div className='header'>{header}</div>
      {children && <div className='child'>{children}</div>}
    </div>
  );
};

export default Section;
