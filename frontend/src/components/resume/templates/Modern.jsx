import useResume from "../../../hooks/useResume";

export default function Modern() {
  const { resume } = useResume();
  const {
    personal = {},
    skills = [],
    experience = [],
    education = [],
    projects = [],
    certifications = [],
    languages = [],
    achievements = [],
  } = resume;

  return (
    <div className="mx-auto flex min-h-[1123px] w-full max-w-[900px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:flex-row">
      
      {/* ================= LEFT SIDEBAR ================= */}
      <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 p-6 text-white sm:w-[35%] sm:p-8 md:w-[32%] lg:p-8">
        
        {/* ================= PHOTO ================= */}
        <div className="flex flex-col items-center">
          {personal.photo ? (
            <img
              src={personal.photo}
              alt="Profile"
              className="h-28 w-28 rounded-full border-4 border-cyan-400 object-cover shadow-xl sm:h-32 sm:w-32 md:h-36 md:w-36"
            />
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-cyan-400 bg-slate-700 text-5xl sm:h-32 sm:w-32 sm:text-6xl md:h-36 md:w-36">
              👤
            </div>
          )}
          <h1 className="mt-4 text-center text-2xl font-bold tracking-wide sm:text-3xl">
            {personal.fullName || "Your Name"}
          </h1>
          <p className="mt-2 rounded-full bg-cyan-500/20 px-3 py-1.5 text-xs text-cyan-200 sm:px-4 sm:py-2 sm:text-sm">
            Full Stack Developer
          </p>
        </div>

        {/* ================= SUMMARY ================= */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h2 className="mb-3 border-b border-cyan-400 pb-2 text-lg font-semibold sm:text-xl">
            Profile
          </h2>
          <p className="text-xs leading-6 text-gray-300 sm:text-sm sm:leading-7">
            {personal.summary || "Professional Summary"}
          </p>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h2 className="mb-3 border-b border-cyan-400 pb-2 text-lg font-semibold sm:text-xl">
            Contact
          </h2>
          <div className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
            {personal.email && <p className="break-all">📧 {personal.email}</p>}
            {personal.phone && <p>📱 {personal.phone}</p>}
            {personal.location && <p>📍 {personal.location}</p>}
            {personal.linkedin && (
              <p className="break-all">🔗 {personal.linkedin}</p>
            )}
            {personal.github && (
              <p className="break-all">💻 {personal.github}</p>
            )}
            {personal.portfolio && (
              <p className="break-all">🌐 {personal.portfolio}</p>
            )}
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        {skills.length > 0 && (
          <div className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 border-b border-cyan-400 pb-2 text-lg font-semibold sm:text-xl">
              Skills
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="mb-1 flex justify-between">
                    <span className="text-xs sm:text-sm">
                      {typeof skill === "string" ? skill : skill.name || skill.title}
                    </span>
                    <span className="text-xs text-cyan-300">Expert</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-600 sm:h-2">
                    <div
                      className="h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 sm:h-2"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= LANGUAGES ================= */}
        {languages.length > 0 && (
          <div className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 border-b border-cyan-400 pb-2 text-lg font-semibold sm:text-xl">
              Languages
            </h2>
            <div className="space-y-2 sm:space-y-3">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>{typeof lang === "string" ? lang : lang.name}</span>
                    <span className="text-xs text-cyan-300">Fluent</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-slate-600 sm:h-2">
                    <div
                      className="h-1.5 rounded-full bg-cyan-400 sm:h-2"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= CERTIFICATIONS ================= */}
        {certifications.length > 0 && (
          <div className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 border-b border-cyan-400 pb-2 text-lg font-semibold sm:text-xl">
              Certifications
            </h2>
            <div className="space-y-2 sm:space-y-3">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-slate-700 p-2 text-xs sm:p-3 sm:text-sm"
                >
                  🏅 {typeof item === "string" ? item : item.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= ACHIEVEMENTS ================= */}
        {achievements.length > 0 && (
          <div className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 border-b border-cyan-400 pb-2 text-lg font-semibold sm:text-xl">
              Achievements
            </h2>
            <div className="space-y-2 sm:space-y-3">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-slate-700 p-2 text-xs sm:p-3 sm:text-sm"
                >
                  ⭐ {typeof item === "string" ? item : item.title || item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="w-full p-6 sm:w-[65%] sm:p-8 md:w-[68%] lg:p-10">
        
        {/* ================= EXPERIENCE ================= */}
        {experience.length > 0 && (
          <section>
            <h2 className="mb-4 border-b-2 border-cyan-600 pb-2 text-2xl font-bold sm:mb-6 sm:text-3xl">
              Experience
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative border-l-4 border-cyan-500 pl-6 sm:pl-8"
                >
                  <div className="absolute -left-[10px] top-2 h-4 w-4 rounded-full bg-cyan-500 sm:h-5 sm:w-5"></div>
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-bold sm:text-xl">
                      {exp.role || "Job Role"}
                    </h3>
                    <span className="rounded-full bg-cyan-100 px-2 py-0.5 text-xs text-cyan-700 sm:px-3 sm:py-1 sm:text-sm">
                      {exp.startDate}
                      {exp.endDate && ` - ${exp.endDate}`}
                    </span>
                  </div>
                  <p className="mt-1 text-base font-semibold text-blue-600 sm:text-lg">
                    {exp.company}
                  </p>
                  {Array.isArray(exp.description) ? (
                    <ul className="mt-3 list-disc space-y-1 pl-4 text-sm sm:mt-4 sm:space-y-2 sm:pl-6 sm:text-base">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm leading-6 sm:mt-4 sm:leading-7">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= EDUCATION ================= */}
        {education.length > 0 && (
          <section className="mt-8 sm:mt-10 md:mt-14">
            <h2 className="mb-4 border-b-2 border-cyan-600 pb-2 text-2xl font-bold sm:mb-6 sm:text-3xl">
              Education
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow sm:p-6"
                >
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-bold sm:text-lg">
                      {edu.degree}
                    </h3>
                    <span className="rounded-full bg-cyan-100 px-2 py-0.5 text-xs text-cyan-700 sm:px-3 sm:py-1 sm:text-sm">
                      {edu.year}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold text-blue-600">
                    {edu.college}
                  </p>
                  {edu.cgpa && (
                    <p className="mt-2 text-sm sm:text-base">
                      CGPA : {edu.cgpa}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= PROJECTS ================= */}
        {projects.length > 0 && (
          <section className="mt-8 sm:mt-10 md:mt-14">
            <h2 className="mb-4 border-b-2 border-cyan-600 pb-2 text-2xl font-bold sm:mb-6 sm:text-3xl">
              Projects
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg sm:p-6"
                >
                  <h3 className="text-lg font-bold sm:text-xl">
                    {project.title}
                  </h3>
                  {project.technologies && (
                    <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                      {String(project.technologies)
                        .split(",")
                        .map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-cyan-100 px-2 py-0.5 text-xs font-semibold text-cyan-700 sm:px-3 sm:py-1 sm:text-sm"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                    </div>
                  )}
                  <p className="mt-3 text-sm leading-6 sm:mt-4 sm:leading-7">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 sm:mt-5 sm:gap-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-blue-600 hover:underline sm:text-base"
                      >
                        💻 GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-green-600 hover:underline sm:text-base"
                      >
                        🌐 Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}