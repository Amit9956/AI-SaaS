from pydantic import BaseModel

class ResumePrompt(BaseModel):
    prompt: str