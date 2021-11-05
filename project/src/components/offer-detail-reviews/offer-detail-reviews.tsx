import { Review } from '../../types/types';
import { MONTH_NAMES } from '../../const';
import OfferDetailReviewsForm from '../offer-detail-reviews-form/offer-detail-reviews-form';

type Props = {
  data: Review[],
}

function OfferDetailReviews({data}: Props): JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{data.length}</span></h2>
      <ul className="reviews__list">
        {data.map((item) => {
          const dateInstance = new Date(item.date);
          const month = MONTH_NAMES[dateInstance.getMonth()];
          const year = dateInstance.getFullYear();
          const date = `${month} ${year}` ;
          const dateISO = dateInstance.toISOString().slice(0, 10);
          const stars = `${Math.floor(item.stars) * 20}%`;

          return (
            <li key={item.id} className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={item.user.img} width="54" height="54" alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">
                  {item.user.name}
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: stars}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {item.text}
                </p>
                <time className="reviews__time" dateTime={dateISO}>{date}</time>
              </div>
            </li>
          );
        })}
      </ul>
      <OfferDetailReviewsForm />
    </section>
  );
}

export default OfferDetailReviews;