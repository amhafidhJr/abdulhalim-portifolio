import React from "react";
import { Box } from "@mui/material";
import { AppBarUI } from "../components/AppBar.tsx";
import { Blog } from "../components/Blog.tsx";
import { Footer } from "../components/Footer.tsx";

export const MainBlog = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "var(--bg-onyx)" }}>
      <AppBarUI />
      <Box component="main">
        <Blog />
      </Box>
      <Footer />
    </Box>
  );
};
