// reducer changes states

const initialState = {
  player: 3,
  liar: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return {
        ...state,
        player: action.playerNum,
      };
    case 'SET_LIAR':
      return {
        ...state,
        liar: action.liarNum,
      };
    default:
      return state;
  }
};
