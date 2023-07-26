import FrontPage from '../pages/front_page/FrontPage';
import Projects from '../pages/projects/Projects';
import ProjectPage from '../pages/projects/project_page/ProjectPage';
import Blog from '../pages/blog/Blog';
import Services from '../pages/services/Services';
import ArticlePage from '../pages/article_page/ArticlePage';
import Company from '../pages/company/Company';
import About from '../pages/company/About';
import Advantages from '../pages/company/Advantages';
import Partners from '../pages/company/Partners';
import Feedback from '../pages/company/Feedback';
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
