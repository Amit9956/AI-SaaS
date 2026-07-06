import useResume from "../../../hooks/useResume";

export default function Creative() {
  const { resume } = useResume();
  const { personal } = resume;

  return (
    <div className="mx-auto w-full max-w-[900px] overflow-hidden rounded-2xl bg-white shadow-2xl">
      
      {/* ================= HEADER ================= */}
      <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 p-6 text-white sm:p-8 md:p-10">
        <h1 className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
          {personal.fullName || "Your Name"}
        </h1>
        <p className="mt-2 text-sm opacity-90 sm:mt-3 sm:text-base md:text-lg">
          {personal.summary || "Creative Professional"}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs sm:mt-5 sm:gap-4 sm:text-sm md:mt-6 md:gap-6">
          {personal.email && <span>📧 {personal.email}</span>}
          {personal.phone && <span>📱 {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3">
        
        {/* ================= LEFT ================= */}
        <div className="w-full bg-gray-100 p-4 sm:p-6 md:p-8 lg:col-span-1">
          
          <h2 className="mb-3 text-base font-bold text-purple-700 sm:mb-4 sm:text-lg md:text-xl">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {resume.skills?.map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-purple-600 px-2 py-1 text-xs text-white sm:px-3 sm:py-1 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {resume.languages?.length > 0 && (
            <>
              <h2 className="mt-6 text-base font-bold text-purple-700 sm:mt-8 sm:text-lg md:mt-10 md:text-xl">
                Languages
              </h2>
              {resume.languages.map((lang, index) => (
                <p key={index} className="mb-1.5 text-sm sm:mb-2">
                  🌍 {lang}
                </p>
              ))}
            </>
          )}

          {resume.certifications?.length > 0 && (
            <>
              <h2 className="mt-6 text-base font-bold text-purple-700 sm:mt-8 sm:text-lg md:mt-10 md:text-xl">
                Certifications
              </h2>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                {resume.certifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* ================= RIGHT ================= */}
        <div className="w-full p-4 sm:p-6 md:p-8 lg:col-span-2">
          
          {/* Experience */}
          {resume.experience?.length > 0 && (
            <>
              <h2 className="mb-4 text-lg font-bold text-purple-700 sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                Experience
              </h2>
              {resume.experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-5 rounded-xl border-l-4 border-purple-600 bg-purple-50 p-4 sm:mb-6 sm:p-5 md:mb-8"
                >
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                    <h3 className="text-base font-bold sm:text-lg md:text-xl">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-gray-600 sm:text-sm">
                      {exp.startDate}
                      {exp.endDate && ` - ${exp.endDate}`}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-purple-700 sm:mt-2 sm:text-base">
                    {exp.company}
                  </p>
                  {Array.isArray(exp.description) ? (
                    <ul className="mt-2 list-disc pl-5 text-sm sm:mt-3 sm:text-base">
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
            </>
          )}

          {/* Projects */}
          {resume.projects?.length > 0 && (
            <>
              <h2 className="mb-4 mt-6 text-lg font-bold text-purple-700 sm:mb-5 sm:mt-8 sm:text-xl md:mb-6 md:mt-10 md:text-2xl">
                Projects
              </h2>
              {resume.projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-xl border bg-white p-4 shadow sm:mb-5 sm:p-5 md:mb-6"
                >
                  <h3 className="text-base font-bold sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-purple-600 sm:mt-2 sm:text-base">
                    {project.technologies}
                  </p>
                  <p className="mt-2 text-sm sm:mt-3 sm:text-base">
                    {project.description}
                  </p>
                </div>
              ))}
            </>
          )}

          {/* Education */}
          {resume.education?.length > 0 && (
            <>
              <h2 className="mb-4 mt-6 text-lg font-bold text-purple-700 sm:mb-5 sm:mt-8 sm:text-xl md:mb-6 md:mt-10 md:text-2xl">
                Education
              </h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-4 sm:mb-5">
                  <h3 className="text-sm font-bold sm:text-base">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base">
                    {edu.college}
                  </p>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    {edu.year}
                  </p>
                </div>
              ))}
            </>
          )}

          {/* Achievements */}
          {resume.achievements?.length > 0 && (
            <>
              <h2 className="mb-4 mt-6 text-lg font-bold text-purple-700 sm:mb-5 sm:mt-8 sm:text-xl md:mb-6 md:mt-10 md:text-2xl">
                Achievements
              </h2>
              <ul className="list-disc pl-5 text-sm sm:pl-6 sm:text-base">
                {resume.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}