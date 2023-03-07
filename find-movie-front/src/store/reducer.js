import initialState from './initialState';
import { SET_MOVIE, RESET_MOVIE } from './actions';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return { ...state, movie: action.payload };
    case RESET_MOVIE:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
};

export default reducer;
