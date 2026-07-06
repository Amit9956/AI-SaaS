from pydantic import BaseModel

class CoverLetterRequest(BaseModel):

    resume: dict

    company: str

    job_title: str

    job_description: str