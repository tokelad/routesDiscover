
import { useQuery } from '@tanstack/react-query'
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;


export async function getGeocode(query: string, limit = 5) {
    const url = BACKEND_BASE_URL + "/map/coordinate"

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            limit,
        }),
    })

    if (!response.ok) {
        throw new Error(`Response Error ${response.status}`)
    }

    return response.json()
}