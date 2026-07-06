from fastapi import APIRouter, Depends

from app.core.auth import get_current_user
from app.models.user import User

from app.schemas.chat import (
    ChatRequest,
    ChatResponse,
)

from app.services.ai import ask_ai

router = APIRouter(
    prefix="/api/chat",
    tags=["AI Chat"],
)


@router.post(
    "",
    response_model=ChatResponse,
)
def chat(
    request: ChatRequest,
    user: User = Depends(get_current_user),
):

    answer = ask_ai(request.message)

    return {
        "response": answer,
    }