import FrontPage from '../pages/FrontPage';
import Projects from '../pages/Projects';
import ProjectPage from '../pages/ProjectPage';

export const FRONT_PAGE_ROUTE = '/';
export const INDEX_ROUTE = '/*';
export const ADMIN_ROUTE = '/admin';
export const COMPANY_ROUTE = 'company';
export const CONTACT_ROUTE = 'contact';
export const PROJECTS_ROUTE = 'projects';
export const SERVICES_ROUTE = 'services';
export const BLOG_ROUTE = 'blog';
export const INTERIOR_DESIGN_ROUTE = 'interiordesign';
export const CONCEPTUALIZATION_ROUTE = 'conceptualization';
export const ENGINEERING_ROUTE = 'engineering';
export const DELIVERY_ROUTE = 'delivery';
export const REPAIRS_ROUTE = 'repairs';
export const CONSULTATION_ROUTE = 'consultation';
export const GUEST = 'GUEST';
export const ADMIN = 'ADMIN';
export const EMPLOYEE = 'EMPLOYEE';

export const indexPublicRoutes = [
  {
    path: `${PROJECTS_ROUTE}/:title`,
    Component: ProjectPage,
  },
  {
    path: PROJECTS_ROUTE,
    Component: Projects,
  },
  {
    path: INDEX_ROUTE,
    Component: FrontPage,
  },
];

export const mainNavButtons = [
  {
    to: FRONT_PAGE_ROUTE,
    label: 'Main',
  },
  {
    to: PROJECTS_ROUTE,
    label: 'Projects',
  },
  {
    to: SERVICES_ROUTE,
    label: 'Services',
  },
  {
    to: BLOG_ROUTE,
    label: 'Blog',
  },
  {
    to: COMPANY_ROUTE,
    label: 'Company',
  },
];

export const servicesNavButtons = [
  {
    to: `${SERVICES_ROUTE}/${INTERIOR_DESIGN_ROUTE}`,
    label: 'Interior design',
  },
  {
    to: `${SERVICES_ROUTE}/${CONCEPTUALIZATION_ROUTE}`,
    label: 'Conceptualization',
  },
  {
    to: `${SERVICES_ROUTE}/${ENGINEERING_ROUTE}`,
    label: 'Engineering',
  },
  {
    to: `${SERVICES_ROUTE}/${DELIVERY_ROUTE}`,
    label: 'Delivery',
  },
  {
    to: `${SERVICES_ROUTE}/${REPAIRS_ROUTE}`,
    label: 'Repairs',
  },
  {
    to: `${SERVICES_ROUTE}/${CONSULTATION_ROUTE}`,
    label: 'In-person consultation',
  },
];
