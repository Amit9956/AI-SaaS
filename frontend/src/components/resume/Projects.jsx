import useResume from "../../hooks/useResume";

export default function Projects() {

    const { resume, setResume } = useResume();

    const addProject = () => {

        setResume({

            ...resume,

            projects: [

                ...resume.projects,

                {

                    title: "",

                    technologies: "",

                    description: "",

                    github: "",

                    live: "",

                },

            ],

        });

    };

    const updateProject = (

        index,

        field,

        value

    ) => {

        const list = [...resume.projects];

        list[index][field] = value;

        setResume({

            ...resume,

            projects: list,

        });

    };

    const removeProject = (index) => {

        setResume({

            ...resume,

            projects: resume.projects.filter(

                (_, i) => i !== index

            ),

        });

    };

    return (

        <div className="space-y-5">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <h3 className="text-lg font-semibold sm:text-xl">

                    🚀 Projects

                </h3>

                <button

                    onClick={addProject}

                    className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 sm:w-auto"

                >

                    + Add

                </button>

            </div>

            {

                resume.projects.map(

                    (project, index) => (

                        <div

                            key={index}

                            className="space-y-3 rounded-xl border border-[#444] bg-[#2f3136] p-4 sm:p-5"

                        >

                            <input

                                placeholder="Project Name"

                                value={project.title}

                                onChange={(e) =>

                                    updateProject(

                                        index,

                                        "title",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

                            />

                            <input

                                placeholder="Technologies (React, FastAPI...)"

                                value={project.technologies}

                                onChange={(e) =>

                                    updateProject(

                                        index,

                                        "technologies",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

                            />

                            <textarea

                                rows={4}

                                placeholder="Project Description"

                                value={project.description}

                                onChange={(e) =>

                                    updateProject(

                                        index,

                                        "description",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

                            />

                            <input

                                placeholder="GitHub URL"

                                value={project.github}

                                onChange={(e) =>

                                    updateProject(

                                        index,

                                        "github",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

                            />

                            <input

                                placeholder="Live Demo URL"

                                value={project.live}

                                onChange={(e) =>

                                    updateProject(

                                        index,

                                        "live",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

                            />

                            <button

                                onClick={() =>

                                    removeProject(index)

                                }

                                className="w-full rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700 sm:w-auto"

                            >

                                Delete

                            </button>

                        </div>

                    )

                )

            }

        </div>

    );

}