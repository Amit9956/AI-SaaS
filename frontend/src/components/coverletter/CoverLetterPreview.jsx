import CopyButton from "./CopyButton";
import DownloadButtons from "./DownloadButtons";

export default function CoverLetterPreview({
  coverLetter,
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-2xl sm:p-6 md:p-8 lg:p-10">
      
      {/* =========================
          HEADER
      ========================= */}
      <div className="mb-4 flex flex-col items-start gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-0 md:mb-6">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Cover Letter
        </h2>
        <div className="w-full sm:w-auto">
          <CopyButton text={coverLetter} />
        </div>
      </div>

      <hr className="mb-6 sm:mb-7 md:mb-8" />

      {/* =========================
          COVER LETTER
      ========================= */}
      {coverLetter ? (
        <div className="whitespace-pre-wrap text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 md:leading-8">
          {coverLetter}
        </div>
      ) : (
        <div className="flex min-h-[300px] items-center justify-center sm:min-h-[400px] md:min-h-[500px]">
          <div className="px-4 text-center sm:px-6">
            <div className="mb-4 text-5xl sm:mb-5 sm:text-6xl md:mb-6 md:text-7xl">
              📄
            </div>
            <h3 className="text-xl font-bold text-gray-700 sm:text-2xl">
              No Cover Letter Generated
            </h3>
            <p className="mt-2 text-sm text-gray-500 sm:mt-3 sm:text-base">
              Fill the details and click
              <span className="font-semibold text-blue-600">
                {" "}Generate Cover Letter
              </span>
              {" "}to create an AI-powered cover letter.
            </p>
          </div>
        </div>
      )}

      {/* =========================
          DOWNLOAD BUTTONS
      ========================= */}
      {coverLetter && (
        <div className="mt-6 border-t pt-4 sm:mt-8 sm:pt-5 md:mt-10 md:pt-6">
          <DownloadButtons coverLetter={coverLetter} />
        </div>
      )}
    </div>
  );
}