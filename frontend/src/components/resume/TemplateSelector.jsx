import useResume from "../../hooks/useResume";

const templates = [

    {
        id: "professional",
        name: "Professional"
    },

    {
        id: "modern",
        name: "Modern"
    },

    {
        id: "minimal",
        name: "Minimal"
    },

    {
        id: "creative",
        name: "Creative"
    },

    {
        id: "corporate",
        name: "Corporate"
    },

    {
        id: "executive",
        name: "Executive"
    },

    {
        id: "developer",
        name: "Developer"
    },

    {
        id: "dark",
        name: "Dark"
    }

];

export default function TemplateSelector() {

    const {

        resume,

        setResume,

    } = useResume();

    return (

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

            {

                templates.map((template) => (

                    <button

                        key={template.id}

                        onClick={() =>

                            setResume({

                                ...resume,

                                template: template.id,

                            })

                        }

                        className={`rounded-xl border p-3 text-sm font-semibold transition-all duration-300 sm:p-4 sm:text-base

                        ${

                            resume.template === template.id

                            ?

                            "border-blue-600 bg-blue-600 text-white"

                            :

                            "border-gray-600 bg-[#2f3136] text-gray-300 hover:bg-[#3b3d42]"

                        }

                        `}

                    >

                        {template.name}

                    </button>

                ))

            }

        </div>

    );

}