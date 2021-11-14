import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { State } from '../../types/types';
import { fetchOfferItemAction, fetchNearListAction, fetchReviewListAction, postFavoriteListAction } from '../../store/api-actions';
import { postReviewAction } from '../../store/api-actions';

import Header from '../header/header';
import OfferDetailGallery from '../offer-detail-gallery/offer-detail-gallery';
import OfferDetailDesc from '../offer-detail-desc/offer-detail-desc';
import OfferDetailReviews from '../offer-detail-reviews/offer-detail-reviews';
import OfferDetailNear from '../offer-detail-near/offer-detail-near';
import Map from '../map/map';

function OfferDetail(): JSX.Element {
  const params: {id: string} = useParams();
  const {offerItem, nearList, reviewList, authStatus} = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const isFeature = offerItem === null ? false : offerItem.isFeature;
  useEffect(() => {
    dispatch(fetchOfferItemAction(params.id));
    dispatch(fetchNearListAction(params.id));
    dispatch(fetchReviewListAction(params.id));
  }, [params.id, dispatch]);

  const [feature, setFeature] = useState(isFeature);
  const [textVal, setTextVal] = useState('');
  const [starsVal, setStarsVal] = useState(0);

  const clickHandler = () => {
    dispatch(postFavoriteListAction(params.id, +(!isFeature)));
    setFeature(!feature);
  };

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction(params.id, {comment: textVal, rating: starsVal}));
    setStarsVal(0);
    setTextVal('');
  };

  const hasOffer = offerItem !== null;
  const hasNears = nearList !== [];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        {
          hasOffer && (
            <section className="property">
              <OfferDetailGallery data={offerItem.gallery} />
              <div className="property__container container">
                <div className="property__wrapper">
                  <OfferDetailDesc
                    clickHandler={clickHandler}
                    feature={feature}
                    data={offerItem}
                  />
                  <OfferDetailReviews
                    authStatus={authStatus}
                    data={reviewList}
                    textVal={textVal}
                    starsVal={starsVal}
                    setTextVal={setTextVal}
                    setStarsVal={setStarsVal}
                    submitHandler={submitHandler}
                  />
                </div>
              </div>
              <section className="property__map">
                {
                  <Map city={offerItem.city} data={nearList} />
                }
              </section>
            </section>
          )
        }
        {
          hasNears && (
            <OfferDetailNear data={nearList} />
          )
        }
      </main>
    </div>
  );
}

export default OfferDetail;
