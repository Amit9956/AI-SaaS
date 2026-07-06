import json
import re

from google.api_core.exceptions import ResourceExhausted

from app.services.gemini_service import generate_json


def generate_resume(prompt: str):

    final_prompt = f"""
You are one of the world's best ATS Resume Writers.

Your job is to create a COMPLETE professional ATS-friendly resume.

IMPORTANT RULES:

1. Never leave fields empty.
2. If the user does not provide information, intelligently generate realistic information.
3. Generate complete Experience, Education, Projects, Skills, Summary, Certifications and Achievements.
4. Return ONLY valid JSON.
5. Do NOT use markdown.
6. Do NOT use ```json.
7. Do NOT explain anything.
8. Never return empty arrays unless absolutely impossible.

Return EXACTLY this JSON structure:

{{
  "personal": {{
    "fullName": "John Doe",
    "email": "john@gmail.com",
    "phone": "+91 9876543210",
    "location": "India",
    "linkedin": "https://linkedin.com/in/johndoe",
    "github": "https://github.com/johndoe",
    "portfolio": "",
    "summary": "Professional ATS friendly summary.",
    "photo": ""
  }},

  "skills": [
    "Python",
    "FastAPI",
    "React",
    "PostgreSQL",
    "Git"
  ],

  "experience": [
    {{
      "role": "Python Developer",
      "company": "ABC Technologies",
      "startDate": "2024",
      "endDate": "Present",
      "description": "Developed scalable backend APIs using FastAPI and PostgreSQL."
    }}
  ],

  "education": [
    {{
      "degree": "Bachelor of Technology",
      "college": "XYZ University",
      "year": "2025",
      "cgpa": "8.5"
    }}
  ],

  "projects": [
    {{
      "title": "AI Resume Builder",
      "technologies": "React, FastAPI, PostgreSQL",
      "description": "Built an AI powered ATS Resume Builder.",
      "github": "",
      "live": ""
    }}
  ],

  "certifications": [
    "Python Certificate"
  ],

  "languages": [
    "English",
    "Hindi"
  ],

  "achievements": [
    "Solved 300+ coding problems."
  ]
}}

User Request:

{prompt}
"""

    try:

        result = generate_json(final_prompt)

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
            "message": "Gemini API free quota exceeded. Please wait, use another API key, or enable billing."
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