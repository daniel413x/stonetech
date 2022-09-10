import React from 'react';
import Projects from '../components/FrontPage/Projects';
import Slider from '../components/FrontPage/Slider';
import Statistics from '../components/FrontPage/Statistics';
import AboutUs from '../components/FrontPage/AboutUs';
import OurPartners from '../components/FrontPage/OurPartners';
import OurBlog from '../components/FrontPage/OurBlog';

function FrontPage() {
  return (
    <div id="front-page">
      <Slider />
      <Statistics />
      <Projects />
      <AboutUs />
      <OurPartners />
      <OurBlog />
    </div>
  );
}

export default FrontPage;
