import React, { useState } from "react";
import { BlockPicker } from "react-color";
import "./ColorPicker.css";

function ColorPicker({ color, handleChange }) {
  const [selectedColor, setSelectedColor] = useState(color);

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor.hex);
    handleChange(newColor.hex); // Propagate the color change to the parent component
  };

  return (
    <div className="color-box">
      <BlockPicker color={selectedColor} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
