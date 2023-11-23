import React from 'react';

import Slide from '@flatize/components/Slide/Slide';
import Title from '@flatize/components/Title/Title';

import AdsEvent from './components/AdsEvent';
import Lookbook from './components/Lookbook/Lookbook';
import PiParallax from './components/PiParallax/PiParallax';
import BlogPost from './components/BlogPost/BlogPost';

const HomePage: React.FC = () => {
  return (
    <div>
      <Slide />
      <AdsEvent />
      <Title title="TOP SELLING" />
      <Lookbook />
      <Title title="NEW PRODUCTS" />
      <PiParallax />
      <Title title="LATEST FROM THE BLOG" />
      <BlogPost />
    </div>
  );
};

export default HomePage;
