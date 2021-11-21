import React from 'react';
import { State } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { postReviewAction } from '../../store/api-actions';
import { reviewMessageAction, reviewRatingAction, reviewFormBlockingAction } from '../../store/action';

const MARK_LIST = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

function OfferDetailReviewsForm(): JSX.Element {
  const dispatch = useDispatch();
  const params: {id: string} = useParams();
  const {reviewMessage, reviewRating, reviewFormIsBlocked} = useSelector((state: State) => state);

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction(params.id, {comment: reviewMessage, rating: reviewRating}));
    dispatch(reviewFormBlockingAction(true));
  };

  const tooShort = reviewMessage.length < 50;
  const tooLong = reviewMessage.length >= 300;
  const hasntStars = reviewRating === 0;
  const isDisabled = tooShort || tooLong || hasntStars || reviewFormIsBlocked;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={submitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          MARK_LIST.map((item, i, arr) => {
            const numOfStars = arr.length-i;

            return (
              <React.Fragment key={item}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={numOfStars}
                  id={`${numOfStars}-stars`}
                  type="radio"
                  checked={numOfStars === reviewRating}
                  disabled={reviewFormIsBlocked}
                  required
                  onChange={(evt)=>{
                    dispatch(reviewRatingAction(parseInt(evt.target.value, 10)));
                  }}
                />
                <label htmlFor={`${numOfStars}-stars`} className="reviews__rating-label form__rating-label" title={item}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        name="review"
        value={reviewMessage}
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={reviewFormIsBlocked}
        onChange={(evt)=>{
          dispatch(reviewMessageAction(evt.target.value));
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferDetailReviewsForm;
