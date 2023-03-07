import { useSelector } from 'react-redux';
import { Stars, Button } from '../../components';
import './movie.scss';

export const Movie = () => {
  const movie = useSelector(state => state.movie);
  console.log(movie);

  return (
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
      <div>

      </div>
    </div>
  );
}