import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HexColorPicker } from "react-colorful";
import { selectColor, combineColors } from "../store/colorSlice";

const ColorPicker = () => {
  const dispatch = useDispatch();
  const selectedColors = useSelector((state) => state.colors.selectedColors);

  const handleColorChange = (color) => {
    dispatch(selectColor(color));
    if (selectedColors.length === 1) {
      dispatch(combineColors());
    }
  };

  return (
    <div>
      <HexColorPicker color={selectedColors[0]} onChange={handleColorChange} />
      <p>Selected Colors: {`${selectedColors[0]} and ${selectedColors[1]}`}</p>
    </div>
  );
};

export default ColorPicker;
