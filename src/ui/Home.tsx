import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { About } from "../components/About.tsx";
import Project from "../components/Project.tsx";
import { Skills } from "../components/Skills.tsx";
import { Footer } from "../components/Footer.tsx";

export const Home = () => {
  return (
    <>
      <AppBarUI></AppBarUI>

      <div className="container mt-5 mb-5">
        <About></About>
        <Skills></Skills>
        <Project></Project>

        {/* <Blog></Blog> */}
        {/* <BlogPost></BlogPost> */}
        <Footer></Footer>
      </div>
    </>
  );
};
