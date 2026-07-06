import { useState } from "react";

import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

import {
    generateResume,
    improveResume,
    getATSScore,
    extractResume,
} from "../../api/resumeApi";

import useResume from "../../hooks/useResume";

export default function ResumeForm({

    onATSResult,

}) {

    const {

        resume,

        setResume,

    } = useResume();

    // ==========================================
    // STATES
    // ==========================================

    const [loading, setLoading] = useState(false);

    const [uploading, setUploading] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);

    const [progress, setProgress] = useState(0);

    const [role, setRole] = useState("");

    const [experience, setExperience] = useState("Fresher");

    const [extraSkills, setExtraSkills] = useState("");

    const [aiPrompt, setAiPrompt] = useState("");

    // ==========================================
    // DEFAULT PERSONAL INFO
    // ==========================================

    const defaultPersonal = {

        fullName: "",

        email: "",

        phone: "",

        location: "",

        linkedin: "",

        github: "",

        portfolio: "",

        summary: "",

        photo: "",

    };

    // ==========================================
    // CREATE RESUME OBJECT
    // ==========================================

    const createResumeObject = (data) => ({

        personal: data.personal || defaultPersonal,

        skills: data.skills || [],

        experience: data.experience || [],

        education: data.education || [],

        projects: data.projects || [],

        certifications: data.certifications || [],

        languages: data.languages || [],

        achievements: data.achievements || [],

        template: resume.template,

    });

    // ==========================================
    // AI GENERATE
    // ==========================================

    const handleGenerate = async () => {

        try {

            setLoading(true);

            const prompt = `

Role: ${role}

Experience: ${experience}

Skills: ${extraSkills}

Requirement:

${aiPrompt}

`;

            const data = await generateResume({

                prompt,

            });

            if (data.error) {

                alert(data.message);

                return;

            }

            setResume(

                createResumeObject(data)

            );

        }

        catch (err) {

            console.error(err);

            alert("Resume Generation Failed");

        }

        finally {

            setLoading(false);

        }

    };

        // ==========================================
    // RESUME UPLOAD
    // ==========================================

    const handleUploadResume = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setSelectedFile(file);

        setProgress(0);

        try {

            setUploading(true);

            const timer = setInterval(() => {

                setProgress((prev) => {

                    if (prev >= 90) return prev;

                    return prev + 10;

                });

            }, 200);

            const data = await extractResume(file);

            clearInterval(timer);

            setProgress(100);

            if (data.success === false) {

                alert(data.message);

                return;

            }

            setResume(createResumeObject(data));

            alert("✅ Resume Imported Successfully");

        }

        catch (err) {

            console.error(err);

            alert("Resume Upload Failed");

        }

        finally {

            setUploading(false);

        }

    };

    // ==========================================
    // IMPROVE RESUME
    // ==========================================

    const handleImprove = async () => {

        try {

            setLoading(true);

            const improved = await improveResume(resume);

            if (improved.error) {

                alert(improved.message);

                return;

            }

            setResume({

                ...improved,

                template: resume.template,

            });

            alert("✅ Resume Improved Successfully");

        }

        catch (err) {

            console.error(err);

            alert("Unable to improve Resume.");

        }

        finally {

            setLoading(false);

        }

    };

    // ==========================================
    // ATS SCORE
    // ==========================================

    const handleATS = async () => {

        try {

            const result = await getATSScore({

                resume,

            });

            onATSResult(result);

        }

        catch (err) {

            console.error(err);

            alert("Unable to Analyze ATS");

        }

    };

    // ==========================================
    // REMOVE FILE
    // ==========================================

    const removeFile = () => {

        setSelectedFile(null);

        setProgress(0);

    };

    // ==========================================
    // RETURN
    // ==========================================

    return (

        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
           
                        {/* ==================================== */}
            {/* TITLE */}
            {/* ==================================== */}

            <div>

    <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">

        AI Resume Builder

    </h2>

    <p className="mt-2 text-sm text-gray-400 sm:text-base">

        Build Resume manually or generate with AI.

    </p>

</div>

            {/* ==================================== */}
            {/* IMPORT RESUME */}
            {/* ==================================== */}

            <div className="rounded-2xl border border-[#3f3f3f] bg-[#25262b] p-4 sm:p-5">

    <div className="mb-5 sm:mb-6">

        <h3 className="text-xl font-bold sm:text-2xl">

            📄 Import Existing Resume

        </h3>

        <p className="mt-2 text-sm text-gray-400 sm:text-base">

            Upload PDF or DOCX and AI will automatically fill
            your resume.

        </p>

    </div>

    <label

        htmlFor="resumeUpload"

        className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-500 bg-[#303136] p-6 text-center transition duration-300 hover:border-cyan-400 hover:bg-[#36383d] sm:p-8 lg:p-10"

    >

        <div className="text-5xl sm:text-6xl">

            📄

        </div>

        <h3 className="mt-4 text-lg font-bold sm:text-xl">

            Upload Resume

        </h3>

        <p className="mt-2 text-sm text-gray-400 sm:text-base">

            Click to Choose PDF / DOCX

        </p>

        <input

            id="resumeUpload"

            type="file"

            accept=".pdf,.docx"

            className="hidden"

            onChange={handleUploadResume}

        />

    </label>

    {

        selectedFile && (

            <div className="mt-6 rounded-xl border border-[#444] bg-[#2d2f34] p-4">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="min-w-0">

                        <p className="truncate font-semibold">

                            📄 {selectedFile.name}

                        </p>

                        <p className="text-sm text-gray-400">

                            {(selectedFile.size / 1024).toFixed(2)} KB

                        </p>

                    </div>

                    <button

                        onClick={removeFile}

                        className="w-full rounded-lg bg-red-600 px-4 py-2 transition hover:bg-red-700 sm:w-auto"

                    >

                        Remove

                    </button>

                </div>

            </div>

        )

    }

    {

        uploading && (

            <div className="mt-6">

                <div className="mb-2 flex items-center justify-between text-sm sm:text-base">

                    <span>

                        AI Extracting Resume...

                    </span>

                    <span>

                        {progress}%

                    </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-700">

                    <div

                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 transition-all"

                        style={{

                            width: `${progress}%`

                        }}

                    ></div>

                </div>

            </div>

        )

    }

</div>

            {/* ==================================== */}
            {/* AI RESUME GENERATOR */}
            {/* ==================================== */}

           <div className="rounded-2xl border border-[#3f3f3f] bg-[#25262b] p-4 sm:p-5">

    <h3 className="mb-5 text-lg font-bold sm:text-xl">

        ✨ AI Resume Generator

    </h3>

    <div className="space-y-4">

        <input

            value={role}

            onChange={(e) => setRole(e.target.value)}

            placeholder="Job Role"

            className="w-full rounded-lg border border-[#444] bg-[#303136] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

        />

        <select

            value={experience}

            onChange={(e) => setExperience(e.target.value)}

            className="w-full rounded-lg border border-[#444] bg-[#303136] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

        >

            <option>Fresher</option>

            <option>1 Year</option>

            <option>2 Years</option>

            <option>3 Years</option>

            <option>5+ Years</option>

        </select>

        <input

            value={extraSkills}

            onChange={(e) => setExtraSkills(e.target.value)}

            placeholder="Extra Skills"

            className="w-full rounded-lg border border-[#444] bg-[#303136] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

        />

        <textarea

            rows={5}

            value={aiPrompt}

            onChange={(e) => setAiPrompt(e.target.value)}

            placeholder="Describe your resume..."

            className="w-full rounded-lg border border-[#444] bg-[#303136] p-3 text-sm outline-none transition focus:border-blue-500 sm:text-base"

        />

        <button

            disabled={loading}

            onClick={handleGenerate}

            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-bold transition hover:opacity-90 sm:text-base"

        >

            {

                loading

                    ? "Generating..."

                    : "✨ Generate Resume"

            }

        </button>

    </div>

</div>

                        {/* ==================================== */}
            {/* MANUAL RESUME BUILDER */}
            {/* ==================================== */}

            <div className="rounded-2xl border border-[#3f3f3f] bg-[#25262b] p-4 sm:p-5">

    <h3 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">

        ✍ Manual Resume Builder

    </h3>

    <div className="space-y-6 sm:space-y-8">

        <PersonalInfo />

        <Skills />

        <Experience />

        <Education />

        <Projects />

    </div>

</div>

            {/* ==================================== */}
            {/* ACTION BUTTONS */}
            {/* ==================================== */}

            <div className="space-y-4">

    <button

        disabled={loading}

        onClick={handleImprove}

        className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-3 text-sm font-bold transition hover:scale-[1.02] hover:shadow-lg sm:text-base"

    >

        {

            loading

                ? "✨ Improving Resume..."

                : "✨ Improve Resume with AI"

        }

    </button>

    <button

        onClick={handleATS}

        className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-4 py-3 text-sm font-bold transition hover:scale-[1.02] hover:shadow-lg sm:text-base"

    >

        📊 Analyze ATS Score

    </button>

</div>

        </div>

    );

}