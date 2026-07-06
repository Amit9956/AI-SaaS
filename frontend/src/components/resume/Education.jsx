import useResume from "../../hooks/useResume";

export default function Education() {

    const { resume, setResume } = useResume();

    const addEducation = () => {

        setResume({

            ...resume,

            education: [

                ...resume.education,

                {

                    college: "",

                    degree: "",

                    year: "",

                    cgpa: "",

                },

            ],

        });

    };

    const updateEducation = (

        index,

        field,

        value

    ) => {

        const list = [...resume.education];

        list[index][field] = value;

        setResume({

            ...resume,

            education: list,

        });

    };

    const removeEducation = (index) => {

        setResume({

            ...resume,

            education: resume.education.filter(

                (_, i) => i !== index

            ),

        });

    };

    return (

        <div className="space-y-5">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <h3 className="text-lg font-semibold sm:text-xl">

                    🎓 Education

                </h3>

                <button

                    onClick={addEducation}

                    className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 sm:w-auto"

                >

                    + Add

                </button>

            </div>

            {

                resume.education.map(

                    (edu, index) => (

                        <div

                            key={index}

                            className="space-y-3 rounded-xl border border-[#444] bg-[#2f3136] p-4 sm:p-5"

                        >

                            <input

                                placeholder="College"

                                value={edu.college}

                                onChange={(e) =>

                                    updateEducation(

                                        index,

                                        "college",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none focus:border-blue-500 sm:text-base"

                            />

                            <input

                                placeholder="Degree"

                                value={edu.degree}

                                onChange={(e) =>

                                    updateEducation(

                                        index,

                                        "degree",

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none focus:border-blue-500 sm:text-base"

                            />

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                                <input

                                    placeholder="Passing Year"

                                    value={edu.year}

                                    onChange={(e) =>

                                        updateEducation(

                                            index,

                                            "year",

                                            e.target.value

                                        )

                                    }

                                    className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none focus:border-blue-500 sm:text-base"

                                />

                                <input

                                    placeholder="CGPA / %"

                                    value={edu.cgpa}

                                    onChange={(e) =>

                                        updateEducation(

                                            index,

                                            "cgpa",

                                            e.target.value

                                        )

                                    }

                                    className="w-full rounded-lg border border-[#555] bg-[#202123] p-3 text-sm outline-none focus:border-blue-500 sm:text-base"

                                />

                            </div>

                            <button

                                onClick={() =>

                                    removeEducation(index)

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