import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function CreativeLayout({ data }) {
    return (
        <div
            style={{
                display: "flex",
                width: "794px",
                minHeight: "1123px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                lineHeight: "1.6",
                background: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}
        >

            {/* LEFT SIDEBAR */}
            <div
                style={{
                    width: "30%",
                    background: "#0f172a",
                    color: "white",
                    padding: "30px"
                }}
            >
                <h1
                    style={{
                        fontSize: "32px",
                        marginBottom: "5px",
                        letterSpacing: "1px"
                    }}
                >
                    {data.name}
                </h1>

                <h3 style={{ color: "#94a3b8" }}>{data.role}</h3>

                <hr />

                <h2>Contact</h2>

                <p><FaEnvelope /> {data.email}</p>

                <p><FaPhone /> {data.phone}</p>

                <p><FaMapMarkerAlt /> {data.location}</p>

                <hr />

                <h2>Skills</h2>

                <div>
                    {data.skills.split(",").map((skill, i) => (
                        <p
                            key={i}
                            style={{
                                margin: "8px 0",
                                fontSize: "15px"
                            }}
                        >
                            • {skill.trim()}
                        </p>
                    ))}
                </div>

            </div>

            {/* RIGHT CONTENT */}
            <div
                style={{
                    width: "70%",
                    padding: "30px",
                    color: "black",
                    background: "white"
                }}
            >
                <h2
                    style={{
                        borderBottom: "2px solid #2563eb",
                        paddingBottom: "6px",
                        marginTop: "25px",
                        fontSize: "22px"
                    }}
                >                    Education
                </h2>
                <p>{data.education}</p>

                <h2
                    style={{
                        borderBottom: "2px solid #2563eb",
                        paddingBottom: "6px",
                        marginTop: "25px",
                        fontSize: "22px"
                    }}
                >                    Experience
                </h2>
                <p>{data.experience}</p>

                <h2
                    style={{
                        borderBottom: "2px solid #2563eb",
                        paddingBottom: "6px",
                        marginTop: "25px",
                        fontSize: "22px"
                    }}
                >                    Projects
                </h2>

                {data.projects.map((p, i) => (
                    <div key={i} style={{ marginBottom: "15px" }}>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}