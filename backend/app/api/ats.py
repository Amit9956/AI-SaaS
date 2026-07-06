from fastapi import APIRouter, HTTPException

from app.schemas.ats import ATSRequest
from app.services.ats import calculate_ats

router = APIRouter(
    prefix="/api/ats",
    tags=["ATS Score"]
)

@router.post("/score")
def ats_score(data: ATSRequest):

    try:

        return calculate_ats(data)

    except Exception as e:

        print("========== ATS ERROR ==========")
        print(e)
        print("===============================")

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )