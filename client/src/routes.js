import { VoteCreate } from './app/modules/vote/views/create';
import { Home } from './app/pages/home';

export const defaultRoute = '/';

export const routes = {
  '/': Home,
  '/create': VoteCreate,
  '/create/:id': VoteCreate,
};
