import React, { useEffect, useRef, useState } from "react";
import { searchIcon } from "../../assets";
import styles from "./search.module.css";

const SearchBar = ({ getUserInput, resetErrorMessage, passedTheme, font }) => {
  const [inputData, setInputData] = useState("");

  let theme = passedTheme === "light" ? "#3b3b3b" : "#e8e8e8";
  let themeSearch = passedTheme === "dark" ? "#3b3b3b" : "#e8e8e8";

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    resetErrorMessage("");
    localStorage.setItem("word", JSON.stringify(inputData));
    getUserInput(inputData);
    setInputData("");
  };

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className={styles["search-parent"]}>
      <input
        onKeyDown={(event) => handleEnterKey(event)}
        value={inputData}
        type="text"
        name="word"
        onChange={handleChange}
        placeholder="Search for any word..."
        style={{ backgroundColor: themeSearch, fontFamily: font, color: theme }}
        className={styles["search-word"]}
      />
      <button onClick={handleSubmit}>
        <img src={searchIcon} alt="word Search icon" />
      </button>
    </div>
  );
};

export default SearchBar;
