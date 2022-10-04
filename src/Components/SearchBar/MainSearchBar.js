import { useState } from "react";

function MainSearchBar(props) {

  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setSearch(value);
    props.search(value);
  }

  return (
    <div className="d-flex">
      <div>
        <input
          value={search}
          onChange={handleInputChange}
          type="text"
          placeholder="Search"
          className="form-control me-4"
        />

        <select className="form-select">
          <option value="asc">Location A-Z</option>
          <option value="desc">Location Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default MainSearchBar;



