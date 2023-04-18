import React, { useContext, useEffect, useState } from "react";
import { TextField, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Autocomplete from "@mui/material/Autocomplete";

export default function NavBar() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const searchTextChangeHandler = (event) => {
    const query = event.target.value.toUpperCase();
    const results = data.filter((item) => item.toUpperCase().includes(query));
    setSearchText(query);
    setSearchResults(results);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        {/* <TextField
          label="Search"
          fullWidth={false}
          variant="filled"
          type="text"
          id="navbar-search-field"
          value={searchText}
          onChange={searchTextChangeHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { color: "inherit" }, // to match text color with other AppBar items
          }}
        /> */}
        <IconButton edge="start" color="inherit" aria-label="home" href="/">
          <HomeIcon />
        </IconButton>
        <Autocomplete
          freeSolo
          //className={classes.textField}
          disableClearable
          options={searchResults}
          onInputChange={searchTextChangeHandler}
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
        {/* {searchText.length > 0 && searchResults.length > 0 && (
          <ul className={styles["search-result-list"]}>
            {searchResults.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        )} */}
      </Toolbar>
    </AppBar>
  );
}
