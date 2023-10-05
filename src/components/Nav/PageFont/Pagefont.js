// import styles from "./pagefont.module.css";

const Pagefont = ({ font }) => {
  return (
    <>
      <select name="key" onChange={font}>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
        <option value="sans-serif">Sans Serif</option>
      </select>
    </>
  );
};

export default Pagefont;
