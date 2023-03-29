import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';
import cardsData from '../../utils/cardsData';
import { IData } from '../../utils/interfaces';

import './root.css';

const data: IData[] = cardsData;

function Root() {
  return (
    <div className="home-page" data-testid="home-page">
      <SearchBar />
      <Cards cards={data} />
    </div>
  );
}

export default Root;
