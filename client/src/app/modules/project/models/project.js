import m from 'mithril';

export const Projects = {
  current: undefined,

  load() {
    return m
      .request({ url: 'http://localhost:3001/projects', withCredentials: true })
      .then(project => (Projects.current = project));
  },

  create(project) {
    return m
      .request({
        method: 'POST',
        url: 'http://localhost:3001/projects',
        withCredentials: true,
        body: project,
      })
      .then(project => (Projects.current = project));
  },
};
