from fastapi import APIRouter

from app.schemas.linkedin import LinkedInRequest
from app.services.linkedin import import_linkedin

router = APIRouter(
    prefix="/api/linkedin",
    tags=["LinkedIn Import"]
)


@router.post("/import")
def linkedin_import(data: LinkedInRequest):

    return import_linkedin(data)