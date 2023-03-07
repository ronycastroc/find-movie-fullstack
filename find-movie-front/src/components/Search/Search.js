import { Button } from '../Button/Button';
import './search.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getMovie } from '../../services/findMovieService';
import { resetMovie, setMovie } from '../../store/actions';

export const Search = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (movieTitle.length < 1) return alert("Field cannot be empty");

    try {
      const movie = await getMovie(movieTitle);

      dispatch(setMovie(movie));
      setMovieTitle('');
    } catch (error) {
      console.log(error);
    }
  }

  const handleReset = () => {
    dispatch(resetMovie());
  }

  return (
    <div className='search'>
      <input
        type="text"
        name="search"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        required />
      <div className='buttons'>
        <Button onClick={handleSearch}>Search</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}