import Header from '../header/header';
import FavoritesCity from '../favorites-city/favorites-city';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Footer from '../footer/footer';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types/types';
import { fetchFavoriteListAction } from '../../store/api-actions';


function Favorites(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteListAction());
  }, []);
  const {favoriteList} = useSelector((state: State) => state);

  const cityNames = new Set('');
  favoriteList.forEach((item)=>{
    cityNames.add(item.city.name);
  });

  const cities = [...cityNames].map((city, i) => ({
    id: `${i}`,
    name: city,
    places: favoriteList.filter((place) => place.city.name === city),
  }));

  const hasCities = cities.length > 0;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">

          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                hasCities ? (
                  cities.map((item) => (
                    <FavoritesCity
                      key={item.id}
                      data={item}
                    />
                  ))
                ) : (
                  <FavoritesEmpty />
                )
              }
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;
