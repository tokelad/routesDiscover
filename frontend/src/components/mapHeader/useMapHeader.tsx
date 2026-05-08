import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, ReactNode } from "react";
import { getGeocode } from "../api";
import { Box } from "@mui/material";
import SearchItem from "./SearchItem";
import { useMapContext } from "../../context/MapContext";

interface UseMapHeaderReturn {
    handlePlaceSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    renderItems: () => ReactNode
    
}

type Feature = {
  type: string
  properties: {
    osm_id: number
    name: string
    country: string
    osm_key: string
    street: string
    
  }
  geometry: {
    type: string
    coordinates: [number, number]
  }
}


export default function useMapHeader(): UseMapHeaderReturn{

    const [placeSearch, setPlaceSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("")
    const {map} = useMapContext()

     const { data } = useQuery({
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

    const handlePointMode = (coordinates: [number, number]) => {
        map?.flyTo({
            center: [...coordinates],
            zoom: 14,
        })
        console.log("clocked")
    }


    const renderItems = () => (placeSearch && (
        <Box>
            {data?.features?.map((feature: Feature) => (
            <SearchItem
                key={feature.properties.osm_id}
                osm_key={feature.properties.osm_key}
                name={feature.properties.name}
                country={feature.properties.country}
                street={feature.properties.street}
                onClick={() => handlePointMode(feature.geometry.coordinates)}
            />
            ))}
        </Box>
        ))

    const viewModel: UseMapHeaderReturn = {
        handlePlaceSearch,
        renderItems
    }

    return viewModel

}
