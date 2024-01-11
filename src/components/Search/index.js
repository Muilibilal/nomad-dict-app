import React, { useState } from "react";
import { searchIcon } from "../../assets";
import styles from "./search.module.css";

const SearchBar = ({ getUserInput, resetErrorMessage, passedTheme, font }) => {
  const [inputData, setInputData] = useState("");

  let themeSearch = passedTheme === "light" ? "#e8e8e8" : "#3b3b3b";

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
    <div>
      <input
        value={inputData}
        type="text"
        name="word"
        onChange={handleChange}
        placeholder="Search for any word..."
        style={{ backgroundColor: themeSearch, fontFamily: font }}
        className={styles["search-word"]}
      />
      <button onClick={handleSubmit}>
        <img src={searchIcon} alt="word Search icon" />
      </button>
    </div>
  );
};

export default SearchBar;
