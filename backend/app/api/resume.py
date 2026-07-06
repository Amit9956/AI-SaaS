from fastapi import APIRouter

from fastapi.responses import FileResponse

from app.schemas.resume import ResumeData

from app.services.pdf_resume import create_pdf

from app.services.docx_resume import create_docx



router = APIRouter(

    prefix="/api/resume",

    tags=["Resume"],

)


@router.post("/pdf")

def pdf(

    data: ResumeData,

):

    file = create_pdf(

        data.model_dump()

    )

    return FileResponse(

        file,

        filename="Resume.pdf",

        media_type="application/pdf",

    )


@router.post("/docx")

def docx(

    data: ResumeData,

):

    file = create_docx(

        data.model_dump()

    )

    return FileResponse(

        file,

        filename="Resume.docx",

        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",

    )