import servicesOne from '../assets/images/services-1.jpg';
import servicesTwo from '../assets/images/services-2.jpg';
import servicesThree from '../assets/images/services-3.jpg';
import servicesFour from '../assets/images/services-4.jpg';
import servicesFive from '../assets/images/services-5.jpg';
import servicesSix from '../assets/images/services-6.jpg';
import displayImageOne from '../assets/images/interior-8.jpg';
import displayImageTwo from '../assets/images/interior-5.1.jpg';
import displayImageThree from '../assets/images/interior-2.jpg';
import displayImageFour from '../assets/images/interior-13.jpg';
import displayImageFive from '../assets/images/interior-27.jpg';
import displayImageSix from '../assets/images/interior-4.jpg';
import { ReactComponent as CeramicaBardelli } from '../assets/logos/CeramicaBardelli.svg';
import { ReactComponent as CeramicheCaesar } from '../assets/logos/CeramicheCaesar.svg';
import { ReactComponent as Mutina } from '../assets/logos/Mutina.svg';
import { ReactComponent as MosaicoMicro } from '../assets/logos/MosaicoMicro.svg';
import { ReactComponent as Leaf } from '../assets/icons/leaf.svg';
import { ReactComponent as Pickaxe } from '../assets/icons/pickaxe.svg';
import { ReactComponent as Thumbsup } from '../assets/icons/thumbsup.svg';
import { ReactComponent as Truck } from '../assets/icons/truck.svg';
import { ReactComponent as Figma } from '../assets/icons/figma.svg';
import { ReactComponent as Award } from '../assets/icons/award.svg';
import * as routes from './consts';

export const mainNavButtons = [
  {
    to: routes.FRONT_PAGE_ROUTE,
    label: 'Main',
  },
  {
    to: routes.PROJECTS_ROUTE,
    label: 'Projects',
  },
  {
    to: routes.SERVICES_ROUTE,
    label: 'Services',
  },
  {
    to: routes.BLOG_ROUTE,
    label: 'Blog',
  },
  {
    to: routes.COMPANY_ROUTE,
    label: 'Company',
  },
];

export const servicesNavButtons = [
  {
    to: `${routes.SERVICES_ROUTE}/${routes.INTERIOR_DESIGN_ROUTE}`,
    label: 'Interior design',
  },
  {
    to: `${routes.SERVICES_ROUTE}/${routes.CONCEPTUALIZATION_ROUTE}`,
    label: 'Conceptualization',
  },
  {
    to: `${routes.SERVICES_ROUTE}/${routes.ENGINEERING_ROUTE}`,
    label: 'Engineering',
  },
  {
    to: `${routes.SERVICES_ROUTE}/${routes.DELIVERY_ROUTE}`,
    label: 'Delivery',
  },
  {
    to: `${routes.SERVICES_ROUTE}/${routes.REPAIRS_ROUTE}`,
    label: 'Repairs',
  },
  {
    to: `${routes.SERVICES_ROUTE}/${routes.CONSULTATION_ROUTE}`,
    label: 'In-person consultation',
  },
];

export const projectsCardsBatchOne = [
  {
    location: 'Vienna, Virginia',
    title: 'Cobblestone kitchen with ceramic tile panels',
    image: displayImageOne,
  },
  {
    location: 'Bethesda, Maryland',
    title: 'Chillout zone for rest and relaxation',
    image: displayImageTwo,
  },
  {
    location: 'Washington, D.C.',
    title: 'Marble bathroom du style classique',
    image: displayImageThree,
  },
];

export const projectsCardsBatchTwo = [
  {
    location: 'Arlington, Virginia',
    title: 'Our cobblestone pillars adorn a rustic restaurant',
    image: displayImageFour,
  },
  {
    location: 'Alexandria, Virginia',
    title: 'Lorem ipsum dolor sit amet, consectetur...',
    image: displayImageFive,
  },
  {
    location: 'Silver Springs, Maryland',
    title: 'Lorem ipsum dolor sit amet, consectetur...',
    image: displayImageSix,
  },
];

export const advantagesCards = [
  {
    Icon: Leaf,
    title: 'Safe materials',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam. Blandit turpis cursus in hac habitasse platea dictumst quisque. Aliquam.',
    url: 'safe',
  },
  {
    Icon: Pickaxe,
    title: 'Quality stone',
    body: 'Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. Et odio pellentesque diam volutpat commodo sed egestas. At volutpat diam ut venenatis tellus in metus. Interdum varius sit amet mattis. Faucibus turpis in eu mi bibendum.',
    url: 'quality',
  },
  {
    Icon: Thumbsup,
    title: 'Professional team',
    body: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. At volutpat diam ut venenatis tellus in metus. Neque egestas congue quisque egestas diam.',
    url: 'team',
  },
  {
    Icon: Figma,
    title: 'Creative solutions',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam. At vero eos. At vero eos.',
    url: 'solutions',
  },
  {
    Icon: Award,
    title: 'Industry recognition',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam. At vero eos. At vero eos.',
    url: 'recognition',
  },
  {
    Icon: Truck,
    title: 'Tracked, reliable delivery',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Neque egestas congue quisque egestas diam. ',
    url: 'delivery',
  },
];

export const servicesCards = [
  {
    image: servicesOne,
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit.. ',
    title: 'Interior design',
    to: routes.INTERIOR_DESIGN_ROUTE,
  },
  {
    image: servicesTwo,
    paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. At volutpat diam ut venenatis tellus in metus.',
    title: 'Conceptualization',
    to: routes.CONCEPTUALIZATION_ROUTE,
  },
  {
    image: servicesThree,
    paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. At volutpat diam ut venenatis tellus in metus.',
    title: 'Engineering',
    to: routes.ENGINEERING_ROUTE,
  },
  {
    image: servicesFour,
    paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. At volutpat diam ut venenatis tellus in metus.',
    title: 'Material delivery',
    to: routes.MATERIAL_DELIVERY_ROUTE,
  },
  {
    image: servicesFive,
    paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl. At volutpat diam ut venenatis tellus in metus.',
    title: 'Repairs',
    to: routes.REPAIRS_ROUTE,
  },
  {
    image: servicesSix,
    paragraph: 'Et odio pellentesque diam volutpat commodo sed egestas. Vestibulum sed arcu non odio. Interdum consectetur libero id faucibus nisl..',
    title: 'In-person consultation',
    to: routes.CONSULTATION_ROUTE,
  },
];

export const partners = [
  {
    Logo: CeramicaBardelli,
    name: 'Ceramica Bardelli',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    Logo: MosaicoMicro,
    name: 'Mosaico Micro',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    Logo: Mutina,
    name: 'Mutina',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    Logo: CeramicheCaesar,
    name: 'Ceramiche Caesar',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem dolor sit amet, consectetur adipiscing elit. ',
  },
];
