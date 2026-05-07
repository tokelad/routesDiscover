from fastapi import APIRouter

from app.api.routes import health, map


api_router = APIRouter()
api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(map.router, prefix="/map", tags=["maps"])
