import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";

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
    <>
      <input
        type="text"
        id="navbar-search-field"
        value={searchText}
        onChange={searchTextChangeHandler}
      />
      {searchText.length > 0 && searchResults.length > 0 && (
        <ul className={styles["search-result-list"]}>
          {searchResults.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      )}
    </>
  );
}
