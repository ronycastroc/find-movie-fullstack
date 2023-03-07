import { Button } from '../Button/Button';
import './search.scss';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { getMovie } from '../../services/findMovieService';
import { resetMovie, setMovie } from '../../store/actions';

export const Search = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();

    const title = inputRef.current.value;

    try {
      const movie = await getMovie(title);

      dispatch(setMovie(movie));
      inputRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  }

  const handleReset = () => {
    dispatch(resetMovie);
  }

  return (
    <div className='search'>
      <input type="text" name="search" required ref={inputRef}/>
      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}