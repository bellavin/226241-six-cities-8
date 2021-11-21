import { State } from '../../types/types';
import { getSortOffers } from '../../utils';
import { fetchOfferListAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../header/header';
import HomeTabs from '../home-tabs/home-tabs';
import HomeEmpty from '../home-empty/home-empty';
import HomeInner from '../home-inner/home-inner';
import LoadingScreen from '../loading-screen/loading-screen';

function Home(): JSX.Element {
  const {isDataLoaded, offerList, filterOffersType, sortOffersType} = useSelector((state: State) => state);
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
      {
        isDataLoaded ? (
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
        ) : (
          <LoadingScreen />
        )
      }
    </div>
  );
}

export default Home;
