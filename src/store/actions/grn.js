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
