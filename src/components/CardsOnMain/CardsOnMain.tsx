import { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import { useGetCharactersQuery } from '../../services/rickandmorty';
import { charactersCreator } from '../../features/appReducer/appReducerSlice';

import './CardsOnMain.css';

function CardsOnMain() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.store.searchValue);
  const characters = useSelector((state: RootState) => state.store.characters);
  const [page, setPage] = useState(() => {
    return JSON.parse(localStorage.getItem('page') as string) || 1;
  });
  const { data, error, isLoading } = useGetCharactersQuery({ searchValue, page });

  useEffect(() => {
    localStorage.setItem('page', JSON.stringify(page));
    {
      data ? dispatch(charactersCreator(data.results)) : dispatch(charactersCreator([]));
    }
  }, [page, data]);

  const searchItems = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (error) {
    return <div>Oh no, there was an error</div>;
  } else if (isLoading) {
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
          {characters && <Pagination page={page} setPage={setPage} filteredResults={characters} />}
          {characters ? <Cards cards={characters || []} /> : <h2>Sorry, no matches found!</h2>}
        </form>
      </>
    );
  }
}

export default CardsOnMain;
