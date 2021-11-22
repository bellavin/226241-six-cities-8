import { Offer } from '../../types/types';

type Props = {
  onFavoriteClick: () => void;
  data: Offer;
}

function OfferDetailDesc({onFavoriteClick, data}:Props): JSX.Element {
  const featureClassName = data.isFeature ? ' property__bookmark-button--active' : '';
  const userProClassName = data.detail.user.isPro ? ' property__avatar-wrapper--pro' : '';
  const stars = `${Math.floor(data.stars) * 20}%`;

  return (
    <>
      {
        data.isPremium && (
          <div className="property__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {data.name}
        </h1>
        <button
          className={`property__bookmark-button button${featureClassName}`}
          type="button"
          onClick={onFavoriteClick}
        >
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: stars}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{data.stars}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {data.type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {data.detail.bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {data.detail.maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{data.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {data.detail.includes.map((item)=> (
            <li key={item} className="property__inside-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className={`property__avatar-wrapper user__avatar-wrapper${userProClassName}`}>
            <img className="property__avatar user__avatar" src={data.detail.user.img} width="74" height="74" alt="Host avatar" />
          </div>
          <span className="property__user-name">
            {data.detail.user.name}
          </span>
          {
            data.detail.user.isPro && (
              <span className="property__user-status">
                Pro
              </span>
            )
          }
        </div>
        <div className="property__description">
          <p className="property__text">
            {data.detail.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default OfferDetailDesc;
