import { useState, useEffect, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import { fetchData } from '../../utils/supportConstants';

import './CardsOnMain.css';

function CardsOnMain() {
  const searchValue = useSelector((state: RootState) => state.searchValue.value);
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredResults, setFilteredResults] = useState(() => {
    return JSON.parse(localStorage.getItem('filteredResults') as string) || [];
  });
  const [page, setPage] = useState(() => {
    return JSON.parse(localStorage.getItem('page') as string) || 1;
  });

  useEffect(() => {
    localStorage.setItem('page', JSON.stringify(page));
    fetchData({ page, searchValue, setIsLoaded, setFilteredResults, setError });
  }, [page]);

  const searchItems = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchData({ page, searchValue, setIsLoaded, setFilteredResults, setError }).then((result) => {
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
          <SearchBar />
          {filteredResults && (
            <Pagination page={page} setPage={setPage} filteredResults={filteredResults} />
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
