import OfferItem from '../offer-item/offer-item';
import { Offer } from '../../types/types';

type Props = {
  data: Offer[];
}

function OfferDetailNear({data}: Props): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {data.map((item) => (
            <div key={item.id} className="near-places__card">
              <OfferItem data={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OfferDetailNear;
