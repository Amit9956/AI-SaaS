from fastapi import APIRouter

from app.schemas.resume_improver import ResumeImproveRequest
from app.services.resume_improver import improve_resume

router = APIRouter(
    prefix="/api/resume-improve",
    tags=["Resume Improve"]
)

@router.post("/generate")
def generate(data: ResumeImproveRequest):
    return improve_resume(data)