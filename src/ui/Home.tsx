import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { About } from "../components/About.tsx";
import Project from "../components/Project.tsx";
import { Skills } from "../components/Skills.tsx";
import { Footer } from "../components/Footer.tsx";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "var(--bg-onyx)" }}>
      <AppBarUI />
      
      <Box component="main">
        <About />
        <Skills />
        <Project />
      </Box>

      <Footer />
    </Box>
  );
};
