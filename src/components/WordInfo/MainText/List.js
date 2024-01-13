import React from "react";

const List = ({ defVal, theme }) => {
  let listTheme = theme === "dark" ? "white" : "black";
  return (
    <>
      <li style={{ color: listTheme }}>{defVal.definition}</li>
      {defVal.synonyms.length > 0 ? (
        <div>
          Synonyms: <span>{defVal.synonyms.join(", ")}</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default List;
