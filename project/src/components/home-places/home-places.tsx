import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Item } from '../../types/types';

type Props = {
  data :Item[];
}

function HomePlaces({data} :Props) :JSX.Element {
  const [activeId, setActiveId] = useState(NaN);
  /* eslint-disable */
  console.log(activeId);
  /* eslint-enable */

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{data.length} places to stay in {data[0].city}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>

      <div className="cities__places-list places__list tabs__content">
        {data.map((item) => {
          const featureClassName = item.isFeature ? ' place-card__bookmark-button--active' : '';
          const stars = `${Math.floor(item.stars) * 20}%`;

          return (
            <article
              key={item.id}
              className="cities__place-card place-card"
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(NaN)}
            >
              {
                item.isPremium && (
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="cities__image-wrapper place-card__image-wrapper">
                <Link to={AppRoute.Property}>
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
                  <Link to={AppRoute.Property}>
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
  );
}

export default HomePlaces;
