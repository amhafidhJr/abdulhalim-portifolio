import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { Blog } from "../components/Blog.tsx";
import { Footer } from "../components/Footer.tsx";

export const MainBlog = () => {
  return (
    <>
      <AppBarUI></AppBarUI>
      <div className="container mt-5 mb-5">
        <Blog></Blog>
      </div>
      <Footer></Footer>
    </>
  );
};
