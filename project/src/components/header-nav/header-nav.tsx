import { Link } from 'react-router-dom';
import { AuthStatus, AppRoute } from '../../const';

type props = {
  authStatus:AuthStatus,
}

function HeaderNav({authStatus}:props): JSX.Element {
  const authorized = authStatus === AuthStatus.Auth;
  const notAuthorized = authStatus === AuthStatus.NoAuth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {
              authorized && (
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              )
            }
            {
              notAuthorized && (
                <span className="header__login">Sign in</span>
              )
            }
          </Link>
        </li>
        {
          authorized && (
            <li className="header__nav-item">
              <Link className="header__nav-link" to={AppRoute.Login}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default HeaderNav;
