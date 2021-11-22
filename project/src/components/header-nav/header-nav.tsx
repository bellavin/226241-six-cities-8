import { Link } from 'react-router-dom';
import { AuthStatus, AppRoute } from '../../const';
import { User } from '../../types/types';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/api-actions';

type Props = {
  authStatus: AuthStatus;
  user: User;
}

function HeaderNav({authStatus, user}: Props): JSX.Element {
  const isAuthorized = authStatus === AuthStatus.Auth;
  const isntAuthorized = authStatus === AuthStatus.NoAuth;
  const hasImg = user?.img !== '';
  const dispatch = useDispatch();

  return (
    <nav className="header__nav">
      {
        isAuthorized && (
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  {hasImg && (
                    <img className="user__avatar" src={user?.img} alt="Юзерпик пользователя" />
                  )}
                </div>
                <span className="header__user-name user__name">{user?.name}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                onClick={() => {
                  dispatch(logoutAction());
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
