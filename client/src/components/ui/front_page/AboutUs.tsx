import React from 'react';
import sideImage from '../../../assets/images/interior-29.jpg';
import Dots from '../Dots';
import AdvantageCard from '../AdvantageCard';
import { advantagesCards } from '../../../utils/arrays';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="left-col">
        <div className="image-wrapper">
          <div className="bg" />
          <img
            src={sideImage}
            alt="32 years in the industry"
          />
          <div className="fg">
            <span className="number">
              32
            </span>
            <div className="alphabetical">
              <span className="line-one">
                years
              </span>
              <span className="line-two">
                in the industry
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-col">
        <div className="upper-col">
          <span className="label-above-header">
            About us
          </span>
          <span className="header">
            We design and create ecological comfort
          </span>
          <Dots />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam. Blandit turpis cursus in hac habitasse platea dictumst quisque. Aliquam
          </p>
        </div>
        <div className="lower-row">
          <AdvantageCard
            Icon={advantagesCards[0].Icon}
            title={advantagesCards[0].title}
            body={advantagesCards[0].body}
            url="/"
          />
          <AdvantageCard
            Icon={advantagesCards[1].Icon}
            title={advantagesCards[1].title}
            body={advantagesCards[1].body}
            url="/"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
