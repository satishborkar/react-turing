import React from 'react';
import cn from 'classnames';
import './index.scss';

const Button = ({ children, type = 'button', onClick, className }) => {
  return (
    <button
      className={cn('button-container', className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
