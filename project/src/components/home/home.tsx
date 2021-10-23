import { MouseEvent } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { AuthStatus } from '../../const';
import { checkCity } from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/types';

import Header from '../header/header';
import HomeTabs from '../home-tabs/home-tabs';
import HomeEmpty from '../home-empty/home-empty';
import HomeOffers from '../home-оffers/home-offers';

const mapStateToProps = ({activeCity, offers}: State) => ({
  activeCity,
  offers,
});
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  checkCityHandler(evt: MouseEvent<HTMLElement>) {
    dispatch(checkCity(evt.currentTarget.dataset.city));
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = {
  authStatus: AuthStatus;
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Props;

function Home({authStatus, activeCity, offers, checkCityHandler}: ConnectedComponentProps): JSX.Element {
  const hasOffers = offers.length > 0;
  const emptyClassName = hasOffers ? '' : ' page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus} />
      <main className={`page__main page__main--index${emptyClassName}`}>
        <h1 className="visually-hidden">Cities</h1>
        <HomeTabs activeCity={activeCity} checkCityHandler={checkCityHandler} />
        {
          hasOffers ? (
            <HomeOffers data={offers} />
          ) : (
            <HomeEmpty />
          )
        }
      </main>
    </div>
  );
}

export {Home};
export default connector(Home);
