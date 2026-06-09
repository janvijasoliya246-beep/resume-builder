export default function ATSLayout({ data }) {
  return (
    <div
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "white",
        padding: "50px",
        fontFamily: "Arial",
        color: "black",
        lineHeight: "1.8",
        fontSize: "18px"
      }}
    >

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "38px",
            fontWeight: "bold"
          }}
        >
          {data.name}
        </h1>

        <p style={{ fontSize: "18px" }}>
          {data.email} | {data.phone} | {data.location}
        </p>
      </div>

      <hr style={{ marginBottom: "25px" }} />

      {/* SUMMARY */}
      <h2 style={headingStyle}>Professional Summary</h2>

      <p style={textStyle}>
        Passionate and motivated professional with
        strong technical and communication skills.
      </p>

      {/* SKILLS */}
      <h2 style={headingStyle}>Skills</h2>

      <p style={textStyle}>{data.skills}</p>

      {/* EDUCATION */}
      <h2 style={headingStyle}>Education</h2>

      <p style={textStyle}>{data.education}</p>

      {/* EXPERIENCE */}
      <h2 style={headingStyle}>Experience</h2>

      <p style={textStyle}>{data.experience}</p>

      {/* PROJECTS */}
      <h2 style={headingStyle}>Projects</h2>

      {data.projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>

          <h3
            style={{
              fontSize: "22px",
              marginBottom: "8px"
            }}
          >
            {project.title}
          </h3>

          <p style={textStyle}>{project.desc}</p>

        </div>
      ))}

      {/* CERTIFICATIONS */}
      <h2 style={headingStyle}>Certifications</h2>

      <p style={textStyle}>{data.certifications}</p>

    </div>
  );
}

/* STYLES */
const headingStyle = {
  fontSize: "26px",
  marginTop: "30px",
  marginBottom: "10px",
  borderBottom: "2px solid #2563eb",
  paddingBottom: "5px",
  color: "#2563eb"
};

const textStyle = {
  fontSize: "18px"
};