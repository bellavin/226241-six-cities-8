import { Link } from 'react-router-dom';
import { AuthStatus, AppRoute } from '../../const';

import HeaderNav from '../header-nav/header-nav';

type props = {
  authStatus:AuthStatus,
}

function Header({authStatus}:props): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {
            authStatus !== AuthStatus.Unknown && (
              <HeaderNav authStatus={authStatus} />
            )
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
