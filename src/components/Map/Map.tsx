import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    if (!mapContainer.current) return;
    if (mapInstance.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "http://localhost:8080/styles/basic-preview/style.json",
      center: [-0.3763, 39.4699],
      zoom: 13,
    });

    map.on("error", (event) => {
      const sourceError = event.error?.message ?? "Unknown map loading error";
      setLoadError(
        `Map style or tiles could not be loaded from http://localhost:8080. ${sourceError}`
      );
    });

    map.on("load", () => {
      setLoadError("");
    });

    map.addControl(new maplibregl.NavigationControl());

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="map-shell">
      {loadError ? <div className="map-error">{loadError}</div> : null}
      <div ref={mapContainer} className="map" />
    </div>
  );
}
