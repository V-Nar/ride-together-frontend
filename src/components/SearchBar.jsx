import React, { useState } from "react";

const SearchBar = (props) => {
  const [inputText, setInputText] = useState("");
  let convertToLower = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  props.func(inputText);
  return (
    <div style={{ textAlign: "center" }}>
      <input placeholder="Search an event" onChange={convertToLower} />
    </div>
  );
};

export default SearchBar;
