import { useState, useRef } from "react";

import ResumeForm from "../components/resume/ResumeForm";
import ResumePreview from "../components/resume/ResumePreview";
import TemplateSelector from "../components/resume/TemplateSelector";
import DownloadButton from "../components/resume/DownloadButton";

import ATSScoreCard from "../components/resume/ATSScoreCard";
import ATSBreakdown from "../components/resume/ATSBreakdown";
import ATSSuggestions from "../components/resume/ATSSuggestions";

export default function ResumeBuilder() {
  const previewRef = useRef(null);
  const [atsResult, setATSResult] = useState(null);
  const [mobileDrawer, setMobileDrawer] = useState(false);

  return (
    <div className="min-h-screen bg-[#202123] text-white">

      {/* ================= HEADER ================= */}
      <div className="sticky top-0 z-30 border-b border-[#3a3a3a] bg-[#202123]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4">
          
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            
            {/* Title Section */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
                AI Resume Builder
              </h1>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm lg:text-base">
                Create Professional ATS Friendly Resume using AI
              </p>
            </div>

            {/* Desktop Download Button */}
            <div className="hidden lg:block">
              <DownloadButton previewRef={previewRef} />
            </div>

            {/* Mobile/Tablet Options Button */}
            <button
              onClick={() => setMobileDrawer(true)}
              className="w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:py-3 sm:text-base lg:hidden"
            >
              ☰ Resume Options
            </button>
          </div>

          {/* Desktop Template Selector */}
          <div className="mt-4 hidden lg:block">
            <h2 className="mb-2 text-sm font-semibold sm:text-base lg:text-lg">
              Choose Resume Template
            </h2>
            <TemplateSelector />
          </div>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
        
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-4">
            <div className="rounded-xl border border-[#3a3a3a] bg-[#2b2c2f] p-3 shadow-xl sm:p-4 md:p-5 lg:p-6">
              <ResumeForm onATSResult={setATSResult} />
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="lg:col-span-8">
            <div
              ref={previewRef}
              className="
                min-h-[500px]
                overflow-x-auto
                rounded-xl
                border
                border-[#3a3a3a]
                bg-[#f4f4f4]
                p-3
                shadow-2xl
                sm:min-h-[600px]
                sm:p-4
                md:min-h-[700px]
                md:p-5
                lg:min-h-[800px]
                lg:p-6
                xl:min-h-[900px]
                xl:p-8
              "
            >
              {atsResult ? (
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  
                  {/* Header with Back Button */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl">
                      ATS Report
                    </h2>
                    <button
                      onClick={() => setATSResult(null)}
                      className="
                        w-full
                        rounded-lg
                        bg-blue-600
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-blue-700
                        sm:w-auto
                        sm:px-5
                        sm:py-2.5
                        sm:text-base
                      "
                    >
                      Back to Resume
                    </button>
                  </div>

                  {/* ATS Components */}
                  <ATSScoreCard result={atsResult} />
                  <ATSBreakdown result={atsResult} />
                  <ATSSuggestions result={atsResult} />
                  
                </div>
              ) : (
                <ResumePreview />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE / TABLET DRAWER ================= */}
      {mobileDrawer && (
        <div className="fixed inset-0 z-50 bg-black/60 lg:hidden">
          
          {/* Overlay */}
          <div
            className="absolute inset-0"
            onClick={() => setMobileDrawer(false)}
          ></div>

          {/* Drawer */}
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-[#202123] p-4 shadow-2xl sm:p-6">
            
            {/* Header */}
            <div className="mb-4 flex items-center justify-between sm:mb-6">
              <h2 className="text-lg font-bold sm:text-xl">
                Resume Options
              </h2>
              <button
                onClick={() => setMobileDrawer(false)}
                className="rounded-lg bg-[#2b2c2f] px-3 py-2 text-sm hover:bg-[#3a3a3a] sm:px-4 sm:py-2.5"
              >
                ✕
              </button>
            </div>

            {/* Download Section */}
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 text-base font-semibold sm:text-lg">
                Download Resume
              </h3>
              <DownloadButton previewRef={previewRef} />
            </div>

            {/* Templates Section */}
            <div>
              <h3 className="mb-3 text-base font-semibold sm:text-lg">
                Choose Resume Template
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <TemplateSelector />
              </div>
            </div>

          </div>
        </div>
      )}
      
    </div>
  );
}