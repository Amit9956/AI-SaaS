from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.core.auth import get_current_user

from app.models.user import User
from app.models.conversation import Conversation

from app.schemas.conversation import (
    ConversationCreate,
    ConversationResponse,
)

router = APIRouter(
    prefix="/api/conversations",
    tags=["Conversations"],
)


# Create Conversation
@router.post(
    "",
    response_model=ConversationResponse
)
def create_conversation(
    data: ConversationCreate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):

    conversation = Conversation(
        title=data.title,
        user_id=user.id,
    )

    db.add(conversation)
    db.commit()
    db.refresh(conversation)

    return conversation


# Get All Conversations
@router.get(
    "",
    response_model=list[ConversationResponse]
)
def get_conversations(
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):

    conversations = (
        db.query(Conversation)
        .filter(
            Conversation.user_id == user.id
        )
        .order_by(
            Conversation.created_at.desc()
        )
        .all()
    )

    return conversations


# Delete Conversation
@router.delete("/{conversation_id}")
def delete_conversation(
    conversation_id: int,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):

    conversation = (
        db.query(Conversation)
        .filter(
            Conversation.id == conversation_id,
            Conversation.user_id == user.id
        )
        .first()
    )

    if not conversation:
        raise HTTPException(
            status_code=404,
            detail="Conversation not found"
        )

    db.delete(conversation)
    db.commit()

    return {
        "message": "Conversation deleted successfully"
    }

@router.put("/{conversation_id}")
def rename_conversation(
    conversation_id: int,
    data: ConversationCreate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):

    conversation = db.query(Conversation).filter(
        Conversation.id == conversation_id,
        Conversation.user_id == user.id
    ).first()

    if not conversation:
        raise HTTPException(
            status_code=404,
            detail="Conversation not found"
        )

    conversation.title = data.title

    db.commit()

    db.refresh(conversation)

    return conversation