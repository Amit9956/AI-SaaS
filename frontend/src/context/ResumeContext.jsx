import { createContext, useState } from "react";

export const ResumeContext = createContext();

export function ResumeProvider({ children }) {

  const [resume, setResume] = useState({

    personal: {

        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        portfolio: "",
        summary: "",
        photo: "",

    },

    skills: [],

    experience: [],

    education: [],

    projects: [],

    certifications: [],

    languages: [],

    achievements: [],

    template: "professional",

});

    return (

        <ResumeContext.Provider

            value={{

                resume,

                setResume,

            }}

        >

            {children}

        </ResumeContext.Provider>

    );

}