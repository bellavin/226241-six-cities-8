import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Item } from '../../types/types';

type Props = {
  data: Item[];
}

function PropertyNear({data}: Props): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {data.map((item) => {
            const featureClassName = item.isFeature ? 'place-card__bookmark-button--active' : '';
            const stars = `${Math.floor(item.stars) * 20}%`;
            const {id} = item;

            return (
              <article key={item.id} className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <Link to={{pathname: generatePath(AppRoute.Property, {id})}}>
                    <img className="place-card__image" src={item.img} width="260" height="200" alt="Place image" />
                  </Link>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;{item.price}</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className={`place-card__bookmark-button button${featureClassName}`} type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      {
                        item.isFeature ? (
                          <span className="visually-hidden">In bookmarks</span>
                        ) : (
                          <span className="visually-hidden">To bookmarks</span>
                        )
                      }
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: stars}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <Link to={{pathname: generatePath(AppRoute.Property, {id})}}>
                      {item.name}
                    </Link>
                  </h2>
                  <p className="place-card__type">{item.type}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default PropertyNear;
