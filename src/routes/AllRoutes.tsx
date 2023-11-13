import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
const HomePage = loadable(() => import('@flatize/pages/HomePage/HomePage'));
const Shop = loadable(() => import('@flatize/pages/Shop/Shop'));
const Blog = loadable(() => import('@flatize/pages/Blog/Blog'));
const About = loadable(() => import('@flatize/pages/About/About'));
const Contact = loadable(() => import('@flatize/pages/Contact/Contact'));
const PageNotFound = loadable(() => import('@flatize/pages/PageNotFound/PageNotFound'));

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
