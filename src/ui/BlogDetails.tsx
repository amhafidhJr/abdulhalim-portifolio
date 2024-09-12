import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { Footer } from "../components/Footer.tsx";
import BlogPostDetails from "../components/BlogDetails.tsx";

export const MainBlogDetails = () => {
  return (
    <>
      <AppBarUI></AppBarUI>
      <div className="container mt-5 mb-5">
        <BlogPostDetails></BlogPostDetails>
      </div>
      <Footer></Footer>
    </>
  );
};
