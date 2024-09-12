import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const extractParagraphs = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const paragraphs = doc.querySelectorAll("p");

  return Array.from(paragraphs).map((p) => ({ text: p.textContent }));
};

const generateUniqueId = () => {
  return uuidv4();
};

export const BlogPostForm = () => {
  const date = format(new Date(), "dd/MM/yyyy");

  const [formState, setFormState] = useState({
    id: generateUniqueId(),
    title: "",
    description: "<p></p>",
    readMinutes: "",
    status: "active",
    date: date,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const paragraphs = extractParagraphs(formState.description);

    try {
      await axios.post("http://localhost:5000/posts", {
        ...formState,
        paragraphs,
      });

      // Show success snackbar and navigate to dashboard
      setSnackbarMessage("Post saved successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/dashboard"); // Redirect to dashboard
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error saving post:", error);

      // Show error snackbar
      setSnackbarMessage("Error saving post.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader></CardHeader>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Create Blog Post
          </Typography>

          <TextField
            label="Title"
            name="title"
            fullWidth
            margin="normal"
            value={formState.title}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4} // Adjust the number of rows to fit your design
            fullWidth
            margin="normal"
            value={formState.description}
            onChange={handleChange}
          />
          <TextField
            label="Read Minutes"
            name="readMinutes"
            type="number"
            fullWidth
            margin="normal"
            value={formState.readMinutes}
            onChange={handleChange}
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            sx={{ marginTop: 2 }}
          >
            Save
          </Button>
        </CardActions>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={10000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </form>
    </Card>
  );
};
