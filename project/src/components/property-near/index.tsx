import { CityPlace } from '../../types';

type Props = {
  data:CityPlace[],
}

function PropertyNear({data}:Props): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {data.map((item) => {
            const bookmarkClassName = item.isFeature ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button';
            return (
              <article key={item.id} className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
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
                    <button className={ bookmarkClassName } type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      {
                        item.isFeature
                          ?
                          <span className="visually-hidden">In bookmarks</span>
                          :
                          <span className="visually-hidden">To bookmarks</span>
                      }
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '80%'}}></span>
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
    </div>
  );
}

export default PropertyNear;