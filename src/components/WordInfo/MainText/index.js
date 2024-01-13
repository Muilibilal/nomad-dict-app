import React from "react";
import List from "./List";
import styles from "./text.module.css";

const genRand = () => {
  return (Math.random() + 1).toString(36).substring(2);
};

console.log(genRand());

const MainText = ({ textData, theme }) => {
  return (
    <>
      <div className={styles["part-of-speech"]}>
        <h3>{textData.partOfSpeech}</h3>
        <hr />
      </div>
      <section className={styles["word-content"]}>
        <p>Meaning</p>
        <ul>
          {textData.definitions.map((value) => {
            return <List key={genRand()} defVal={value} theme={theme} />;
          })}
        </ul>
      </section>

      {textData.definitions?.map((def) =>
        def.example !== undefined ? (
          <span className={styles.example}>{`"${def.example}"`}</span>
        ) : (
          ""
        )
      )}

      {textData.synonyms?.length > 0 ? (
        <p className={styles["synonym-cont"]}>
          Synonyms <span>{textData.synonyms.join(", ")}</span>
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default MainText;
