import React, { useState, useEffect } from "react";
import { Box, Container, IconButton, Typography, Button, Menu, MenuItem, Tooltip, Avatar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, User } from "lucide-react";

// Your brand image
const Brand = require("../assets/images/brand.png");

const pages = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Contacts", path: "/contact-us" },
  { name: "Resume", path: "/resume" },
];

const settings = ["Login"];

export const AppBarUI = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting: string) => {
    if (setting === "Login") {
      navigate("/dashboard");
    }
    setAnchorElUser(null);
  };

  const handleNavClick = (path: string) => {
    if (path === "/resume") {
      const link = document.createElement("a");
      link.href = "/pdfs/Abdulhalim CV.pdf";
      link.download = "Abdulhalim CV.pdf";
      link.click();
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "20px 0",
      }}
    >
      <Container maxWidth="lg">
        <Box
          className={`glass ${isScrolled ? "scrolled" : ""}`}
          sx={{
            borderRadius: "100px",
            px: 3,
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.3s ease",
            ...(isScrolled && {
              py: 0.5,
              background: "rgba(10, 10, 12, 0.85)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
            }),
          }}
        >
          {/* Logo */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                letterSpacing: "-1px",
                fontSize: "1.5rem",
                mr: 2,
              }}
              className="text-gradient"
            >
              HALIM.
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {pages.map((page) => (
              <NavLink
                key={page.name}
                to={page.path}
                onClick={(e) => {
                  if (page.path === "/resume") {
                    e.preventDefault();
                    handleNavClick(page.path);
                  }
                }}
                style={({ isActive }) => ({
                  color: isActive ? "var(--primary)" : "var(--text-muted)",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                })}
              >
                {page.name}
              </NavLink>
            ))}
          </Box>

          {/* Actions */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5, border: "1px solid var(--border-glass)" }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: "var(--primary)" }}>
                   <User size={18} />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
              PaperProps={{
                className: "glass",
                sx: { mt: 1.5, minWidth: 150, borderRadius: "12px", color: "var(--text-main)" }
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

            {/* Mobile Menu Toggle */}
            <IconButton
              sx={{ display: { md: "none" }, color: "var(--text-main)" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass"
            style={{
              position: "absolute",
              top: "100%",
              left: "24px",
              right: "24px",
              marginTop: "12px",
              borderRadius: "24px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                fullWidth
                onClick={() => handleNavClick(page.path)}
                sx={{
                  color: "var(--text-main)",
                  justifyContent: "flex-start",
                  borderRadius: "12px",
                  py: 1.5,
                  '&:hover': {
                    background: "rgba(255,255,255,0.05)",
                    color: "var(--primary)"
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
