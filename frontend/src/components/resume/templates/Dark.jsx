import useResume from "../../../hooks/useResume";

export default function Dark() {
  const { resume } = useResume();
  const { personal } = resume;

  return (
    <div className="mx-auto min-h-[1123px] w-full max-w-[900px] overflow-hidden rounded-xl bg-[#0f172a] text-white shadow-2xl">
      
      {/* ================= HEADER ================= */}
      <div className="border-b border-slate-700 bg-gradient-to-r from-slate-900 via-slate-800 to-black p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          {personal.fullName || "Your Name"}
        </h1>
        <p className="mt-2 text-sm text-slate-300 sm:mt-3 sm:text-base md:text-lg">
          {personal.summary || "Professional Resume"}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300 sm:mt-5 sm:gap-4 sm:text-sm md:mt-6 md:gap-6">
          {personal.email && <span>📧 {personal.email}</span>}
          {personal.phone && <span>📱 {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3">
        
        {/* ================= LEFT ================= */}
        <div className="w-full bg-slate-900 p-4 sm:p-6 md:p-8 lg:col-span-1">
          
          <h2 className="mb-3 text-base font-bold text-cyan-400 sm:mb-4 sm:text-lg md:mb-5 md:text-xl">
            CONTACT
          </h2>
          <div className="space-y-2 text-xs sm:space-y-2.5 sm:text-sm">
            {personal.linkedin && <p className="break-all">🔗 {personal.linkedin}</p>}
            {personal.github && <p className="break-all">💻 {personal.github}</p>}
            {personal.portfolio && <p className="break-all">🌐 {personal.portfolio}</p>}
          </div>

          {/* Skills */}
          {resume.skills?.length > 0 && (
            <>
              <h2 className="mt-6 text-base font-bold text-cyan-400 sm:mt-8 sm:text-lg md:mt-10 md:text-xl">
                SKILLS
              </h2>
              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                {resume.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded bg-cyan-600 px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Languages */}
          {resume.languages?.length > 0 && (
            <>
              <h2 className="mt-6 text-base font-bold text-cyan-400 sm:mt-8 sm:text-lg md:mt-10 md:text-xl">
                LANGUAGES
              </h2>
              {resume.languages.map((lang, index) => (
                <div
                  key={index}
                  className="mb-2 rounded border border-slate-700 p-2 text-xs sm:mb-3 sm:p-3 sm:text-sm"
                >
                  🌍 {lang}
                </div>
              ))}
            </>
          )}

          {/* Certifications */}
          {resume.certifications?.length > 0 && (
            <>
              <h2 className="mt-6 text-base font-bold text-cyan-400 sm:mt-8 sm:text-lg md:mt-10 md:text-xl">
                CERTIFICATIONS
              </h2>
              <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                {resume.certifications.map((item, index) => (
                  <li
                    key={index}
                    className="rounded border border-slate-700 p-2 text-xs sm:p-3 sm:text-sm"
                  >
                    ✔ {item}
                  </li>
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
              <h2 className="mb-4 text-lg font-bold text-cyan-400 sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                EXPERIENCE
              </h2>
              {resume.experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-5 rounded-lg border border-slate-700 bg-slate-800 p-4 sm:mb-6 sm:p-5 md:mb-8 md:p-6"
                >
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                    <h3 className="text-base font-bold sm:text-lg md:text-xl">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-slate-400 sm:text-sm">
                      {exp.startDate}
                      {exp.endDate && ` - ${exp.endDate}`}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-cyan-300 sm:mt-2 sm:text-base">
                    {exp.company}
                  </p>
                  {Array.isArray(exp.description) ? (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300 sm:mt-4 sm:space-y-2 sm:pl-6 sm:text-base">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 whitespace-pre-line text-sm text-slate-300 sm:mt-4 sm:text-base">
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
              <h2 className="mb-4 mt-6 text-lg font-bold text-cyan-400 sm:mb-5 sm:mt-8 sm:text-xl md:mb-6 md:mt-10 md:text-2xl">
                PROJECTS
              </h2>
              {resume.projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-lg border border-slate-700 bg-slate-800 p-4 sm:mb-5 sm:p-5 md:mb-6 md:p-6"
                >
                  <h3 className="text-base font-bold sm:text-lg md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-300 sm:mt-2 sm:text-base">
                    {project.technologies}
                  </p>
                  <p className="mt-3 text-sm sm:mt-4 sm:text-base">
                    {project.description}
                  </p>
                </div>
              ))}
            </>
          )}

          {/* Education */}
          {resume.education?.length > 0 && (
            <>
              <h2 className="mb-4 mt-6 text-lg font-bold text-cyan-400 sm:mb-5 sm:mt-8 sm:text-xl md:mb-6 md:mt-10 md:text-2xl">
                EDUCATION
              </h2>
              {resume.education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-lg border border-slate-700 bg-slate-800 p-4 sm:mb-5 sm:p-5 md:mb-6 md:p-6"
                >
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                    <h3 className="text-sm font-bold sm:text-base">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-slate-400 sm:text-sm">
                      {edu.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-cyan-300 sm:mt-2 sm:text-base">
                    {edu.college}
                  </p>
                  {edu.cgpa && (
                    <p className="mt-2 text-sm sm:text-base">
                      CGPA : {edu.cgpa}
                    </p>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Achievements */}
          {resume.achievements?.length > 0 && (
            <>
              <h2 className="mb-4 mt-6 text-lg font-bold text-cyan-400 sm:mb-5 sm:mt-8 sm:text-xl md:mb-6 md:mt-10 md:text-2xl">
                ACHIEVEMENTS
              </h2>
              <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                {resume.achievements.map((item, index) => (
                  <li
                    key={index}
                    className="rounded border border-slate-700 bg-slate-800 p-3 text-sm sm:p-4 sm:text-base"
                  >
                    🏆 {item}
                  </li>
                ))}
              </ul>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}