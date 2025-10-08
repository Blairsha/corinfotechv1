import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

interface MapProps {
  center: [number, number];
  zoom: number;
  markerText: string;
}

const MapComponent: React.FC<MapProps> = ({ center, zoom, markerText }) => {
  return (
    <YMaps>
      <Map 
        defaultState={{ center, zoom }} 
        width="100%" 
        height="100%"
      >
        <Placemark 
          geometry={center}
          properties={{
            balloonContent: markerText
          }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/marker.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40]
          }}
        />
      </Map>
    </YMaps>
  );
};

export default MapComponent;
