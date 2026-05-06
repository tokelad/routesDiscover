import styles from "./MapHeader.module.css"
import { Box, Button, TextField } from "@mui/material"
import { useReducer } from "react"
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';

export default function MapHeader(){

  return (
    <Box className={styles.mapHeader}>
      <Box>
        <Box className={styles.inputs}>
            <DehazeIcon className={styles.dehazeIcon}/>
            <TextField
              placeholder="Search in the Maps"
              variant="standard"
              slotProps={{
                input: {
                  disableUnderline: true,
                },
              }}
/>
            <SearchIcon className={styles.searchIcon}/>
        </Box>

        <Box className={styles.history}>

        </Box>
      </Box>
    </Box>
  );
}
