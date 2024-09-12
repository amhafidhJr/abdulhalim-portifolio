import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const SecurityKeyModal = ({ open, onClose, onSubmit }) => {
  const [securityKey, setSecurityKey] = useState("");

  const handleSubmit = () => {
    onSubmit(securityKey);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Security Key</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Security Key"
          type="password"
          fullWidth
          variant="standard"
          value={securityKey}
          sx={{
            width: "400px",
          }}
          onChange={(e) => setSecurityKey(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SecurityKeyModal;
