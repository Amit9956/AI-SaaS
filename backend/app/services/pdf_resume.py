from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
)

from reportlab.lib.styles import getSampleStyleSheet

import tempfile


def create_pdf(data):

    styles = getSampleStyleSheet()

    file = tempfile.NamedTemporaryFile(

        delete=False,

        suffix=".pdf",

    )

    doc = SimpleDocTemplate(

        file.name

    )

    story = []

    personal = data["personal"]

    story.append(

        Paragraph(

            f"<b>{personal['fullName']}</b>",

            styles["Title"]

        )

    )

    story.append(

        Paragraph(

            personal["email"],

            styles["Normal"]

        )

    )

    story.append(

        Paragraph(

            personal["phone"],

            styles["Normal"]

        )

    )

    story.append(

        Paragraph(

            "<b>Summary</b>",

            styles["Heading2"]

        )

    )

    story.append(

        Paragraph(

            personal["summary"],

            styles["BodyText"]

        )

    )

    story.append(

        Paragraph(

            "<b>Skills</b>",

            styles["Heading2"]

        )

    )

    for skill in data["skills"]:

        story.append(

            Paragraph(

                f"• {skill}",

                styles["BodyText"]

            )

        )

    story.append(

        Paragraph(

            "<b>Experience</b>",

            styles["Heading2"]

        )

    )

    for exp in data["experience"]:

        story.append(

            Paragraph(

                f"<b>{exp['role']}</b>",

                styles["Heading3"]

            )

        )

        story.append(

            Paragraph(

                exp["company"],

                styles["BodyText"]

            )

        )

        story.append(

            Paragraph(

                exp["description"],

                styles["BodyText"]

            )

        )

    story.append(

        Paragraph(

            "<b>Education</b>",

            styles["Heading2"]

        )

    )

    for edu in data["education"]:

        story.append(

            Paragraph(

                f"{edu['degree']} - {edu['college']}",

                styles["BodyText"]

            )

        )

    story.append(

        Paragraph(

            "<b>Projects</b>",

            styles["Heading2"]

        )

    )

    for project in data["projects"]:

        story.append(

            Paragraph(

                f"<b>{project['title']}</b>",

                styles["Heading3"]

            )

        )

        story.append(

            Paragraph(

                project["description"],

                styles["BodyText"]

            )

        )

    doc.build(story)

    return file.name