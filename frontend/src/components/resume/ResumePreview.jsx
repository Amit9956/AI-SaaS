import useResume from "../../hooks/useResume";

import Professional from "./templates/Professional";
import Modern from "./templates/Modern";
import Minimal from "./templates/Minimal";
import Creative from "./templates/Creative";
import Corporate from "./templates/Corporate";
import Executive from "./templates/Executive";
import Developer from "./templates/Developer";
import Dark from "./templates/Dark";

export default function ResumePreview() {

    const { resume } = useResume();

    switch (resume.template) {

        case "modern":
            return <Modern />;

        case "minimal":
            return <Minimal />;

        case "creative":
            return <Creative />;

        case "corporate":
            return <Corporate />;

        case "executive":
            return <Executive />;

        case "developer":
            return <Developer />;

        case "dark":
            return <Dark />;

        default:
            return <Professional />;
    }

}