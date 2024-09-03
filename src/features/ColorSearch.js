import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchColors } from "../store/searchSlice";
import { selectColor, combineColors } from "../store/colorSlice";

const ColorSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);

  const handleSearch = () => {
    dispatch(searchColors(query));
  };

  const handleSelectColor = (color) => {
    dispatch(selectColor(color));
    dispatch(combineColors());
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a color"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((color) => (
          <li key={color.hex} onClick={() => handleSelectColor(color.hex)}>
             {color.name} - {color.hex}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorSearch;