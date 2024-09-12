import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";
import { Email as EmailIcon, Phone as PhoneIcon } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const generateUniqueId = () => {
  return uuidv4();
};

const ContactForm = () => {
  const date = format(new Date(), "dd/MM/yyyy");
  const [contactForm, setContactForm] = useState({
    id: generateUniqueId(),
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContactForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // await axios.post("http://localhost:5000/mail", {
      //   ...contactForm,
      // });

      // Show success snackbar
      setSnackbarMessage("Email Sent successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      // Clear the form after a delay
      setTimeout(() => {
        setContactForm({
          id: generateUniqueId(), // Generate a new ID for the next submission
          fullname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        // Redirect to another page if needed
        // window.location.href = '/dashboard'; // Example redirect
      }, 2000);
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
    <Box className="py-3 py-md-5">
      <Container className="">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <Typography
              variant="h6"
              color="textSecondary"
              align="center"
              gutterBottom
            >
              Get in Touch
            </Typography>
            <Typography variant="h2" align="center" paragraph>
              We're always on the lookout to work with new clients.
            </Typography>
            <Divider
              sx={{
                width: "50%",
                mx: "auto",
                mb: { xs: 5, xl: 9 },
                borderColor: "#776B5D",
              }}
            />
          </div>
        </div>
      </Container>

      <Box
        sx={{
          border: "1px solid #776B5D", // Corrected border style
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#F9F9F9",
          display: "flex",
          flexDirection: "column",
          padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          margin: { xs: 1, sm: 2, md: "auto" }, // Responsive margin
        }}
      >
        <Container>
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
            <div className="col-12 col-lg-6">
              <img
                src="https://www.spectator.co.uk/wp-content/uploads/2022/01/15Janwildlife.jpg"
                alt="Get in Touch"
                className="img-fluid rounded"
                loading="lazy"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  opacity: "0.6",
                  objectFit: "cover", // Ensures image covers the area without distortion
                  height: "680px",
                }}
              />
            </div>
            <div className="col-12 col-lg-6">
              <Paper elevation={3} sx={{ padding: { xs: 4, xl: 5 } }}>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-4 gy-xl-5">
                    <div className="col-12">
                      <TextField
                        label="Full Name"
                        fullWidth
                        required
                        onChange={handleChange}
                        margin="normal"
                        name="fullname"
                        value={contactForm.fullname}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        onChange={handleChange}
                        margin="normal"
                        name="email"
                        value={contactForm.email}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                          startAdornment: <EmailIcon />,
                        }}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextField
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        onChange={handleChange}
                        margin="normal"
                        name="phone"
                        value={contactForm.phone}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                          startAdornment: <PhoneIcon />,
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <TextField
                        label="Subject"
                        fullWidth
                        required
                        onChange={handleChange}
                        margin="normal"
                        name="subject"
                        value={contactForm.subject}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className="col-12">
                      <TextField
                        label="Message"
                        fullWidth
                        multiline
                        rows={3}
                        required
                        onChange={handleChange}
                        margin="normal"
                        name="message"
                        value={contactForm.message}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className="col-12">
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </form>
              </Paper>
            </div>
          </div>
        </Container>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
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
    </Box>
  );
};

export default ContactForm;
