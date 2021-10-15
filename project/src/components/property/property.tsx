import Header from '../header/header';
import PropertyGallery from '../property-gallery/property-gallery';
import PropertyDesc from '../property-desc/property-desc';
import PropertyReviews from '../property-reviews/property-reviews';
import PropertyMap from '../property-map/property-map';
import PropertyNear from '../property-near/property-near';

import { Item, Review } from '../../types/types';
import { AuthStatus } from '../../const';
import { useParams } from 'react-router-dom';


type Props = {
  authStatus: AuthStatus;
  near: Item[];
  reviews: Review[];
  data: Item[];
}

function Property({authStatus, near, reviews, data}: Props): JSX.Element {

  const params: {
    id: string
  } = useParams();

  const curData: Item[] = data.filter((item) => item.id === params.id);

  return (
    <div className="page">
      <Header authStatus={authStatus} />

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery data={curData[0].gallery} />
          <div className="property__container container">
            <div className="property__wrapper">
              <PropertyDesc
                data={curData[0]}
              />
              <PropertyReviews data={reviews} />
            </div>
          </div>
          <PropertyMap />
        </section>
        <PropertyNear data={near} />
      </main>
    </div>
  );
}

export default Property;
