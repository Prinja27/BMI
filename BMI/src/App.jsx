import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(170);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [height, weight]);

  return (
    <>
      <main>
        <h1>Project 4 BMI Calculator</h1>
        <div className="input-section">
          <p className="slider-output">Weight {weight}KG</p>
          <input
            className="input-slider"
            type="range"
            step={1}
            min={40}
            max={200}
            onChange={handleWeightChange}
          />
          <p className="slider-output">Height {height}CM</p>
          <input
            className="input-slider"
            type="range"
            step={1}
            min={140}
            max={220}
            onChange={handleHeightChange}
          />
          <div className="output-section">
            <p>Your BMI is</p>
            <p className="output">{output}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
