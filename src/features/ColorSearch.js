import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchColorInfo } from "../store/searchSlice";
import { selectColor, combineColors } from "../store/colorSlice";

const ColorSearch = () => {
  const [hexCode, setHexCode] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);
  const selectedColors = useSelector((state) => state.search.selectedColors);
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
      if (selectedColors.length === 1) {
        dispatch(combineColors());
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={hexCode}
        onChange={(e) => setHexCode(e.target.value)}
        placeholder="Enter hex code (e.g., 0047AB)"
      />
      <button onClick={handleSearch}>Get Color Info</button>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <div>
          <p>Found color: {searchResults}</p>
          <button onClick={handleAddColor}>Select Color</button>
        </div>
      )}
      {status === "failed" && (
        <p>Error loading color info. Please try again.</p>
      )}
    </div>
  );
};

export default ColorSearch;
