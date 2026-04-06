import React from "react";
import { Box, Typography, Container, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import db from "../data/db.json";

const projects = db.projects;

export const Project = () => {
  return (
    <Box component="section" id="work" sx={{ py: 15 }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: "var(--text-muted)", fontWeight: 600, letterSpacing: 2 }}>
            COLLECTED WORKS
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 600, mt: 1, letterSpacing: -2 }}>
            Engineering precision.
          </Typography>
        </Box>

        <Stack spacing={8}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "circOut" }}
            >
              <Box
                className="hairline-card"
                sx={{
                  p: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  "&:hover .project-image": { transform: "scale(1.04)" }
                }}
              >
                <Box sx={{ flex: 1.2, p: 5, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Typography variant="caption" sx={{ color: "var(--text-muted)", fontWeight: 600, mb: 1 }}>
                    {project.subtitle}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>{project.title}</Typography>
                  <Typography variant="body2" sx={{ color: "var(--text-muted)", mb: 4, lineHeight: 1.8 }}>
                    {project.description}
                  </Typography>
                  
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Stack direction="row" spacing={1.5} flexWrap="wrap">
                      {project.tech.map(t => (
                        <Typography key={t} sx={{ fontSize: "0.7rem", color: "#fff", opacity: 0.5 }}>{t}</Typography>
                      ))}
                    </Stack>
                    <Box sx={{ width: 1, height: 12, bgcolor: "var(--border-hairline)" }} />
                    <Stack direction="row" spacing={1}>
                      <IconButton size="small" href={project.github} target="_blank" sx={{ color: "var(--text-muted)", '&:hover': { color: "#fff" } }}>
                        <GitHubIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                      <IconButton size="small" href={project.demo} target="_blank" sx={{ color: "var(--text-muted)", '&:hover': { color: "#fff" } }}>
                        <ExternalLink size={18} />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Box>

                <Box sx={{ flex: 1, position: "relative", overflow: "hidden", minHeight: 300 }}>
                  <img 
                    className="project-image"
                    src={project.image} 
                    alt={project.title}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Project;
