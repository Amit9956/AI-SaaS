from fastapi import APIRouter

from app.schemas.cover_letter import CoverLetterRequest

from app.services.cover_letter import generate_cover_letter

router = APIRouter(

    prefix="/api/cover-letter",

    tags=["Cover Letter"]

)

@router.post("/generate")

def generate(

    data: CoverLetterRequest

):

    return generate_cover_letter(data)