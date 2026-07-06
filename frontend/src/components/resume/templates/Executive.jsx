import useResume from "../../../hooks/useResume";

export default function Executive() {
  const { resume } = useResume();
  const { personal } = resume;

  return (
    <div className="mx-auto min-h-[1123px] w-full max-w-[900px] overflow-hidden rounded-xl bg-white shadow-2xl">
      
      {/* ================= HEADER ================= */}
      <div className="bg-[#1f2937] p-6 text-white sm:p-8 md:p-10">
        <h1 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
          {personal.fullName || "Your Name"}
        </h1>
        <p className="mt-2 text-base text-yellow-400 sm:mt-3 sm:text-lg">
          Executive Resume
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs sm:mt-6 sm:gap-4 sm:text-sm md:gap-6">
          {personal.email && <span>📧 {personal.email}</span>}
          {personal.phone && <span>📱 {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        
        {/* ================= SUMMARY ================= */}
        {personal.summary && (
          <section>
            <h2 className="mb-3 border-l-4 border-yellow-500 pl-3 text-xl font-bold sm:mb-4 sm:text-2xl">
              Executive Summary
            </h2>
            <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 md:leading-8">
              {personal.summary}
            </p>
          </section>
        )}

        {/* ================= SKILLS ================= */}
        {resume.skills?.length > 0 && (
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 border-l-4 border-yellow-500 pl-3 text-xl font-bold sm:mb-4 sm:text-2xl">
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {resume.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full border border-yellow-500 px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ================= EXPERIENCE ================= */}
        {resume.experience?.length > 0 && (
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-4 border-l-4 border-yellow-500 pl-3 text-xl font-bold sm:mb-5 sm:text-2xl">
              Professional Experience
            </h2>
            {resume.experience.map((exp, index) => (
              <div
                key={index}
                className="mb-6 border-b pb-4 sm:mb-8 sm:pb-5"
              >
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                  <h3 className="text-lg font-bold sm:text-xl">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-gray-500 sm:text-sm">
                    {exp.startDate}
                    {exp.endDate && ` - ${exp.endDate}`}
                  </span>
                </div>
                <p className="text-sm font-semibold text-yellow-700 sm:text-base">
                  {exp.company}
                </p>
                {Array.isArray(exp.description) ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm sm:mt-3 sm:space-y-2 sm:pl-6 sm:text-base">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm sm:mt-3 sm:text-base">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* ================= EDUCATION ================= */}
        {resume.education?.length > 0 && (
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-4 border-l-4 border-yellow-500 pl-3 text-xl font-bold sm:mb-5 sm:text-2xl">
              Education
            </h2>
            {resume.education.map((edu, index) => (
              <div key={index} className="mb-4 sm:mb-5">
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                  <h3 className="text-sm font-bold sm:text-base">
                    {edu.degree}
                  </h3>
                  <span className="text-xs text-gray-600 sm:text-sm">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm text-gray-700 sm:text-base">
                  {edu.college}
                </p>
                {edu.cgpa && (
                  <p className="text-sm sm:text-base">
                    CGPA : {edu.cgpa}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* ================= PROJECTS ================= */}
        {resume.projects?.length > 0 && (
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-4 border-l-4 border-yellow-500 pl-3 text-xl font-bold sm:mb-5 sm:text-2xl">
              Key Projects
            </h2>
            {resume.projects.map((project, index) => (
              <div
                key={index}
                className="mb-4 rounded-lg border border-yellow-300 p-4 sm:mb-6 sm:p-5"
              >
                <h3 className="text-sm font-bold sm:text-base">
                  {project.title}
                </h3>
                <p className="text-sm text-yellow-700 sm:text-base">
                  {project.technologies}
                </p>
                <p className="mt-2 text-sm sm:mt-2 sm:text-base">
                  {project.description}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* ================= CERTIFICATIONS ================= */}
        {resume.certifications?.length > 0 && (
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-4 border-l-4 border-yellow-500 pl-3 text-xl font-bold sm:mb-5 sm:text-2xl">
              Certifications
            </h2>
            <ul className="list-disc pl-5 text-sm sm:pl-6 sm:text-base">
              {resume.certifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* ================= ACHIEVEMENTS ================= */}
        {resume.achievements?.length > 0 && (
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-4 border-l-4 border-yellow-500 pl-3 text-xl font-bold sm:mb-5 sm:text-2xl">
              Achievements
            </h2>
            <ul className="list-disc pl-5 text-sm sm:pl-6 sm:text-base">
              {resume.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}
        
      </div>
    </div>
  );
}