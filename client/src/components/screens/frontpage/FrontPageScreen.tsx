import React from 'react';
import Statistics from '../../ui/front_page/Statistics';
import Projects from '../../ui/front_page/Projects';
import AboutUs from '../../ui/front_page/AboutUs';
import OurPartners from '../../ui/front_page/OurPartners';
import OurBlog from '../../ui/front_page/OurBlog';
import FrontPageSlider from '../../ui/front_page/Slider';

function FrontPageScreen() {
  return (
    <main id="front-page">
      <FrontPageSlider />
      <Statistics />
      <Projects />
      <AboutUs />
      <OurPartners />
      <OurBlog />
    </main>
  );
}

export default FrontPageScreen;
