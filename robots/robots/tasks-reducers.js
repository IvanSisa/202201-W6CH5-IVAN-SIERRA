import { actionTypes } from "./action-types";

const initialState = [];

export const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadRobots:
      return [...action.payload];
    case actionTypes.createRobot:
      return [...state, action.payload];
    case actionTypes.removeRobot:
      return state.filter((item) => item.id !== action.payload.id);
    case actionTypes.updateRobot:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};
