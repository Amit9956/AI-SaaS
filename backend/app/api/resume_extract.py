from fastapi import APIRouter, UploadFile, File

from app.services.resume_extract import extract_resume

router = APIRouter(
    prefix="/api/resume",
    tags=["Resume Extract"]
)


@router.post("/extract")
async def extract(file: UploadFile = File(...)):

    return await extract_resume(file)