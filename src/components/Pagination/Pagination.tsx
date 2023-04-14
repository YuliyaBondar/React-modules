import { Dispatch } from 'react';

import './Pagination.css';

type Props = {
  page: number;
  setPage: Dispatch<(prevState: number) => number>;
  filteredResults: [];
};

function Pagination({ page, setPage, filteredResults }: Props) {
  return (
    <div className="page__control">
      <button
        className="button"
        disabled={page == 1}
        onClick={() => {
          setPage((prevState) => prevState - 1);
        }}
      >
        prev
      </button>
      <span>{page}</span>
      <button
        className="button"
        disabled={filteredResults.length < 20}
        onClick={() => {
          setPage((prevState) => prevState + 1);
        }}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
