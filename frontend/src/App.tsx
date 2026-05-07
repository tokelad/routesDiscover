import { Box } from "@mui/material";
import Map from "./components/Map/Map";
import MapHeader from "./components/mapHeader/MapHeader";
import { MapProvider } from "./context/MapContext";


export default function App() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      
      <MapProvider>
          <Map />
          <MapHeader />
      </MapProvider>
    </Box>
  );
}
