import { Link, generatePath } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postFavoriteListAction } from '../../store/api-actions';
import { Offer } from '../../types/types';
import { AppRoute } from '../../const';

type Props = {
  data: Offer;
}

function FavoritesCityPlace({data}: Props): JSX.Element {
  const {id} = data;
  const dispatch = useDispatch();
  const featureClassName = data.isFeature ? ' place-card__bookmark-button--active' : '';
  const stars = `${Math.floor(data.stars) * 20}%`;


  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, {id})}>
          <img className="place-card__image" src={data.img} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button${featureClassName}`}
            type="button"
            onClick={() => {
              dispatch(postFavoriteListAction(id, +(!data.isFeature)));
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: stars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id})}>
            {data.name}
          </Link>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCityPlace;
