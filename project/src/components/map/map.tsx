import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { Offer, City } from '../../types/types';

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});
const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

type Props = {
  city: City,
  activeId?: string | null;
  data: Offer[];
};

function HomeMap({city, activeId, data}: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerList: Marker[] = [];

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

        markerList.push(marker);
      });

      map.flyTo([city.lat, city.lng], 12);
      map.scrollWheelZoom.disable();

      return () => {
        markerList.forEach((item) => {
          item.remove();
        });
      };
    }
  }, [map, data, activeId]);

  return <div className="map" style={{height: '100%'}} ref={mapRef}></div>;
}

export default HomeMap;
