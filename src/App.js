// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleKeySubmit = (key) => {
    const correctKey = "12345";
    // const correctKey =
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    if (key === correctKey) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      alert("Incorrect security key");
    }
    setOpenModal(false);
  };

  useEffect(() => {
    if (location.pathname === "/dashboard" && !isAuthenticated) {
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
          element={isAuthenticated ? <DashboardPage /> : <Home />} // Redirect to home if not authenticated
        />
        <Route path="/post-form" element={<BlogForm />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/posts" element={<PostListUi />} />
        <Route path="/messages" element={<MessageUi />} />
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
