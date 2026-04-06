import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const About = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        pt: { xs: 15, md: 25 }, 
        pb: { xs: 10, md: 20 },
        textAlign: "center"
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <Box 
            sx={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 1,
              px: 2,
              py: 0.5,
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.08)",
              bgcolor: "rgba(255,255,255,0.02)",
              mb: 4
            }}
          >
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#4ADE80" }} />
            <Typography variant="caption" sx={{ fontWeight: 500, letterSpacing: 0.5, color: "#999" }}>
              Currently shipping digital architectures
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: 600,
              lineHeight: 1.1,
              mb: 3,
              letterSpacing: "-0.04em",
              color: "#fff"
            }}
          >
            Senior Engineer <br />
            <span style={{ color: "var(--text-muted)" }}>shaping the future of web.</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              color: "var(--text-muted)",
              maxWidth: "600px",
              mx: "auto",
              mb: 6,
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            I'm Abdulhalim — specialize in building high-performance, secure, and 
            technically precise web applications for modern enterprises.
          </Typography>

          <Stack 
            direction={{ xs: "column", sm: "row" }} 
            spacing={2} 
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "black",
                borderRadius: "12px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                '&:hover': { bgcolor: "#f0f0f0" },
                transition: "all 0.2s ease"
              }}
              endIcon={<ArrowRight size={18} />}
            >
              Get in touch
            </Button>
            
            <Stack direction="row" spacing={1}>
              {[GitHubIcon, LinkedInIcon].map((Icon, i) => (
                <Button
                  key={i}
                  sx={{ 
                    minWidth: 48, 
                    height: 48, 
                    borderRadius: "12px", 
                    border: "1px solid var(--border-hairline)",
                    color: "var(--text-muted)",
                    '&:hover': { color: "white", borderColor: "white" }
                  }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </Button>
              ))}
              <Button
                  sx={{ 
                    minWidth: 48, 
                    height: 48, 
                    borderRadius: "12px", 
                    border: "1px solid var(--border-hairline)",
                    color: "var(--text-muted)",
                    '&:hover': { color: "white", borderColor: "white" }
                  }}
                >
                  <Mail size={20} />
                </Button>
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};
