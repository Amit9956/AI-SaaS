from app.services.gemini_service import generate_text


def generate_cover_letter(data):

    prompt = f"""
You are an expert HR Manager.

Write a professional ATS-friendly cover letter.

Resume:
{data.resume}

Company:
{data.company}

Job Title:
{data.job_title}

Job Description:
{data.job_description}

Rules:
- Professional tone
- ATS Friendly
- No markdown
- Return only the cover letter.
"""

    result = generate_text(prompt)

    if not result["success"]:

        return {
            "success": False,
            "message": result["error"]
        }

    return {

        "success": True,

        "cover_letter": result["text"]

    }