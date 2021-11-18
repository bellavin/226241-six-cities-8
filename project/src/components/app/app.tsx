import { Router, Switch, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import browserHistory from '../../browser-history';

import Home from '../home/home';
import Login from '../login/login';
import OfferDetail from '../offer-detail/offer-detail';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(): JSX.Element {
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
          path={AppRoute.Favorites}
          status={AuthStatus.Auth}
          redirect={AppRoute.Login}
          render={() => (
            <Favorites />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.Login}
          status={AuthStatus.NoAuth}
          redirect={AppRoute.Main}
          render={() => (
            <Login />
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
