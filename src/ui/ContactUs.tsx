import React from "react";
import { Box } from "@mui/material";
import { AppBarUI } from "../components/AppBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { Contact } from "../components/Contact.tsx";

export const ContactUs = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "var(--bg-onyx)" }}>
      <AppBarUI />
      <Box component="main">
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};
