import FavoritesCityPlace from '../favorites-city-place/favorites-city-place';
import { City } from '../../types/types';

type Props = {
  data: City
}

function FavoritesCity({data}:Props): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{data.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {data.places.map((item) => (
          <FavoritesCityPlace
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesCity;
