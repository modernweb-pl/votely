import m from 'mithril';
import { defaultRoute, routes } from './routes';

if (process.env.NODE_ENV !== 'production') {
  console.log('App is running in the development mode.');
}

if (module.hot) {
  module.hot.accept();
}

m.route(document.getElementById('root'), defaultRoute, routes);
