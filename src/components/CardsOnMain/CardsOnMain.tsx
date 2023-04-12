import { useState, useEffect, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import Cards from '../../components/Cards/Cards';
import { IData, IResults } from '../../utils/interfaces';
import fetch from 'cross-fetch';

import './CardsOnMain.css';

function CardsOnMain() {
  const { register } = useForm();

  const [searchValue, setSearchValue] = useState(() => {
    return JSON.parse(localStorage.getItem('searchValue') as string) || '';
  });
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<IData | null>(null);
  const [filteredResults, setFilteredResults] = useState(() => {
    return JSON.parse(localStorage.getItem('filteredResults') as string) || [];
  });

  useEffect(() => {
    localStorage.setItem('filteredResults', JSON.stringify(filteredResults));

    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [filteredResults]);

  const searchItems = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem('searchValue', JSON.stringify(searchValue));

    if (searchValue !== '') {
      const filteredData = items?.results.filter((item) => {
        return item.name?.toLowerCase().includes(searchValue.toLowerCase());
      }) as IResults[];
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loader-container">
        <div className="spinner" data-testid="spinner"></div>
      </div>
    );
  } else {
    return (
      <>
        <form id="search-form" role="search" onSubmit={searchItems}>
          <input
            aria-label="Search"
            placeholder="Search"
            type="search"
            {...register('searchValue', {
              onChange: (e) => setSearchValue(e.target.value),
              value: searchValue,
            })}
            className="form__input_text search-input"
          />
          <input type="submit" value="Submit" className="form__input_submit" />
        </form>
        <Cards cards={filteredResults.length ? filteredResults : items?.results} />
      </>
    );
  }
}

export default CardsOnMain;
