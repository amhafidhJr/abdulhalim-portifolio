import { Box } from "@mui/material";
import React from "react";
const profileImage = require("../assets/images/banner-img.jpg");

export const About = () => {
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Box
              sx={{
                border: "1px dashed #776B5D",
                borderRadius: "4px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                margin: "auto",
                backgroundColor: "#ffffff",
                padding: { xs: 1, sm: 2, md: 3 }, // Responsive padding
              }}
            >
              <div className="row">
                <div className="col-md-8 col-12">
                  <Box
                    component="section"
                    sx={{
                      p: { xs: 4, sm: 8, md: 12 }, // Responsive padding
                      borderRadius: "4px",
                      backgroundColor: "#f4f4f4",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                      mt: 0,
                      height: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font size
                        marginBottom: "0.5rem",
                        color: "#000",
                      }}
                    >
                      Hi, I'm Abdulahlim Hafidh
                    </p>

                    <p
                      style={{
                        fontSize: { xs: "1rem", sm: "1.3rem" }, // Responsive font size
                        marginBottom: "1rem",
                        color: "#000",
                      }}
                    >
                      A passionate{" "}
                      <span style={{ color: "#333" }}>
                        Full Stack Developer
                      </span>{" "}
                      and{" "}
                      <span style={{ color: "#333" }}>
                        Cybersecurity Enthusiast
                      </span>
                      .
                    </p>

                    <p
                      style={{
                        fontSize: { xs: "0.9rem", sm: "1.1rem" }, // Responsive font size
                        lineHeight: "1.6",
                        color: "#555",
                        marginBottom: "1.5rem",
                      }}
                    >
                      Focused on building{" "}
                      <span style={{ color: "#333" }}>
                        secure and scalable web applications
                      </span>
                      . Experienced in{" "}
                      <span style={{ color: "#333" }}>
                        JavaScript, Angular, React, Java, and Python
                      </span>
                      , creating efficient and user-friendly software solutions.
                    </p>

                    <p
                      style={{
                        fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive font size
                        color: "#000",
                      }}
                    >
                      Let's{" "}
                      <a
                        href="#contact"
                        style={{
                          color: "#000",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                      >
                        connect
                      </a>{" "}
                      and create something amazing together!
                    </p>
                  </Box>
                </div>
                <div
                  className="col-md-4 col-12"
                  style={{
                    height: { xs: "auto", md: "470px" }, // Adjust height for smaller screens
                    overflow: "hidden",
                  }}
                >
                  <img
                    style={{
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                      opacity: "0.7",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={profileImage}
                    className="rounded"
                    alt="Profile"
                  />
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};
