import { useState, useEffect, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import Cards from '../../components/Cards/Cards';
import { IData, IResults } from '../../utils/interfaces';

import './CardsOnMain.css';

function CardsOnMain() {
  const [searchValue, setSearchValue] = useState(() => {
    return JSON.parse(localStorage.getItem('searchValue') as string) || '';
  });
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<IData | null>(null);
  const [filteredResults, setFilteredResults] = useState(() => {
    return JSON.parse(localStorage.getItem('filteredResults') as string) || [];
  });
  const [page, setPage] = useState(() => {
    return JSON.parse(localStorage.getItem('page') as string) || '1';
  });
  const { register } = useForm();

  useEffect(() => {
    localStorage.setItem('filteredResults', JSON.stringify(filteredResults));
    localStorage.setItem('page', JSON.stringify(page));
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [page, filteredResults]);

  const searchItems = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
    if (searchValue !== '') {
      const filteredData = items?.results.filter((item) => {
        return item.name?.toLowerCase().includes(searchValue.toLowerCase());
      }) as IResults[];
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(items?.results as IResults[]);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
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
        <div className="page__control">
          <button
            className="button"
            disabled={page == 1}
            onClick={() => {
              setPage((prevState: string) => +prevState - 1);
            }}
          >
            prev
          </button>
          <span>{page}</span>
          <button
            className="button"
            onClick={() => {
              setPage((prevState: string) => +prevState + 1);
            }}
          >
            next
          </button>
        </div>
        <Cards cards={filteredResults.length ? filteredResults : items?.results} />
      </>
    );
  }
}

export default CardsOnMain;
