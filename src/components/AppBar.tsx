import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles"; // Import from @mui/styles

// Your brand image
const Brand = require("../assets/images/brand.png");

const useStyles = makeStyles((theme) => ({
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
  },
  activeLink: {
    color: "#ffc658", // Change this to your preferred active link color
    fontWeight: "bold",
  },
}));

const useStylesForMobile = makeStyles((theme) => ({
  navLink: {
    color: "black",
    textDecoration: "none",
    fontSize: "20px",
  },
  activeLink: {
    color: "#ffc658", // Change this to your preferred active link color
    fontWeight: "bold",
  },
}));

const pages = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Contacts", path: "/contact-us" },
  { name: "Resume", path: "/resume" }, // Fixed path
];

const settings = ["Login"];

export const AppBarUI = () => {
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const classesForMobile = useStylesForMobile();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path: string) => {
    if (path === "/resume") {
      handleDownloadResume();
    } else {
      navigate(path);
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting: string) => {
    if (setting === "Login") {
      handleOpenDialog();
    }
    setAnchorElUser(null);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/Abdulhalim CV.pdf";
    link.download = "Abdulhalim CV.pdf";
    link.click();
  };

  const handleOpenDialog = () => {
    navigate("/dashboard");
  };

  // const handleCloseDialog = () => {
  //   setDialogOpen(false);
  // };

  // const handleLogin = (username: string, password: string) => {
  //   setIsLoggedIn(true);
  //   setDialogOpen(false);
  //   alert("Login successful!");
  //   navigate("/dashboard");
  //   settings[0] = "Logout";
  // };

  // if (isLoggedIn) {
  //   return <div>Welcome to the Dashboard!</div>;
  // }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#776B5D" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleCloseNavMenu(page.path)}
                  >
                    <Typography textAlign="center" className="text-dark">
                      <NavLink
                        to={page.path}
                        className={({ isActive }) =>
                          isActive
                            ? `${classesForMobile.navLink} ${classesForMobile.activeLink}`
                            : classesForMobile.navLink
                        }
                      >
                        {page.name}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page.path)}
                  sx={{ my: 2, display: "block" }}
                >
                  <NavLink
                    to={page.path}
                    className={({ isActive }) =>
                      isActive
                        ? `${classes.navLink} ${classes.activeLink}`
                        : classes.navLink
                    }
                  >
                    {page.name}
                  </NavLink>
                </Button>
              ))}
            </Box>

            {/* User menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Brand Logo" src={Brand} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Example dialog for login */}
      {/* <LoginDialog open={dialogOpen} onClose={handleCloseDialog} onLogin={handleLogin} /> */}
    </>
  );
};
