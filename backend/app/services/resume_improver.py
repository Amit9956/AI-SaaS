import json
import re

from google.api_core.exceptions import ResourceExhausted

from app.services.gemini_service import generate_json


def improve_resume(data):

    prompt = f"""
You are one of the world's best ATS Resume Writers.

Improve the following resume.

Rules:

- Improve Professional Summary
- Improve Skills
- Improve Experience
- Improve Projects
- Fix Grammar
- Make ATS Friendly

Return ONLY valid JSON.

Do NOT use markdown.
Do NOT use ```json.

Return exactly this structure:

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
    "skills": [],
    "experience": [],
    "education": [],
    "projects": [],
    "certifications": [],
    "languages": [],
    "achievements": []
}}

Resume:

{data.resume}
"""

    try:

        result = generate_json(prompt)

        if not result["success"]:

            return {
                "error": True,
                "message": result["error"]
            }

        text = result["text"].strip()

        text = re.sub(r"^```json", "", text)
        text = re.sub(r"^```", "", text)
        text = re.sub(r"```$", "", text)
        text = text.strip()

        return json.loads(text)

    except ResourceExhausted:

        return {
            "error": True,
            "message": "Gemini API quota exceeded."
        }

    except json.JSONDecodeError:

        return {
            "error": True,
            "message": "Gemini returned invalid JSON."
        }

    except Exception as e:

        return {
            "error": True,
            "message": str(e)
        }