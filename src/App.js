import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Button from './components/Button';
import Post from './components/Post';
import Section from './components/Section';
import { data } from './utils/data';
import { HiArrowNarrowRight } from 'react-icons/hi';
import './App.scss';
import Company from './components/Company';

const App = () => {
  const { jobs, companies } = data;
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  let postToRenderCount = 3;

  if (width >= 768 && width <= 1023) {
    postToRenderCount = 2;
  }

  if (width <= 600) {
    postToRenderCount = jobs.posts.length;
  }

  return (
    <div className='app-wrapper'>
      <Banner className='banner'>
        <h1>Juniors make IT work.</h1>
        <p>Hire and invest in highly skilled juniors now.</p>
        <Button
          className='mt-10'
          onClick={() => {
            alert('Button has clicked...');
          }}
        >
          Post Offer Now
        </Button>
      </Banner>
      <div className='app-container'>
        <div className='section-container'>
          <Section header={jobs.header}>
            <div
              className='view-all'
              onClick={() => {
                alert('View all job offers');
              }}
            >
              View all job offers <HiArrowNarrowRight />
            </div>
          </Section>
          <div className='posts-container'>
            {jobs.posts.slice(0, postToRenderCount).map((item) => {
              return <Post key={item.id} data={item} />;
            })}
          </div>
        </div>
        <div className='section-container'>
          <Section header={companies.header} />
          <div className='company-list-container'>
            {companies.list.map((company) => {
              return <Company key={company.id} data={company} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
