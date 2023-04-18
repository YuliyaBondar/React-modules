import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResults } from '../utils/interfaces';

type Props = {
  searchValue: string;
  page: number;
};

export const rickandmortyApi = createApi({
  reducerPath: 'rickandmortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<IResults[], Props>({
      query: (args) => ({
        url: `character/`,
        params: {
          page: args.page,
          name: args.searchValue,
        },
      }),
    }),
  }),
});

export const { useGetCharactersQuery } = rickandmortyApi;
