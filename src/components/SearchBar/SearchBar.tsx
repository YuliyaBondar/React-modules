import { Dispatch } from 'react';
import { useForm } from 'react-hook-form';
import SubmitButton from '../SubmitButton/SubmitButton';

import './SearchBar.css';

type Props = {
  searchValue: string;
  setSearchValue?: Dispatch<string>;
};

function SearchBar({ searchValue, setSearchValue }: Props) {
  const { register } = useForm();

  return (
    <div className="search-input__container">
      <input
        aria-label="Search"
        placeholder="Search"
        type="search"
        {...register('searchValue', {
          onChange: (e) => setSearchValue?.(e.target.value),
          value: searchValue,
        })}
        className="form__input_text search-input"
      />
      <SubmitButton />
    </div>
  );
}

export default SearchBar;
