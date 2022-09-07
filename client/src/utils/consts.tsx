import FrontPage from '../pages/FrontPage';

export const FRONT_PAGE_ROUTE = '/';
export const INDEX_ROUTE = '/*';
export const ADMIN_ROUTE = '/admin';
export const COMPANY_ROUTE = 'company';
export const CONTACT_ROUTE = 'contact';
export const PROJECTS_ROUTE = 'projects';
export const GUEST = 'GUEST';
export const ADMIN = 'ADMIN';
export const EMPLOYEE = 'EMPLOYEE';

export const indexPublicRoutes = [
  {
    path: INDEX_ROUTE,
    Component: FrontPage,
  },
];
