import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

import FavoritesCityPlace from '../favorites-city-place/favorites-city-place';
import { Item } from '../../types/types';

type Props = {
  data: {
    id: string;
    name: string;
    places: Item[];
  };
}

function FavoritesCity({data}: Props): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{data.name}</span>
          </Link>
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
