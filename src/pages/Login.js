import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Get registered user from Local Storage
    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!savedUser) {
      alert("No account found. Please register first.");
      navigate("/register");
      return;
    }

    // Verify email and password
    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      alert("Login Successful!");
      navigate("/builder");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e293b, #3b82f6)",
      }}
    >
      <div
        style={{
          width: "650px",
          background: "#fff",
          padding: "50px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            marginBottom: "10px",
            fontSize: "42px",
            fontWeight: "700",
          }}
        >
          Online Resume Builder
        </h1>

        <p
          style={{
            color: "gray",
            marginBottom: "25px",
            fontSize: "20px",
          }}
        >
          Create Professional Resumes Easily
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "18px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "18px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            color: "gray",
            fontSize: "18px",
          }}
        >
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
}