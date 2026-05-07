from pydantic import BaseModel, ConfigDict


class GeocodeRequest(BaseModel):
    query: str
    limit: int = 5


class Geometry(BaseModel):
    type: str
    coordinates: list[float]


class FeatureProperties(BaseModel):
    model_config = ConfigDict(extra="allow")

    osm_type: str
    osm_id: int
    osm_key: str
    osm_value: str
    type: str
    name: str
    city: str | None = None
    county: str | None = None
    state: str | None = None
    country: str | None = None
    postcode: str | None = None
    countrycode: str | None = None
    extent: list[float] | None = None


class Feature(BaseModel):
    type: str
    properties: FeatureProperties
    geometry: Geometry


class FeatureCollectionResponse(BaseModel):
    type: str
    features: list[Feature]
