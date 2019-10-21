import m from 'mithril';

export function formGroup(content) {
  return m('div', { class: 'form-group' }, content);
}

const pinForm = () =>
  m(
    'form',
    {
      class: 'pin-form',
    },
    [
      formGroup(
        m('input', {
          name: 'voteId',
          type: 'tel',
          class: 'form-control',
          placeholder: 'PIN',
          id: 'vote-input',
          value: '',
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
          'Wejdź'
        )
      ),
    ]
  );

export const Home = {
  view: () =>
    m(
      'div',
      {
        class: 'd-flex flex-column justify-content-center h-100 w-100 text-center',
      },
      m('div', { class: 'container' }, [m('h1', 'Votely'), m('h3', 'Oddaj swój głos!'), pinForm()])
    ),
};
