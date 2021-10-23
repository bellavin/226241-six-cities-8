import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { Item } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type Props = {
  activeId: string | null;
  data: Item[];
};

function HomeMap({activeId, data}: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, data[0].city);

  useEffect(() => {
    if (map) {
      data.forEach((item) => {
        const marker = new Marker({
          lat: item.location.lat,
          lng: item.location.lng,
        });

        marker
          .setIcon(
            activeId !== null && item.id === activeId
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });

      map.flyTo([data[0].city.lat, data[0].city.lng], 13,);
      map.scrollWheelZoom.disable();
      return () => {
        // marker.clearLayers();
      };
    }
  }, [map, data, activeId]);

  return <section className="cities__map map" ref={mapRef}></section>;
}

export default HomeMap;
