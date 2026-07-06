import os
import json
import tempfile

import fitz
import docx

from app.services.gemini_service import generate_json


async def extract_resume(file):

    filename = file.filename.lower()

    suffix = os.path.splitext(filename)[1]

    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as temp:

        temp.write(await file.read())

        temp_path = temp.name

    text = ""

    try:

        # ==========================
        # PDF
        # ==========================

        if suffix == ".pdf":

            pdf = fitz.open(temp_path)

            for page in pdf:

                text += page.get_text()

            pdf.close()

        # ==========================
        # DOCX
        # ==========================

        elif suffix == ".docx":

            document = docx.Document(temp_path)

            for para in document.paragraphs:

                text += para.text + "\n"

        else:

            return {

                "success": False,

                "message": "Only PDF and DOCX are supported."

            }

    finally:

        os.remove(temp_path)

    # ==========================
    # Gemini Prompt
    # ==========================

    prompt = f"""
You are an expert Resume Parser.

Extract complete resume information.

Resume Text:

{text}

Return ONLY valid JSON.

Format:

{{
    "personal": {{
        "fullName":"",
        "email":"",
        "phone":"",
        "location":"",
        "linkedin":"",
        "github":"",
        "portfolio":"",
        "summary":"",
        "photo":""
    }},

    "skills":[],

    "experience":[],

    "education":[],

    "projects":[],

    "certifications":[],

    "languages":[],

    "achievements":[]

}}
"""

    result = generate_json(prompt)

    if not result["success"]:

        return {

            "success": False,

            "message": result["error"]

        }

    try:

        return json.loads(result["text"])

    except Exception:

        return {

            "success": False,

            "message": "Invalid JSON returned by AI."

        }