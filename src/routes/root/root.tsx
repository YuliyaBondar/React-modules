import CardsOnMain from '../../components/CardsOnMain/CardsOnMain';

import './root.css';

function Root() {
  return (
    <div className="home-page" data-testid="home-page">
      <CardsOnMain />
    </div>
  );
}

export default Root;
