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
