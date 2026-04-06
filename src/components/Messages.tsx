import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  TextField,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import { Search, Eye, Trash2, ArrowLeft, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Message } from "../interfaces/Message";

export const MessageList = () => {
  const navigate = useNavigate();
  const columns: GridColDef[] = [
    { field: "fullname", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phone", headerName: "Phone", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            sx={{ color: "var(--text-muted)", "&:hover": { color: "#fff" } }}
            onClick={() => handleViewMessage(params.row)}
          >
            <Eye size={18} />
          </IconButton>
          <IconButton
            size="small"
            sx={{ color: "var(--text-muted)", "&:hover": { color: "#ff4444" } }}
            onClick={() => handleDelete(params.row)}
          >
            <Trash2 size={18} />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const [rows, setRows] = useState<Message[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
  const [openDialog, setOpenDialog] = useState(false);

  const filteredRows = rows.filter((row) =>
    `${row.fullname || ""} ${row.email || ""}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/mail");
      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewMessage = (row: Message) => {
    setSelectedMessage(row.message);
    setOpenDialog(true);
  };

  const handleDelete = async (row: Message) => {
    if (window.confirm("Delete this message?")) {
      try {
        await axios.delete(`http://localhost:5000/mail/${row.id}`);
        setSnackbarMessage("Message deleted.");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        fetchData();
      } catch (error) {
        setSnackbarMessage("Delete failed.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ py: 15, bgcolor: "var(--bg-onyx)", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowLeft size={18} />}
          onClick={() => navigate("/dashboard")}
          sx={{ color: "var(--text-muted)", mb: 4, textTransform: "none" }}
        >
          Back to Dashboard
        </Button>

        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ color: "var(--text-muted)", fontWeight: 600, letterSpacing: 2 }}>
            INBOUND COMMUNICATIONS
          </Typography>
          <Typography variant="h3" sx={{ color: "#fff", fontWeight: 600, letterSpacing: -1 }}>
            Client Messages.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <Search size={20} style={{ color: "var(--text-muted)", marginRight: 12 }} />,
            }}
            className="premium-input"
          />
        </Box>

        <Box sx={{ height: 600, width: "100%", "& .MuiDataGrid-root": {
          border: "1px solid var(--border-hairline)",
          borderRadius: "24px",
          bgcolor: "var(--bg-surface)",
          color: "rgba(255,255,255,0.8)",
          "& .MuiDataGrid-cell": { borderBottom: "1px solid var(--border-hairline)" },
          "& .MuiDataGrid-columnHeaders": { borderBottom: "2px solid var(--border-hairline)", bgcolor: "rgba(255,255,255,0.02)" },
          "& .MuiDataGrid-footerContainer": { borderTop: "1px solid var(--border-hairline)" },
          "& .MuiPaginationItem-root": { color: "#fff" }
        }}}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            getRowId={(row) => row.id}
            initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
            pageSizeOptions={[10, 20]}
            disableRowSelectionOnClick
          />
        </Box>

        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          PaperProps={{
            sx: {
              bgcolor: "var(--bg-surface)",
              color: "#fff",
              borderRadius: "24px",
              border: "1px solid var(--border-hairline)",
              p: 2
            }
          }}
        >
          <DialogTitle sx={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 1.5 }}>
            <Mail size={20} /> Message Content
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
              {selectedMessage}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={() => setOpenDialog(false)}
              sx={{ color: "#fff", fontWeight: 600 }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>

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
