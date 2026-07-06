import google.generativeai as genai

from app.config import GEMINI_API_KEY

genai.configure(
    api_key=GEMINI_API_KEY
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def ask_pdf(pdf_text, question):

    prompt = f"""
You are an AI Assistant.

Answer ONLY using the PDF.

If answer is not present,
say "Information not found."

PDF:

{pdf_text}

Question:

{question}
"""

    response = model.generate_content(prompt)

    return response.text