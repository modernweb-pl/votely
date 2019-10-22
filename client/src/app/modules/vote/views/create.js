import m from 'mithril';
import { formGroup } from '../../../shared/form';
import { VoteSession } from '../models';

export const VoteCreateForm = {
  submit(e) {
    e.preventDefault();
    VoteSession.create().then(session => {
      m.route.set('/create/:pin', { pin: session.pin });
    });
  },

  view() {
    return m(
      'form',
      {
        class: 'pin-form',
        onsubmit: VoteCreateForm.submit,
      },
      [
        formGroup(
          m('input', {
            name: 'title',
            type: 'text',
            class: 'form-control',
            placeholder: 'Title',
            id: 'vote-title',
            value: VoteSession.current.title,
            oninput(e) {
              VoteSession.current.title = e.target.value;
            },
          })
        ),
        formGroup(
          m(
            'button',
            {
              class: 'btn btn-block btn-primary',
              type: 'submit',
              value: 'Submit',
            },
            'Create'
          )
        ),
      ]
    );
  },
};

export const VoteCreate = {
  view() {
    return m(
      'div',
      {
        class: 'd-flex flex-column justify-content-center h-100 w-100 text-center',
      },
      m('div', { class: 'container' }, [
        m('h1', 'Votely'),
        m('h3', 'Create vote session'),
        m(VoteCreateForm),
        m(
          m.route.Link,
          {
            href: '/',
          },
          'Join vote session'
        ),
      ])
    );
  },
};
