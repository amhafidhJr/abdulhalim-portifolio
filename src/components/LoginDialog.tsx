import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, styled } from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
}

const dummyCredentials = {
  username: "admin",
  password: "password",
};

const SmallTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "35px", // Custom height
  },
  "& .MuiInputBase-input": {
    padding: "3px 20px", // Custom padding
  },
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginDialog: React.FC<LoginDialogProps> = ({
  open,
  onClose,
  onLogin,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      username === dummyCredentials.username &&
      password === dummyCredentials.password
    ) {
      onLogin(username, password);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Login"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <SmallTextField
              autoFocus
              margin="dense"
              id="outlined-margin-dense"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
              color="warning"
              InputLabelProps={{
                shrink: true,
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <SmallTextField
              autoFocus
              margin="dense"
              id="outlined-margin-dense"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              color="warning"
              InputLabelProps={{
                shrink: true,
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="success"
            onClick={handleLogin}
            sx={{
              marginRight: "20px",
            }}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginDialog;
