import { createContext, useContext, useRef, useState, useEffect } from "react";
import maplibregl from "maplibre-gl";

type UserLocation = {
  lng: number;
  lat: number;
};

type MapContextType = {
  map: maplibregl.Map | null;
  userLocation: UserLocation | null;
  setMap: (map: maplibregl.Map | null) => void;
  locateUser: () => void;
};

const MapContext = createContext<MapContextType | null>(null);

export function MapProvider({ children }: { children: React.ReactNode }) {
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const userMarker = useRef<maplibregl.Marker | null>(null);

  function locateUser() {
    console.log(map)
    if (!map) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lng = position.coords.longitude ?? -0.87734;
        const lat = position.coords.latitude ?? 41.65606;

        setUserLocation({ lng, lat });

        map.flyTo({
          center: [lng, lat],
          zoom: 16,
        });

        if (!userMarker.current) {
          userMarker.current = new maplibregl.Marker({ color: "#2563eb" })
            .setLngLat([lng, lat])
            .setPopup(new maplibregl.Popup().setText("Ты здесь"))
            .addTo(map);
        } else {
          userMarker.current.setLngLat([lng, lat]);
        }
      },
      (error) => {
        console.error("Geolocation error:", error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }

  useEffect(() => {
    if (!map) return;

    locateUser()
  }, [map])
  
  return (
    <MapContext.Provider value={{ map, userLocation, setMap, locateUser }}>
      {children}
    </MapContext.Provider>
  );
}

export function useMapContext() {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error("useMapContext must be used inside MapProvider");
  }

  return context;
}