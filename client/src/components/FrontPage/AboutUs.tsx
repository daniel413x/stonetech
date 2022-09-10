import React from 'react';
import { NavLink } from 'react-router-dom';
import sideImage from '../../assets/interior-29.jpg';
import Dots from '../Dots';
import { ReactComponent as Leaf } from '../../assets/leaf.svg';
import { ReactComponent as Pickaxe } from '../../assets/pickaxe.svg';

interface AdvantageProps {
  Icon: any;
  title: string;
  body: string;
  url: string;
}

function Advantage({
  Icon,
  title,
  body,
  url,
}: AdvantageProps) {
  return (
    <div className="advantage">
      <div className="title-row">
        <Icon className="icon" />
        <span className="title-text">
          {title}
        </span>
      </div>
      <div className="divider" />
      <p className="paragraph">
        {body}
      </p>
      <NavLink className="read-more" to={url}>
        Read more
      </NavLink>
    </div>
  );
}

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
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam. Blandit turpis cursus in hac habitasse platea dictumst quisque. Aliquam
          </p>
        </div>
        <div className="lower-row">
          <Advantage
            Icon={Leaf}
            title="Safe materials"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam. Blandit turpis cursus in hac habitasse platea dictumst quisque. Aliquam."
            url="/"
          />
          <Advantage
            Icon={Pickaxe}
            title="Quality stone"
            body="Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. Et odio pellentesque diam volutpat commodo sed egestas. At volutpat diam ut venenatis tellus in metus. Interdum varius sit amet mattis. Faucibus turpis in eu mi bibendum."
            url="/"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
