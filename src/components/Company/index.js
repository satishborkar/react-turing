import React from 'react';
import cn from 'classnames';
import './index.scss';
import { FiBriefcase } from 'react-icons/fi';

const Company = ({ data, className }) => {
  console.log("Rendering Company.........")
  const { icon, name, details } = data;
  return (
    <div
      className={cn('company-container', className)}
      onClick={() => {
        alert('company details', details);
      }}
    >
      {icon && icon === 'briefcase' && (
        <div className='icon-container'>
          <FiBriefcase size={24} />
        </div>
      )}
      <div className='name-container'> {name} </div>
    </div>
  );
};

export default Company;
