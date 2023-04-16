import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import { handleSearchChange } from '../../features/searchValue/searchValueSlice';
import SubmitButton from '../SubmitButton/SubmitButton';

import './SearchBar.css';

function SearchBar() {
  const { register } = useForm();
  const searchValueInput = useRef<HTMLInputElement | null>(null);
  const searchValue = useSelector((state: RootState) => state.searchValue.value);
  const dispatch = useDispatch();

  useEffect(() => {
    searchValueInput!.current!.value = searchValue;
  }, []);

  return (
    <div className="search-input__container">
      <input
        aria-label="Search"
        placeholder="Search"
        type="search"
        {...register('searchValueInput', {
          onChange: () => dispatch(handleSearchChange(searchValueInput.current!.value)),
          value: searchValueInput,
        })}
        ref={searchValueInput}
        className="form__input_text search-input"
      />
      <SubmitButton />
    </div>
  );
}

export default SearchBar;
