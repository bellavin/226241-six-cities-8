
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Item, Review } from '../../types/types';
import { AppRoute, AuthStatus } from '../../const';

import Home from '../home/home';
import Login from '../login/login';
import Property from '../property/property';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type Props = {
  offers: Item[];
  reviews: Review[];
}

function App({offers, reviews}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Home
            authStatus={authStatus}
            data={offers}
          />
        </Route>
        <Route exact path={AppRoute.Property}>
          <Property
            near={offers}
            authStatus={authStatus}
            reviews={reviews}
            data={offers}
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
              data={offers}
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


const authStatus :AuthStatus = AuthStatus.Auth;
