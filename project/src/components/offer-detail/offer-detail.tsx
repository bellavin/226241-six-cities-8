import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { State } from '../../types/types';
import { fetchNearListAction, fetchReviewListAction } from '../../store/api-actions';

import Header from '../header/header';
import OfferDetailGallery from '../offer-detail-gallery/offer-detail-gallery';
import OfferDetailDesc from '../offer-detail-desc/offer-detail-desc';
import OfferDetailReviews from '../offer-detail-reviews/offer-detail-reviews';
import OfferDetailNear from '../offer-detail-near/offer-detail-near';
import Map from '../map/map';

import { Offer } from '../../types/types';

function OfferDetail(): JSX.Element {
  const params: {id: string} = useParams();
  const {offerList, nearList, reviewList, authStatus} = useSelector((state: State) => state);
  const data: Offer[] = offerList.filter((item) => item.id === params.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNearListAction(params.id));
    dispatch(fetchReviewListAction(params.id));
  }, [params.id, dispatch]);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <OfferDetailGallery data={data[0].gallery} />
          <div className="property__container container">
            <div className="property__wrapper">
              <OfferDetailDesc
                data={data[0]}
              />
              <OfferDetailReviews authStatus={authStatus} data={reviewList} />
            </div>
          </div>
          <section className="property__map">
            {
              <Map city={data[0].city} data={nearList} />
            }
          </section>
        </section>
        <OfferDetailNear data={nearList} />
      </main>
    </div>
  );
}

export default OfferDetail;
