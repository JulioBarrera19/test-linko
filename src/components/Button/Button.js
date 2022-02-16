import "./Button.scss";

export default function Button({ type, value, position, large, color, disabled, onClick }) {
  return (
    <button
        className={`btn ${color ? color : 'colorDefault'} ${position ? position : ''} ${large && 'large'}`}
        disabled={disabled}
        type={type}
        onClick={onClick}
    >
      {value}
    </button>
  );
}
