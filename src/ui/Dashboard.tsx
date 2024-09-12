import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { Dashboard } from "../components/Dashboard.tsx";
export const DashboardPage = () => {
  return (
    <>
      <AppBarUI></AppBarUI>
      <div className="container mt-5 mb-5">
        <Dashboard></Dashboard>
      </div>
      <Footer></Footer>
    </>
  );
};
