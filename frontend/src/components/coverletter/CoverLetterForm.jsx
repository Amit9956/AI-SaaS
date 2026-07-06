import { useState } from "react";
import useResume from "../../hooks/useResume";
import { generateCoverLetter } from "../../api/resumeApi";

export default function CoverLetterForm({
  setCoverLetter,
}) {
  const { resume } = useResume();
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const payload = {
        resume,
        company,
        job_title: jobTitle,
        job_description: jobDescription,
      };
      const data = await generateCoverLetter(payload);
      if (!data.success) {
        alert(data.message);
        return;
      }
      setCoverLetter(data.cover_letter);
    } catch (err) {
      console.log(err);
      alert("Unable to generate cover letter.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-[#2b2c2f] p-4 sm:p-5 md:p-6">
      <h2 className="mb-4 text-xl font-bold text-white sm:mb-5 sm:text-2xl">
        AI Cover Letter
      </h2>
      
      <input
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="mb-3 w-full rounded-lg border border-[#444] bg-[#333] p-2.5 text-sm text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:mb-4 sm:p-3 sm:text-base"
      />

      <input
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="mb-3 w-full rounded-lg border border-[#444] bg-[#333] p-2.5 text-sm text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:mb-4 sm:p-3 sm:text-base"
      />

      <textarea
        rows={6}
        placeholder="Paste Job Description"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        className="mb-4 w-full rounded-lg border border-[#444] bg-[#333] p-2.5 text-sm text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:mb-5 sm:p-3 sm:text-base md:rows-8"
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:py-3 sm:text-base"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin sm:h-5 sm:w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Generating...
          </span>
        ) : (
          "✨ Generate Cover Letter"
        )}
      </button>
    </div>
  );
}