from fastapi import APIRouter

from app.schemas.image import (
    ImageRequest,
    ImageResponse,
)

from app.services.image_generator import (
    generate_image,
)

router = APIRouter(
    prefix="/api/image",
    tags=["Image Generator"],
)


@router.post(
    "/generate",
    response_model=ImageResponse,
)
def generate(data: ImageRequest):

    images = generate_image(
        data.prompt,
        data.count
    )

    return {
        "images": images
    }