import m from 'mithril';

export const ProjectQuestion = {
  view() {
    return m('div', { class: 'card mb-3' }, [
      m('div', { class: 'card-header d-flex align-items-center' }, [
        m('span', { class: 'mr-auto' }, 'question'),
        m('button', { class: 'btn btn-outline-info mr-2' }, 'edit'),
        m('button', { class: 'btn btn-outline-danger' }, 'remove'),
      ]),
      m('.card-body', 'aaaaa'),
    ]);
  },
};
