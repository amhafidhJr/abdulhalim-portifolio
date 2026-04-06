import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";

export const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 10, 
        borderTop: "1px solid var(--border-hairline)",
        bgcolor: "transparent",
        mt: 10
      }}
    >
      <Container maxWidth="md">
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          justifyContent="space-between" 
          alignItems="flex-start" 
          spacing={4}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, letterSpacing: -1 }}>AH.</Typography>
            <Typography variant="body2" sx={{ color: "var(--text-muted)", maxWidth: 300 }}>
              Engineering high-fidelity digital products with technical precision.
            </Typography>
          </Box>

          <Stack direction="row" spacing={6}>
            <Stack spacing={1}>
              <Typography variant="caption" sx={{ fontWeight: 600, color: "#fff", mb: 1 }}>WORK</Typography>
              {["Projects", "Experience", "Stack"].map(l => (
                <Typography key={l} sx={{ fontSize: "0.875rem", color: "var(--text-muted)", cursor: "pointer", '&:hover': { color: "#fff" } }}>
                  {l}
                </Typography>
              ))}
            </Stack>
            <Stack spacing={1}>
              <Typography variant="caption" sx={{ fontWeight: 600, color: "#fff", mb: 1 }}>SOCIAL</Typography>
              {["GitHub", "LinkedIn", "Mail"].map(l => (
                <Typography key={l} sx={{ fontSize: "0.875rem", color: "var(--text-muted)", cursor: "pointer", '&:hover': { color: "#fff" } }}>
                  {l}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
        
        <Box sx={{ mt: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Abdulhalim Hafidh
          </Typography>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.2)" }}>
            True Premium Edition
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

