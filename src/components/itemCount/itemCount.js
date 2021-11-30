import "./itemCount.css";
import { useState } from "react";

export const CountButton = ({ stock, initial }) => {
  const [countNumber, setCountNumber] = useState(initial);

  function sum() {
    if (countNumber < stock) {
      setCountNumber(countNumber + 1);
    }
  }

  function subtract() {
    if (countNumber > 0) {
      setCountNumber(countNumber - 1);
    }
  }

  return (
    <div className="CountButton">
      <span>Remera</span>
      <div className="container">
        <button onClick={subtract}>
          <i class="fas fa-minus"></i>
        </button>
        <span id="countNumber">{countNumber}</span>
        <button onClick={sum}>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};
