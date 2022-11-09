// reducer changes states

const initialState = {
  player: 3,
  liar: 1,
  topic: 1,
  playerCnt: 1,
  liarIndex: [],
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
    case 'SET_TOPIC':
      return {
        ...state,
        topic: action.topicId,
      };
    case 'SET_PLAYERCNT':
      return {
        ...state,
        playerCnt: action.playerCnt,
      };
    case 'SET_LIARINDEX':
      return {
        ...state,
        liarIndex: action.liarIndex,
      };
    default:
      return state;
  }
};
