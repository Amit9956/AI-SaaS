import json
import re

from google.api_core.exceptions import ResourceExhausted

from app.services.gemini_service import generate_json


def calculate_ats(data):

    resume = data.resume

    score = 0

    personal = resume.get("personal", {})

    if personal.get("fullName"):
        score += 10

    if personal.get("email"):
        score += 10

    if personal.get("phone"):
        score += 10

    if resume.get("skills"):
        score += 20

    if resume.get("experience"):
        score += 20

    if resume.get("education"):
        score += 15

    if resume.get("projects"):
        score += 15

    ai = {
        "summary": "",
        "strengths": [],
        "missing_keywords": [],
        "suggestions": []
    }

    prompt = f"""
You are an ATS Resume Analyzer.

Analyze this resume.

Return ONLY valid JSON.

Format:

{{
    "summary":"",
    "strengths":[],
    "missing_keywords":[],
    "suggestions":[]
}}

Resume:

{resume}
"""

    try:

        result = generate_json(prompt)

        if not result["success"]:

            ai["suggestions"] = [
                result["error"]
            ]

        else:

            text = result["text"].strip()

            text = re.sub(r"^```json", "", text)
            text = re.sub(r"^```", "", text)
            text = re.sub(r"```$", "", text)
            text = text.strip()

            ai = json.loads(text)

    except ResourceExhausted:

        ai["suggestions"] = [
            "Gemini API quota exceeded."
        ]

    except Exception as e:

        print("ATS ERROR:", e)

        ai["suggestions"] = [
            str(e)
        ]

    return {

        "score": score,

        "max_score": 100,

        "summary": ai.get("summary", ""),

        "strengths": ai.get("strengths", []),

        "missing_keywords": ai.get("missing_keywords", []),

        "suggestions": ai.get("suggestions", []),

        "breakdown": {

            "personal": 30 if (
                personal.get("fullName")
                and personal.get("email")
                and personal.get("phone")
            ) else 15,

            "skills": 20 if resume.get("skills") else 0,

            "experience": 20 if resume.get("experience") else 0,

            "education": 15 if resume.get("education") else 0,

            "projects": 15 if resume.get("projects") else 0,

        }

    }