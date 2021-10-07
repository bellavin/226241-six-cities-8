import Header from '../header/header';
import PropertyGallery from '../property-gallery/property-gallery';
import PropertyDesc from '../property-desc/property-desc';
import PropertyReviews from '../property-reviews/property-reviews';
import PropertyMap from '../property-map/property-map';
import PropertyNear from '../property-near/property-near';

import { CityPlaceDetail } from '../../types/types';
import { AuthStatus } from '../../const';


type Props = {
  authStatus:AuthStatus,
  data: CityPlaceDetail,
}

function Property({authStatus, data}:Props): JSX.Element {
  return (
    <div className="page">
      <Header authStatus={authStatus} />

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery data={data.img} />
          <div className="property__container container">
            <div className="property__wrapper">
              <PropertyDesc
                data={data}
              />
              <PropertyReviews data={data.desc.reviews} />
            </div>
          </div>
          <PropertyMap />
        </section>
        <PropertyNear data={data.near} />
      </main>
    </div>
  );
}

export default Property;
