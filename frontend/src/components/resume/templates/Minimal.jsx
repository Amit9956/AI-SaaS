import useResume from "../../../hooks/useResume";

export default function Minimal() {
  const { resume } = useResume();
  const { personal } = resume;

  return (
    <div className="mx-auto min-h-[1123px] w-full max-w-[794px] bg-white p-4 text-gray-900 shadow-xl sm:p-6 md:p-8 lg:p-12">
      
      {/* ================= HEADER ================= */}
      <div className="text-center">
        <h1 className="text-2xl font-light tracking-widest uppercase sm:text-3xl md:text-4xl">
          {personal.fullName || "Your Name"}
        </h1>
        
        <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-gray-600 sm:mt-4 sm:gap-3 sm:text-sm md:gap-5">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs sm:mt-2 sm:gap-4 sm:text-sm md:gap-6">
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          )}
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          )}
          {personal.portfolio && (
            <a
              href={personal.portfolio}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Portfolio
            </a>
          )}
        </div>
      </div>

      <hr className="my-6 sm:my-7 md:my-8" />

      {/* ================= SUMMARY ================= */}
      {personal.summary && (
        <section>
          <h2 className="mb-2 text-base font-bold uppercase tracking-wide sm:mb-3 sm:text-lg">
            Summary
          </h2>
          <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
            {personal.summary}
          </p>
        </section>
      )}

      {/* ================= SKILLS ================= */}
      {resume.skills?.length > 0 && (
        <section className="mt-6 sm:mt-7 md:mt-8">
          <h2 className="mb-2 text-base font-bold uppercase tracking-wide sm:mb-3 sm:text-lg">
            Skills
          </h2>
          <p className="flex flex-wrap gap-1 text-sm leading-7 sm:text-base sm:leading-8">
            {resume.skills.map((skill, index) => (
              <span key={index}>
                {skill}
                {index < resume.skills.length - 1 && " • "}
              </span>
            ))}
          </p>
        </section>
      )}

      {/* ================= EXPERIENCE ================= */}
      {resume.experience?.length > 0 && (
        <section className="mt-6 sm:mt-7 md:mt-8">
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide sm:mb-4 sm:text-lg">
            Experience
          </h2>
          {resume.experience.map((exp, index) => (
            <div key={index} className="mb-5 sm:mb-6">
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                <h3 className="text-sm font-semibold sm:text-base">
                  {exp.role}
                </h3>
                <span className="text-xs text-gray-500 sm:text-sm">
                  {exp.startDate}
                  {exp.endDate && ` - ${exp.endDate}`}
                </span>
              </div>
              <p className="text-sm italic sm:text-base">
                {exp.company}
              </p>
              {Array.isArray(exp.description) ? (
                <ul className="mt-2 list-disc pl-5 text-sm sm:pl-6 sm:text-base">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 whitespace-pre-line text-sm sm:text-base">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* ================= EDUCATION ================= */}
      {resume.education?.length > 0 && (
        <section className="mt-6 sm:mt-7 md:mt-8">
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide sm:mb-4 sm:text-lg">
            Education
          </h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-4 sm:mb-5">
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                <h3 className="text-sm font-semibold sm:text-base">
                  {edu.degree}
                </h3>
                <span className="text-xs text-gray-600 sm:text-sm">
                  {edu.year}
                </span>
              </div>
              <p className="text-sm sm:text-base">
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
        <section className="mt-6 sm:mt-7 md:mt-8">
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide sm:mb-4 sm:text-lg">
            Projects
          </h2>
          {resume.projects.map((project, index) => (
            <div key={index} className="mb-4 sm:mb-5">
              <h3 className="text-sm font-semibold sm:text-base">
                {project.title}
              </h3>
              <p className="text-sm italic sm:text-base">
                {project.technologies}
              </p>
              <p className="mt-2 text-sm sm:text-base">
                {project.description}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* ================= CERTIFICATIONS ================= */}
      {resume.certifications?.length > 0 && (
        <section className="mt-6 sm:mt-7 md:mt-8">
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide sm:mb-4 sm:text-lg">
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
        <section className="mt-6 sm:mt-7 md:mt-8">
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide sm:mb-4 sm:text-lg">
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
  );
}