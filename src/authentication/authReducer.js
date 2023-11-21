// reducers.js
import * as actionTypes from './actionTypes';

const initialState = {
  email: '',
  // ... other initial state properties
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    // ... other cases
    default:
      return state;
  }
};

export default rootReducer;
