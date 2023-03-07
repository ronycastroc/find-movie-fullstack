export const SET_MOVIE = 'SET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export const setMovie = (movie) => {
  return {
    type: SET_MOVIE,
    payload: movie
  }
}

export const resetMovie = () => ({
  type: RESET_MOVIE,
  payload: null
});



