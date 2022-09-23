import React from 'react';
import { NavLink } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import servicesOne from '../assets/services-1.jpg';
import servicesTwo from '../assets/services-2.jpg';
import servicesThree from '../assets/services-3.jpg';
import servicesFour from '../assets/services-4.jpg';
import servicesFive from '../assets/services-5.jpg';
import servicesSix from '../assets/services-6.jpg';
import List from '../components/List';
import AnchorButton from '../components/AnchorButton';
import {
  CONCEPTUALIZATION_ROUTE,
  CONSULTATION_ROUTE,
  CONTACT_ROUTE,
  DELIVERY_ROUTE,
  ENGINEERING_ROUTE,
  INTERIOR_DESIGN_ROUTE,
  REPAIRS_ROUTE,
} from '../utils/consts';

interface ServiceProps {
  image: string;
  paragraph: string;
  title: string;
  to: string;
}

function Service({
  image,
  paragraph,
  title,
  to,
}: ServiceProps) {
  return (
    <NavLink to={to} className="service">
      <div className="text-col">
        <h2>
          {title}
        </h2>
        <p>
          {paragraph}
        </p>
      </div>
      <img
        src={image}
        alt={title}
      />
    </NavLink>
  );
}

function Services() {
  const services: ServiceProps[] = [
    {
      image: servicesOne,
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit.. ',
      title: 'Interior design',
      to: INTERIOR_DESIGN_ROUTE,
    },
    {
      image: servicesTwo,
      paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. At volutpat diam ut venenatis tellus in metus.',
      title: 'Conceptualization',
      to: CONCEPTUALIZATION_ROUTE,
    },
    {
      image: servicesThree,
      paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. At volutpat diam ut venenatis tellus in metus.',
      title: 'Engineering',
      to: ENGINEERING_ROUTE,
    },
    {
      image: servicesFour,
      paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. At volutpat diam ut venenatis tellus in metus.',
      title: 'Material delivery',
      to: DELIVERY_ROUTE,
    },
    {
      image: servicesFive,
      paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. At volutpat diam ut venenatis tellus in metus.',
      title: 'Repairs',
      to: REPAIRS_ROUTE,
    },
    {
      image: servicesSix,
      paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl..',
      title: 'In-person consultation',
      to: CONSULTATION_ROUTE,
    },

  ];
  return (
    <div id="services">
      <div className="wrapper">
        <PageHeader
          header="Services"
          paragraph="An inexhaustive list of services offered by our company. Please write to us if you are seeking a service not catalogued below."
        />
        <List
          className="services-ul"
          items={services}
          renderAs={({
            title,
            paragraph,
            image,
            to,
          }) => (
            <li key={title}>
              <Service
                title={title}
                paragraph={paragraph}
                image={image}
                to={to}
              />
            </li>
          )}
        />
        <AnchorButton
          to={`/${CONTACT_ROUTE}`}
          label="Contact form"
          className="contact-form-link"
        />
      </div>
    </div>
  );
}

export default Services;
