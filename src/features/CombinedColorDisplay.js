import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetColors } from '../store/colorSlice';

const CombinedColorDisplay = () => {
  const combinedColor = useSelector((state) => state.colors.combinedColor);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          backgroundColor: combinedColor,
          width: '100px',
          height: '100px',
          border: '1px solid black',
        }}
      />
      <p>Combined Color: {combinedColor}</p>
      <button onClick={() => dispatch(resetColors())}>Reset</button>
    </div>
  );
};

export default CombinedColorDisplay;
