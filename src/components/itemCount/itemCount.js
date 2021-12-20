import "./itemCount.css";
import { useState } from "react";

export const CountButton = ({ count, increase, decrease }) => {
  return (
    <div className="CountButton">
      <div className="container">
        <button onClick={decrease}>
          <i class="fas fa-minus"></i>
        </button>
        <span id="countNumber">{count}</span>
        <button onClick={increase}>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};
