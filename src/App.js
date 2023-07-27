import React, {useState} from "react";
import "./style.css"

function App() {

  const [minNum, setMinVal] = useState(0)
  const [maxNum, setMaxVal] = useState(0)
  const [randomNum, setRandomNum] = useState(0)

  const randomNumFunc = () => {
    setRandomNum(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum)
  }

  return (
    <div className="container">
      <div className="hero">
        <div className="randomNum">
            <p>Rastgele Sayı : <span>{randomNum}</span></p>
        </div>
        <div className="minMaxContainer">
          <div className="min">
            <p>Min:</p>
            <input type="number" min="0" onChange={(e) => setMinVal(+target.value)}/>
          </div>
          <div className="max">
            <p>Max:</p> 
            <input type="number" min="0" onChange={(e) => setMaxVal(+target.value)}/> 
          </div>
        </div>
        <div className="randomButton">
            <button onClick={randomNumFunc}>Rastgele Sayı Üret</button>
        </div>
      </div>
    </div>
  );
}

export default App;
