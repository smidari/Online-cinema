import React from 'react';
import MyCarousel from './MyCarousel';
import Footer from './Footer';
import './home.css';

const Home = () => (
  <div className="app-wrapper">
  <MyCarousel />
  <Footer fixed="bottom" />
  </div>
);
export default Home;