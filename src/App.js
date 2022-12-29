import React, { useRef, useEffect, useState } from "react";
// may use MultiRangeSlider in the future. Created by developergovindgupta. Licensed under the ISC license: https://opensource.org/licenses/ISC

function App() {
  // states code
  const [opacity, setOpacity] = useState(100);
  const [range, setRange] = useState(100);
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#ffffff");
  const [dataType, setDataType] = useState("NDVI");
  const [colorScheme, setColorScheme] = useState(
    "linear-gradient(to right, #1e9600 0%, #fff200 50%, #ff0000 100%)"
  );

  return (
    <div className="app">
      <h1>Color input</h1>
      <div>
        {colorScheme === "Custom" ? (
          <div
            id="CustomPreview"
            style={{
              width: "300px",
              height: "50px",
              background: `linear-gradient(to right,  ${color1} 0%,${color2} 100%)`,
              opacity: `${opacity / 100}`,
            }}
          ></div>
        ) : (
          <div
            id="PredefinedPreview"
            style={{
              width: "300px",
              height: "50px",
              background: `${colorScheme}`,
              opacity: `${opacity / 100}`,
            }}
          ></div>
        )}
      </div>
      <hr></hr>
      <h2>Display options</h2>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue={opacity}
        onChange={(e) => setOpacity(e.target.value)}
      />
      <p>Range: {range}</p>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue={range}
        onChange={(e) => setRange(e.target.value)}
      />
      <hr></hr>
      <h2>Data type</h2>
      <select value={dataType} onChange={(e) => setDataType(e.target.value)}>
        <option value="NDVI">NDVI</option>
        <option value="Option #2">Option #2</option>
        <option value="Option #3">Option #3</option>
      </select>
      <hr></hr>
      <h2>Color scheme options</h2>
      <select
        value={colorScheme}
        onChange={(e) => setColorScheme(e.target.value)}
      >
        <option value="linear-gradient(to right, #1e9600 0%, #fff200 50%, #ff0000 100%)">
          Red-Yellow-Green
        </option>
        <option value="linear-gradient(90deg, rgba(89, 131, 252, 1) 0%, rgba(41, 53, 86, 1) 33%, rgba(252, 89, 204, 1) 66%, rgba(0, 8, 24, 1) 100%)">
          Some other scheme
        </option>
        <option value="Custom">Custom</option>
      </select>
      <hr></hr>
      <div>
        {colorScheme === "Custom" ? (
          <div>
            <h2>Pick your own color scheme</h2>
            <p>Minimal value</p>
            <input
              type="color"
              defaultValue={color1}
              onChange={(e) => setColor1(e.target.value)}
            />
            <p>Maximal value</p>
            <input
              type="color"
              defaultValue={color2}
              onChange={(e) => setColor2(e.target.value)}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
