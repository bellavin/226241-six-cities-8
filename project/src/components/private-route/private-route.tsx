import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { History} from 'history';
import { State } from '../../types/types';
import { AppRoute, AuthStatus } from '../../const';

type RenderFuncProps = {
  history: History<unknown>;
}

type Props = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
  authStatus: AuthStatus;
  status: AuthStatus;
  redirect: AppRoute;
}

const mapStateToProps = ({authStatus}: State) => ({
  authStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Props;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {exact, path, render, authStatus, redirect, status} = props;

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

export {PrivateRoute};
export default connector(PrivateRoute);
