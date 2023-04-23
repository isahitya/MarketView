import React, { useState, useContext } from "react";
import Modal from "@mui/material/Modal";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserContext from "../../store/user-context";

import { Backdrop } from "@mui/material";
import { ClickAwayListener } from "@mui/material";

const styles = {
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#fff",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "5px",
  },
  autocomplete: {
    marginBottom: "20px",
  },
  submitButton: {
    marginTop: "20px",
  },
};

const AddStockModal = ({ open, onClose }) => {
  const [option1, setOption1] = useState(null);
  const [option2, setOption2] = useState(null);

  const handleSubmit = () => {
    console.log(option1, option2); // handle submit logic here
    onClose();
  };

  const handleClickAway = () => {
    onClose();
  };

  const usrContext = useContext(UserContext);
  const allSymbols = usrContext.allSymbols;
  const allWatchLists = usrContext.watchlists;

  const options1 = ["Option 1", "Option 2", "Option 3"];
  const options2 = ["Option A", "Option B", "Option C"];

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <div style={styles.paper}>
          <Autocomplete
            options={allSymbols}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Option 1"
                style={styles.autocomplete}
              />
            )}
            value={allWatchLists}
            onChange={(event, newValue) => {
              setOption1(newValue);
            }}
          />
          <Autocomplete
            options={options2}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Option 2"
                style={styles.autocomplete}
              />
            )}
            value={option2}
            onChange={(event, newValue) => {
              setOption2(newValue);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={styles.submitButton}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </div>
      </ClickAwayListener>
    </Modal>
  );
};

export default AddStockModal;
