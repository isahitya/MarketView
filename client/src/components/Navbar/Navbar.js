import React, { useContext, useEffect, useState } from "react";
import { TextField, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";

export default function NavBar(props) {
  const data = [
    "AAPL",
    "FB",
    "MSFT",
    "AMZN",
    "TSLA",
    "NVDA",
    "GOOG",
    "META",
    "AMD",
    "JPM",
    "UNH",
  ];

  const searchResultClickHandler = (event, value) => {
    props.onSearchResultSelect(value);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={props.onHomeButtonClick}
        >
          <HomeIcon />
        </IconButton>
        <Autocomplete
          freeSolo
          //className={classes.textField}

          disableClearable
          options={data}
          onChange={searchResultClickHandler}
          renderInput={(params) => (
            <TextField
              style={{
                width: "15em",
                color: "grey",
                backgroundColor: "white",
              }}
              {...params}
              placeholder="Search"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                startAdornment: <SearchIcon />,
                style: { color: "inherit" }, // to match text color with other AppBar items
              }}
            />
          )}
        />
      </Toolbar>
    </AppBar>
  );
}
