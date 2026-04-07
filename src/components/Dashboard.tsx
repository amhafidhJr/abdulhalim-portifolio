import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { 
  LayoutDashboard, 
  FileText, 
  Send, 
  FolderKanban, 
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: "Projects",
      subtitle: "Gallery items",
      icon: <FolderKanban size={24} />,
      link: "/project-form",
      actionLabel: "Add Project"
    },
    {
      title: "Blog",
      subtitle: "Technical articles",
      icon: <FileText size={24} />,
      link: "/post-form",
      actionLabel: "New Post"
    },
    {
      title: "Messages",
      subtitle: "Inbound inquiries",
      icon: <Send size={24} />,
      link: "/messages",
      actionLabel: "View All"
    },
  ];

  return (
    <Box sx={{ py: 15, bgcolor: "var(--bg-onyx)", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
            <LayoutDashboard size={20} style={{ color: "var(--text-muted)" }} />
            <Typography variant="overline" sx={{ color: "var(--text-muted)", fontWeight: 600, letterSpacing: 2 }}>
              ADMINISTRATION
            </Typography>
          </Stack>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: 600, letterSpacing: -2 }}>
            Control Center.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {cardData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                className="hairline-card"
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "0.3s",
                  "&:hover": { borderColor: "rgba(255,255,255,0.2)" }
                }}
              >
                <Box>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: "12px", 
                    bgcolor: "rgba(255,255,255,0.03)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    mb: 3,
                    border: "1px solid var(--border-hairline)",
                    color: "rgba(255,255,255,0.8)"
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h5" sx={{ color: "#fff", fontWeight: 600, mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "var(--text-muted)", mb: 4 }}>{item.subtitle}</Typography>
                </Box>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="text"
                    onClick={() => navigate(item.link)}
                    sx={{
                      color: "#fff",
                      p: 0,
                      textTransform: "none",
                      fontWeight: 600,
                      justifyContent: "flex-start",
                      "& .arrow": { transition: "0.3s" },
                      "&:hover": { background: "none" },
                      "&:hover .arrow": { transform: "translateX(4px)" }
                    }}
                    endIcon={<ArrowRight size={18} className="arrow" />}
                  >
                    {item.actionLabel}
                  </Button>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
