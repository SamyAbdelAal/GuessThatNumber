import * as actionTypes from "../actions/actionTypes";

const initialState = {
  randNum: 0,
  playerWon: false
};

const getRandNumReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RAND_NUM:
      return {
        ...state,
        randNum: action.payload
      };
    case actionTypes.PLAYER_WINS:
      return {
        ...state,
        playerWon: true
      };
    default:
      return state;
  }
};

export default getRandNumReducer;
