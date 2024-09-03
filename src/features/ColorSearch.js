import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchColorInfo } from "../store/searchSlice";
import { selectColor } from "../store/colorSlice";
import { SearchContainer } from "../styles/StyledFeatures";

const ColorSearch = () => {
  const [hexCode, setHexCode] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);
  const status = useSelector((state) => state.search.status);

  const isValidHex = (hex) => {
    return /^#?[0-9A-F]{6}$/i.test(hex);
  };

  const handleSearch = () => {
    if (isValidHex(hexCode)) {
      dispatch(fetchColorInfo(hexCode.replace("#", "").trim()));
    } else {
      alert("Please enter a valid 6-character hex code.");
    }
  };

  const handleAddColor = () => {
    if (searchResults) {
      dispatch(selectColor(searchResults));
    }
  };

  return (
    <SearchContainer>
      <input
        type="text"
        value={hexCode}
        onChange={(e) => setHexCode(e.target.value)}
        placeholder="Enter hex code (e.g., 0047AB)"
      />
      <button onClick={handleSearch}>Verify Color</button>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <div>
          <p>Color verified</p>
          <button onClick={handleAddColor}>Select Color {searchResults}</button>
        </div>
      )}
      {status === "failed" && (
        <p>Error loading color info. Please try again.</p>
      )}
    </SearchContainer>
  );
};

export default ColorSearch;
