import React from 'react';
import cn from 'classnames';
import { IoIosArrowForward } from 'react-icons/io';
import './index.scss';
import Button from '../Button';

const Post = ({ data, className }) => {
  if (!data) {
    return;
  }

  const { title, location, country, published, description, details } = data;

  return (
    <div className={cn('post-container', className)}>
      <div className='post-header'>
        <div>
          <div className='post-title'>{title}</div>
          <div>
            {location}{' '}
            <span className='country-text text-light'>{country}</span>
          </div>
        </div>
        {published && <div className='ml-auto text-light'>{published}</div>}
      </div>
      {description && <div className='post-desc text-light'>{description}</div>}
      {details && (
        <Button
          className='post-details'
          onClick={() => {
            alert('Post detail');
          }}
        >
          <IoIosArrowForward />
        </Button>
      )}
    </div>
  );
};

export default Post;
