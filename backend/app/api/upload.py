from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.pdf_service import extract_pdf_text
from app.services.docx_service import extract_docx_text
from uuid import uuid4
import shutil
import os

router = APIRouter(
    prefix="/api/upload",
    tags=["Upload"]
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

ALLOWED_TYPES = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/jpg",
    "text/plain",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]


@router.post("")
async def upload_file(file: UploadFile = File(...)):

    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type."
        )

    filename = f"{uuid4()}_{file.filename}"
    filepath = os.path.join(UPLOAD_FOLDER, filename)

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    content = ""
    file_type = "file"

    # PDF
    if file.content_type == "application/pdf":
        file_type = "pdf"
        content = extract_pdf_text(filepath)

    # DOCX
    elif file.content_type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        file_type = "docx"
        content = extract_docx_text(filepath)

    # TXT
    elif file.content_type == "text/plain":
        file_type = "text"
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

    # IMAGE
    elif file.content_type.startswith("image/"):
        file_type = "image"

    return {
        "filename": filename,
        "filepath": filepath,
        "file_type": file_type,
        "content": content
    }