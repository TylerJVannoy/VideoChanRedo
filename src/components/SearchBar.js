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

// export default SearchBar;

/*        <div class="container">
          <div class="row height d-flex justify-content-center align-items-center">
            <div class="col-md-6">
              <div class="form">
                {" "}
                <i class="fa fa-search"></i>{" "}
                <input
                  type="text"
                  class="form-control form-input"
                  placeholder="Search anything..."
                />{" "}
                <span class="left-pan">
                  <i class="fa fa-microphone"></i>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
        
            <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search For a Video</label>
          <input
            value={term}
            type="text"
            onChange={event => setTerm(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
        
        */
