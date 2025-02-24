import React from "react";

const Keyboard = ({ onKeyPress, onEnter, onBackSpace }) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button key={key} className="key" onClick={() => onKeyPress(key)}>
              key
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <button className="key-enter" onClick={onEnter}>
          Enter
        </button>
        <button className="key-backspace" onClick={onBackSpace}></button>
      </div>
    </div>
  );
};

export default Keyboard;
