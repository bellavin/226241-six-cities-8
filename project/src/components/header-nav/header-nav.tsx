import { Link } from 'react-router-dom';
import { AuthStatus, AppRoute } from '../../const';
import { getUserData } from '../../utils';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/api-actions';
import { removeUserData } from '../../utils';

type Props = {
  authStatus: AuthStatus;
}

function HeaderNav({authStatus}: Props): JSX.Element {
  const isAuthorized = authStatus === AuthStatus.Auth;
  const isntAuthorized = authStatus === AuthStatus.NoAuth;
  const userData = getUserData();
  let name = '';
  if (userData) {
    name = JSON.parse(getUserData()).login;
  }
  const dispatch = useDispatch();

  return (
    <nav className="header__nav">
      {
        isAuthorized && (
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{name}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                onClick={() => {
                  dispatch(logoutAction());
                  removeUserData();
                }}
                to={AppRoute.Login}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </ul>
        )
      }
      {
        isntAuthorized && (
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          </ul>
        )
      }
    </nav>
  );
}

export default HeaderNav;
