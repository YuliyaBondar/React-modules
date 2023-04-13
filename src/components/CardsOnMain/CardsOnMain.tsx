import { useState, useEffect, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import fetch from 'cross-fetch';
import Cards from '../../components/Cards/Cards';

import './CardsOnMain.css';

function CardsOnMain() {
  const { register } = useForm();

  const [searchValue, setSearchValue] = useState(() => {
    return JSON.parse(localStorage.getItem('searchValue') as string) || '';
  });
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredResults, setFilteredResults] = useState(() => {
    return JSON.parse(localStorage.getItem('filteredResults') as string) || [];
  });
  const [page, setPage] = useState(() => {
    return JSON.parse(localStorage.getItem('page') as string) || 1;
  });

  const fetchData = () => {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchValue}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFilteredResults(result?.results);
          return result;
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    localStorage.setItem('page', JSON.stringify(page));
    fetchData();
  }, [page]);

  const searchItems = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem('searchValue', JSON.stringify(searchValue));
    fetchData().then((result) => {
      setFilteredResults(result?.results);
      localStorage.setItem('filteredResults', JSON.stringify(result?.results));
    });
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
          <div className="search-input__container">
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
          </div>
          {filteredResults && (
            <div className="page__control">
              <button
                className="button"
                disabled={page == 1}
                onClick={() => {
                  setPage((prevState: number) => prevState - 1);
                }}
              >
                prev
              </button>
              <span>{page}</span>
              <button
                className="button"
                disabled={filteredResults.length < 20}
                onClick={() => {
                  setPage((prevState: number) => prevState + 1);
                }}
              >
                next
              </button>
            </div>
          )}
          {filteredResults ? (
            <Cards cards={filteredResults || []} />
          ) : (
            <h2>Sorry, no matches found!</h2>
          )}
        </form>
      </>
    );
  }
}

export default CardsOnMain;
