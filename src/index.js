import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Data } from "./data";

const App = () => {
  const [Count, SetCount] = React.useState(0);
  const [Text, SetText] = React.useState([]);
  const [Condition, SetCondition] = React.useState(false);


  const Generate = (e) => {
    e.preventDefault();
    let counts = Count;
    if (counts > 0 || counts === 1) {
      SetCondition(true);
    } else if (counts > 8) {
      counts = 8;
    } else if (Condition) {
      if (counts < 1) {
        counts = 1;
      }
    }
    SetText(Data.slice(0, counts));
  };

  
  return (
    <main className="main">
      <div className="title">
        <h2>tired of boring lorem ipsum?</h2>
      </div>
      <div className="formdiv">
        <form>
          <label htmlFor="number">Paragraphs:</label>
          <input
            type="number"
            name="number"
            id="numbers"
            value={Count}
            onChange={(e) => SetCount(e.target.value)}
          ></input>
          <button type="button" onClick={Generate}>
            Generate
          </button>
        </form>
      </div>
      <div className='textdiv'>
        {Text.map((items, index) => {
          return <p key={index}>{items}</p>;
        })}
      </div>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
