from pydantic import BaseModel


class ATSRequest(BaseModel):

    resume: dict