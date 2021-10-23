import React, { useState } from 'react';

const markList = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

function PropertyReviewsForm(): JSX.Element {
  /* eslint-disable */
  const [starsVal, setStarsVal] = useState(0);
  /* eslint-enable */
  const [textVal, setTextVal] = useState('');

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          markList.map((item, i, arr) => {
            const numOfStars = arr.length-i;

            return (
              <React.Fragment key={item}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={numOfStars}
                  id={`${numOfStars}-stars`}
                  type="radio"
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

export default PropertyReviewsForm;
