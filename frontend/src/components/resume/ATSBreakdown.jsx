export default function ATSBreakdown({ result }) {
  if (!result || !result.breakdown) return null;

  const cards = [
    {
      title: "Personal",
      score: result.breakdown.personal,
      color: "bg-blue-500",
    },
    {
      title: "Skills",
      score: result.breakdown.skills,
      color: "bg-green-500",
    },
    {
      title: "Experience",
      score: result.breakdown.experience,
      color: "bg-yellow-500",
    },
    {
      title: "Education",
      score: result.breakdown.education,
      color: "bg-purple-500",
    },
    {
      title: "Projects",
      score: result.breakdown.projects,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">

      {cards.map((card) => (
        <div
          key={card.title}
          className="
            rounded-2xl
            bg-white
            p-5
            text-center
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            sm:p-6
          "
        >
          {/* Score Circle */}
          <div
            className={`
              mx-auto
              mb-4
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              text-lg
              font-bold
              text-white
              sm:h-14
              sm:w-14
              sm:text-xl
              ${card.color}
            `}
          >
            {card.score}
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
            {card.title}
          </h3>
        </div>
      ))}

    </div>
  );
}