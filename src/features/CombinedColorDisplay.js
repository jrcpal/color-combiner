import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetColors } from '../store/colorSlice';
import { CombinedColorContainer, ColorBox } from '../styles/StyledFeatures';

const CombinedColorDisplay = () => {
  const combinedColor = useSelector((state) => state.colors.combinedColor);
  const dispatch = useDispatch();

  return (
    <CombinedColorContainer>
      <ColorBox
        style={{
          backgroundColor: combinedColor,
          width: '100px',
          height: '100px',
          border: '1px solid black',
        }}
      />
      <p>Combined Color: {combinedColor}</p>
      <button onClick={() => dispatch(resetColors())}>Reset</button>
    </CombinedColorContainer>
  );
};

export default CombinedColorDisplay;
