import React from 'react';
import ColorPicker from '../features/ColorPicker';
import ColorSearch from '../features/ColorSearch';
import CombinedColorDisplay from '../features/CombinedColorDisplay';

const App = () => {
  return (
    <div>
      <h1>Color Combiner</h1>
      <ColorPicker />
      <ColorSearch />
      <CombinedColorDisplay />
    </div>
  );
};

export default App;
