from pydantic import BaseModel

class ResumeData(BaseModel):

    personal: dict

    skills: list

    experience: list

    education: list

    projects: list