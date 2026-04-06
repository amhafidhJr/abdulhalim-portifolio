import React from "react";
import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import { 
  Code2, 
  Terminal, 
  Globe, 
  Layers, 
  ShieldCheck, 
  Smartphone,
  Server
} from "lucide-react";

const expertise = [
  {
    title: "Platform Engineering",
    icon: <Server size={20} />,
    description: "Building resilient distributed systems and cloud infrastructure.",
    skills: ["Node.js", "Express", "Docker", "AWS", "Go"]
  },
  {
    title: "Interface Design",
    icon: <Layers size={20} />,
    description: "Creating highly interactive and responsive web experiences.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "Security & Ops",
    icon: <ShieldCheck size={20} />,
    description: "System hardening, vulnerability assessment, and CI/CD automation.",
    skills: ["OWASP", "Auth", "Vercel", "Git"]
  }
];

export const Skills = () => {
  return (
    <Box component="section" id="expertise" sx={{ py: 15, borderTop: "1px solid var(--border-hairline)" }}>
      <Container maxWidth="md">
        <Typography variant="overline" sx={{ color: "var(--text-muted)", fontWeight: 600, letterSpacing: 2 }}>
          EXPERTISE
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 600, mb: 10, mt: 1, letterSpacing: -2 }}>
          Technical Precision.
        </Typography>

        <Grid container spacing={8}>
          {expertise.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Stack spacing={3}>
                <Box sx={{ color: "#fff", display: "flex" }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                  {item.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {item.skills.map(s => (
                    <Typography 
                      key={s} 
                      sx={{ 
                        fontSize: "0.75rem", 
                        px: 1.5, 
                        py: 0.5, 
                        borderRadius: "6px", 
                        bgcolor: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border-hairline)",
                        color: "#fff",
                        opacity: 0.7
                      }}
                    >
                      {s}
                    </Typography>
                  ))}
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
