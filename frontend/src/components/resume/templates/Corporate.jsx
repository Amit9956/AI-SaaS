import useResume from "../../../hooks/useResume";

export default function Corporate() {
  const { resume } = useResume();
  const { personal } = resume;

  return (
    <div className="mx-auto min-h-[1123px] w-full max-w-[900px] bg-white shadow-2xl">
      
      {/* ================= HEADER ================= */}
      <div className="bg-slate-900 p-6 text-white sm:p-8 md:p-10">
        <h1 className="text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
          {personal.fullName || "Your Name"}
        </h1>
        <p className="mt-2 text-sm text-slate-300 sm:mt-3 sm:text-base md:text-lg">
          {personal.summary || "Professional Corporate Resume"}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs sm:mt-5 sm:gap-4 sm:text-sm md:mt-6 md:gap-6">
          {personal.email && <span>📧 {personal.email}</span>}
          {personal.phone && <span>📱 {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3">
        
        {/* ================= LEFT ================= */}
        <div className="w-full bg-slate-100 p-4 sm:p-6 md:p-8 lg:col-span-1">
          
          {/* Skills */}
          <h2 className="mb-3 border-b-2 border-slate-600 pb-2 text-base font-bold sm:mb-4 sm:text-lg md:mb-5 md:text-xl">
            Skills
          </h2>
          <div className="space-y-1.5 sm:space-y-2">
            {resume.skills?.map((skill, index) => (
              <div
                key={index}
                className="rounded bg-slate-800 px-2 py-1.5 text-xs text-white sm:px-3 sm:py-2 sm:text-sm"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Languages */}
          {resume.languages?.length > 0 && (
            <>
              <h2 className="mt-6 border-b-2 border-slate-600 pb-2 text-base font-bold sm:mt-8 sm:text-lg md:mt-10 md:text-xl">
                Languages
              </h2>
              {resume.languages.map((lang, index) => (
                <p key={index} className="mb-1.5 text-sm sm:mb-2">
                  • {lang}
                </p>
              ))}
            </>
          )}

          {/* Certifications */}
          {resume.certifications?.length > 0 && (
            <>
              <h2 className="mt-6 border-b-2 border-slate-600 pb-2 text-base font-bold sm:mt-8 sm:text-lg md:mt-10 md:text-xl">
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
            <section>
              <h2 className="mb-4 border-b-2 border-slate-800 pb-2 text-lg font-bold sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                Professional Experience
              </h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="mb-6 sm:mb-7 md:mb-8">
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                    <h3 className="text-base font-bold sm:text-lg md:text-xl">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-gray-500 sm:text-sm">
                      {exp.startDate}
                      {exp.endDate && ` - ${exp.endDate}`}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-700 sm:mt-2 sm:text-base">
                    {exp.company}
                  </p>
                  {Array.isArray(exp.description) ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm sm:mt-3 sm:space-y-2 sm:pl-5 sm:text-base">
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

          {/* Education */}
          {resume.education?.length > 0 && (
            <section className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="mb-4 border-b-2 border-slate-800 pb-2 text-lg font-bold sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
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
                  <p className="text-sm text-slate-700 sm:text-base">
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

          {/* Projects */}
          {resume.projects?.length > 0 && (
            <section className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="mb-4 border-b-2 border-slate-800 pb-2 text-lg font-bold sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                Projects
              </h2>
              {resume.projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-lg border p-4 sm:mb-5 sm:p-5"
                >
                  <h3 className="text-sm font-bold sm:text-base">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 sm:text-base">
                    {project.technologies}
                  </p>
                  <p className="mt-2 text-sm sm:mt-3 sm:text-base">
                    {project.description}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Achievements */}
          {resume.achievements?.length > 0 && (
            <section className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="mb-4 border-b-2 border-slate-800 pb-2 text-lg font-bold sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                Achievements
              </h2>
              <ul className="list-disc space-y-1 pl-5 text-sm sm:space-y-2 sm:text-base">
                {resume.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          
        </div>
      </div>
    </div>
  );
}