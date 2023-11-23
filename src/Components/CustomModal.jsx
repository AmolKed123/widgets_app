import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function CustomModal({ modalData }) {
  const [open, setOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = useState({
    email: "",
    modalAgree: false,
  });
  const { buttonHeading, heading, title } = modalData;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setModalInfo({
      ...modalInfo,
      ["email"]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (modalInfo.email) {
      setModalInfo({
        ...modalInfo,
        ["modalAgree"]: true,
      });
      setOpen(false);
    }
  };
  console.log("modal info", modalInfo);
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonHeading}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{heading}</DialogTitle>
        <DialogContent>
          <DialogContentText>{title}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
