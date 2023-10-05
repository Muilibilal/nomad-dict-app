import React from "react";

import styles from "./nav.module.css";
import { logoIcon, moonIcon } from "../../assets/index";
import Pagefont from "./PageFont/Pagefont";

const NavSection = ({ changeFont, changeTheme, toggleChecked, checkInput }) => {
  return (
    <>
      <img src={logoIcon} className="nav--logo" alt="logo" />

      <div className={styles["nav--right"]}>
        <Pagefont font={changeFont} />

        <div className={styles["theme-switch"]}>
          <input
            type="checkbox"
            className={styles["theme-button"]}
            checked={toggleChecked}
            onClick={checkInput}
          ></input>

          <img src={moonIcon} alt="switch theme icon" onClick={changeTheme} />
        </div>
      </div>
    </>
  );
};

export default NavSection;
