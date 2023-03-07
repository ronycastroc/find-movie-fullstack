import { Button } from '../Button/Button';
import './search.scss';

export const Search = () => {
  return (
    <div className='search'>
      <input type="text" name="search" />
      <Button>Search</Button>
      <Button>Reset</Button>
    </div>
  );
}