import FrontPage from '../pages/FrontPage';
import Projects from '../pages/Projects';
import ProjectPage from '../pages/ProjectPage';
import Blog from '../pages/Blog';
import Services from '../pages/Services';
import ArticlePage from '../pages/ArticlePage';
import Company from '../pages/Company';
import About from '../pages/Company/About';
import Advantages from '../pages/Company/Advantages';
import Partners from '../pages/Company/Partners';
import Feedback from '../pages/Company/Feedback';
import * as routes from '../utils/consts';

export const indexPublicRoutes = [
  {
    path: routes.COMPANY_WILDCARD_ROUTE,
    Component: Company,
  },
  {
    path: routes.COMPANY_ROUTE,
    Component: Company,
  },
  {
    path: `${routes.BLOG_ROUTE}/:title`,
    Component: ArticlePage,
  },
  {
    path: routes.BLOG_ROUTE,
    Component: Blog,
  },
  {
    path: `${routes.SERVICES_ROUTE}/:title`,
    Component: ArticlePage,
  },
  {
    path: routes.SERVICES_ROUTE,
    Component: Services,
  },
  {
    path: `${routes.PROJECTS_ROUTE}/:title`,
    Component: ProjectPage,
  },
  {
    path: routes.PROJECTS_ROUTE,
    Component: Projects,
  },
  {
    path: routes.INDEX_ROUTE,
    Component: FrontPage,
  },
];

export const companyRoutes = [
  {
    path: routes.FEEDBACK_ROUTE,
    Component: Feedback,
  },
  {
    path: routes.PARTNERS_ROUTE,
    Component: Partners,
  },
  {
    path: `${routes.ADVANTAGES_ROUTE}/:advantage`,
    Component: ArticlePage,
  },
  {
    path: routes.ADVANTAGES_ROUTE,
    Component: Advantages,
  },
  {
    path: routes.ABOUT_ROUTE,
    Component: About,
  },
  {
    path: routes.INDEX_ROUTE,
    Component: About,
  },
];
