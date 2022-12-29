import React, { useRef, useEffect, useState } from "react";
// may use MultiRangeSlider in the future. Created by developergovindgupta. Licensed under the ISC license: https://opensource.org/licenses/ISC

function App() {
  // states code
  const [opacity, setOpacity] = useState(100);
  const [range, setRange] = useState(100);
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#ffffff");
  // canvas (gradient preview code)
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 50;
    let gradient = context.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    context.fillStyle = gradient;
    context.globalAlpha = opacity / 100;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  });

  return (
    <div className="app">
      <h1>Color input</h1>
      <canvas ref={canvasRef} />
      <hr></hr>
      <p>Opacity: {opacity}</p>
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
      <p>min</p>
      <input
        type="color"
        defaultValue={color1}
        onChange={(e) => setColor1(e.target.value)}
      />
      <p>max</p>
      <input
        type="color"
        defaultValue={color2}
        onChange={(e) => setColor2(e.target.value)}
      />
    </div>
  );
}

export default App;
