import styles from "./MapHeader.module.css"
import { Box, TextField } from "@mui/material"
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import useMapHeader from "./useMapHeader";

export default function MapHeader(){
  const { handlePlaceSearch, renderItems } = useMapHeader()
  

  return (
    <Box className={styles.mapHeader}>
      <Box>
        <Box className={styles.inputs}>
            <DehazeIcon className={styles.dehazeIcon}/>
            <TextField
              placeholder="Search in the Maps"
              variant="standard"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePlaceSearch(e)}
              slotProps={{
                input: {
                  disableUnderline: true,
                },
              }}
/>
            <SearchIcon className={styles.searchIcon}/>
        </Box>

        <Box className={styles.history}>
              {renderItems()}
        </Box>
      </Box>
    </Box>
  );
}
