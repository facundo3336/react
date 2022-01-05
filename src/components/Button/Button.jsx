import "./Button.css";

export const Button = ({ text, className = "", onClick }) => {
  return (
    <button onClick={onClick} className={`button ` + className}>
      {text}
    </button>
  );
};
