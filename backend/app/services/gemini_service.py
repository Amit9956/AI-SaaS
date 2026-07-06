import google.generativeai as genai
from google.api_core.exceptions import ResourceExhausted

from app.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_json(prompt):

    try:

        response = model.generate_content(
            prompt,
            generation_config={
                "response_mime_type": "application/json"
            }
        )

        return {
            "success": True,
            "text": response.text
        }

    except ResourceExhausted:

        return {
            "success": False,
            "error": "Gemini API quota exceeded."
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }


def generate_text(prompt):

    try:

        response = model.generate_content(prompt)

        return {
            "success": True,
            "text": response.text
        }

    except ResourceExhausted:

        return {
            "success": False,
            "error": "Gemini API quota exceeded."
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }