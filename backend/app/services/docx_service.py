from docx import Document


def extract_docx_text(filepath):

    document = Document(filepath)

    text = []

    for paragraph in document.paragraphs:

        if paragraph.text.strip():
            text.append(paragraph.text)

    return "\n".join(text)