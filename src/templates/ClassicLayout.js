export default function ClassicLayout({ data }) {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        background: "#fff",
        color: "#000",
        width: "794px",
        minHeight: "1123px",
        margin: "auto"
      }}
    >
      {/* NAME */}
      <h1
        style={{
          textAlign: "center",
          color: "#3b82f6",
          marginBottom: "5px"
        }}
      >
        {data.name || "YOUR NAME"}
      </h1>

      {/* CONTACT */}
      {/* CONTACT */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p>📞 {data.phone}</p>

        <p>✉️ {data.email}</p>

        <p>
          🔗
          <a
            href={
              data.portfolio?.startsWith("http")
                ? data.portfolio
                : `https://${data.portfolio}`
            }
            target="_blank"
            rel="noreferrer"
          >
            {data.portfolio || "Portfolio"}
          </a>
        </p>

        {data.linkedin && (
          <p>
            💼
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {data.linkedin}
            </a>
          </p>
        )}

        {data.github && (
          <p>
            💻
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
            >
              {data.github}
            </a>
          </p>
        )}
      </div>

      {/* SKILLS */}
      <Section title="SKILLS" />
      <ul style={{ listStyle: "none", paddingLeft: "10px" }}>
        {data.skills?.split(",").map((skill, index) => (
          <li key={index}>
            ❖ {skill.trim()}
          </li>
        ))}
      </ul>

      {/* EDUCATION */}
      <Section title="EDUCATION" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px"
        }}
      >
        <span>❖ {data.education}</span>

        <span style={{ fontStyle: "italic" }}>
          CGPA: {data.cgpa || "X.X"} | {data.batch || "20XX"}
        </span>
      </div>

      {/* EXPERIENCE */}
      <Section title="EXPERIENCE" />
      <div>
        <p><b>Your Position | Company</b></p>
        <p style={{ fontStyle: "italic" }}>(Date)</p>
        <p>{data.experience}</p>
      </div>

      {/* PROJECTS */}
      <Section title="ACADEMIC PROJECTS" />
      <div>
        {data.projects?.map((proj, index) => (
          <div key={index}>
            <p><b>❖ {proj.title}</b></p>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>

      {/* RESPONSIBILITY */}
      <Section title="POSITION OF RESPONSIBILITY" />
      <div>
        <p><b>Society Title | College</b></p>
        <p style={{ fontStyle: "italic" }}>(Date - Present)</p>
        <p>Organized hackathons & conducted sessions for students.</p>
      </div>

      {/* ACHIEVEMENTS */}
      <Section title="ACHIEVEMENTS / HOBBIES" />
      <ul>
        <li>Mention your achievements</li>
      </ul>
    </div>
  );
}

/* Section heading */
function Section({ title }) {
  return (
    <h2
      style={{
        color: "#3b82f6",
        marginTop: "25px",
        fontSize: "18px",
        fontWeight: "bold"
      }}
    >
      {title}
    </h2>
  );
}