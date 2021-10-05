import HeaderNav from '../header-nav';

type props = {
  authorized?:boolean,
  hasNavigation?:boolean,
}

function Header({authorized = false, hasNavigation = false}:props): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          {
            hasNavigation && (
              <HeaderNav authorized={authorized} />
            )
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
