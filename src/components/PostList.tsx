import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import axios from "axios";

interface BlogPost {
  id: number;
  title: string | null;
  description: string | null;
  readMinutes: number | null;
  status: string | null;
}

const paginationModel = { page: 0, pageSize: 10 };

export const PostList = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "title", headerName: "Title", width: 200 },

    {
      field: "readMinutes",
      headerName: "Read Minutes",
      type: "number",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <span
          style={{
            color: params.row.status === "deleted" ? "red" : "green",
          }}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          {params.row.status === "active" ? (
            <>
              <IconButton
                color="primary"
                onClick={() => handleEdit(params.row)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleDelete(params.row)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          ) : (
            ""
          )}
        </Box>
      ),
    },
  ];

  const [rows, setRows] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  // Filter rows based on search query
  const filteredRows = rows.filter((row) =>
    `${row.title || ""} ${row.status || ""}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/posts");
      setRows(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  // Define edit and delete handlers
  const handleEdit = (row: BlogPost) => {
    console.log("Edit:", row);
    // Implement edit logic here
  };

  const handleDelete = async (row: BlogPost) => {
    try {
      if (window.confirm("Are you sure you want to delete this?")) {
        await axios.delete(`http://localhost:5000/posts/${row.id}`);

        console.log("Delete successful:", row);

        // Show success snackbar
        setSnackbarMessage("Post deleted successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);

        // Fetch updated data
        setTimeout(() => {
          fetchData(); // Update the UI with the latest data
        }, 1000); // Adjust the delay as needed
      }
    } catch (error) {
      console.error("Error deleting post:", error);

      // Show error snackbar
      setSnackbarMessage("Error deleting post.");
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
            <Link to={`/post-form`}>
              <Button variant="outlined" color="warning">
                Add Post
              </Button>
            </Link>
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
