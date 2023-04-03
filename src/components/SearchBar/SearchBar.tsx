import { useState, useEffect } from 'react';

import './SearchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState(() => {
    return JSON.parse(localStorage.getItem('searchValue') as string) || '';
  });

  useEffect(() => {
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
  }, [searchValue]);

  return (
    <form id="search-form" role="search">
      <input
        aria-label="Search"
        placeholder="Search"
        type="search"
        value={searchValue}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        className="form__input_text search-input"
      />
    </form>
  );
}

export default SearchBar;
