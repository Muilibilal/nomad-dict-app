import { useEffect, useRef, useState } from "react";

// Components
import NavSection from "./components/Nav";
import SearchBar from "./components/Search";
import WordInfo from "./components/WordInfo";

// Styles
import "./App.css";
import styles from "./app.module.css";

function App() {
  const [fontFamily, setFontFamily] = useState("serif");
  const [theme, setTheme] = useState("light");
  const [check, setCheck] = useState(true);
  const [UIData, setUIData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const fetchDictInfo = async (searchParams) => {
    if (window.navigator.onLine === false) {
      setErrorMsg("You are offline");
      return;
    }
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchParams}`
      );
      if (!response.ok) throw new Error("word not found in the dictionary");

      const data = await response.json();

      setUIData(data);
    } catch (error) {
      console.log(error.message);
      setErrorMsg("Word not found");
    }
  };

  const handleFont = (e) => {
    let value = e.target.value;
    setFontFamily(value);
  };

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleCheck = () => {
    handleTheme();
  };

  const refVal = useRef(true);

  useEffect(() => {
    if (refVal.current) {
      refVal.current = false;
      return;
    }
    setCheck((prev) => (prev === true ? false : true));
  }, [theme]);

  return (
    <div className={`${styles[fontFamily]} ${styles[theme]}`}>
      <NavSection
        changeFont={handleFont}
        changeTheme={handleTheme}
        checkInput={handleCheck}
        toggleChecked={check}
      />
      <SearchBar getUserInput={fetchDictInfo} />
      {errorMsg ? <h1>{errorMsg}</h1> : <WordInfo UIRender={UIData[0]} />}
    </div>
  );
}

export default App;
