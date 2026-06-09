import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLink
} from "react-icons/fa";

export default function ModernLayout({ data }) {
  return (
    <div
      style={{
        display: "flex",
        width: "794px",     // A4 width
        minHeight: "1123px", // A4 height
        // margin: "auto",
        fontFamily: "'Poppins', sans-serif",
        background: "white",
        color: "black"
      }}
    >
      {/* LEFT SIDEBAR */}
      <div
        style={{
          width: "30%",
          background: "#1e293b",
          color: "white",
          padding: "25px",
          wordBreak: "break-word"
        }}
      >
        {/* Profile */}
        <div style={{ textAlign: "center" }}>
          {data.profilePic && (
            <img
              src={data.profilePic}
              alt="Profile"
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px"
              }}
            />
          )}
        </div>

        {/* CONTACT */}
        <h3 style={sectionTitle}>CONTACT</h3>
        <p><FaMapMarkerAlt /> {data.location}</p>
        <p><FaPhone /> {data.phone}</p>
        <p style={{ marginBottom: "15px" }}>
          <FaEnvelope /> {data.email}
        </p>        <p>
          <FaLink />{" "}
          <a
            href={
              data.portfolio?.startsWith("http")
                ? data.portfolio
                : `https://${data.portfolio}`
            }
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            {data.portfolio}
          </a>
        </p>

        {/* EDUCATION */}
        <h3 style={sectionTitle}>EDUCATION</h3>
        <p>{data.education}</p>

        {/* SKILLS */}
        <h3 style={sectionTitle}>SKILLS</h3>
        <ul style={{ paddingLeft: "18px" }}>
          {data.skills?.split(",").map((s, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {s.trim()}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          width: "70%",
          padding: "35px",
          wordBreak: "break-word",
          background: "white",
          color: "black"
        }}
      >

        {/* NAME */}
        <h1
          style={{
            fontSize: "34px",
            letterSpacing: "3px",
            marginBottom: "5px",
            textTransform: "uppercase",
            color: "black"
          }}
        >
          {data.name}
        </h1>

        {/* ROLE */}
        <h3
          style={{
            color: "#2563eb",
            letterSpacing: "2px",
            textTransform: "uppercase",
            borderBottom: "2px solid #2563eb",
            display: "inline-block",
            paddingBottom: "5px",
            marginBottom: "25px"
          }}
        >
          {data.role || "Content Writer"}
        </h3>

        {/* SUMMARY */}
        <h2 style={rightTitle}>PROFESSIONAL SUMMARY</h2>
        <p style={text}>
          Creative and detail-oriented individual skilled in {data.skills}.
            Passionate about building impactful projects and continuous learning.
        </p>

        {/* EXPERIENCE */}
        <h2 style={rightTitle}>PROFESSIONAL EXPERIENCE</h2>
        <p style={text}>{data.experience}</p>
      </div>
    </div>
  );
}

/* 🎨 Styles */
const sectionTitle = {
  marginTop: "20px",
  marginBottom: "15px",
  fontSize: "14px",
  letterSpacing: "1px",
  borderBottom: "1px solid gray",
  paddingBottom: "5px",
  color: "#2563eb"
};

const rightTitle = {
  fontSize: "16px",
  letterSpacing: "1px",
  borderBottom: "1px solid gray",
  paddingBottom: "5px",
  marginTop: "20px",
  color: "black"
};

const text = {
  fontSize: "15px",
  lineHeight: "1.6",
  marginTop: "10px",
  color: "black"
};