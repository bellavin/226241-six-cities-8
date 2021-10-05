import Footer from '../footer';
import FavoritesCity from '../favorites-city';
import { City } from '../../types';

type Props = {
  data:City[],
  children: React.ReactNode
}

function Favorites({data, children}:Props): JSX.Element {
  return (
    <div className="page">
      {children}

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {data.map((item) => (
                <FavoritesCity
                  key={item.id}
                  data={item}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;
