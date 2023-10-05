import React from "react";
import List from "./List";

const MainText = ({ textData }) => {
  console.log(textData);
  return (
    <>
      <div>
        <h3>{textData.partOfSpeech}</h3>
        <hr />
      </div>
      <section>
        <p>Meaning</p>
        <ul>
          {textData.definitions.map((value) => {
            return <List key={Math.random() * 100} defVal={value} />;
          })}
        </ul>
      </section>
      {textData.synonyms.length > 0 ? (
        <p>
          Synonyms:<span>{textData.synonyms.join(", ")}</span>
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default MainText;
