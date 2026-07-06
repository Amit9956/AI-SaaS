import time

from app.services.gemini_service import generate_text


def ask_ai(prompt: str):

    start = time.time()

    result = generate_text(prompt)

    print(f"AI Time: {time.time() - start:.2f} sec")

    if not result["success"]:

        return result["error"]

    return result["text"]