from fastapi import APIRouter, HTTPException

from app.schemas.resume_ai import ResumePrompt
from app.services.resume_ai import generate_resume

router = APIRouter(
    prefix="/api/resume-ai",
    tags=["Resume AI"],
)


@router.post("/generate")
def generate(data: ResumePrompt):

    try:

        result = generate_resume(data.prompt)

        return result

    except Exception as e:

        print("Resume AI Error:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )