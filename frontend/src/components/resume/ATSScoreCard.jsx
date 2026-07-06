export default function ATSScoreCard({ result }) {
  if (!result) return null;

  const percentage = (result.score / result.max_score) * 100;

  let color = "text-red-600";

  if (percentage >= 80) color = "text-green-600";
  else if (percentage >= 60) color = "text-yellow-500";

  return (
    <div className="mt-6 rounded-2xl bg-white p-5 shadow-xl sm:mt-8 sm:p-8">

      {/* Heading */}
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl">
        ATS Resume Score
      </h2>

      {/* Score Circle */}
      <div className="flex justify-center">

        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-blue-600 sm:h-40 sm:w-40 sm:border-[12px] lg:h-44 lg:w-44">

          <div
            className={`text-3xl font-bold sm:text-4xl lg:text-5xl ${color}`}
          >
            {result.score}
          </div>

        </div>

      </div>

      {/* Max Score */}
      <p className="mt-5 text-center text-sm text-gray-500 sm:text-base">
        Out of <span className="font-semibold">{result.max_score}</span>
      </p>

      {/* Summary */}
      <div className="mt-6 rounded-xl bg-gray-100 p-4 sm:mt-8 sm:p-5">

        <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
          AI Summary
        </h3>

        <p className="text-sm leading-7 text-gray-700 sm:text-base">
          {result.summary}
        </p>

      </div>

    </div>
  );
}