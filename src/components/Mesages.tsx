import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Message } from "../interfaces/Message";
import { Visibility } from "@mui/icons-material";

const paginationModel = { page: 0, pageSize: 10 };

export const MessageList = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "fullname", headerName: "Fullname", width: 250 },

    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 250,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      type: "string",
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <>
            <IconButton
              color="primary"
              onClick={() => handleViewMessage(params.row)}
            >
              <Visibility />
            </IconButton>
            <IconButton color="error" onClick={() => handleDelete(params.row)}>
              <DeleteIcon />
            </IconButton>
          </>
        </Box>
      ),
    },
  ];

  const [rows, setRows] = useState<Message[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState<string | null>();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // Filter rows based on search query
  const filteredRows = rows.filter((row) =>
    `${row.fullname || ""} ${row.email || ""} ${row.phone || ""}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/mail");
      setRows(response.data);
    } catch (error) {
      console.error("Error fetching mail data:", error);
    }
  };

  const handleViewMessage = (row: Message) => {
    setOpen(true);
    setMessage(row.message);
    console.log("clicked view message" + row.message);
  };

  const handleDelete = async (row: Message) => {
    try {
      if (window.confirm("Are you sure you want to delete this?")) {
        await axios.delete(`http://localhost:5000/mail/${row.id}`);

        console.log("Delete successful:", row);

        // Show success snackbar
        setSnackbarMessage("Message deleted successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);

        // Fetch updated data
        setTimeout(() => {
          fetchData(); // Update the UI with the latest data
        }, 1000); // Adjust the delay as needed
      }
    } catch (error) {
      console.error("Error deleting message:", error);

      // Show error snackbar
      setSnackbarMessage("Error deleting message.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
              p: 2,
              borderRadius: "4px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <TextField
              label="Search"
              variant="outlined"
              sx={{ flex: 1, mr: 2 }} // Allows the TextField to grow and adds margin-right
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>

          <Paper sx={{ height: 650, width: "100%" }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              paginationMode="client"
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[10, 20, 35]}
              checkboxSelection
              sx={{ border: 0 }}
              disableRowSelectionOnClick
            />
          </Paper>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Client Message"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
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
                  <p>{message}</p>
                </Box>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" color="warning" onClick={handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
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
        </div>
      </div>
    </div>
  );
};
