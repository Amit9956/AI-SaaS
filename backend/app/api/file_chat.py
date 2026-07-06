from fastapi import APIRouter
from pydantic import BaseModel

from app.services.ai import ask_ai
from app.services.gemini_image import ask_image

router = APIRouter(
    prefix="/api/chat/file",
    tags=["File AI"],
)


class FileChatRequest(BaseModel):
    file_type: str
    filepath: str | None = None
    content: str | None = None
    question: str = ""


@router.post("")
def chat_file(data: FileChatRequest):
     
    # ==========================
    # IMAGE
    # ==========================
    
    if data.file_type == "image":

        question = data.question.strip()

        if question == "":
            question = "Describe this image in detail."

        answer = ask_image(
            data.filepath,
            question,
        )

        return {
            "response": answer
        }

    # ==========================
    # PDF / DOCX / TXT
    # ==========================
    elif data.file_type in ["pdf", "docx", "text"]:

        question = data.question.strip()

        if question == "":
            question = "Summarize this document."

        prompt = f"""
Answer ONLY using this document.

Document:

{data.content}

Question:

{question}
"""

        answer = ask_ai(prompt)

        return {
            "response": answer
        }

    # ==========================
    # NORMAL CHAT
    # ==========================
    else:

        question = data.question.strip()

        if question == "":
            return {
                "response": "Please enter a message."
            }

        answer = ask_ai(question)

        return {
            "response": answer
        }