import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useSelector } from 'react-redux';
import './stars.scss';

export const Stars = () => {
  const movie = useSelector(state => state.movie);

  if (+movie?.imdbRating < 2) {
    return (
      <BsStarHalf className='icon' />
    );
  }

  if (+movie?.imdbRating > 2 && +movie?.imdbRating < 3) {
    return (
      <BsStarFill className='icon' />
    );
  }

  if (+movie?.imdbRating > 3 && +movie?.imdbRating < 4) {
    return (
      <>
        <BsStarFill className='icon' />
        <BsStarHalf className='icon' />
      </>
    );
  }

  if (+movie?.imdbRating > 4 && +movie?.imdbRating < 5) {
    return (
      <>
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
      </>
    );
  }

  if (+movie?.imdbRating > 5 && +movie?.imdbRating < 6) {
    return (
      <>
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarHalf className='icon' />
      </>
    );
  }

  if (+movie?.imdbRating > 6 && +movie?.imdbRating < 7) {
    return (
      <>
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
      </>
    );
  }

  if (+movie?.imdbRating > 7 && +movie?.imdbRating < 8) {
    return (
      <>
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarHalf className='icon' />
      </>
    );
  }

  if (+movie?.imdbRating > 8 && +movie?.imdbRating < 9) {
    return (
      <>
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
      </>
    );
  }

  if (+movie?.imdbRating > 9 && +movie?.imdbRating < 10) {
    return (
      <>
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarHalf className='icon' />
      </>
    );
  }

  if (+movie?.imdbRating === 10) {
    return (
      <>
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
        <BsStarFill className='icon' />
      </>
    );
  }
}