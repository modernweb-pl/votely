import m from 'mithril';
import { VoteSession } from '../modules/vote/models';
import { formGroup } from '../shared/form';

export const PinForm = {
  pin: undefined,

  submit(e) {
    e.preventDefault();

    if (!PinForm.pin) {
      return;
    }

    VoteSession.start(PinForm.pin);
  },

  view() {
    return m(
      'form',
      {
        class: 'pin-form',
        onsubmit: PinForm.submit,
      },
      [
        formGroup(
          m('input', {
            name: 'voteId',
            type: 'tel',
            class: 'form-control',
            placeholder: 'PIN',
            id: 'vote-input',
            value: PinForm.pin,
            oninput(e) {
              PinForm.pin = parseInt(e.target.value);
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
            'Enter'
          )
        ),
      ]
    );
  },
};

export const Home = {
  view() {
    return m(
      'div',
      {
        class: 'd-flex flex-column justify-content-center h-100 w-100 text-center',
      },
      [
        m('div', { class: 'container' }, [
          m('h1', 'Votely'),
          m('h3', 'Cast your vote!'),
          m(PinForm),
          m(
            m.route.Link,
            {
              href: '/create',
            },
            'Create vote session'
          ),
        ]),
      ]
    );
  },
};
