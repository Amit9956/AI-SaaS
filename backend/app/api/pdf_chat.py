from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.gemini_pdf import ask_pdf

router = APIRouter(
    prefix="/api/pdf",
    tags=["PDF AI"]
)

pdf_content = ""


class PDFRequest(BaseModel):
    content: str


class QuestionRequest(BaseModel):
    question: str


@router.post("/load")
def load_pdf(data: PDFRequest):

    global pdf_content

    pdf_content = data.content

    return {
        "message": "PDF Loaded Successfully"
    }


@router.post("/ask")
def ask(data: QuestionRequest):

    global pdf_content

    if not pdf_content:

        raise HTTPException(
            status_code=400,
            detail="No PDF Loaded"
        )

    answer = ask_pdf(
        pdf_content,
        data.question
    )

    return {

        "response": answer

    }