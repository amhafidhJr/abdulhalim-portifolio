import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, FolderKanban } from "lucide-react";

export const ProjectForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
    tech: "", // Comma separated
    github: "",
    demo: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      id: uuidv4(),
      ...formState,
      tech: formState.tech.split(",").map(t => t.trim()).filter(t => t !== ""),
    };

    try {
      await axios.post("http://localhost:5000/projects", payload);
      setSnackbarMessage("Project added to gallery successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Failed to save. Ensure server is running.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <Box sx={{ py: 15, bgcolor: "var(--bg-onyx)", minHeight: "100vh" }}>
      <Container maxWidth="sm">
        <Button
          startIcon={<ArrowLeft size={18} />}
          onClick={() => navigate("/dashboard")}
          sx={{ color: "var(--text-muted)", mb: 4, textTransform: "none" }}
        >
          Back to Dashboard
        </Button>

        <Box sx={{ mb: 6 }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
            <FolderKanban size={20} style={{ color: "var(--text-muted)" }} />
            <Typography variant="overline" sx={{ color: "var(--text-muted)", fontWeight: 600, letterSpacing: 2 }}>
              GALLERY MANAGEMENT
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ color: "#fff", fontWeight: 600, letterSpacing: -1 }}>
            New Project.
          </Typography>
        </Box>

        <Stack component="form" onSubmit={handleSubmit} spacing={4}>
          <TextField
            label="Project Title"
            name="title"
            required
            fullWidth
            value={formState.title}
            onChange={handleChange}
            className="premium-input"
          />
          <TextField
            label="Subtitle / Category (e.g., Mobile App)"
            name="subtitle"
            required
            fullWidth
            value={formState.subtitle}
            onChange={handleChange}
            className="premium-input"
          />
          <TextField
            label="Image URL"
            name="image"
            required
            fullWidth
            value={formState.image}
            onChange={handleChange}
            className="premium-input"
          />
          <TextField
            label="Tech Stack (comma separated)"
            name="tech"
            required
            fullWidth
            value={formState.tech}
            onChange={handleChange}
            className="premium-input"
          />
          <TextField
            label="GitHub URL"
            name="github"
            fullWidth
            value={formState.github}
            onChange={handleChange}
            className="premium-input"
          />
          <TextField
            label="Demo URL"
            name="demo"
            fullWidth
            value={formState.demo}
            onChange={handleChange}
            className="premium-input"
          />
          <TextField
            label="Project Description"
            name="description"
            required
            fullWidth
            multiline
            rows={4}
            value={formState.description}
            onChange={handleChange}
            className="premium-input"
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<Save size={18} />}
            sx={{
              bgcolor: "#fff",
              color: "#000",
              fontWeight: 600,
              py: 1.5,
              borderRadius: "12px",
              "&:hover": { bgcolor: "rgba(255,255,255,0.9)" }
            }}
          >
            Add to Gallery
          </Button>
        </Stack>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity={snackbarSeverity} sx={{ width: "100%", borderRadius: "12px" }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};
