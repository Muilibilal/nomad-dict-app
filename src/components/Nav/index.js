import React from "react";

import styles from "./nav.module.css";
import { logoIcon, moonIcon } from "../../assets/index";
import Pagefont from "./PageFont/Pagefont";

const NavSection = ({
  changeFont,
  changeTheme,
  toggleChecked,
  checkInput,
  passedTheme,
}) => {
  let theme = passedTheme === "light" ? "#3b3b3b" : "#e8e8e8";
  return (
    <nav>
      <img src={logoIcon} className="nav--logo" alt="logo" />

      <div className={styles["nav--right"]}>
        <Pagefont font={changeFont} selectTheme={theme} />

        <div className={styles["theme-switch"]}>
          <label className={styles["switch"]}>
            <input
              type="checkbox"
              className={styles["theme-button"]}
              checked={toggleChecked}
              onClick={checkInput}
              onChange={checkInput}
            />

            <span className={`${styles["slider"]} ${styles["round"]}`}></span>
          </label>

          <img
            src={moonIcon}
            alt="switch theme icon"
            onClick={changeTheme}
            className={styles["hide-moon"]}
          />
          <img src={moonIcon} alt="switch theme icon" onClick={changeTheme} />
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
