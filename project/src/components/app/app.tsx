import { Router, Switch, Route } from 'react-router-dom';
import { Offer } from '../../types/types';
import { AppRoute, AuthStatus } from '../../const';
import browserHistory from '../../browser-history';

import Home from '../home/home';
import Login from '../login/login';
import OfferDetail from '../offer-detail/offer-detail';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type Props = {
  offerList: Offer[];
}

function App({offerList}: Props): JSX.Element {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Home />
        </Route>
        <Route exact path={AppRoute.Offer}>
          <OfferDetail />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Login}
          status={AuthStatus.NoAuth}
          redirect={AppRoute.Main}
          render={() => (
            <Login />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          status={AuthStatus.Auth}
          redirect={AppRoute.Login}
          render={() => (
            <Favorites data={offerList} />
          )}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
