import * as actionTypes from "../actions/actionTypes";

const initialState = {
  randNum: 0,
  playerWon: false,
  clickedHint: 0,
  numOfTries: 5
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
    case actionTypes.CLICKED_HINT:
      return {
        ...state,
        clickedHint: action.payload
      };
    case actionTypes.RESET_HINT:
      return {
        ...state,
        clickedHint: action.payload
      };
    case actionTypes.DECREMENT_TRIES:
      return {
        ...state,
        numOfTries: action.payload
      };
    default:
      return state;
  }
};

export default getRandNumReducer;
