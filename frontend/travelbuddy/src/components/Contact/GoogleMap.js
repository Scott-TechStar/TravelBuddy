import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -4.0435, lng: 39.6682 },
        zoom: 8,
      });

      return () => {
        if (map) {
          map.dispose && map.dispose(); // Defensive check
        }
      };
    }
  }, []);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default GoogleMap;
