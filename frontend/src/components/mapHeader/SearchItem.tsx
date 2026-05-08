import { Box } from "@mui/material";
import styles from "./SearchItem.module.css"
import { OSM_KEY_MAP } from "./osm.constants";


interface Props {
    osm_key: string;
    name: string;
    country: string;
    street: string;
    onClick: () => void;
}


export default function SearchItem({osm_key, name, country, street, onClick}: Props){
    
    const meta = OSM_KEY_MAP[osm_key] ?? OSM_KEY_MAP.default

    return (
        <Box className={styles.root} onClick={onClick}>
            <div className={styles.icon}>{meta.icon}</div>
            <div className={styles.content}>
                <div className={styles.name}>{name}</div>
                <div className={styles.country}>{country}</div>
                <div className={styles.street}>{street}</div>
            </div>
        </Box>
    )

}
