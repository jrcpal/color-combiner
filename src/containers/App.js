import React from 'react';
import ColorPicker from '../features/ColorPicker';
import ColorSearch from '../features/ColorSearch';
import CombinedColorDisplay from '../features/CombinedColorDisplay';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <h1>Color Combiner</h1>
      </div>
      <ColorPicker />
      <ColorSearch />
      <CombinedColorDisplay />
    </div>
  );
};

export default App;
