import ModernLayout from "../templates/ModernLayout";
import ClassicLayout from "../templates/ClassicLayout";
import CreativeLayout from "../templates/CreativeLayout";
import ATSLayout from "../templates/ATSLayout";

import modernImg from "../assets/Modern.png";
import atsImg from "../assets/ATS.png";

import "../Builder.css";
import html2pdf from "html2pdf.js";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import {
  FaHome,
  FaPalette,
  FaDownload
}
  from "react-icons/fa";

export default function Builder() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState({
    profilePic: "",
    template: "modern",
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    portfolio: "",
    linkedin: "",
    github: "",
    skills: "",
    education: "",
    experience: "",
    cgpa: "",
    batch: "",
    certifications: "",
    languages: "",
    projects: [{ title: "", desc: "" }]
  });

  const [activePage, setActivePage] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  /* LOAD SAVED DATA */
  useEffect(() => {
    const saved = localStorage.getItem("resumeData");

    if (saved) {
      const parsed = JSON.parse(saved);

      setData({
        profilePic: "",
        template: "modern",
        name: "",
        role: "",
        email: "",
        phone: "",
        location: "",
        portfolio: "",
        linkedin: "",
        github: "",
        skills: "",
        education: "",
        experience: "",
        cgpa: "",
        batch: "",
        certifications: "",
        languages: "",
        projects: [{ title: "", desc: "" }],
        ...parsed
      });
    }
  }, []);

  /* HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  /* SAVE RESUME */
  const saveResume = () => {
    localStorage.setItem("resumeData", JSON.stringify(data));

    console.log("working");
    toast.success("Resume Saved Successfully!");
  };

  /* DOWNLOAD PDF */
  const downloadPDF = async () => {

    setLoading(true);

    const element = document.getElementById("resume-preview");

    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: {
        type: "jpeg",
        quality: 1
      },
      html2canvas: {
        scale: 3,
        useCORS: true
      },
      jsPDF: {
        unit: "px",
        format: [794, 1123],
        orientation: "portrait"
      }
    };

    await html2pdf().set(opt).from(element).save();

    setLoading(false);
  };

  return (
    <div
      style={{
        background: darkMode ? "#111827" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          paddingTop: "20px",
          fontSize: "42px",
          fontWeight: "700"
        }}
      >
        Online Resume Builder
      </h1>

      <div className="main-container">

        {/* SIDEBAR */}
        <div className="sidebar">

          <h2 style={{ fontSize: "32px" }}>Resume App</h2>

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{ marginBottom: "20px" }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <p
            style={{
              color:
                activePage === "dashboard"
                  ? "#38bdf8"
                  : "white",
              fontSize: "28px",
              cursor: "pointer"
            }}
            onClick={() => setActivePage("dashboard")}
          >
            <FaHome /> Dashboard
          </p>
          <p
            style={{
              color:
                activePage === "templates"
                  ? "#38bdf8"
                  : "white",
              fontSize: "28px",
              cursor: "pointer"
            }}
            onClick={() => setActivePage("templates")}
          >
            <FaPalette /> Templates
          </p>

          <p
            style={{
              color:
                activePage === "download"
                  ? "#38bdf8"
                  : "white",
              fontSize: "28px",
              cursor: "pointer"
            }}
            onClick={() => setActivePage("download")}
          >
            <FaDownload /> Download
          </p>

        </div>

        {/* FORM SECTION */}
        <div className="form-container">
          <motion.div
            className="form-section"
            key={activePage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activePage === "dashboard" && (
              <>
                <h2 style={{ fontSize: "28px" }}>Enter Details</h2>
                {/* PROFILE IMAGE */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();

                    reader.onloadend = () => {
                      setData({
                        ...data,
                        profilePic: reader.result
                      });
                    };

                    if (file) {
                      reader.readAsDataURL(file);
                    }
                  }}
                />

                <br /><br />

                {/* NAME */}
                <input
                  name="name"
                  placeholder="Your Name"
                  value={data.name}
                  onChange={handleChange}
                  style={{ fontSize: "16px", padding: "10px" }}
                />

                <br /><br />

                {/* ROLE */}
                <input
                  name="role"
                  placeholder="Role / Job Title"
                  value={data.role}
                  onChange={handleChange}

                />

                <br /><br />

                {/* EMAIL */}
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Gmail"
                  value={data.email}
                  onChange={(e) => {
                    const value = e.target.value;

                    setData({
                      ...data,
                      email: value,
                    });
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;

                    const gmailPattern =
                      /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

                    if (value !== "" && !gmailPattern.test(value)) {
                      alert("Please enter valid Gmail (example@gmail.com)");
                    }
                  }}
                />

                <br /><br />

                {/* PHONE */}
                <input
                  type="text"
                  name="phone"
                  maxLength="10"
                  value={data.phone}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (/[^0-9]/.test(value)) {
                      alert("Only numbers are allowed");
                    }

                    setData({
                      ...data,
                      phone: value.replace(/\D/g, "")
                    });
                  }}
                  placeholder="Enter Mobile Number"
                />

                <br /><br />

                {/* LOCATION */}
                <input
                  name="location"
                  placeholder="Location"
                  value={data.location}
                  onChange={handleChange}
                />

                <br /><br />

                {/* PORTFOLIO */}
                <input
                  name="portfolio"
                  placeholder="Portfolio Link"
                  value={data.portfolio}
                  onChange={handleChange}
                />

                <br /><br />

                {/* LINKEDIN */}
                <input
                  name="linkedin"
                  placeholder="LinkedIn Link"
                  value={data.linkedin}
                  onChange={handleChange}
                />

                <br /><br />

                {/* GITHUB */}
                <input
                  name="github"
                  placeholder="GitHub Link"
                  value={data.github}
                  onChange={handleChange}
                />

                <br /><br />

                {/* EDUCATION */}
                <textarea
                  name="education"
                  value={data.education}
                  onChange={handleChange}
                  style={{ fontSize: "16px", padding: "10px" }}
                />

                <br /><br />

                {/* CGPA */}
                <input
                  name="cgpa"
                  placeholder="CGPA"
                  value={data.cgpa}
                  onChange={handleChange}
                />

                <br /><br />

                {/* BATCH */}
                <input
                  name="batch"
                  placeholder="Batch (Example: 2022 - 2026)"
                  value={data.batch}
                  onChange={handleChange}
                />

                <br /><br />

                {/* SKILLS */}
                <textarea
                  name="skills"
                  placeholder="Skills (comma separated)"
                  value={data.skills}
                  onChange={handleChange}
                />

                <br /><br />

                {/* EXPERIENCE */}
                <textarea
                  name="experience"
                  placeholder="Experience"
                  value={data.experience}
                  onChange={handleChange}
                />

                <br /><br />

                {/* CERTIFICATIONS */}
                <textarea
                  name="certifications"
                  placeholder="Certifications"
                  value={data.certifications}
                  onChange={handleChange}
                />

                <br /><br />

                {/* LANGUAGES */}
                <input
                  name="languages"
                  placeholder="Languages"
                  value={data.languages}
                  onChange={handleChange}
                />

                <br /><br />

                {/* PROJECTS */}
                <h3>Projects</h3>

                {data.projects.map((proj, index) => (
                  <div key={index}>

                    <input
                      placeholder="Project Title"
                      value={proj.title}
                      onChange={(e) => {
                        const newProj = [...data.projects];
                        newProj[index].title = e.target.value;

                        setData({
                          ...data,
                          projects: newProj
                        });
                      }}
                    />

                    <br /><br />

                    <textarea
                      placeholder="Project Description"
                      value={proj.desc}
                      onChange={(e) => {
                        const newProj = [...data.projects];
                        newProj[index].desc = e.target.value;

                        setData({
                          ...data,
                          projects: newProj
                        });
                      }}
                    />

                    <br /><br />

                  </div>
                ))}

                <button
                  onClick={() => {
                    setData({
                      ...data,
                      projects: [
                        ...data.projects,
                        { title: "", desc: "" }
                      ]
                    });
                  }}
                >
                  ➕ Add Project
                </button>
              </>
            )}

            {/* TEMPLATE PAGE */}
            {/* TEMPLATE PAGE */}
            {activePage === "templates" && (
              <>
                <h2>Select Template</h2>

                {/* MODERN */}
                <motion.div
                  className="template-card"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={modernImg}
                    alt="Modern Template"
                    style={{
                      width: "220px",
                      borderRadius: "10px"
                    }}
                  />

                  <br /><br />

                  <button
                    onClick={() =>
                      setData({
                        ...data,
                        template: "modern"
                      })
                    }
                  >
                    Modern
                  </button>

                </motion.div>
                <br /><br />

                {/* CLASSIC */}
                <motion.div
                  className="template-card"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/classic.png"
                    alt="Classic Template"
                    style={{
                      width: "220px",
                      borderRadius: "10px"
                    }}
                  />

                  <br /><br />

                  <button
                    onClick={() =>
                      setData({
                        ...data,
                        template: "classic"
                      })
                    }
                  >
                    Classic
                  </button>

                </motion.div>
                <br /><br />

                {/* CREATIVE */}
                <motion.div
                  className="template-card"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/creative.png"
                    alt="Creative Template"
                    style={{
                      width: "220px",
                      borderRadius: "10px"
                    }}
                  />

                  <br /><br />

                  <button
                    onClick={() =>
                      setData({
                        ...data,
                        template: "creative"
                      })
                    }
                  >
                    Creative
                  </button>

                </motion.div>
                <br /><br />

                {/* ATS */}
                <motion.div
                  className="template-card"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={atsImg}
                    alt="ATS Template"
                    style={{
                      width: "220px",
                      borderRadius: "10px"
                    }}
                  />

                  <br /><br />

                  <button
                    onClick={() =>
                      setData({
                        ...data,
                        template: "ats"
                      })
                    }
                  >
                    ATS Resume
                  </button>

                </motion.div>
              </>
            )}


            {/* DOWNLOAD PAGE */}
            {activePage === "download" && (
              <>
                <h2>Download Resume</h2>

                <button
                  onClick={() => {
                    console.log("clicked");
                    saveResume();
                  }}
                  style={{
                    padding: "10px 20px",
                    cursor: "pointer"
                  }}
                >
                  Save Resume
                </button>

                <br /><br />

                <button onClick={downloadPDF}>

                  {loading
                    ? "Downloading..."
                    : "Download PDF"}

                </button>
              </>
            )}

          </motion.div>
        </div>

        {/* PREVIEW SECTION */}
        <motion.div
          className="preview-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background:
              darkMode ? "#1e293b" : "#f1f5f9"
          }}
        >

          <div className="preview-section">

            <div
              id="resume-preview"
              style={{
                minWidth: "794px",
                overflow: "auto",
                padding: "10px"
              }}
            >

              {data.template === "modern" && (
                <ModernLayout data={data} />
              )}

              {data.template === "classic" && (
                <ClassicLayout data={data} />
              )}

              {data.template === "creative" && (
                <CreativeLayout data={data} />
              )}

              {data.template === "ats" && (
                <ATSLayout data={data} />
              )}

            </div>

          </div>

        </motion.div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}