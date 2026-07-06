import useResume from "../../../hooks/useResume";

export default function Professional() {
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
    <div className="mx-auto min-h-[1123px] w-full max-w-[794px] bg-white text-gray-800 shadow-2xl">
      
      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-4 py-6 text-white sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 md:gap-8 lg:gap-10">
          
          {/* LEFT */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-extrabold uppercase tracking-wider sm:text-3xl md:text-4xl">
              {personal.fullName || "Your Name"}
            </h1>
            <p className="mt-2 text-sm opacity-90 sm:mt-3 sm:text-base md:text-lg">
              Full Stack Developer
            </p>
            <div className="mt-4 grid grid-cols-1 gap-1.5 text-xs sm:mt-5 sm:grid-cols-2 sm:gap-2 sm:text-sm md:mt-6 md:gap-3">
              {personal.email && <div className="break-all">📧 {personal.email}</div>}
              {personal.phone && <div>📱 {personal.phone}</div>}
              {personal.location && <div>📍 {personal.location}</div>}
              {personal.linkedin && <div className="truncate">🔗 {personal.linkedin}</div>}
              {personal.github && <div className="truncate">💻 {personal.github}</div>}
              {personal.portfolio && <div className="truncate">🌐 {personal.portfolio}</div>}
            </div>
          </div>

          {/* RIGHT - Photo */}
          <div className="flex-shrink-0">
            {personal.photo ? (
              <img
                src={personal.photo}
                alt="Profile"
                className="h-24 w-24 rounded-full border-4 border-white object-cover sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-800 text-3xl sm:h-28 sm:w-28 sm:text-4xl md:h-32 md:w-32 md:text-5xl lg:h-36 lg:w-36">
                👤
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* BODY */}
      {/* ========================================= */}
      <div className="flex flex-col lg:grid lg:grid-cols-12">
        
        {/* LEFT SIDEBAR */}
        <div className="w-full bg-gray-100 p-4 sm:p-6 md:p-8 lg:col-span-4">
          
          {/* PROFILE */}
          <section>
            <h2 className="mb-3 border-b-2 border-blue-600 pb-2 text-base font-bold sm:mb-4 sm:text-lg md:text-xl">
              PROFILE
            </h2>
            <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              {personal.summary || "Professional Summary"}
            </p>
          </section>

          {/* SKILLS */}
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 border-b-2 border-blue-600 pb-2 text-base font-bold sm:mb-4 sm:text-lg md:text-xl">
              SKILLS
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    {typeof skill === "string" ? skill : skill.name || skill.title || "Skill"}
                  </span>
                ))
              ) : (
                <p className="text-sm text-gray-500">No Skills Added</p>
              )}
            </div>
          </section>

          {/* LANGUAGES */}
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 border-b-2 border-blue-600 pb-2 text-base font-bold sm:mb-4 sm:text-lg md:text-xl">
              LANGUAGES
            </h2>
            {languages.length > 0 ? (
              <div className="space-y-2 sm:space-y-3">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span>{typeof lang === "string" ? lang : lang.name}</span>
                      <span className="text-xs text-gray-500 sm:text-sm">
                        {typeof lang === "object" ? lang.proficiency : "Professional"}
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-gray-300 sm:h-2">
                      <div className="h-1.5 w-[90%] rounded-full bg-blue-600 sm:h-2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No Languages</p>
            )}
          </section>

          {/* CERTIFICATIONS */}
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 border-b-2 border-blue-600 pb-2 text-base font-bold sm:mb-4 sm:text-lg md:text-xl">
              CERTIFICATIONS
            </h2>
            {certifications.length > 0 ? (
              <ul className="space-y-2 sm:space-y-3">
                {certifications.map((item, index) => (
                  <li key={index} className="rounded-lg bg-white p-2 text-sm shadow sm:p-3">
                    🏅 {typeof item === "string" ? item : item.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No Certifications</p>
            )}
          </section>

          {/* ACHIEVEMENTS */}
          <section className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="mb-3 border-b-2 border-blue-600 pb-2 text-base font-bold sm:mb-4 sm:text-lg md:text-xl">
              ACHIEVEMENTS
            </h2>
            {achievements.length > 0 ? (
              <ul className="space-y-2 sm:space-y-3">
                {achievements.map((item, index) => (
                  <li key={index} className="rounded-lg bg-white p-2 text-sm shadow sm:p-3">
                    ⭐ {typeof item === "string" ? item : item.title || item.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No Achievements</p>
            )}
          </section>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full p-4 sm:p-6 md:p-8 lg:col-span-8">
          
          {/* EXPERIENCE */}
          <section>
            <h2 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
              EXPERIENCE
            </h2>
            {experience.length > 0 ? (
              <div className="space-y-6 sm:space-y-7 md:space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative border-l-4 border-blue-600 pl-4 sm:pl-5 md:pl-6">
                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-600 sm:-left-[10px] sm:h-4.5 sm:w-4.5 md:-left-[11px] md:h-5 md:w-5"></div>
                    <h3 className="text-base font-bold sm:text-lg md:text-xl">
                      {exp.role || exp.title || "Job Role"}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-blue-700 sm:text-base">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-500 sm:text-sm">
                      {exp.startDate} - {exp.endDate}
                    </p>
                    {Array.isArray(exp.description) ? (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm sm:mt-3 sm:space-y-2 sm:pl-6 sm:text-base">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm leading-6 sm:mt-3 sm:text-base sm:leading-7">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No Experience Added</p>
            )}
          </section>

          {/* EDUCATION */}
          <section className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
              EDUCATION
            </h2>
            {education.length > 0 ? (
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-5">
                    <h3 className="text-base font-bold sm:text-lg">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-blue-700 sm:text-base">
                      {edu.college || edu.institution}
                    </p>
                    <p className="text-xs text-gray-500 sm:text-sm">
                      {edu.year || `${edu.startDate || ""} - ${edu.endDate || ""}`}
                    </p>
                    {edu.cgpa && <p className="mt-2 text-sm sm:text-base">CGPA : {edu.cgpa}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No Education Added</p>
            )}
          </section>

          {/* PROJECTS */}
          <section className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
              PROJECTS
            </h2>
            {projects.length > 0 ? (
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="rounded-xl border border-gray-200 bg-white p-4 shadow sm:p-5 md:p-6">
                    <h3 className="text-base font-bold sm:text-lg md:text-xl">
                      {project.title || project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 sm:mt-3 sm:text-base sm:leading-7">
                      {project.description}
                    </p>
                    {project.technologies && (
                      <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                        {(Array.isArray(project.technologies)
                          ? project.technologies
                          : String(project.technologies).split(",")
                        ).map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700 sm:px-3 sm:py-1 sm:text-sm"
                          >
                            {String(tech).trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-3 flex flex-wrap gap-3 sm:mt-4 sm:gap-4 md:mt-5 md:gap-6">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-blue-700 hover:underline sm:text-base"
                        >
                          💻 GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-green-700 hover:underline sm:text-base"
                        >
                          🌐 Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No Projects Added</p>
            )}
          </section>

          {/* FOOTER */}
          <section className="mt-10 border-t border-gray-300 pt-4 sm:mt-12 sm:pt-5 md:mt-14 md:pt-6">
            <div className="flex flex-col items-center gap-2 text-xs text-gray-500 sm:flex-row sm:justify-between sm:text-sm">
              <span>Generated by AI Resume Builder</span>
              <span>ATS Friendly Resume</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}