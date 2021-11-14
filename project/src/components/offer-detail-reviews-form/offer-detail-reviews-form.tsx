import React from 'react';

const MARK_LIST = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

type Props = {
  textVal: string;
  starsVal: number;
  setTextVal: React.Dispatch<React.SetStateAction<string>>;
  setStarsVal: React.Dispatch<React.SetStateAction<number>>;
  submitHandler: (evt: React.FormEvent<HTMLFormElement>) => void;
}

function OfferDetailReviewsForm({textVal, starsVal, setTextVal, setStarsVal, submitHandler}: Props): JSX.Element {
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
                  checked={numOfStars === starsVal}
                  required
                  onChange={(evt)=>{
                    setStarsVal(parseInt(evt.target.value, 10));
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
        value={textVal}
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt)=>{
          setTextVal(evt.target.value);
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={textVal.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferDetailReviewsForm;
