import { CityPlace } from '../../types';

type Props = {
  data:CityPlace[],
  children: React.ReactNode
}

function HomePlaces({data, children}:Props): JSX.Element {
  return (
    <section className="cities__places places">
      {children}

      <div className="cities__places-list places__list tabs__content">
        {data.map((item) => {
          const featureClassName = item.isFeature ? ' place-card__bookmark-button--active' : '';
          const stars = `${Math.floor(item.stars) * 20}%`;

          return (
            <article key={item.id} className="cities__place-card place-card">
              {
                item.isPremium && (
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src={item.img} width="260" height="200" alt="Place image" />
                </a>
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
                  <a href="#">{item.name}</a>
                </h2>
                <p className="place-card__type">{item.type}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default HomePlaces;
