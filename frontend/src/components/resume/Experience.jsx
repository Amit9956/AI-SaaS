import useResume from "../../hooks/useResume";

export default function Experience() {

    const { resume, setResume } = useResume();

    const addExperience = () => {

        setResume({

            ...resume,

            experience: [

                ...resume.experience,

                {

                    company: "",

                    role: "",

                    startDate: "",

                    endDate: "",

                    description: "",

                },

            ],

        });

    };

    const updateExperience = (

        index,

        field,

        value

    ) => {

        const list = [...resume.experience];

        list[index][field] = value;

        setResume({

            ...resume,

            experience: list,

        });

    };

    const removeExperience = (index) => {

        setResume({

            ...resume,

            experience: resume.experience.filter(

                (_, i) => i !== index

            ),

        });

    };

    return (

        <div className="space-y-5">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <h3 className="text-lg font-semibold sm:text-xl">

                    💼 Experience

                </h3>

                <button

                    onClick={addExperience}

                    className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 sm:w-auto"

                >

                    + Add

                </button>

            </div>

            {

                resume.experience.map(

                    (exp, index) => (

                        <div

                            key={index}

                            className="space-y-3 rounded-xl border border-[#444] bg-[#2f3136] p-4 sm:p-5"

                        >

                            <input

                                placeholder="Company"

                                value={exp.company}

                                onChange={(e) =>

                                    updateExperience(

                                        index,

                                        "company",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none focus:border-blue-500 sm:text-base"

                            />

                            <input

                                placeholder="Role"

                                value={exp.role}

                                onChange={(e) =>

                                    updateExperience(

                                        index,

                                        "role",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none focus:border-blue-500 sm:text-base"

                            />

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                                <input

                                    type="date"

                                    value={exp.startDate}

                                    onChange={(e) =>

                                        updateExperience(

                                            index,

                                            "startDate",

                                            e.target.value

                                        )

                                    }

                                    className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none focus:border-blue-500 sm:text-base"

                                />

                                <input

                                    type="date"

                                    value={exp.endDate}

                                    onChange={(e) =>

                                        updateExperience(

                                            index,

                                            "endDate",

                                            e.target.value

                                        )

                                    }

                                    className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none focus:border-blue-500 sm:text-base"

                                />

                            </div>

                            <textarea

                                rows={4}

                                placeholder="Describe your work..."

                                value={exp.description}

                                onChange={(e) =>

                                    updateExperience(

                                        index,

                                        "description",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none focus:border-blue-500 sm:text-base"

                            />

                            <button

                                onClick={() =>

                                    removeExperience(index)

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