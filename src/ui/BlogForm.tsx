import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { BlogPostForm } from "../components/BlogPostForm.tsx";

export const BlogForm = () => {
  return (
    <>
      <AppBarUI></AppBarUI>
      <div className="container mt-5 mb-5">
        <BlogPostForm></BlogPostForm>
      </div>
      <Footer></Footer>
    </>
  );
};
