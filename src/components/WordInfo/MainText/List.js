import React from "react";

const List = ({ defVal }) => {
  return (
    <>
      <li>{defVal.definition}</li>
      {defVal.synonyms.length > 0 ? (
        <div>
          Synonyms: <span>{defVal.synonyms}</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default List;
