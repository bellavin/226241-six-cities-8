
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Offer, Review } from '../../types/types';
import { AppRoute, AuthStatus } from '../../const';

import Home from '../home/home';
import Login from '../login/login';
import OfferDetail from '../offer-detail/offer-detail';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type Props = {
  offerList: Offer[];
  reviews: Review[];
}

function App({offerList, reviews}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Home
            authStatus={authStatus}
          />
        </Route>
        <Route exact path={AppRoute.Offer}>
          <OfferDetail
            authStatus={authStatus}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login authStatus={authStatus} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => (
            <Favorites
              authStatus={authStatus}
              data={offerList}
            />
          )}
          authStatus={authStatus}
        >
        </PrivateRoute>
        <Route>
          <NotFoundScreen authStatus={authStatus} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


const authStatus: AuthStatus = AuthStatus.Auth;
