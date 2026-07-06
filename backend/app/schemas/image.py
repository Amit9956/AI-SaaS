from pydantic import BaseModel


class ImageRequest(BaseModel):
    prompt: str
    count: int = 4


class ImageResponse(BaseModel):
    images: list[str]