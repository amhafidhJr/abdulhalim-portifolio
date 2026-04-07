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
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, FileText } from "lucide-react";

export const BlogPostForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    title: "",
    excerpt: "",
    readTime: "",
    content: "", // Will be split into array
    author: "Abdulhalim Hafidh",
    date: format(new Date(), "MMM dd, yyyy"),
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
      content: formState.content.split("\n\n").filter(p => p.trim() !== ""),
    };

    try {
      await axios.post("http://localhost:5000/blogs", payload);
      setSnackbarMessage("Blog post published successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Publication failed. Ensure server is running.");
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
            <FileText size={20} style={{ color: "var(--text-muted)" }} />
            <Typography variant="overline" sx={{ color: "var(--text-muted)", fontWeight: 600, letterSpacing: 2 }}>
              CONTENT CREATION
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ color: "#fff", fontWeight: 600, letterSpacing: -1 }}>
            New Blog Post.
          </Typography>
        </Box>

        <Stack component="form" onSubmit={handleSubmit} spacing={4}>
          <TextField
            label="Post Title"
            name="title"
            required
            fullWidth
            value={formState.title}
            onChange={handleChange}
            className="premium-input"
          />
          <TextField
            label="Read Time (e.g., 5 min)"
            name="readTime"
            required
            fullWidth
            value={formState.readTime}
            onChange={handleChange}
            className="premium-input"
          />
          <TextField
            label="Short Excerpt"
            name="excerpt"
            required
            fullWidth
            multiline
            rows={2}
            value={formState.excerpt}
            onChange={handleChange}
            className="premium-input"
          />
          <TextField
            label="Content (Use double return for paragraphs)"
            name="content"
            required
            fullWidth
            multiline
            rows={10}
            value={formState.content}
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
            Publish Article
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
