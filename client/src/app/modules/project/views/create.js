import m from 'mithril';
import { formGroup } from '../../../shared/form';
import { Projects } from '../models/project';

export const ProjectCreateForm = {
  data: {
    title: '',
  },

  submit(e) {
    e.preventDefault();
    return Projects.create(ProjectCreateForm.data).then(() => m.route.set('/project'));
  },

  view() {
    return m(
      'form',
      {
        class: 'pin-form',
        onsubmit: ProjectCreateForm.submit,
      },
      [
        formGroup(
          m('input', {
            name: 'title',
            type: 'text',
            class: 'form-control',
            placeholder: 'Title',
            id: 'vote-title',
            value: ProjectCreateForm.data.title,
            oninput(e) {
              ProjectCreateForm.data.title = e.target.value;
            },
          }),
        ),
        formGroup(
          m(
            'button',
            {
              class: 'btn btn-block btn-primary',
              type: 'submit',
              value: 'Submit',
            },
            'Create',
          ),
        ),
      ],
    );
  },
};

export const ProjectCreatePage = {
  view() {
    return m(
      'div',
      {
        class: 'd-flex flex-column justify-content-center h-100 w-100 text-center',
      },
      m('div', { class: 'container' }, [
        m('h1', 'Votely'),
        m('h3', 'Create vote session'),
        m(ProjectCreateForm),
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
