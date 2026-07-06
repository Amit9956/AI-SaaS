from fastapi import APIRouter

from app.schemas.job_match import JobMatchRequest

from app.services.job_match import analyze_job_match

router = APIRouter(
    prefix="/api/job-match",
    tags=["Job Match"]
)


@router.post("/analyze")
def analyze(data: JobMatchRequest):

    return analyze_job_match(data)