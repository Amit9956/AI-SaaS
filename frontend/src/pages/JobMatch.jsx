import { useState } from "react";

import useResume from "../hooks/useResume";
import { analyzeJobMatch } from "../api/resumeApi";

export default function JobMatch() {
  const { resume } = useResume();

  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const data = await analyzeJobMatch(
        resume,
        jobDescription
      );

      console.log("Job Match:", data);

      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Job Match Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#212121] px-4 py-6 text-white sm:px-6 lg:px-8">

      <div className="mx-auto w-full max-w-6xl">

        {/* Heading */}
        <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
          AI Job Match Analyzer
        </h1>

        {/* Textarea */}
        <textarea
          rows={10}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste Job Description Here..."
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-[#2d2d2d]
            p-4
            text-white
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500
          "
        />

        {/* Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="
            mt-5
            w-full
            rounded-xl
            bg-blue-600
            px-8
            py-3
            font-semibold
            transition
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-60
            sm:w-auto
          "
        >
          {loading ? "Analyzing..." : "Analyze Job Match"}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-700 bg-[#2d2d2d] shadow-lg">

            <pre
              className="
                overflow-x-auto
                whitespace-pre-wrap
                break-words
                p-4
                text-sm
                sm:p-6
                sm:text-base
              "
            >
              {JSON.stringify(result, null, 2)}
            </pre>

          </div>
        )}

      </div>
    </div>
  );
}