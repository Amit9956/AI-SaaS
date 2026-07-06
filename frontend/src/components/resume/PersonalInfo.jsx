import { useRef } from "react";
import useResume from "../../hooks/useResume";

export default function PersonalInfo() {

    const {

        resume,

        setResume,

    } = useResume();

    const personal = resume.personal || {};

    const fileInputRef = useRef(null);

    // ==========================================
    // UPDATE FIELD
    // ==========================================

    const updateField = (

        field,

        value

    ) => {

        setResume({

            ...resume,

            personal: {

                ...personal,

                [field]: value,

            },

        });

    };

    // ==========================================
    // PHOTO UPLOAD
    // ==========================================

    const handlePhotoUpload = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {

            updateField(

                "photo",

                reader.result

            );

        };

        reader.readAsDataURL(file);

    };

    // ==========================================
    // REMOVE PHOTO
    // ==========================================

    const removePhoto = () => {

        updateField(

            "photo",

            ""

        );

    };

    // ==========================================
    // RETURN
    // ==========================================

    return (

        <div className="space-y-5 sm:space-y-6">

            <h3 className="text-xl font-bold sm:text-2xl">

                👤 Personal Information

            </h3>

                        {/* ========================================= */}
            {/* PROFILE PHOTO */}
            {/* ========================================= */}

            <div className="flex flex-col items-center rounded-2xl border border-[#444] bg-[#2f3136] p-4 sm:p-6">

                {

                    personal.photo ? (

                        <img

                            src={personal.photo}

                            alt="Profile"

                           className="h-28 w-28 rounded-full border-4 border-blue-500 object-cover shadow-lg sm:h-36 sm:w-36"

                        />

                    ) : (

                        <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-dashed border-gray-500 bg-[#202123] text-5xl sm:h-36 sm:w-36 sm:text-6xl">

                            👤

                        </div>

                    )

                }

                <div className="mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

                    <button

                        type="button"

                        onClick={() => fileInputRef.current.click()}

                        className="w-full rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700 sm:w-auto"
                    >

                        📷 Upload Photo

                    </button>

                    {

                        personal.photo && (

                            <button

                                type="button"

                                onClick={removePhoto}

                                className="w-full rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700 sm:w-auto"

                            >

                                ❌ Remove

                            </button>

                        )

                    }

                </div>

                <input

                    ref={fileInputRef}

                    type="file"

                    accept="image/*"

                    className="hidden"

                    onChange={handlePhotoUpload}

                />

            </div>

            {/* ========================================= */}
            {/* FULL NAME */}
            {/* ========================================= */}

            <input

                placeholder="👤 Full Name"

                value={personal.fullName || ""}

                onChange={(e) =>

                    updateField(

                        "fullName",

                        e.target.value

                    )

                }

                className="w-full rounded-xl border border-[#444] bg-[#2f3136] p-3 text-sm outline-none transition focus:border-blue-500 sm:p-4 sm:text-base"

            />

            {/* ========================================= */}
            {/* EMAIL */}
            {/* ========================================= */}

            <input

                type="email"

                placeholder="📧 Email"

                value={personal.email || ""}

                onChange={(e) =>

                    updateField(

                        "email",

                        e.target.value

                    )

                }

                className="w-full rounded-xl border border-[#444] bg-[#2f3136] p-3 text-sm outline-none transition focus:border-blue-500 sm:p-4 sm:text-base"

            />

            {/* ========================================= */}
            {/* PHONE */}
            {/* ========================================= */}

            <input

                placeholder="📱 Phone"

                value={personal.phone || ""}

                onChange={(e) =>

                    updateField(

                        "phone",

                        e.target.value

                    )

                }

                className="w-full rounded-xl border border-[#444] bg-[#2f3136] p-3 text-sm outline-none transition focus:border-blue-500 sm:p-4 sm:text-base"

            />

                        {/* ========================================= */}
            {/* LOCATION */}
            {/* ========================================= */}

            <input

                placeholder="📍 Location"

                value={personal.location || ""}

                onChange={(e) =>

                    updateField(

                        "location",

                        e.target.value

                    )

                }

                className="w-full rounded-xl border border-[#444] bg-[#2f3136] p-3 text-sm outline-none transition focus:border-blue-500 sm:p-4 sm:text-base"

            />

            {/* ========================================= */}
            {/* LINKEDIN */}
            {/* ========================================= */}

            <input

                type="url"

                placeholder="🔗 LinkedIn URL"

                value={personal.linkedin || ""}

                onChange={(e) =>

                    updateField(

                        "linkedin",

                        e.target.value

                    )

                }

                className="w-full rounded-xl border border-[#444] bg-[#2f3136] p-3 text-sm outline-none transition focus:border-blue-500 sm:p-4 sm:text-base"

            />

            {/* ========================================= */}
            {/* GITHUB */}
            {/* ========================================= */}

            <input

                type="url"

                placeholder="💻 GitHub URL"

                value={personal.github || ""}

                onChange={(e) =>

                    updateField(

                        "github",

                        e.target.value

                    )

                }

                className="w-full rounded-xl border border-[#444] bg-[#2f3136] p-3 text-sm outline-none transition focus:border-blue-500 sm:p-4 sm:text-base"

            />

            {/* ========================================= */}
            {/* PORTFOLIO */}
            {/* ========================================= */}

            <input

                type="url"

                placeholder="🌐 Portfolio Website"

                value={personal.portfolio || ""}

                onChange={(e) =>

                    updateField(

                        "portfolio",

                        e.target.value

                    )

                }

                className="w-full rounded-xl border border-[#444] bg-[#2f3136] p-3 text-sm outline-none transition focus:border-blue-500 sm:p-4 sm:text-base"

            />

            {/* ========================================= */}
            {/* PROFESSIONAL SUMMARY */}
            {/* ========================================= */}

            <div>

                <label className="mb-2 block text-base font-semibold sm:text-lg">

                    📝 Professional Summary

                </label>

                <textarea

                    rows={6}

                    placeholder="Write a professional summary..."

                    value={personal.summary || ""}

                    onChange={(e) =>

                        updateField(

                            "summary",

                            e.target.value

                        )

                    }

                    className="w-full rounded-xl border border-[#444] bg-[#2f3136] p-3 text-sm outline-none transition focus:border-blue-500 sm:p-4 sm:text-base"

                />

                <p className="mt-2 text-xs text-gray-400 sm:text-sm">

                    Recommended: 3–5 lines highlighting your experience,
                    skills, and career objectives.

                </p>

            </div>

                        {/* ========================================= */}
            {/* QUICK VALIDATION */}
            {/* ========================================= */}

            <div className="rounded-xl border border-[#444] bg-[#2a2c31] p-4 sm:p-5">

                <h4 className="mb-3 font-semibold text-green-400">

                    ✔ Profile Completion

                </h4>

                <div className="space-y-2 text-xs sm:text-sm">

                    <div className="flex justify-between">

                        <span>Full Name</span>

                        <span>

                            {personal.fullName ? "✅" : "❌"}

                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span>Email</span>

                        <span>

                            {personal.email ? "✅" : "❌"}

                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span>Phone</span>

                        <span>

                            {personal.phone ? "✅" : "❌"}

                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span>Location</span>

                        <span>

                            {personal.location ? "✅" : "❌"}

                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span>Summary</span>

                        <span>

                            {personal.summary ? "✅" : "❌"}

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}