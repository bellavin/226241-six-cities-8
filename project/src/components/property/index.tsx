import PropertyGallery from '../property-gallery';
import PropertyDesc from '../property-desc';
import PropertyReviews from '../property-reviews';
import PropertyMap from '../property-map';
import PropertyNear from '../property-near';
import { CityPlaceDetail } from '../../types';

type Props = {
  data: CityPlaceDetail,
  children: React.ReactNode,
}

function Property({data, children}:Props): JSX.Element {
  return (
    <div className="page">
      {children}

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