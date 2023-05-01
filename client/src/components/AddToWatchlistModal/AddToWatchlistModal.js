import { useContext, useState } from "react";
import { Button, Modal, TextField, Autocomplete, Box } from "@mui/material";
import UserContext from "../../store/user-context";

export default function AddToWatchlistModal({ open, onClose, symbol }) {
  const [value, setValue] = useState(null);
  const userCTX = useContext(UserContext);
  const watchlists = userCTX.watchlists.map((each) => each.name);

  const handleAdd = () => {
    // Do something with the selected watchlist value
    console.log(`Added to ${value} watchlist`);
    userCTX.addToWatchlist([symbol], value);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: "80vw",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <h2>Add to watchlist</h2>
        <Autocomplete
          options={watchlists}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Watchlist"
              margin="normal"
              variant="outlined"
            />
          )}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>
    </Modal>
  );
}
