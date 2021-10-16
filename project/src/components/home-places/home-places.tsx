import { useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Item } from '../../types/types';

type Props = {
  itemHoverHandler: (id: string | null) => void;
  data: Item[];
}

const sortList: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

function HomePlaces({itemHoverHandler, data}: Props): JSX.Element {
  const [sortActiveId, setSortActiveId] = useState<number | null>(null);
  const sortClassName = (id: number) => `places__option${(sortActiveId === id) ? ' places__option--active' : ''}`;
  const mouseEnterHandler = (id: number): void => {
    setSortActiveId(id);
  };
  const mouseLeaveHandler = (): void => {
    setSortActiveId(null);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{data.length} places to stay in {data[0].city.name}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          {sortList.map((item, i) =>
            (
              <li
                key={item}
                className={sortClassName(i)}
                tabIndex={0}
                onMouseEnter={() => {mouseEnterHandler(i);}}
                onMouseLeave={mouseLeaveHandler}
              >
                {item}
              </li>
            ),
          )}
        </ul>
      </form>

      <div className="cities__places-list places__list tabs__content">
        {data.map((item) => {
          const featureClassName = item.isFeature ? ' place-card__bookmark-button--active' : '';
          const stars = `${Math.floor(item.stars) * 20}%`;
          const {id} = item;
          return (
            <article
              key={item.id}
              className="cities__place-card place-card"
              onMouseEnter={() => {
                itemHoverHandler(item.id);
              }}
              onMouseLeave={() => {
                itemHoverHandler(null);
              }}
            >
              {
                item.isPremium && (
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="cities__image-wrapper place-card__image-wrapper">
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
  );
}

export default HomePlaces;
