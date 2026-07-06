from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import Base, engine

# Models
from app.models.user import User
from app.models.conversation import Conversation
from app.models.message import Message

# Routers
from app.api.auth import router as auth_router
from app.api.chat import router as chat_router
from app.api.conversation import router as conversation_router
from app.api.message import router as message_router
from app.api.upload import router as upload_router
from app.api.pdf_chat import router as pdf_router
from app.api.file_chat import router as file_chat_router
from app.api.image import router as image_router

from app.api.resume import router as resume_router
from app.api.resume_ai import router as resume_ai_router
from app.api.resume_improver import router as resume_improver_router

from app.api.cover_letter import router as cover_router
from app.api.ats import router as ats_router
from app.api.interview import router as interview_router
from app.api.job_match import router as job_match_router

# NEW
from app.api.linkedin import router as linkedin_router
from app.api.resume_extract import router as resume_extract_router


# =====================================
# Create Database Tables
# =====================================

Base.metadata.create_all(bind=engine)

# =====================================
# FastAPI App
# =====================================

app = FastAPI(
    title="NeuroDesk AI API",
    version="1.0.0"
)

# =====================================
# CORS
# =====================================

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =====================================
# API Routes
# =====================================

app.include_router(auth_router)

app.include_router(chat_router)

app.include_router(conversation_router)

app.include_router(message_router)

app.include_router(upload_router)

app.include_router(pdf_router)

app.include_router(file_chat_router)

app.include_router(image_router)

# Resume
app.include_router(resume_router)

app.include_router(resume_ai_router)

app.include_router(resume_improver_router)

app.include_router(cover_router)

app.include_router(ats_router)

app.include_router(interview_router)

app.include_router(job_match_router)

# NEW LinkedIn Import
app.include_router(linkedin_router)

app.include_router(resume_extract_router)

# =====================================
# Root Endpoint
# =====================================

@app.get("/")
def home():

    return {

        "status": "success",

        "message": "NeuroDesk AI Backend Running 🚀",

        "version": "1.0.0"

    }