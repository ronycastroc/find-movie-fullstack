import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Stars, Button } from '../../components';
import './movie.scss';

export const Movie = () => {
  const movie = useSelector(state => state.movie);

  useEffect(() => {
    if (movie?.Response === "False") return alert("Movie not found!");
  }, [movie]); 

  return (
    <>
      {!movie || movie?.Response === "False" ? ("") : 
      (<>
        <div className='movie'>
          <div className='info'>
            <h1>{movie?.Title}</h1>
            <p>{movie?.Plot}</p>
            <span className='actors'>Actors </span>
            <span>{movie?.Actors}</span>
            <div className='star'>
              <p className='review'>Review </p>
              <Stars />
            </div>

            <Button>Favorite</Button>
          </div>
          <div className='poster'>
            <img src={movie?.Poster} alt="" />

          </div>
        </div>
      </>)}
    </>
  );
}