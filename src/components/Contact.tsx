import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export const Contact = () => {
  const [contactForm, setContactForm] = useState({
    id: uuidv4(),
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setContactForm({ id: uuidv4(), fullname: "", email: "", subject: "", message: "" });
  };

  return (
    <Box component="section" sx={{ py: 15 }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: "var(--text-muted)", fontWeight: 600, letterSpacing: 2 }}>
            CONTACT
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 600, mt: 1, letterSpacing: -2 }}>
            Get in touch.
          </Typography>
        </Box>

        <Stack direction={{ xs: "column", md: "row" }} spacing={10}>
          <Box sx={{ flex: 1 }}>
            <Stack spacing={6}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Collaboration</Typography>
                <Typography variant="body2" sx={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                  I'm always open to discussing new projects, creative ideas or original architectures.
                </Typography>
              </Box>
              
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box className="hairline-card" sx={{ p: 1, display: "flex", borderRadius: "12px" }}>
                    <Mail size={18} />
                  </Box>
                  <Typography variant="body2">abdulhalim@example.com</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box className="hairline-card" sx={{ p: 1, display: "flex", borderRadius: "12px" }}>
                    <Phone size={18} />
                  </Box>
                  <Typography variant="body2">+255 777 000 000</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box className="hairline-card" sx={{ p: 1, display: "flex", borderRadius: "12px" }}>
                    <MapPin size={18} />
                  </Box>
                  <Typography variant="body2">Zanzibar, Tanzania</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ flex: 1.5 }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullname"
                  value={contactForm.fullname}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{ disableUnderline: true, sx: { 
                    bgcolor: "rgba(255,255,255,0.02)", 
                    p: 2, 
                    borderRadius: "12px",
                    border: "1px solid var(--border-hairline)",
                    color: "#fff",
                    '&:focus-within': { borderColor: "#fff" }
                  }}}
                  InputLabelProps={{ sx: { color: "var(--text-muted)", px: 2, '&.Mui-focused': { color: "#fff" } } }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={contactForm.email}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{ disableUnderline: true, sx: { 
                    bgcolor: "rgba(255,255,255,0.02)", 
                    p: 2, 
                    borderRadius: "12px",
                    border: "1px solid var(--border-hairline)",
                    color: "#fff",
                    '&:focus-within': { borderColor: "#fff" }
                  }}}
                  InputLabelProps={{ sx: { color: "var(--text-muted)", px: 2, '&.Mui-focused': { color: "#fff" } } }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={contactForm.message}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{ disableUnderline: true, sx: { 
                    bgcolor: "rgba(255,255,255,0.02)", 
                    p: 2, 
                    borderRadius: "12px",
                    border: "1px solid var(--border-hairline)",
                    color: "#fff",
                    '&:focus-within': { borderColor: "#fff" }
                  }}}
                  InputLabelProps={{ sx: { color: "var(--text-muted)", px: 2, '&.Mui-focused': { color: "#fff" } } }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  endIcon={<Send size={18} />}
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    py: 2,
                    borderRadius: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    '&:hover': { bgcolor: "#f0f0f0" }
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="success" sx={{ width: '100%', borderRadius: "12px" }}>Message sent successfully!</Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
