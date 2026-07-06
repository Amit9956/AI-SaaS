from pydantic import BaseModel


class JobMatchRequest(BaseModel):

    resume: dict

    job_description: str