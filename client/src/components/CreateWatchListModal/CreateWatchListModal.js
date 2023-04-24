import { useState, useContext } from "react";
import {
  Modal,
  TextField,
  Button,
  FormControl,
  InputLabel,
  styled,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import UserContext from "../../store/user-context";

const ModalWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const FormWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  width: 450,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  "& > *": {
    margin: theme.spacing(1),
  },
}));

const CloseButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const CreateButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const StockChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const BorderedTextField = styled(TextField)({
  borderRadius: 4,
  outline: "1px solid rgba(0, 0, 0, 0.23)",
});

const BorderedDiv = styled("div")({
  borderRadius: 4,
  outline: "1px solid rgba(0, 0, 0, 0.23)",
  display: "inline-flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "2px 4px",
  width: "100%",
});

const CreateWatchlistModal = ({ open, handleClose, stockSymbols }) => {
  const userCTX = useContext(UserContext);
  const [watchlistName, setWatchlistName] = useState("");
  const [selectedSymbols, setSelectedSymbols] = useState([]);

  const handleCreate = () => {
    // handle creating the watchlist with name and selected symbols
    console.log({ watchlistName, selectedSymbols });
    userCTX.addToWatchlist(selectedSymbols, watchlistName);
    handleClose();
  };

  const handleSymbolSelect = (event, value) => {
    if (!selectedSymbols.includes(value)) {
      setSelectedSymbols([...selectedSymbols, value]);
    }
  };

  const handleSymbolDelete = (symbolToDelete) => () => {
    setSelectedSymbols((symbols) =>
      symbols.filter((symbol) => symbol !== symbolToDelete)
    );
  };

  const handleModalClose = () => {
    // Clear all modal fields when modal is closed
    setWatchlistName("");
    setSelectedSymbols([]);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleModalClose} sx={{ overflow: "scroll" }}>
      <ModalWrapper onClick={handleClose}>
        <FormWrapper onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleModalClose}>
            <CloseIcon />
          </CloseButton>
          <BorderedTextField
            style={{ marginTop: "2em" }}
            label="Watchlist Name"
            value={watchlistName}
            onChange={(event) => setWatchlistName(event.target.value)}
            fullWidth
          />
          <Autocomplete
            style={{ width: "10em" }}
            id="stock-search"
            options={stockSymbols}
            freeSolo
            disableClearable
            onChange={handleSymbolSelect}
            renderInput={(params) => (
              <BorderedTextField
                {...params}
                label="Add Stock"
                margin="normal"
                variant="outlined"
                fullWidth
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <StockChip
                  key={option}
                  label={option}
                  onDelete={handleSymbolDelete(option)}
                  {...getTagProps({ index })}
                />
              ))
            }
          />
          <BorderedDiv>
            {selectedSymbols.map((symbol) => (
              <StockChip
                key={symbol}
                label={symbol}
                onDelete={handleSymbolDelete(symbol)}
              />
            ))}
          </BorderedDiv>
          <div>
            <Button variant="contained" color="primary" onClick={handleCreate}>
              Create
            </Button>
            <CreateButton variant="contained" onClick={handleModalClose}>
              Cancel
            </CreateButton>
          </div>
        </FormWrapper>
      </ModalWrapper>
    </Modal>
  );
};

export default CreateWatchlistModal;
