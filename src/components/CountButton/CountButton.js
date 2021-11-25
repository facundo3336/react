import "./CountButton.css";

export const CountButton = ({ stock, initial }) => {
  const countNumber = initial;

  return (
    <div className="CountButton">
      <span>Remera</span>
      <div className="container">
        <button>
          <i class="fas fa-minus"></i>
        </button>
        <span id="countNumber">{countNumber}</span>
        <button>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};
