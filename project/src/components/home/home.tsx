import { useDispatch, useSelector } from 'react-redux';
import { AuthStatus } from '../../const';
import { setCity, filterOffers } from '../../store/action';
import { State } from '../../types/types';

import Header from '../header/header';
import HomeTabs from '../home-tabs/home-tabs';
import HomeEmpty from '../home-empty/home-empty';
import HomeOffers from '../home-оffers/home-offers';

type Props = {
  authStatus: AuthStatus;
}

function Home({authStatus}: Props): JSX.Element {
  const dispatch = useDispatch();
  const {activeCity, offerList, cityList} = useSelector((state: State) => state);

  const hasOffers = offerList.length > 0;
  const emptyClassName = hasOffers ? '' : ' page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus} />
      <main className={`page__main page__main--index${emptyClassName}`}>
        <h1 className="visually-hidden">Cities</h1>
        <HomeTabs
          activeCity={activeCity}
          cityList={cityList}
          setCityHandler={(evt) => {
            dispatch(setCity(evt.currentTarget.dataset.city));
            dispatch(filterOffers(evt.currentTarget.dataset.city));
          }}
        />
        {
          hasOffers ? (
            <HomeOffers data={offerList} />
          ) : (
            <HomeEmpty />
          )
        }
      </main>
    </div>
  );
}

export default Home;
