export type Props = {};

export type SearchState = {
  searchValue: string;
};

export interface IData {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  color: string;
  sizes: Array<string>;
  material: string;
  rating: number;
}
