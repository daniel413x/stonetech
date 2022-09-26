import React from 'react';
import PageHeader from '../../components/PageHeader';
import imageOne from '../../assets/images/process-2.jpg';
import imageTwo from '../../assets/images/consultation-1.jpg';

function About() {
  return (
    <div id="article-page" className="right-col">
      <PageHeader
        header="About Stonetech"
      />
      <div className="wrapper">
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
          </p>
          <img
            src={imageOne}
            alt="Our engineers work on a project"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
          </p>
          <p>
            Nisi quis eleifend quam adipiscing. Adipiscing tristique risus nec feugiat in. Urna et pharetra pharetra massa massa ultricies mi quis. Lobortis scelerisque fermentum dui faucibus in ornare quam. Elit pellentesque habitant morbi tristique.
          </p>
          <p>
            Leo vel orci porta non pulvinar neque laoreet suspendisse. Morbi tristique senectus et netus. Enim nec dui nunc mattis enim. Lectus proin nibh nisl condimentum. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Leo vel orci porta non pulvinar neque laoreet suspendisse. Morbi tristique senectus et netus. Enim nec dui nunc mattis enim.
          </p>
          <img
            src={imageTwo}
            alt="Consultation with a client"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
          </p>
          <p>
            Nisi quis eleifend quam adipiscing. Adipiscing tristique risus nec feugiat in. Urna et pharetra pharetra massa massa ultricies mi quis. Lobortis scelerisque fermentum dui faucibus in ornare quam. Elit pellentesque habitant morbi tristique.
          </p>
          <p>
            Leo vel orci porta non pulvinar neque laoreet suspendisse. Morbi tristique senectus et netus. Enim nec dui nunc mattis enim. Lectus proin nibh nisl condimentum. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Leo vel orci porta non pulvinar neque laoreet suspendisse. Morbi tristique senectus et netus. Enim nec dui nunc mattis enim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
