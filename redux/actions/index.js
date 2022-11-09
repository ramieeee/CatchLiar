export const setPlayer = playerNum => {
  return {
    type: 'SET_PLAYER',
    playerNum: playerNum,
  };
};

export const setLiar = liarNum => {
  return {
    type: 'SET_LIAR',
    liarNum: liarNum,
  };
};

export const setTopic = topicId => {
  return {
    type: 'SET_TOPIC',
    topicId: topicId,
  };
};

export const setPlayerCnt = playerCnt => {
  return {
    type: 'SET_PLAYERCNT',
    playerCnt: playerCnt,
  };
};

export const setLiarIndex = liarIndex => {
  return {
    type: 'SET_LIARINDEX',
    liarIndex: liarIndex,
  };
};
