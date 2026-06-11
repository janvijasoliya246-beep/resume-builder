import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      <h1>Build Your Resume Online</h1>
      
      <p>Create professional resumes in minutes</p>

      <button 
        style={{ padding: "10px 20px", fontSize: "20px" }}
        onClick={() => navigate("/login")}
      >
        Create Resume
      </button>

    </div>
  );
}