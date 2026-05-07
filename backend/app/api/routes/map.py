from fastapi import APIRouter, Query
from app.core.config import settings
from app.schemas.map import FeatureCollectionResponse, GeocodeRequest
import httpx

router = APIRouter()

@router.post("/coordinate", response_model=FeatureCollectionResponse)
async def get_coordinate(payload: GeocodeRequest):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            settings.photon_url,
            params={
                "q": payload.query,
                "limit": payload.limit,
            }
        )

    return response.json()

    
    
    
