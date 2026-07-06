import useResume from "../../../hooks/useResume";

export default function Developer() {
  const { resume } = useResume();
  const { personal } = resume;

  return (
    <div className="mx-auto min-h-[1123px] w-full max-w-[950px] overflow-hidden rounded-xl bg-[#0d1117] text-gray-200 shadow-2xl">
      
      {/* ===========================
          HEADER
      ============================ */}
      <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 lg:px-10 lg:py-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="w-full sm:w-auto">
            <h1 className="text-2xl font-bold text-green-400 sm:text-3xl md:text-4xl">
              {personal.fullName || "Developer Name"}
            </h1>
            <p className="mt-1 text-sm text-gray-400 sm:mt-2 sm:text-base md:text-lg">
              Full Stack Developer
            </p>
          </div>
          <div className="rounded-lg border border-green-500 px-3 py-1.5 text-sm text-green-400 sm:px-4 sm:py-2 sm:text-base">
            &lt;/&gt;
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-12">
        
        {/* ===========================
            LEFT SIDEBAR
        ============================ */}
        <div className="w-full border-b border-[#30363d] bg-[#161b22] p-4 sm:p-6 md:p-8 lg:col-span-4 lg:border-b-0 lg:border-r">
          
          {/* Contact */}
          <h2 className="mb-3 text-base font-bold text-green-400 sm:mb-4 sm:text-lg md:text-xl">
            CONTACT
          </h2>
          <div className="space-y-2 text-xs sm:space-y-2.5 sm:text-sm">
            {personal.email && <p className="break-all">📧 {personal.email}</p>}
            {personal.phone && <p>📱 {personal.phone}</p>}
            {personal.location && <p>📍 {personal.location}</p>}
            {personal.github && <p className="break-all">💻 {personal.github}</p>}
            {personal.linkedin && <p className="break-all">🔗 {personal.linkedin}</p>}
            {personal.portfolio && <p className="break-all">🌐 {personal.portfolio}</p>}
          </div>

          {/* Skills */}
          <div className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 text-base font-bold text-green-400 sm:mb-4 sm:text-lg md:mb-5 md:text-xl">
              TECH STACK
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {resume.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-md border border-green-500 bg-[#0d1117] px-2 py-1 text-xs text-green-300 sm:px-3 sm:py-1.5 sm:text-sm"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          {resume.languages?.length > 0 && (
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="mb-3 text-base font-bold text-green-400 sm:mb-4 sm:text-lg md:mb-5 md:text-xl">
                LANGUAGES
              </h2>
              {resume.languages.map((lang, index) => (
                <div
                  key={index}
                  className="mb-2 rounded border border-[#30363d] bg-[#0d1117] px-2 py-1.5 text-xs sm:mb-3 sm:px-3 sm:py-2 sm:text-sm"
                >
                  🌍 {lang}
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {resume.certifications?.length > 0 && (
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="mb-3 text-base font-bold text-green-400 sm:mb-4 sm:text-lg md:mb-5 md:text-xl">
                CERTIFICATIONS
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {resume.certifications.map((item, index) => (
                  <li
                    key={index}
                    className="rounded border border-[#30363d] bg-[#0d1117] p-2 text-xs sm:p-3 sm:text-sm"
                  >
                    ✔ {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ===========================
            RIGHT SIDE
        ============================ */}
        <div className="w-full p-4 sm:p-6 md:p-8 lg:col-span-8 lg:p-10">
          
          {/* ABOUT */}
          <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-4 sm:p-5 md:p-6">
            <h2 className="mb-3 text-lg font-bold text-green-400 sm:mb-4 sm:text-xl md:text-2xl">
              ABOUT
            </h2>
            <p className="text-sm leading-6 text-gray-300 sm:text-base sm:leading-7 md:leading-8">
              {personal.summary || "Professional summary will appear here."}
            </p>
          </div>

          {/* ===========================
              EXPERIENCE
          ============================ */}
          {resume.experience?.length > 0 && (
            <div className="mt-6 sm:mt-7 md:mt-8">
              <h2 className="mb-4 text-lg font-bold text-green-400 sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                EXPERIENCE
              </h2>
              {resume.experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-5 rounded-lg border border-[#30363d] bg-[#161b22] p-4 sm:mb-6 sm:p-5 md:mb-8 md:p-6"
                >
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                    <h3 className="text-base font-bold text-white sm:text-lg md:text-xl">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-gray-400 sm:text-sm">
                      {exp.startDate}
                      {exp.endDate && ` - ${exp.endDate}`}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-green-400 sm:text-base">
                    {exp.company}
                  </p>
                  {Array.isArray(exp.description) ? (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300 sm:mt-4 sm:space-y-2 sm:pl-6 sm:text-base">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 whitespace-pre-line text-sm text-gray-300 sm:mt-4 sm:text-base">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ===========================
              PROJECTS
          ============================ */}
          {resume.projects?.length > 0 && (
            <div className="mt-6 sm:mt-7 md:mt-10">
              <h2 className="mb-4 text-lg font-bold text-green-400 sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                PROJECTS
              </h2>
              {resume.projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-5 rounded-lg border border-[#30363d] bg-[#161b22] p-4 sm:mb-6 sm:p-5 md:mb-8 md:p-6"
                >
                  <h3 className="text-base font-bold text-white sm:text-lg md:text-xl">
                    {project.title}
                  </h3>
                  {project.technologies && (
                    <p className="mt-1 text-sm text-green-400 sm:mt-2 sm:text-base">
                      {project.technologies}
                    </p>
                  )}
                  {project.description && (
                    <p className="mt-3 text-sm leading-6 text-gray-300 sm:mt-4 sm:text-base sm:leading-7">
                      {project.description}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-3 sm:mt-4 sm:gap-4 md:gap-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-green-400 hover:underline sm:text-base"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-blue-400 hover:underline sm:text-base"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ===========================
              EDUCATION
          ============================ */}
          {resume.education?.length > 0 && (
            <div className="mt-6 sm:mt-7 md:mt-10">
              <h2 className="mb-4 text-lg font-bold text-green-400 sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                EDUCATION
              </h2>
              {resume.education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-lg border border-[#30363d] bg-[#161b22] p-4 sm:mb-5 sm:p-5 md:mb-6 md:p-6"
                >
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                    <h3 className="text-sm font-bold text-white sm:text-base">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-gray-400 sm:text-sm">
                      {edu.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-green-400 sm:mt-2 sm:text-base">
                    {edu.college}
                  </p>
                  {edu.cgpa && (
                    <p className="mt-2 text-sm text-gray-300 sm:text-base">
                      CGPA : {edu.cgpa}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ===========================
              ACHIEVEMENTS
          ============================ */}
          {resume.achievements?.length > 0 && (
            <div className="mt-6 sm:mt-7 md:mt-10">
              <h2 className="mb-4 text-lg font-bold text-green-400 sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                ACHIEVEMENTS
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {resume.achievements.map((item, index) => (
                  <li
                    key={index}
                    className="rounded-lg border border-[#30363d] bg-[#161b22] p-3 text-sm text-gray-300 sm:p-4 sm:text-base"
                  >
                    🏆 {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}