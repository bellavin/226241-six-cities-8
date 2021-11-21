import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { State } from '../../types/types';
import { fetchOfferItemAction, fetchNearListAction, fetchReviewListAction, postFavoriteListAction } from '../../store/api-actions';
import { reviewMessageAction ,reviewRatingAction  } from '../../store/action';
import { FavoriteEventParam } from '../../const';

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
    dispatch(reviewMessageAction(''));
    dispatch(reviewRatingAction(0));
  }, [params.id, dispatch]);

  const clickHandler = () => {
    dispatch(postFavoriteListAction(params.id, isFeature, FavoriteEventParam.Offer));
  };

  const hasOffer = offerItem !== null;
  const hasNears = nearList !== [];

  let mapData = nearList;
  let activeId = null;
  if (hasOffer) {
    mapData = [...nearList, offerItem];
    activeId = offerItem.id;
  }

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
                    data={offerItem}
                  />
                  <OfferDetailReviews
                    authStatus={authStatus}
                    data={reviewList}
                  />
                </div>
              </div>
              <section className="property__map">
                <Map city={offerItem.city} data={mapData} activeId={activeId} />
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
