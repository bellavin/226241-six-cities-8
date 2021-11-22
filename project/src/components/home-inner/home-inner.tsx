import { useState } from 'react';
import { Offer } from '../../types/types';
import Map from '../map/map';
import HomeOffers from '../home-offers/home-offers';

type Props = {
  data: Offer[];
}

function HomeInner({data}: Props): JSX.Element {
  const [activeId, setActiveId] = useState<string | null>(null);
  const handleItemHover = (id: string | null) => {
    setActiveId(id);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <HomeOffers
          data={data}
          onItemHover={handleItemHover}
        />
        <div className="cities__right-section">
          <section className="cities__map">
            <Map
              city={data[0].city}
              data={data}
              activeId={activeId}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomeInner;
