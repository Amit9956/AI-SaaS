from pydantic import BaseModel


class LinkedInRequest(BaseModel):
    profile_url: str