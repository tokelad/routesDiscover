import styles from "./MapHeader.module.css"
import { Box, Button, TextField } from "@mui/material"
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from "@tanstack/react-query";
import { getGeocode } from "../api";
import {  useState, useEffect } from "react";
import SearchItem from "./SearchItem";

type Feature = {
  type: string
  properties: {
    osm_id: number
    name: string
    country: string
  }
  geometry: {
    type: string
    coordinates: number[]
  }
}


export default function MapHeader(){

  const [placeSearch, setPlaceSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("")


  const { data, isLoading } = useQuery({
  queryKey: ["geocode", debouncedSearch],
  queryFn: () => getGeocode(debouncedSearch, 3),
  enabled: !!debouncedSearch,
})


useEffect(() => {
  const timeout = setTimeout(() => {
    setDebouncedSearch(placeSearch)
  }, 400)

  return () => {
    clearTimeout(timeout)
  }
}, [placeSearch])



const handlePlaceSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPlaceSearch(prev => prev = e.target.value)
}


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

        {placeSearch && 
          <Box>
            {data?.features?.map((feature: Feature) => (
          <SearchItem
            key={feature.properties.osm_id}
            name={feature.properties.name}
            country={feature.properties.country}
          />
        ))}
          </Box>
        }

        <Box className={styles.history}>

        </Box>
      </Box>
    </Box>
  );
}
