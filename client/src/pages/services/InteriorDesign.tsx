import React from 'react';
import interiorOne from '../../assets/interiordesign-1.jpg';
import interiorTwo from '../../assets/interiordesign-2.jpg';
import interiorThree from '../../assets/interiordesign-3.jpg';
import PageHeader from '../../components/PageHeader';

function InteriorDesign() {
  return (
    <div id="generic-article">
      <div className="wrapper">
        <PageHeader
          header="Interior design"
          paragraph="We have been brainstorming and creating stunning interior designs for more than 30 years. We delight our clients with inimitable designs that distinguish themselves with style and taste."
        />
        <img
          src={interiorOne}
          alt="An example of our interior design capabilities"
          className="header-image"
        />
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
          </p>
          <img
            src={interiorTwo}
            alt="An example of our interior design capabilities"
          />
          <p>
            Consectetur a erat nam at lectus urna duis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Amet volutpat consequat mauris nunc.
          </p>
          <img
            src={interiorThree}
            alt="An example of our interior design capabilities"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
          </p>
          <p>
            Consectetur a erat nam at lectus urna duis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Amet volutpat consequat mauris nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InteriorDesign;
