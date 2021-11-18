import { State } from '../../types/types';
import { getSortOffers } from '../../utils';
import { fetchOfferListAction, postFavoriteListAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteEventParam } from '../../const';

import Header from '../header/header';
import HomeTabs from '../home-tabs/home-tabs';
import HomeEmpty from '../home-empty/home-empty';
import HomeInner from '../home-inner/home-inner';

function Home(): JSX.Element {
  const {offerList, filterOffersType, sortOffersType} = useSelector((state: State) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOfferListAction());
  }, [dispatch]);

  const filteredOffers = offerList.filter((item) => item.city.name === filterOffersType);
  const sortedOffers = getSortOffers(filteredOffers, sortOffersType);
  const hasOffers = filteredOffers.length > 0;
  const emptyClassName = hasOffers ? '' : ' page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <Header />
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
