import { AuthStatus } from '../../const';

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
          <a className="header__nav-link header__nav-link--profile" href="#">
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
          </a>
        </li>
        {
          authorized && (
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default HeaderNav;
