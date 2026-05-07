import { Box } from "@mui/material";
import styles from "./SearchItem.module.css"


interface Props {
    name: string;
    country: string;
}


export default function SearchItem({name, country}: Props){
    
    return (
        <Box className={styles.root}>
            <div className={styles.name}>{name}</div>
            <div className={styles.country}>{country}</div>            
        </Box>
    )

}
