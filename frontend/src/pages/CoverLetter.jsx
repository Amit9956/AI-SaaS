import { useState } from "react";

import CoverLetterForm from "../components/coverletter/CoverLetterForm";
import CoverLetterPreview from "../components/coverletter/CoverLetterPreview";

export default function CoverLetter() {
  const [coverLetter, setCoverLetter] = useState("");

  return (
    <div className="min-h-screen bg-[#202123] px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-5
          lg:grid-cols-12
          lg:gap-6
        "
      >
        {/* Form */}
        <div className="lg:col-span-5">
          <CoverLetterForm
            setCoverLetter={setCoverLetter}
          />
        </div>

        {/* Preview */}
        <div className="lg:col-span-7">
          <CoverLetterPreview
            coverLetter={coverLetter}
          />
        </div>
      </div>
    </div>
  );
}