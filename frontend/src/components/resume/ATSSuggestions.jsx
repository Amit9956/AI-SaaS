export default function ATSSuggestions({ result }) {
  if (!result) return null;

  return (
    <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">

      {/* ================= Strengths ================= */}
      <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">

        <h2 className="mb-4 text-xl font-bold text-green-600 sm:mb-5 sm:text-2xl">
          ✅ Strengths
        </h2>

        {result.strengths?.length > 0 ? (
          <ul className="space-y-3">

            {result.strengths.map((item, index) => (
              <li
                key={index}
                className="rounded-lg bg-green-50 p-3 text-sm text-gray-700 sm:text-base"
              >
                ✔ {item}
              </li>
            ))}

          </ul>
        ) : (
          <p className="text-sm text-gray-500 sm:text-base">
            No strengths detected.
          </p>
        )}

      </div>

      {/* ================= Missing Keywords ================= */}
      <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">

        <h2 className="mb-4 text-xl font-bold text-red-600 sm:mb-5 sm:text-2xl">
          ❌ Missing Keywords
        </h2>

        {result.missing_keywords?.length > 0 ? (
          <div className="flex flex-wrap gap-2 sm:gap-3">

            {result.missing_keywords.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-red-100 px-3 py-2 text-xs font-medium text-red-700 sm:px-4 sm:text-sm"
              >
                {item}
              </span>
            ))}

          </div>
        ) : (
          <p className="text-sm text-gray-500 sm:text-base">
            No missing keywords.
          </p>
        )}

      </div>

      {/* ================= AI Suggestions ================= */}
      <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">

        <h2 className="mb-4 text-xl font-bold text-blue-600 sm:mb-5 sm:text-2xl">
          💡 AI Suggestions
        </h2>

        {result.suggestions?.length > 0 ? (
          <ul className="space-y-3">

            {result.suggestions.map((item, index) => (
              <li
                key={index}
                className="rounded-lg bg-blue-50 p-3 text-sm text-gray-700 sm:text-base"
              >
                👉 {item}
              </li>
            ))}

          </ul>
        ) : (
          <p className="text-sm text-gray-500 sm:text-base">
            No suggestions available.
          </p>
        )}

      </div>

    </div>
  );
}