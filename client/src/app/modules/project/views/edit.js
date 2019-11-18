import m from 'mithril';
import { Projects } from '../models/project';
import { QuestionItem } from '../../question/item';

export const ProjectEditPage = {
  oninit() {
    return Projects.load().then(project => {
      if (!project) {
        m.route.set('/project/create');
      }
    });
  },
  view() {
    if (!Projects.current) {
      return;
    }

    return m(
      'div',
      {
        class: 'd-flex flex-column h-100 pt-3',
      },
      m(
        'div',
        { class: 'container' },
        m('div', { class: 'text-center' }, [
          m('h1', 'Votely'),
          m('h3', [
            `Title: ${Projects.current.title} `,
            m(m.route.Link, { class: 'btn btn-sm btn-info', href: '/project/create' }, 'edit'),
          ]),
        ]),
        Projects.current.questions.map(q => m(QuestionItem)),
        m('div', { class: 'text-center' }, [
          m(
            'button',
            {
              class: 'btn btn-primary mr-3',
            },
            'Add question',
          ),
          m(
            'button',
            {
              class: 'btn btn-warning',
            },
            'Start session',
          ),
        ]),
      ),
      m('div', { class: 'mt-auto mb-3 text-center' }, [
        m(
          m.route.Link,
          {
            href: '/',
          },
          'Join vote session',
        ),
      ]),
    );
  },
};
