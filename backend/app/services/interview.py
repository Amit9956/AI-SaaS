import json
import re

from app.services.gemini_service import generate_json


def generate_questions(data):

    prompt = f"""
You are a Senior Technical Interviewer.

Generate interview questions.

Role:
{data.role}

Experience:
{data.experience}

Difficulty:
{data.difficulty}

Rules:

1. Return ONLY valid JSON.
2. No markdown.
3. No explanation.
4. Generate 10 interview questions.
5. Mix HR + Technical + Coding + Database + Scenario questions.

Return exactly this JSON:

{{
    "questions":[
        {{
            "question":"",
            "category":"",
            "difficulty":""
        }}
    ]
}}
"""

    try:

        result = generate_json(prompt)

        if not result["success"]:

            return {
                "success": False,
                "message": result["error"]
            }

        text = result["text"].strip()

        text = re.sub(r"^```json", "", text)
        text = re.sub(r"^```", "", text)
        text = re.sub(r"```$", "", text)
        text = text.strip()

        return json.loads(text)

    except json.JSONDecodeError:

        return {
            "success": False,
            "message": "Invalid JSON received from Gemini."
        }

    except Exception as e:

        return {
            "success": False,
            "message": str(e)
        }