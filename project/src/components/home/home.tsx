import { useSelector } from 'react-redux';
import { AuthStatus } from '../../const';
import { State } from '../../types/types';
import { getSortOffers } from '../../utils';

import Header from '../header/header';
import HomeTabs from '../home-tabs/home-tabs';
import HomeEmpty from '../home-empty/home-empty';
import HomeInner from '../home-inner/home-inner';


type Props = {
  authStatus: AuthStatus;
}

function Home({authStatus}: Props): JSX.Element {
  const {offerList, filterOffersType, sortOffersType} = useSelector((state: State) => state);

  const filteredOffers = offerList.filter((item) => item.city.name === filterOffersType);
  const sortedOffers = getSortOffers(filteredOffers, sortOffersType);
  const hasOffers = filteredOffers.length > 0;
  const emptyClassName = hasOffers ? '' : ' page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus} />
      <main className={`page__main page__main--index${emptyClassName}`}>
        <h1 className="visually-hidden">Cities</h1>
        <HomeTabs />
        {
          hasOffers ? (
            <HomeInner data={sortedOffers} />
          ) : (
            <HomeEmpty />
          )
        }
      </main>
    </div>
  );
}

export default Home;
