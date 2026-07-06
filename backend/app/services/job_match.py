import json
import re

from google.api_core.exceptions import ResourceExhausted

from app.services.gemini_service import generate_json


def analyze_job_match(data):

    prompt = f"""
You are an expert ATS Resume Analyzer.

Compare the following Resume with the Job Description.

Resume:
{data.resume}

Job Description:
{data.job_description}

Return ONLY valid JSON.

Return exactly this format:

{{
    "match_score": 0,
    "summary": "",
    "matching_skills": [],
    "missing_skills": [],
    "strengths": [],
    "weaknesses": [],
    "suggestions": [],
    "hiring_recommendation": ""
}}
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