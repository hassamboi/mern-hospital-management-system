import "./Button.css";

export default function Button({ text, handleClick }) {
  return (
    <button onClick={handleClick} className="call-btn">
      {text}
    </button>
  );
}
