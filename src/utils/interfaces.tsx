export interface IData {
  info: IInfo;
  results: IResults[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IResults {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: IOrigin;
  location?: ILocation;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
  releaseDate?: string;
  category?: string;
  isAgreed?: boolean;
  material?: string;
}

export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}
