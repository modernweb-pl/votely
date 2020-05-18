import { ProjectCreatePage, ProjectEditPage } from './app/modules/project';
import { Home } from './app/pages/home';

export const defaultRoute = '/';

export const routes = {
  '/': Home,
  '/project': ProjectEditPage,
  '/project/create': ProjectCreatePage,
};
