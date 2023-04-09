import { useState, useEffect } from 'react';
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
  const [filteredResults, setFilteredResults] = useState<IResults[]>([]);
  const { register } = useForm();

  useEffect(() => {
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
    fetch('https://rickandmortyapi.com/api/character')
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
  }, [searchValue]);

  const searchItems = (searchInput: string) => {
    setSearchValue(searchInput);
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
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <form id="search-form" role="search">
          <input
            aria-label="Search"
            placeholder="Search"
            type="search"
            {...register('searchValue', {
              onChange: (e) => searchItems(e.target.value),
              value: searchValue,
            })}
            className="form__input_text search-input"
          />
        </form>
        <Cards cards={searchValue.length > 1 ? filteredResults : items?.results} />
      </>
    );
  }
}

export default CardsOnMain;
