import { Box } from "@mui/material";
import Map from "./components/Map/Map";
import MapHeader from "./components/mapHeader/MapHeader";

export default function App() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <Map />
      <MapHeader />
    </Box>
  );
}
