import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (
            !user.name ||
            !user.email ||
            !user.password ||
            !user.confirmPassword
        ) {
            alert("Please fill all fields");
            return;
        }

        if (user.password !== user.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        localStorage.setItem(
            "registeredUser",
            JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password,
            })
        );
        alert("Registration Successful!");
        navigate("/login");
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(135deg, #1e293b, #3b82f6)",
            }}
        >
            <div
                style={{
                    width: "450px",
                    background: "#fff",
                    padding: "35px",
                    borderRadius: "15px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        color: "#2563eb",
                        fontSize: "40px",
                        marginBottom: "10px",
                    }}
                >
                    Create Account
                </h1>

                <p
                    style={{
                        color: "gray",
                        marginBottom: "25px",
                        fontSize: "18px",
                    }}
                >
                    Register to use Resume Builder
                </p>

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={user.name}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        style={inputStyle}
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
                            fontSize: "18px",
                            cursor: "pointer",
                        }}
                    >
                        Register
                    </button>
                </form>

                <p
                    style={{
                        marginTop: "20px",
                        color: "gray",
                    }}
                >
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        style={{
                            color: "#2563eb",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    marginBottom: "16px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "15px",
    boxSizing: "border-box",
    outline: "none",
};