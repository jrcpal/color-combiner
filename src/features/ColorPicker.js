import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { HexColorPicker } from "react-colorful";
import { combineColors, selectColor } from "../store/colorSlice";
import { ColorPickerContainer, SelectedColorsText } from '../styles/StyledFeatures';

const ColorPicker = () => {
  const dispatch = useDispatch();
  const selectedColors = useSelector((state) => state.colors.selectedColors);

  const handleColorChange = (color) => {
    dispatch(selectColor(color));
  };

  useEffect(() => {
    if (selectedColors.length === 2) {
        dispatch(combineColors());
    }
}, [selectedColors, dispatch]);


  return (
    <ColorPickerContainer>
      <HexColorPicker color={selectedColors[0]} onChange={handleColorChange} />
      <SelectedColorsText>Selected Colors: {`${selectedColors[0]} and ${selectedColors[1]}`}</SelectedColorsText>
    </ColorPickerContainer>
  );
};

export default ColorPicker;
