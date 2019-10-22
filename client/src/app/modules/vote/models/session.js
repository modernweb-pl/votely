export const PIN_LENGTH = 6;
export const generatePin = (length = PIN_LENGTH) =>
  Math.floor(Math.pow(10, length - 1) + Math.random() * (9 * Math.pow(10, length - 1)));

export const uniquePin = (existing = {}) => {
  let pin;
  do {
    pin = generatePin();
  } while (existing[pin]);

  return pin;
};

export const VoteSession = {
  sessions: {},

  current: {
    title: '',
    pin: undefined,
  },

  create() {
    const session = { ...VoteSession.current };
    session.pin = uniquePin(VoteSession.sessions);

    console.log('vote session, create:', session);

    VoteSession.sessions[session.pin] = session;
    return Promise.resolve(session);
  },

  start(pin) {
    console.log('vote session, start:', pin);

    const session = VoteSession.sessions[pin];
    if (!session) {
      return Promise.reject(Error(`Session not found, pin: ${pin}`));
    }

    VoteSession.current = session;

    return Promise.resolve(VoteSession.current);
  },
};
