import { Dispatch } from 'react';
import fetch from 'cross-fetch';

type Props = {
  page: string;
  searchValue: string;
  setIsLoaded: Dispatch<boolean>;
  setFilteredResults: Dispatch<[]>;
  setError: Dispatch<Error>;
};

export const fetchData = ({
  page,
  searchValue,
  setIsLoaded,
  setFilteredResults,
  setError,
}: Props) => {
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
