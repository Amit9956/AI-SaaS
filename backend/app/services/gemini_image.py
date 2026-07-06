import os
import time

from PIL import Image
from google import genai

from app.config import GEMINI_API_KEY

client = genai.Client(
    api_key=GEMINI_API_KEY
)


def ask_image(image_path: str, question: str):

    image_path = os.path.normpath(image_path)

    if not os.path.isfile(image_path):
        return f"Image not found: {image_path}"

    start = time.time()

    image = Image.open(image_path)

    response = client.models.generate_content(

        model="gemini-2.5-flash",

        contents=[
            image,
            f"""
Answer ONLY using this image.

Question:

{question}
"""
        ],

    )

    print(f"Vision Time: {time.time() - start:.2f} sec")

    if response.text:
        return response.text

    if response.candidates:

        text = ""

        for part in response.candidates[0].content.parts:

            if getattr(part, "text", None):
                text += part.text

        return text

    return "No response."