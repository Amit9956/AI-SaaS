import base64
import requests
import urllib.parse


def generate_image(prompt: str, count: int = 4):

    images = []

    encoded_prompt = urllib.parse.quote(prompt)

    for i in range(count):

        url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?seed={i}"

        response = requests.get(url, timeout=120)

        print(response.status_code)   # <-- add this

        if response.status_code == 200:

            image = base64.b64encode(
                response.content
            ).decode("utf-8")

            images.append(
                f"data:image/png;base64,{image}"
            )

        else:
            print(response.text)       # <-- add this

    if not images:

        raise Exception("Unable to generate image.")

    return images