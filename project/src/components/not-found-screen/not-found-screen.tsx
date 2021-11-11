import Header from '../header/header';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main">
        <Header />

        <div className="container">
          <h1>404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
