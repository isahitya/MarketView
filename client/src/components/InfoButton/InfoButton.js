import React, { useState } from "react";
import { IconButton, Tooltip, Popover, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const InfoButton = ({ text }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "info-popover" : undefined;

  return (
    <>
      <Tooltip title="Information">
        <IconButton onClick={handleClick} aria-describedby={id}>
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        sx={{ maxWidth: "40em" }}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography sx={{ p: 2 }}>{text}</Typography>
      </Popover>
    </>
  );
};

export default InfoButton;
