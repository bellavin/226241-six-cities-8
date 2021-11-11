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
}

const mapStateToProps = ({authStatus}: State) => ({
  authStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Props;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {exact, path, render, authStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        authStatus === AuthStatus.Auth
          ? render(routeProps)
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export {PrivateRoute};
export default connector(PrivateRoute);
