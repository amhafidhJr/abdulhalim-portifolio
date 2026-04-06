import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { ProjectForm } from "../components/ProjectForm.tsx";

export const ProjectFormUi = () => {
  return (
    <>
      <AppBarUI />
      <ProjectForm />
      <Footer />
    </>
  );
};
