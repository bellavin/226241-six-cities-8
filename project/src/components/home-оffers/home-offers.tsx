import { useState } from 'react';
import { Item } from '../../types/types';
import HomeMap from '../home-map/home-map';
import HomePlaces from '../home-places/home-places';

type Props = {
  data: Item[];
}

function HomeOffers({data}: Props): JSX.Element {
  const [activeId, setActiveId] = useState<string | null>(null);
  const itemHoverHandler = (id: string | null) => {
    setActiveId(id);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <HomePlaces itemHoverHandler={itemHoverHandler} data={data} />
        <div className="cities__right-section">
          <HomeMap
            data={data}
            activeId={activeId}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeOffers;
