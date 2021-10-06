import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';

type props = RouteProps & {
  render: () => JSX.Element;
  authStatus: AuthStatus;
}

function PrivateRoute(props: props): JSX.Element {
  const {exact, path, render, authStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authStatus === AuthStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default PrivateRoute;
