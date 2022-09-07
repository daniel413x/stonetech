import React from 'react';
import Projects from '../components/FrontPage/Projects';
import Slider from '../components/FrontPage/Slider';
import Statistics from '../components/FrontPage/Statistics';
import AboutUs from '../components/FrontPage/AboutUs';

function FrontPage() {
  return (
    <div id="front-page">
      <Slider />
      <Statistics />
      <Projects />
      <AboutUs />
    </div>
  );
}

export default FrontPage;
