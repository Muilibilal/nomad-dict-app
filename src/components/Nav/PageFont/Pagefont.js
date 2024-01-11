import styles from "./pagefont.module.css";

const Pagefont = ({ font, selectTheme }) => {
  return (
    <div className={styles["controls-cont"]}>
      <select
        name="key"
        className={`${styles["select-menu"]} ${styles["theme-switch"]}`}
        onChange={font}
        style={{ fontFamily: font, color: selectTheme }}
      >
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
        <option value="sans-serif">Sans Serif</option>
      </select>
    </div>
  );
};

export default Pagefont;
