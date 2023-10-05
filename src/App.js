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

  const fetchDictInfo = async (searchParams) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchParams}`
      );

      const data = await response.json();

      setUIData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFont = (e) => {
    let value = e.target.value;
    setFontFamily(value);
  };

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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
    setCheck(() => (check === true ? false : true));
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
      <WordInfo UIRender={UIData[0]} />
    </div>
  );
}

export default App;
