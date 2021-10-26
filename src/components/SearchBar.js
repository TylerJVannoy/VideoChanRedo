import React, { useState } from "react";

const SearchBar = ({ search }) => {
  const [term, setTerm] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    search(term);
  };

  return (
    <form className="mt-2 search-box" onSubmit={onSubmit}>
      <div className="input-group">
        <label></label>
        <input
          className="form-control"
          type="text"
          value={term}
          placeholder="Enter your search..."
          onChange={e => setTerm(e.target.value)}
        ></input>
        <div></div>
      </div>
    </form>
  );
};

export default SearchBar;
