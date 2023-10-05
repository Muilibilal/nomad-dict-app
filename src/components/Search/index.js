import React, { useState } from "react";
import { searchIcon } from "../../assets";

const SearchBar = ({ getUserInput }) => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = () => {
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
      />
      <button onClick={handleSubmit}>
        <img src={searchIcon} alt="word Search icon" />
      </button>
    </div>
  );
};

export default SearchBar;
