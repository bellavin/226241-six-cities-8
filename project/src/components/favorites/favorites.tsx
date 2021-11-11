import Header from '../header/header';
import FavoritesCity from '../favorites-city/favorites-city';
import Footer from '../footer/footer';
import { Offer } from '../../types/types';

type Props = {
  data: Offer[];
}

function Favorites({data}: Props): JSX.Element {
  const cityNames = new Set('');
  data.forEach((item)=>{
    cityNames.add(item.city.name);
  });

  const cities = [...cityNames].map((city, i) => (
    {
      id: `${i}`,
      name: city,
      places: data.filter((place) => place.city.name === city),
    }
  ));

  return (
    <div className="page">
      <Header />

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
