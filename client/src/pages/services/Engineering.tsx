import React from 'react';
import engineeringOne from '../../assets/engineering-1.jpg';
import engineeringTwo from '../../assets/engineering-2.jpg';
import PageHeader from '../../components/PageHeader';

function Engineering() {
  return (
    <div id="generic-article">
      <div className="wrapper">
        <PageHeader
          header="Engineering"
          paragraph="Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis."
        />
        <img
          src={engineeringOne}
          alt="An example of our engineering capabilities"
          className="header-image"
        />
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
          </p>
          <p>
            Consectetur a erat nam at lectus urna duis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Amet volutpat consequat mauris nunc.
          </p>
          <img
            src={engineeringTwo}
            alt="An example of our engineering capabilities"
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

export default Engineering;
