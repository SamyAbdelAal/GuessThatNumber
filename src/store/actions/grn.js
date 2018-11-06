import * as actionTypes from "./actionTypes";

export const getRandNum = () => {
  let randNum = Math.floor(Math.random() * 100) + 1;
  return {
    type: actionTypes.GET_RAND_NUM,
    payload: randNum
  };
};
export const playerWins = () => {
  return {
    type: actionTypes.PLAYER_WINS
  };
};
export const clickedHint = hint => {
  return {
    type: actionTypes.CLICKED_HINT,
    payload: hint
  };
};
export const resetHint = () => {
  return {
    type: actionTypes.RESET_HINT,
    payload: 0
  };
};
export const decrementTries = tries => {
  tries--;
  return {
    type: actionTypes.DECREMENT_TRIES,
    payload: tries
  };
};
