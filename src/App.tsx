import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import Map from "./components/Map/Map";

export default function App() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <Map />
      <Paper
        elevation={6}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 2,
          px: 2,
          py: 1.5,
          borderRadius: 3,
          bgcolor: "rgba(255,255,255,0.92)",
        }}
      >
        <Stack spacing={0.5}>
          <Chip label="MUI + React + TypeScript" color="primary" size="small" />
          <Typography variant="h6">OSM Map</Typography>
          <Typography variant="body2" color="text.secondary">
            Material UI is installed and ready for the map interface.
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
