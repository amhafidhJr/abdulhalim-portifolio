import React from "react";
import { Box } from "@mui/material";
import { AppBarUI } from "../components/AppBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { BlogDetails } from "../components/BlogDetails.tsx";

export const MainBlogDetails = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "var(--bg-onyx)" }}>
      <AppBarUI />
      <Box component="main">
        <BlogDetails />
      </Box>
      <Footer />
    </Box>
  );
};
