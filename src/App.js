// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Home } from "./ui/Home.tsx";
import { MainBlog } from "./ui/Blog.tsx";
import { MainBlogDetails } from "./ui/BlogDetails.tsx";
import { DashboardPage } from "./ui/Dashboard.tsx";
import { BlogForm } from "./ui/BlogForm.tsx";
import SecurityKeyModal from "./components/SecurityKeyModal.tsx";
import { ContactUs } from "./ui/ContactUs.tsx";
import { PostListUi } from "./ui/PostListUi.tsx";
import { MessageUi } from "./ui/MessageUi.tsx";
import { ProjectFormUi } from "./ui/ProjectFormUi.tsx";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleKeySubmit = (key) => {
    const correctKey = "12345";
    if (key === correctKey) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      alert("Incorrect security key");
    }
    setOpenModal(false);
  };

  useEffect(() => {
    const protectedRoutes = ["/dashboard", "/post-form", "/project-form", "/posts", "/messages"];
    if (protectedRoutes.includes(location.pathname) && !isAuthenticated) {
      setOpenModal(true);
    }
  }, [location, isAuthenticated]);

  return (
    <>
      <SecurityKeyModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleKeySubmit}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<MainBlog />} />
        <Route path="/posts/:id" element={<MainBlogDetails />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardPage /> : <Home />}
        />
        <Route path="/post-form" element={isAuthenticated ? <BlogForm /> : <Home />} />
        <Route path="/project-form" element={isAuthenticated ? <ProjectFormUi /> : <Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/posts" element={isAuthenticated ? <PostListUi /> : <Home />} />
        <Route path="/messages" element={isAuthenticated ? <MessageUi /> : <Home />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
