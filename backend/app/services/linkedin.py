from app.services.gemini_service import generate_json


def import_linkedin(data):

    prompt = f"""
You are an expert Resume Parser.

Extract resume information from this LinkedIn profile URL.

LinkedIn URL:
{data.profile_url}

Return ONLY valid JSON.

Format:

{{
    "personal": {{
        "fullName": "",
        "email": "",
        "phone": "",
        "location": "",
        "linkedin": "",
        "github": "",
        "portfolio": "",
        "summary": "",
        "photo": ""
    }},
    "skills": [],
    "experience": [],
    "education": [],
    "projects": [],
    "certifications": [],
    "languages": [],
    "achievements": []
}}
"""

    return generate_json(prompt)