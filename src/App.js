import "./styles.css";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function App() {
  const colors = [
    "#2596be",
    "#873e23",
    "#eab676",
    "#063970",
    "#eeeee4",
    "#21130d",
    "#eeeee4",
    "#eab676",
    "#657688",
    "#568589"
  ];
  const [background, setbackground] = useState(" ");
  const [current, setCurrent] = useState(null);
  return (
    <div className="App" style={{ background: background }}>
      {current !== null && <h1>Copied{current}</h1>}
      <div className="container">
        {colors.map((color, index) => {
          return (
            <div key={index} className="card">
              <div
                style={{
                  background: color,
                  filter: "brightness(85%)",
                  boxShadow: color === background ? "0 0 5px #000" : " "
                }}
                className="box"
                onClick={() => setbackground(color)}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
