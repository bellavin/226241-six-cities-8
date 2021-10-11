import Header from '../header/header';
import FavoritesCity from '../favorites-city/favorites-city';
import Footer from '../footer/footer';
import { Item } from '../../types/types';
import { AuthStatus } from '../../const';

type Props = {
  authStatus :AuthStatus;
  data :Item[];
}

function Favorites({authStatus, data} :Props) :JSX.Element {
  const cityNames = new Set('');
  data.forEach((item)=>{
    cityNames.add(item.city);
  });
  const cities = [...cityNames].map((city, i) => (
    {
      id: i,
      name: city,
      places: data.filter((place) => place.city !== city),
    }
  ));

  return (
    <div className="page">
      <Header authStatus={authStatus} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((item) => (
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