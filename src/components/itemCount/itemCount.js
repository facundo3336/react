import "./itemCount.css";

export const CountButton = ({ count, increase, decrease }) => {
  return (
    <div className="CountButton">
      <div className="container">
        <button onClick={decrease}>
          <i className="fas fa-minus"></i>
        </button>
        <span id="countNumber">{count}</span>
        <button onClick={increase}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};
