import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { History} from 'history';
import { State } from '../../types/types';
import { AppRoute, AuthStatus } from '../../const';

type RenderFuncProps = {
  history: History<unknown>;
}

type Props = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
  status: AuthStatus;
  redirect: AppRoute;
}

function PrivateRoute({exact, path, render, redirect, status}: Props): JSX.Element {
  const {authStatus} = useSelector((state: State) => state);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        authStatus === status
          ? render(routeProps)
          : <Redirect to={redirect} />
      )}
    />
  );
}

export default PrivateRoute;
