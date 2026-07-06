from fastapi import APIRouter

from app.schemas.interview import InterviewRequest
from app.services.interview import generate_questions

router = APIRouter(
    prefix="/api/interview",
    tags=["Interview"]
)

@router.post("/generate")
def interview(data: InterviewRequest):

    return generate_questions(data)