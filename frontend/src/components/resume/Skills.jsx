import { useState } from "react";

import useResume from "../../hooks/useResume";

export default function Skills() {

    const {

        resume,

        setResume,

    } = useResume();

    const [skill, setSkill] = useState("");

    const addSkill = () => {

        if (!skill.trim()) return;

        setResume({

            ...resume,

            skills: [

                ...resume.skills,

                skill,

            ],

        });

        setSkill("");

    };

    const removeSkill = (index) => {

        setResume({

            ...resume,

            skills: resume.skills.filter(

                (_, i) => i !== index

            ),

        });

    };

    return (

        <div>

            <h3 className="mb-4 text-lg font-semibold sm:text-xl">

                💻 Skills

            </h3>

            <div className="flex flex-col gap-3 sm:flex-row">

                <input

                    placeholder="React"

                    value={skill}

                    onChange={(e) =>
                        setSkill(e.target.value)
                    }

                    className="w-full flex-1 rounded-lg border border-[#444] bg-[#2f3136] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

                />

                <button

                    onClick={addSkill}

                    className="w-full rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700 sm:w-auto"

                >

                    Add

                </button>

            </div>

            <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">

                {

                    resume.skills.map(

                        (

                            item,

                            index

                        ) => (

                            <div

                                key={index}

                                className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-sm text-white sm:px-4 sm:text-base"

                            >

                                <span className="break-all">

                                    {item}

                                </span>

                                <button

                                    onClick={() =>
                                        removeSkill(
                                            index
                                        )
                                    }

                                    className="text-white hover:text-red-200"

                                >

                                    ✕

                                </button>

                            </div>

                        )

                    )

                }

            </div>

        </div>

    );

}