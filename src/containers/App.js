import React from 'react';
import ColorPicker from './components/ColorPicker';
import ColorSearch from './components/ColorSearch';
import CombinedColorDisplay from './components/CombinedColorDisplay';

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
