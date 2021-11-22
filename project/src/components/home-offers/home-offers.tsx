import { Offer } from '../../types/types';
import OfferItem from '../offer-item/offer-item';
import HomeOffersSort from '../home-offers-sort/home-offers-sort';

type Props = {
  data: Offer[];
  onItemHover: (id: string | null) => void;
}

function HomeOffers({data, onItemHover}: Props): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{data.length} places to stay in {data[0].city.name}</b>
      <HomeOffersSort />

      <div className="cities__places-list places__list tabs__content">
        {data.map((item) => (
          <div
            key={item.id}
            className="cities__place-card"
            onMouseEnter={() => {
              onItemHover(item.id);
            }}
            onMouseLeave={() => {
              onItemHover(null);
            }}
          >
            <OfferItem data={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeOffers;
